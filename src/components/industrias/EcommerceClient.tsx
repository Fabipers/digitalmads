"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function EcommerceClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const services = [
    {
      title: "Recomendadores de Producto con IA",
      desc: "Desplegamos modelos que analizan el comportamiento en tiempo real para recomendar productos hiper-personalizados, aumentando la conversión.",
    },
    {
      title: "Agentes de Soporte Autónomos",
      desc: "Resolución automática de consultas sobre envíos, stock, devoluciones e incidencias de pago 24/7 en lenguaje natural.",
    },
    {
      title: "Automatización de Inventario",
      desc: "Predicción de demanda de stock y flujos automáticos de reabastecimiento conectados con tu ERP.",
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
      company: formData.get("company") || "E-commerce Lead",
      needs: "IA para E-commerce y Retail",
      message: formData.get("message"),
      source: "Industrias - E-commerce"
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
            E-commerce & Retail Vertical
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
            Inteligencia Artificial para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">E-commerce, Retail y Ventas Digitales</span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-light">
            Aumenta tu conversión, maximiza el ticket promedio y optimiza tus procesos logísticos con integraciones avanzadas de agentes de recomendación y bases de datos vectoriales.
          </p>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="py-16 max-w-5xl mx-auto px-6 space-y-12">
        <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
              Recuperación Inteligente de Carritos Abandonados
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
              Los carritos abandonados representan hasta el 70% de las ventas perdidas en comercios electrónicos. Implementamos agentes autónomos en WhatsApp que contactan al usuario de forma proactiva, resuelven sus dudas sobre el producto o costos de envío de manera conversacional, y ofrecen incentivos personalizados dinámicos para recuperar la venta en minutos.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
              Personalización y Búsqueda Semántica con Embeddings
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
              La búsqueda tradicional basada en palabras clave rígidas suele fallar cuando el cliente comete errores tipográficos o usa sinónimos. Convertimos tu catálogo en vectores matemáticos usando bases de datos vectoriales, permitiendo búsquedas conceptuales precisas y recomendaciones ultra-personalizadas que elevan el ticket promedio de compra.
            </p>
          </div>
        </div>

        <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 space-y-6 shadow-sm">
          <h3 className="text-xl font-display font-bold text-[#0F172A]">Entregables Clave de la Solución</h3>
          <ul className="space-y-3 text-sm text-[#475569] font-light list-disc pl-5">
            <li><strong>Bots de soporte conversacional:</strong> Agentes autónomos para responder sobre stock, envíos y devoluciones.</li>
            <li><strong>Recomendadores de stock predictivos:</strong> Análisis histórico para reabastecer stock de forma automatizada.</li>
            <li><strong>Integraciones de checkout fluido:</strong> Conexión limpia con Shopify, WooCommerce y VTEX.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl space-y-3 shadow-sm">
              <h3 className="text-lg font-display font-bold text-[#0F172A]">{service.title}</h3>
              <p className="text-[#475569] text-xs md:text-sm leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">Impulsa tu Tienda Online</h3>
              <p className="text-[#475569] text-sm font-light">
                Completa el formulario corporativo y agendaremos una llamada técnica de análisis de conversión con IA.
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
                      placeholder="Ej. Mi Tienda Retail"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="message">Cuéntanos sobre tu tienda o retail</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente qué plataforma usas (Shopify, WooCommerce, VTEX) y cuáles son tus objetivos..."
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
