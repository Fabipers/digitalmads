import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": "https://digitalmads.net/#organization",
        "name": "DigitalMads",
        "url": "https://digitalmads.net",
        "logo": "https://digitalmads.net/favicon.ico",
        "description": "Consultoría y desarrollo de Inteligencia Artificial, agentes autónomos para WhatsApp y automatización de flujos de trabajo en Colombia y Estados Unidos.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bogotá",
          "addressRegion": "Cundinamarca",
          "addressCountry": "CO"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Colombia"
          },
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Autonomous AI Agents",
          "Retrieval-Augmented Generation (RAG)",
          "WhatsApp Business API Automation",
          "Enterprise Workflow Automation",
          "Make.com / Zapier / n8n Integrations",
          "Custom LLM Development",
          "AI Consulting"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Inteligencia Artificial DigitalMads",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Agentes de IA para WhatsApp & Soporte 24/7",
                "description": "Agentes autónomos conectados a WhatsApp Business API y CRMs para ventas, soporte y cobranza automatizada sin intervención humana.",
                "url": "https://digitalmads.net/servicios/desarrollo-llm"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bases de Conocimiento Privadas RAG",
                "description": "Asistentes inteligentes para empresas sobre bases de datos, manuales y PDFs con búsqueda semántica sin filtración de información confidencial.",
                "url": "https://digitalmads.net/servicios/desarrollo-llm"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automatización de Flujos de Trabajo (AI Ops)",
                "description": "Integración de herramientas diarias (CRMs, ERPs, Notion, Slack) usando Make/Zapier e IA para optimizar procesos repetitivos.",
                "url": "https://digitalmads.net/servicios/automatizacion-workflows"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Auditoría de Madurez & Viabilidad de IA",
                "description": "Diagnóstico express de 48 horas para identificar tareas operativas optimizables con IA y roadmap técnico de implementación.",
                "url": "https://digitalmads.net/servicios/auditoria-ia"
              }
            }
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://digitalmads.net/contacto",
          "availableLanguage": ["Spanish", "English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://digitalmads.net/#website",
        "url": "https://digitalmads.net",
        "name": "DigitalMads",
        "publisher": {
          "@id": "https://digitalmads.net/#organization"
        },
        "inLanguage": "es"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
