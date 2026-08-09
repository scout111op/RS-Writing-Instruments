import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/rateLimit';

// Zod Schema for Contact & Custom Pen Order Inquiries
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(100, 'Name must not exceed 100 characters')
    .trim(),
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email must not exceed 255 characters')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(8, 'Phone number must be at least 8 digits')
    .max(20, 'Phone number must not exceed 20 digits')
    .regex(/^[+0-9\s-()]+$/, 'Invalid phone number format')
    .optional()
    .or(z.literal('')),
  inquiryType: z
    .enum(['b2b_wholesale', 'custom_pen', 'ebonite_feed', 'general'])
    .default('general'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(2000, 'Message must not exceed 2000 characters')
    .trim(),
  turnstileToken: z.string().optional(), // Cloudflare Turnstile or reCAPTCHA v3 token
});

// Cloudflare Turnstile Verification Helper
async function verifyTurnstileToken(token: string, remoteIp: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  // If no secret key is set in env, bypass for development
  if (!secretKey) return true;

  try {
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);
    formData.append('remoteip', remoteIp);

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const data = await res.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP Rate Limiting (5 requests per 10 minutes per IP)
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous_client';

    const rateCheck = checkRateLimit(`contact_api_${ip}`, {
      windowMs: 10 * 60 * 1000, // 10 minutes
      maxRequests: 5,
    });

    if (!rateCheck.isAllowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please wait a few minutes before trying again.',
          retryAfterMs: rateCheck.resetInMs,
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(rateCheck.resetInMs / 1000).toString(),
            'X-RateLimit-Limit': rateCheck.limit.toString(),
            'X-RateLimit-Remaining': rateCheck.remaining.toString(),
          },
        }
      );
    }

    // 2. Parse & Validate Payload
    const body = await request.json();
    const parseResult = contactFormSchema.safeParse(body);

    if (!parseResult.success) {
      const formattedErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const validatedData = parseResult.data;

    // 3. CAPTCHA / Bot Verification
    if (validatedData.turnstileToken) {
      const isValidCaptcha = await verifyTurnstileToken(validatedData.turnstileToken, ip);
      if (!isValidCaptcha) {
        return NextResponse.json(
          { error: 'CAPTCHA security verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // 4. Secure Business Logic (e.g. Save to DB or Send Email)
    console.log('Received valid inquiry from:', validatedData.email, validatedData.name);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out to RS Writing Instruments. We will get back to you shortly!',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': rateCheck.limit.toString(),
          'X-RateLimit-Remaining': rateCheck.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An internal error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
