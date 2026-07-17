import { MetadataRoute } from 'next';
import { blogPosts } from '../data/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://digitalmads.net';

  // 1. Rutas Estáticas Core del Sitio (Modo Claro & Landings Nuevas)
  const staticRoutes = [
    '',
    '/bogota',
    '/contacto',
    '/blog',
    '/servicios/auditoria-ia',
    '/servicios/consultoria-ia',
    '/servicios/desarrollo-llm',
    '/servicios/automatizacion-workflows',
    '/integraciones/crm',
    '/integraciones/whatsapp',
    '/industrias/ecommerce',
    '/industrias/fintech',
    '/industrias/salud',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.includes('/servicios') || route.includes('/industrias') ? 0.8 : 0.6,
  }));

  // 2. Mapeo Automático y Dinámico de los Posts del Blog
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date, // Usa la fecha del artículo
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
