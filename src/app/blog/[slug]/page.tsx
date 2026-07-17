import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { blogPosts } from "../../../data/posts";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog DigitalMads`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Robust line-by-line Markdown parser to render standard headings, lists and bold tags
  const renderContent = (content: string) => {
    const lines = content.replace(/\r\n/g, "\n").split("\n");
    const elements: React.ReactNode[] = [];
    let currentBlock: { type: "paragraph" | "ul" | "ol"; items: string[] } | null = null;

    const parseInlineStyles = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-[#0F172A]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });
    };

    const flushBlock = (blockKey: number) => {
      if (!currentBlock) return;
      if (currentBlock.type === "ul") {
        elements.push(
          <ul key={`ul-${blockKey}`} className="space-y-3 my-6 list-disc pl-6 text-sm md:text-base text-[#475569]">
            {currentBlock.items.map((item, idx) => (
              <li key={idx} className="font-light leading-relaxed">
                {parseInlineStyles(item)}
              </li>
            ))}
          </ul>
        );
      } else if (currentBlock.type === "ol") {
        elements.push(
          <ol key={`ol-${blockKey}`} className="space-y-3 my-6 list-decimal pl-6 text-sm md:text-base text-[#475569]">
            {currentBlock.items.map((item, idx) => (
              <li key={idx} className="font-light leading-relaxed pl-1">
                {parseInlineStyles(item)}
              </li>
            ))}
          </ol>
        );
      } else if (currentBlock.type === "paragraph") {
        elements.push(
          <p key={`p-${blockKey}`} className="text-sm md:text-base text-[#475569] font-light leading-relaxed mb-6">
            {parseInlineStyles(currentBlock.items.join(" "))}
          </p>
        );
      }
      currentBlock = null;
    };

    let uniqueIdx = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        if (currentBlock) {
          flushBlock(uniqueIdx++);
        }
        continue;
      }

      // Check for subheadings (###)
      if (trimmed.startsWith("### ")) {
        if (currentBlock) flushBlock(uniqueIdx++);
        elements.push(
          <h3 key={`h3-${uniqueIdx++}`} className="text-xl md:text-2xl font-display font-bold text-[#0F172A] mt-8 mb-4">
            {parseInlineStyles(trimmed.replace("### ", ""))}
          </h3>
        );
        continue;
      }

      // Check for headings (##)
      if (trimmed.startsWith("## ")) {
        if (currentBlock) flushBlock(uniqueIdx++);
        elements.push(
          <h2 key={`h2-${uniqueIdx++}`} className="text-2xl md:text-3xl font-display font-bold text-[#0F172A] mt-12 mb-6 border-b border-gray-200 pb-3">
            {parseInlineStyles(trimmed.replace("## ", ""))}
          </h2>
        );
        continue;
      }

      // Check for bullet list item (* or -)
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        const itemContent = trimmed.replace(/^(\*|-)\s+/, "");
        if (currentBlock && currentBlock.type !== "ul") {
          flushBlock(uniqueIdx++);
        }
        if (!currentBlock) {
          currentBlock = { type: "ul", items: [] };
        }
        currentBlock.items.push(itemContent);
        continue;
      }

      // Check for ordered list item (1. or 2. etc)
      if (/^\d+\.\s+/.test(trimmed)) {
        const itemContent = trimmed.replace(/^\d+\.\s+/, "");
        if (currentBlock && currentBlock.type !== "ol") {
          flushBlock(uniqueIdx++);
        }
        if (!currentBlock) {
          currentBlock = { type: "ol", items: [] };
        }
        currentBlock.items.push(itemContent);
        continue;
      }

      // Otherwise, process as paragraph lines
      if (currentBlock && currentBlock.type !== "paragraph") {
        flushBlock(uniqueIdx++);
      }
      if (!currentBlock) {
        currentBlock = { type: "paragraph", items: [] };
      }
      currentBlock.items.push(trimmed);
    }

    if (currentBlock) {
      flushBlock(uniqueIdx++);
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      {/* Light Mode Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 space-y-6 text-left relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600 hover:text-purple-700 transition-colors"
          >
            <span>←</span> Volver al Blog
          </Link>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#94A3B8]">
            <span className="bg-purple-50 border border-purple-100 px-3 py-1 rounded-full text-purple-700">
              {post.category}
            </span>
            <span>{post.readTime} de lectura</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight text-[#0F172A]">
            {post.title}
          </h1>

          <p className="text-gray-500 text-sm font-medium">Publicado el {post.date}</p>
        </div>
      </section>

      {/* Main Grid Layout: Left Column (Post content & CTA) + Right Column (Useful Business Sidebar) */}
      <main className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Column Left (2/3 width) - Post Content & Bottom CTA */}
          <div className="lg:col-span-2 space-y-12">
            <article className="prose prose-slate max-w-none text-left">
              {renderContent(post.content)}
            </article>

            {/* Bottom Call to Action for Business Inquiries */}
            <div className="p-8 bg-[#F8F9FA] border border-gray-200 rounded-3xl space-y-6 text-left shadow-sm mt-12">
              <h3 className="text-xl md:text-2xl font-display font-bold text-[#0F172A]">
                ¿Listo para acelerar tu empresa con Inteligencia Artificial?
              </h3>
              <p className="text-[#475569] text-sm md:text-base font-light leading-relaxed">
                Agenda un diagnóstico de infraestructura y viabilidad técnica 100% gratuito. Evaluamos tus sistemas, diseñamos la hoja de ruta y calculamos el ROI estimado para tu negocio.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-sm"
              >
                Solicitar Auditoría Sin Costo
              </Link>
            </div>
          </div>

          {/* Column Right (1/3 width) - Sidebar containing useful contact info */}
          {/* RUTA PARA EDITAR ESTA INFORMACIÓN POSTERIORMENTE: src/app/blog/[slug]/page.tsx */}
          <aside className="lg:col-span-1 bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 space-y-8 text-left shadow-sm">
            <div className="space-y-4">
              <h4 className="text-lg font-display font-bold text-[#0F172A]">
                Consultoría de IA
              </h4>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                Ayudamos a medianas y grandes empresas a integrar IA y automatizar flujos operativos con total cumplimiento legal.
              </p>
            </div>

            {/* Business Contact Info Block (Change coordinates/telephones here) */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Información de Contacto
              </h5>
              <div className="space-y-3 text-xs md:text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">Email:</span>
                  <a href="mailto:hola@fabipers.com" className="hover:text-purple-600 font-medium">
                    hola@fabipers.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">Teléfono:</span>
                  <a href="tel:+573502617242" className="hover:text-purple-600 font-medium">
                    +57 350 261 7242
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">Sede:</span>
                  <span className="font-light">Bogotá, Colombia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">Horarios:</span>
                  <span className="font-light">Lunes a Viernes, 9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Nuestros Servicios
              </h5>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <Link href="/servicios/auditoria-ia" className="text-purple-600 hover:text-purple-700 font-medium">
                    Auditoría de IA
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/consultoria-ia" className="text-purple-600 hover:text-purple-700 font-medium">
                    Consultoría Estratégica
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/desarrollo-llm" className="text-purple-600 hover:text-purple-700 font-medium">
                    Desarrollo LLM
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
