# Convenciones y Reglas de Negocio de DigitalMads

Este archivo documenta las reglas estrictas de diseño, datos corporativos y desarrollo de software para el proyecto DigitalMads.

## 1. Información Corporativa y de Contacto
Toda sección de contacto, pie de página, barra lateral o llamada a la acción (CTA) que mencione al negocio debe utilizar los siguientes datos de forma invariable:
*   **Correo electrónico principal**: `hola@fabipers.com`
*   **Teléfono / WhatsApp**: `+57 350 261 7242` (Enlace de chat: `https://wa.me/573502617242`)
*   **Sede de operaciones**: Bogotá, Colombia
*   **Horario de atención**: Lunes a Viernes, 9:00 AM - 4:00 PM

## 2. Pautas de Diseño: Modo Claro Técnico (Tech Light Mode)
El diseño visual debe seguir una estética premium de alta densidad:
*   **Fondos**: Blanco puro (`bg-white`) o gris muy claro para contrastar secciones (`bg-[#F8F9FA]`).
*   **Textos**: Oscuros (`text-[#0F172A]`) con tipografía Sans de alta legibilidad, y textos de párrafo en gris medio (`text-[#475569]`).
*   **Contornos**: Bordes delgados y nítidos (`border-gray-200`).
*   **Efectos**: Cuadrícula de fondo tecnológica ultra-sutil con máscaras radiales degradadas y sombras mínimas (`shadow-sm`).
*   **Heros Asimétricos**: La maquetación de Heros principales debe organizarse en 2 columnas: la izquierda (60%) alineada a la izquierda con el texto institucional, y la derecha (40%) con simuladores, métricas de rendimiento de IA o consolas de registros.

## 3. Captación de Leads y Formularios
*   **Campo de Teléfono Obligatorio**: Todo formulario de contacto en la Home, páginas de servicios o cotizadores interactivos debe incluir un campo de teléfono que sea obligatorio (`required`) y con el atributo `type="tel"`.
*   **Sincronización API**: Las peticiones de envío deben realizarse asíncronamente mediante `fetch` al endpoint `/api/contacto` inyectando un parámetro descriptivo `source` (origen de la página) para optimizar la trazabilidad semántica en Zoho Mail.

## 4. Arquitectura del Motor del Blog
*   **Base de datos MDX**: No utilizar arreglos estáticos en archivos de TypeScript para las entradas del blog.
*   **Carga Dinámica**: Los posts se definen de forma física e individual como archivos `.mdx` en la ruta `/content/blog/`.
*   **Parser local**: Utilizar el parser utilitario de sistema de archivos `src/lib/mdx.ts` con `gray-matter` para extraer Frontmatter (título, fecha, categoría, tiempo de lectura y extracto) y procesar el cuerpo del texto en tiempo de compilación.
*   **Páginas del Blog**: Las rutas de listado `/blog` y lectura `/blog/[slug]` deben construirse dinámicamente y pre-renderizarse de forma estática en producción.
