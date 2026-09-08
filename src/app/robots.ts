import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Bingbot',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.rswriting.in/sitemap.xml',
    host: 'https://www.rswriting.in',
  };
}
