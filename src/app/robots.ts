import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Amazonbot',
          'FacebookBot',
        ],
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://digitalmads.net/sitemap.xml',
  };
}
