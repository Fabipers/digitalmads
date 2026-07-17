"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function WhatsappClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const features = [
    {
      title: "IA Real (RAG) vs Bots Tradicionales",
      desc: "A diferencia de los flujos rígidos de botones, nuestros agentes comprenden el lenguaje natural e interactúan de forma fluida basándose en tus documentos corporativos.",
    },
    {
      title: "Ventas Autónomas 24/7",
      desc: "Nuestros agentes califican al usuario, muestran catálogo, recomiendan y guían hacia la pasarela de pago directamente en el chat.",
    },
    {
      title: "Conectividad total de APIs",
      desc: "Integración nativa con la API oficial de WhatsApp Cloud para garantizar estabilidad, seguridad y el cumplimiento de las políticas de Meta.",
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
      company: formData.get("company") || "WhatsApp Integration Lead",
      needs: "Agentes de Inteligencia Artificial para WhatsApp Business",
      message: formData.get("message"),
      source: "Integraciones - WhatsApp"
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
            WhatsApp Business Integration
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
            Agentes de Inteligencia Artificial para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">WhatsApp Cloud API</span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-light">
            Automatiza tus ventas y soporte mediante agentes conversacionales reales que entienden el contexto, resuelven dudas complejas y cierran transacciones 24/7.
          </p>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-12">
        <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
              Superando los Bots Tradicionales Basados en Reglas
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
              Los bots antiguos basados en árboles de decisión rígidos frustran al usuario con menús limitados que no resuelven intenciones complejas. Los agentes inteligentes reales interpretan lenguaje coloquial, descifran modismos locales y gestionan flujos de venta cruzada de forma fluida y natural.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
              Arquitecturas RAG y Bases Vectoriales Conectadas
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
              Utilizando Retrieval-Augmented Generation (RAG), conectamos el chat directo de WhatsApp con tu base de conocimientos corporativos (PDFs, manuales de soporte, ERP). Esto permite responder de forma síncrona sobre stock de productos específicos, estado del envío y características técnicas sin alucinaciones de IA.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <h3 className="text-lg font-display font-bold text-[#0F172A]">{feat.title}</h3>
              <p className="text-[#475569] text-xs md:text-sm leading-relaxed font-light">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">Lleva la IA a WhatsApp</h3>
              <p className="text-[#475569] text-sm font-light">
                Completa el formulario y nos contactaremos para diseñar un prototipo conversacional rápido conectado a tu base de datos.
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
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="company">Empresa / Negocio</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Ej. Mi Negocio"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="message">Cuéntanos sobre tus objetivos en WhatsApp</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe brevemente el tipo de soporte o proceso de ventas que te gustaría automatizar..."
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
