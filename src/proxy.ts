import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // 1. Permanent 301 Redirect for non-www domain to canonical www.rswriting.in
  if (host === 'rswriting.in') {
    return NextResponse.redirect(`https://www.rswriting.in${url.pathname}${url.search}`, 301);
  }

  const response = NextResponse.next();

  // 2. Prevent duplicate indexing of Vercel preview/staging domains
  if (host.includes('vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  // Remove fingerprinting header
  response.headers.delete('x-powered-by');

  // Enforce runtime security headers
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), vr=()'
  );
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // CSRF validation for API mutation requests
  if (request.nextUrl.pathname.startsWith('/api/') && request.method === 'POST') {
    const origin = request.headers.get('origin');
    if (origin && host) {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return new NextResponse(
          JSON.stringify({ error: 'CSRF security validation failed: Origin mismatch' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files, _next, favicon
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
