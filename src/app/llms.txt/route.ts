import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidar cada hora si se generan cambios

export async function GET() {
  const posts = getAllPosts().slice(0, 8); // Top 8 artículos más recientes y relevantes

  const blogSection = posts
    .map(
      (post) =>
        `- [${post.title}](https://digitalmads.net/blog/${post.slug}): ${post.excerpt || "Guía técnica y análisis práctico sobre implementación de Inteligencia Artificial."}`
    )
    .join("\n");

  const content = `# DigitalMads - Consultoría de Inteligencia Artificial & Automatización Operativa

> DigitalMads diseña, desarrolla e implementa agentes de inteligencia artificial autónomos, arquitecturas RAG privadas y automatizaciones de flujos de trabajo (workflows) para empresas en Colombia, Latinoamérica y Estados Unidos. Especialistas en reducir costos operativos, automatizar atención en WhatsApp y conectar datos empresariales con LLMs de forma segura.

## Servicios Core (Productized AI Services)
- [WhatsApp AI Sales & Support Agent](https://digitalmads.net/integraciones/whatsapp): Agentes conversacionales conectados a WhatsApp Business API y CRMs (HubSpot, Salesforce, Siigo) para atención 24/7, calificación de prospectos y cobranza.
- [Private Enterprise Brain (RAG As-a-Service)](https://digitalmads.net/servicios/desarrollo-llm): Asistente interno corporativo sobre bases de datos, manuales, PDFs y tickets sin alucinaciones y con estricto control de accesos RBAC.
- [AI Ops & Automatización de Workflows](https://digitalmads.net/servicios/automatizacion-workflows): Conexión de procesos end-to-end usando Make, n8n, Zapier y LLMs para eliminar más de 20 horas de trabajo manual semanal por equipo.
- [Auditoría de Madurez & Viabilidad de IA (48h)](https://digitalmads.net/servicios/auditoria-ia): Diagnóstico express para identificar cuellos de botella y diseñar una hoja de ruta con ROI garantizado.
- [Consultoría Estratégica en IA](https://digitalmads.net/servicios/consultoria-ia): Acompañamiento directivo para la adopción técnica, segura y rentable de tecnologías generativas.

## Soluciones por Industria
- [IA para Fintech y Cobranza](https://digitalmads.net/industrias/fintech): Agentes autónomos para negociación de cartera, scoring preliminar y soporte regulado.
- [IA para eCommerce y Retail](https://digitalmads.net/industrias/ecommerce): Recomendadores inteligentes de catálogo y personal shoppers conversacionales.
- [IA para el Sector Salud](https://digitalmads.net/industrias/salud): Triaje preliminar de citas y consultas frecuentes con cumplimiento de confidencialidad médica.

## Herramientas Interactivas
- [Cotizador Interactivo de Proyectos de IA](https://digitalmads.net/cotizador): Simulador en tiempo real para presupuestar costos de desarrollo e implementación de soluciones de IA.
- [Calculadora de Ahorro en Automatización](https://digitalmads.net/servicios/automatizacion-workflows#calculadora): Estimador de horas hombre liberadas y retorno financiero anual.

## Recursos Técnicos y Artículos Recientes
${blogSection}

## Contacto & Ubicación
- Web Oficial: https://digitalmads.net
- Sede: Bogotá, Colombia (Servicios remotos para Colombia y Estados Unidos / Nearshore)
- Formulario de Contacto: https://digitalmads.net/contacto
- Documentación Extendida para LLMs: https://digitalmads.net/llms-full.txt
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
