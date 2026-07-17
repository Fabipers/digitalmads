import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Protege el endpoint de contacto contra rastreos innecesarios
    },
    sitemap: 'https://digitalmads.net/sitemap.xml',
  };
}
