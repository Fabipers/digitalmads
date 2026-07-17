"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AuditoriaClient() {
  const [progress, setProgress] = useState(0);
  const [scannerActive, setScannerActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (scannerActive) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setScannerActive(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [scannerActive]);

  const auditSteps = [
    { step: "01", title: "Mapeo de Procesos", desc: "Identificamos cuellos de botella manuales en tu flujo empresarial." },
    { step: "02", title: "Evaluación de Seguridad", desc: "Analizamos la soberanía y cumplimiento de datos (Ley 1581)." },
    { step: "03", title: "Factibilidad de IA", desc: "Determinamos qué modelos (GPT-4, Claude, Llama 3) ofrecen mayor ROI." },
    { step: "04", title: "Diseño de Arquitectura", desc: "Entregamos un plano técnico estructurado listo para implementación." }
  ];

  const startScan = () => {
    setProgress(0);
    setScannerActive(true);
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
      company: formData.get("company") || "Auditoría IA Lead",
      needs: "Auditoría de IA y Diagnóstico de Sistemas",
      message: formData.get("message"),
      source: "Auditorías de IA"
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

      {/* Hero Section (Asymmetric Left-aligned + Simulator in right col) */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 text-left relative z-10">
          {/* Left Column (60% width) */}
          <div className="w-full lg:w-[60%] space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
              Diagnóstico de Infraestructura
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
              Auditoría de Inteligencia Artificial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                y Viabilidad Tecnológica
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-light">
              Evaluamos la factibilidad técnica y la seguridad de tus sistemas empresariales para diseñar una hoja de ruta de implementación estructurada.
            </p>

            <button
              onClick={startScan}
              disabled={scannerActive}
              className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-sm transition-all duration-300 disabled:opacity-50"
            >
              {scannerActive ? "Escaneando..." : "Iniciar Simulación de Diagnóstico"}
            </button>
          </div>

          {/* Right Column (40% width) - Interactive simulator console */}
          <div className="w-full lg:w-[40%] bg-[#1e1e24] text-gray-300 font-mono text-xs rounded-3xl p-6 shadow-lg border border-gray-800 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-gray-500 text-[10px]">diagnostics-console</span>
            </div>

            {/* Progress Bar (Light theme inline style matching console) */}
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden relative">
              <div
                className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-1.5 leading-relaxed text-[11px] min-h-[120px]">
              <p className="text-gray-500">{"// Output log //"}</p>
              {progress > 0 && <p className="text-cyan-400">➜ [INFO] Scanning active API ports...</p>}
              {progress > 40 && <p className="text-purple-400">➜ [WARN] Manual bottlenecks detected in support flows.</p>}
              {progress === 100 && (
                <p className="text-emerald-400 font-bold">➜ [SUCCESS] Diagnosis completed. Ready for agent deployment.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Steps Section (PROCESO TECNICO Structured Grid layout) */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Proceso Técnico</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Fases de Nuestra Auditoría</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {auditSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 relative shadow-sm text-left">
              <span className="absolute top-6 right-8 text-2xl font-display font-extrabold text-[#E2E8F0] tracking-tight">
                {step.step}
              </span>
              <h4 className="text-lg md:text-xl font-display font-bold text-[#0F172A] mb-3 pr-8">
                {step.title}
              </h4>
              <p className="text-[#475569] text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section (Split Form Layout) */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          {/* Column Left: persuasive content & checklist */}
          <div className="space-y-6">
            <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Agenda de Diagnóstico</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Solicita tu Auditoría Técnica</h3>
            <p className="text-[#475569] text-base font-light leading-relaxed">
              Completa el formulario y uno de nuestros ingenieros agendará la llamada técnica de diagnóstico sin costo.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Análisis de procesos 100% gratuito.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hoja de ruta e informe técnico estructurado de regalo.</span>
              </li>
            </ul>
          </div>

          {/* Column Right: Compact, styled form card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <h4 className="text-lg font-bold text-emerald-800">¡Petición enviada con éxito!</h4>
                <p className="text-[#475569] text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
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
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="message">Descripción de tu infraestructura y software legado</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente qué herramientas utilizas en tu empresa (ej. Salesforce, HubSpot, SAP, etc.)..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-sm transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Agendar Auditoría"}
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
