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

  const renderContent = (content: string) => {
    const paragraphs = content.split("\n\n");
    return paragraphs.map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Handle Subheadings
      if (trimmed.startsWith("###")) {
        return (
          <h3 key={idx} className="text-xl md:text-2xl font-display font-bold text-[#0F172A] mt-8 mb-4">
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }
      if (trimmed.startsWith("##")) {
        return (
          <h2 key={idx} className="text-2xl md:text-3xl font-display font-bold text-[#0F172A] mt-12 mb-6 border-b border-gray-200 pb-3">
            {trimmed.replace("##", "").trim()}
          </h2>
        );
      }

      // Handle List Items
      if (trimmed.includes("\n*") || trimmed.startsWith("*") || trimmed.startsWith("1.") || trimmed.includes("\n1.")) {
        const items = trimmed.split("\n");
        return (
          <ul key={idx} className="space-y-3 my-6 list-disc pl-6">
            {items.map((item, itemIdx) => {
              const cleanedItem = item.replace(/^(\*|\d+\.)/, "").trim();
              if (!cleanedItem) return null;
              return (
                <li key={itemIdx} className="text-sm md:text-base text-[#475569] font-light leading-relaxed">
                  {cleanedItem}
                </li>
              );
            })}
          </ul>
        );
      }

      // Handle Text Blocks & Bold
      const parts = trimmed.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className="text-sm md:text-base text-[#475569] font-light leading-relaxed mb-6">
          {parts.map((part, partIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={partIdx} className="font-semibold text-[#0F172A]">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      {/* Light Mode Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-left relative z-10">
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

      {/* Post Content */}
      <main className="py-16 max-w-4xl mx-auto px-6 text-left">
        <article className="prose prose-slate max-w-none">
          {renderContent(post.content)}
        </article>
      </main>

      <Footer />
    </div>
  );
}
