"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ConsultoriaClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gpt4");

  const modelSpecs = {
    gpt4: {
      name: "OpenAI GPT-4o",
      strength: "Razonamiento lógico y formateo JSON estructurado de alta complejidad.",
      tokenCost: "$5.00 / 1M tokens",
      latency: "Media-Baja",
    },
    claude: {
      name: "Anthropic Claude 3.5 Sonnet",
      strength: "Excelente redacción en español natural, análisis profundo de documentos y programación.",
      tokenCost: "$3.00 / 1M tokens",
      latency: "Media",
    },
    llama: {
      name: "Meta Llama 3 (Open Source)",
      strength: "Soberanía absoluta de datos. Alojamiento local 100% privado y personalizable.",
      tokenCost: "$0.00 (Self-hosted)",
      latency: "Muy Baja (Hardware Dedicado)",
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setFormSubmitted(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company") || "Consultoría IA Lead",
      needs: "Consultoría Estratégica Completa",
      message: formData.get("message"),
      source: "Consultoría Estratégica"
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        e.currentTarget.reset();
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      {/* Light Mode Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      {/* Hero Section (Asymmetric Left-aligned + specs card in right col) */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 text-left relative z-10">
          {/* Left Column (60% width) */}
          <div className="w-full lg:w-[60%] space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
              Consultoría Estratégica B2B
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
              Consultoría Estratégica de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Inteligencia Artificial
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-light">
              Estructuramos la arquitectura e integración técnica idónea para tu empresa, equilibrando coste, velocidad y soberanía de datos.
            </p>
          </div>

          {/* Right Column (40% width) - Interactive model specs card */}
          <div className="w-full lg:w-[40%] bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex justify-center gap-2">
              {Object.keys(modelSpecs).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedModel(key)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-300 ${
                    selectedModel === key
                      ? "bg-purple-50 border-purple-200 text-purple-700 shadow-sm"
                      : "border-gray-200 text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  {key === "gpt4" ? "GPT-4" : key === "claude" ? "Claude" : "Llama 3"}
                </button>
              ))}
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-3">
              <h4 className="text-base font-display font-bold text-[#0F172A]">
                {modelSpecs[selectedModel as keyof typeof modelSpecs].name}
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed font-light">
                {modelSpecs[selectedModel as keyof typeof modelSpecs].strength}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-100 text-[10px]">
                <div>
                  <span className="text-[#94A3B8] font-bold uppercase">Costo</span>
                  <p className="text-xs font-semibold text-[#0F172A] mt-0.5">{modelSpecs[selectedModel as keyof typeof modelSpecs].tokenCost}</p>
                </div>
                <div>
                  <span className="text-[#94A3B8] font-bold uppercase">Latencia</span>
                  <p className="text-xs font-semibold text-[#0F172A] mt-0.5">{modelSpecs[selectedModel as keyof typeof modelSpecs].latency}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Block */}
      <section className="py-12 max-w-4xl mx-auto px-6">
        <div className="border-l-4 border-cyan-500 bg-cyan-50/50 p-6 rounded-r-2xl space-y-2 text-left">
          <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-800">Gobernanza y Cumplimiento Legal (Habeas Data)</h4>
          <p className="text-xs md:text-sm text-cyan-900 leading-relaxed font-light">
            Garantizamos cumplimiento total con el reglamento internacional de protección de datos (GDPR) y la legislación colombiana (Ley 1581). Diseñamos arquitecturas en las que tus flujos de información empresarial sensible no se comparten jamás con bases de datos de entrenamiento públicas.
          </p>
        </div>
      </section>

      {/* CTA / Contact Section (Split Form Layout) */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          {/* Column Left: persuasive content & checklist */}
          <div className="space-y-6">
            <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Agenda de Asesoría</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Agenda tu Sesión Estratégica</h3>
            <p className="text-[#475569] text-base font-light leading-relaxed">
              Completa el formulario y nos contactaremos contigo de inmediato para coordinar la consultoría personalizada.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Asesoría de arquitectura personalizada.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cumplimiento legal colombiano asegurado.</span>
              </li>
            </ul>
          </div>

          {/* Column Right: Compact, styled form card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <h4 className="text-lg font-bold text-emerald-800">¡Petición enviada con éxito!</h4>
                <p className="text-[#475569] text-sm">Nos pondremos en contacto contigo de inmediato (en menos de 24h) para coordinar la sesión de consultoría.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {isError && (
                  <div className="p-4 bg-rose-5 border border-rose-200 rounded-xl text-center text-rose-800 text-xs font-medium">
                    Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="email">Correo Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="phone">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Ej. +57 350 261 7242"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Ej. CoreCorp"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="message">¿Cuáles son tus objetivos estratégicos?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente sobre las necesidades estratégicas de tu empresa..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-sm transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Agendar Sesión de Consultoría"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
