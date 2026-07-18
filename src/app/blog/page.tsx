import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getAllPosts } from "../../lib/mdx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog de Inteligencia Artificial y Automatización B2B | DigitalMads",
  description: "Artículos técnicos y estratégicos sobre agentes de IA, RAG, automatización de workflows y cumplimiento regulatorio en Colombia.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      {/* Light Mode Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-left space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
            Blog y Recursos Técnicos
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
            Ingeniería de IA y <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Estrategia B2B</span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl leading-relaxed font-light">
            Artículos y guías de alto rendimiento técnico sobre implementaciones de IA autónoma en el mercado empresarial.
          </p>
        </div>
      </section>

      {/* Posts List Grid */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#94A3B8] font-semibold">
                  <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-purple-700">
                    {post.category}
                  </span>
                  <span>{post.readTime} de lectura</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-display font-bold text-[#0F172A] hover:text-purple-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-[#475569] text-sm md:text-base font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 mt-6 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-purple-600 hover:text-purple-700 text-sm font-semibold inline-flex items-center gap-1"
                >
                  Leer Artículo <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
