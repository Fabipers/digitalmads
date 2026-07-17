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
    { title: "Mapeo de Procesos", desc: "Identificamos cuellos de botella manuales en tu flujo empresarial." },
    { title: "Evaluación de Seguridad", desc: "Analizamos la soberanía y cumplimiento de datos (Ley 1581)." },
    { title: "Factibilidad de IA", desc: "Determinamos qué modelos (GPT-4, Claude, Llama 3) ofrecen mayor ROI." },
    { title: "Diseño de Arquitectura", desc: "Entregamos un plano técnico estructurado listo para implementación." }
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

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
            Diagnóstico de Infraestructura
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
            Auditoría de Inteligencia Artificial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              y Viabilidad Tecnológica
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-light">
            Evaluamos la factibilidad técnica y la seguridad de tus sistemas empresariales para diseñar una hoja de ruta de implementación estructurada.
          </p>
        </div>
      </section>

      {/* Simulator Section (Tech Light theme) */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 shadow-sm space-y-8">
          <div className="space-y-3 text-center">
            <h3 className="text-2xl font-display font-bold text-[#0F172A]">Simulador de Diagnóstico Técnico</h3>
            <p className="text-sm text-[#475569] font-light max-w-xl mx-auto">
              Haz clic abajo para simular un escaneo rápido de factibilidad en tu dominio corporativo.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              onClick={startScan}
              disabled={scannerActive}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-sm transition-all duration-300 disabled:opacity-50"
            >
              {scannerActive ? "Escaneando..." : "Iniciar Simulación de Diagnóstico"}
            </button>

            {/* Progress Bar (Light theme) */}
            <div className="w-full max-w-xl bg-gray-200 h-4 rounded-full overflow-hidden relative border border-gray-300">
              <div
                className="bg-gradient-to-r from-purple-600 to-cyan-500 h-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-700">
                {progress}%
              </span>
            </div>

            {/* Scanner Output Console */}
            <div className="w-full max-w-xl bg-[#1e1e24] text-gray-300 font-mono text-xs rounded-2xl p-6 shadow-lg border border-gray-800 space-y-2">
              <p className="text-gray-500">{"// Consola de Diagnóstico Simulada //"}</p>
              {progress > 0 && <p className="text-cyan-400">➜ [INFO] Iniciando escaneo de puertos de APIs locales...</p>}
              {progress > 25 && <p className="text-cyan-400">➜ [OK] Conectividad a bases de datos PostgreSQL mapeada.</p>}
              {progress > 50 && <p className="text-purple-400">➜ [WARN] Se detectó un cuello de botella manual en soporte técnico.</p>}
              {progress > 75 && <p className="text-cyan-400">➜ [OK] Cumplimiento normativo (Ley 1581) verificado de forma síncrona.</p>}
              {progress === 100 && (
                <p className="text-emerald-400 font-bold">➜ [SUCCESS] Diagnóstico completo. Tu infraestructura es viable para Agentes RAG.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Steps Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Proceso Técnico</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Fases de Nuestra Auditoría</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {auditSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-6 relative shadow-sm">
              <h4 className="text-lg md:text-xl font-display font-bold text-[#0F172A] mb-2">
                {step.title}
              </h4>
              <p className="text-[#475569] text-xs md:text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200/60 bg-white">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">Solicita tu Auditoría Técnica</h3>
              <p className="text-[#475569] text-sm md:text-base font-light">
                Completa el formulario y uno de nuestros ingenieros agendará la llamada técnica de diagnóstico sin costo.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <h4 className="text-lg font-bold text-emerald-800">¡Petición enviada con éxito!</h4>
                <p className="text-[#475569] text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {isError && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-center text-rose-800 text-xs font-medium">
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
                      placeholder="Ej. +57 300 123 4567"
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
