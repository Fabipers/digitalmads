"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function CrmClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const integrationFeatures = [
    {
      title: "Calificación de Leads Automática",
      desc: "Nuestros agentes analizan el comportamiento y los datos del prospecto para calificar leads y priorizarlos directamente dentro de tu CRM en tiempo real.",
    },
    {
      title: "Sincronización HubSpot & Salesforce",
      desc: "Conexión bidireccional limpia con las principales APIs del mercado mediante webhooks seguros para mantener actualizados los registros de tus agentes de ventas.",
    },
    {
      title: "Acciones Automatizadas del Pipeline",
      desc: "Envío de cotizaciones personalizadas y correos de seguimiento automáticos conforme los prospectos avanzan por las fases del embudo de ventas.",
    }
  ];

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
      company: formData.get("company") || "CRM Integration Lead",
      needs: "Integración de IA en CRMs (HubSpot, Salesforce)",
      message: formData.get("message"),
      source: "Integraciones - CRM"
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

      {/* Hero Section (Asymmetric Left-aligned) */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 text-left relative z-10">
          {/* Left Column (60% width) */}
          <div className="w-full lg:w-[60%] space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
              CRM & API Integration
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
              Integración de IA en CRMs <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">(HubSpot, Salesforce, Pipedrive)</span>
            </h1>

            <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-light">
              Conectamos agentes autónomos y modelos de lenguaje con tu CRM de ventas para calificar leads y automatizar el pipeline en tiempo real.
            </p>
          </div>

          {/* Right Column (40% width) - active log check */}
          <div className="w-full lg:w-[40%] bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 shadow-sm font-mono text-xs text-[#475569] space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <span className="text-[#94A3B8] font-semibold text-[10px]">crm-lead-qualification</span>
            </div>
            <div className="space-y-2">
              <p className="text-purple-600 font-bold">➜ API Webhook Status: ACTIVE</p>
              <p className="text-cyan-600 font-bold">➜ Leads Processed/Min: 42</p>
              <p className="text-[#0F172A]">➜ HubSpot/Salesforce Sync: 100%</p>
              <p className="text-emerald-600 font-bold">➜ Lead Qualification Precision: 96%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-12">
        <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
          <div className="space-y-4 text-left">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
              Sincronización Inteligente de Ventas y Flujos Automáticos
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
              Mapeamos y enlazamos las APIs de HubSpot, Salesforce y Pipedrive utilizando webhooks dinámicos. Esto asegura que la información fluya bidireccionalmente entre tus canales de adquisición y la base de datos central sin retardos ni cuellos de botella manuales.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-200 pt-8 text-left">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
              Agentes de Calificación Autónoma de Leads en Tiempo Real
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
              Nuestros agentes con IA procesan y analizan las respuestas de los prospectos en el instante en que ingresan al sistema. Evalúan la madurez del lead, calculan su valor potencial e inyectan tareas y priorizaciones detalladas dentro de tu panel de ventas en tiempo real, aumentando la conversión final.
            </p>
          </div>
        </div>

        {/* Structured Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrationFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-sm text-left">
              <h3 className="text-lg font-display font-bold text-[#0F172A]">{feat.title}</h3>
              <p className="text-[#475569] text-xs md:text-sm leading-relaxed font-light">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section (Split Form Layout) */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          {/* Column Left: persuasive content & checklist */}
          <div className="space-y-6">
            <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Automatización B2B</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">Solicita Integración CRM</h3>
            <p className="text-[#475569] text-base font-light leading-relaxed">
              Completa el formulario y analizaremos las APIs de tu CRM corporativo para diseñar la conexión técnica.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Evaluación de viabilidad de APIs.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Esquema técnico estructurado.</span>
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
                      placeholder="Ej. +57 300 123 4567"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="company">Empresa / Corporativo</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Ej. Mi Empresa CRM"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="message">Cuéntanos sobre tu CRM e integraciones actuales</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente qué herramientas utilizas en tu empresa (ej. HubSpot, Salesforce, etc.)..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Petición de Consultoría"}
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
