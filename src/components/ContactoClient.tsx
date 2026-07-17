"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactoClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

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
      company: formData.get("company"),
      needs: formData.get("needs"),
      message: formData.get("message"),
      source: "Pagina Contacto"
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

      {/* Hero / Main Section */}
      <section className="relative pt-28 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Column Left (40% - lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
              Contacto Directo
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
              Hablemos de tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                infraestructura
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#475569] font-light leading-relaxed">
              Analizamos tus procesos operativos in situ o de manera virtual en Bogotá y toda Colombia. Co-diseñamos el pipeline de Inteligencia Artificial óptimo para escalar tu negocio.
            </p>

            <div className="space-y-4 pt-6 border-t border-gray-200 text-sm">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hola@fabipers.com" className="font-semibold text-[#0F172A] hover:text-purple-600 transition-colors">
                  hola@fabipers.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-light text-[#475569]">Bogotá, Colombia</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/573502617242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.995-1.878-1.88-4.357-2.914-6.999-2.915-5.443 0-9.869 4.42-9.873 9.863-.001 1.748.462 3.453 1.341 4.966l-.982 3.585 3.673-.963zm10.59-4.87c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.77-1.665-2.07-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.927-2.233-.244-.588-.492-.51-.677-.52-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.124 4.53 1.914.828 2.628.924 3.562.784.577-.086 1.77-.723 2.02-1.42.25-.696.25-1.292.175-1.42-.075-.125-.275-.2-.575-.35z" />
                </svg>
                Chatea con nosotros
              </a>
            </div>
          </div>

          {/* Column Right (60% - lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 shadow-sm">
            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                <svg className="w-16 h-16 text-emerald-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-xl font-bold text-emerald-800">¡Solicitud recibida!</h4>
                <p className="text-[#475569] text-sm md:text-base leading-relaxed">
                  Hemos procesado tus datos de forma segura. Un ingeniero de sistemas senior se pondrá en contacto contigo en menos de 24 horas para coordinar el diagnóstico.
                </p>
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
                    <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="email">Correo Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="phone">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Ej. +57 350 261 7242"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="company">Empresa / Organización</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Ej. CoreCorp S.A.S."
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="needs">Servicio a Cotizar</label>
                  <select
                    id="needs"
                    name="needs"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                  >
                    <option value="" disabled selected>Selecciona un servicio</option>
                    <option value="Auditoría de Procesos">Auditoría de Procesos</option>
                    <option value="Consultoría Estratégica">Consultoría Estratégica</option>
                    <option value="Desarrollo LLM">Desarrollo LLM</option>
                    <option value="Agentes para WhatsApp">Agentes para WhatsApp</option>
                    <option value="Integración CRM">Integración CRM</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="message">Alcance del Proyecto / Infraestructura Actual</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Describe brevemente la infraestructura actual de software y tus objetivos..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Procesando Cotización..." : "Enviar Petición de Cotización"}
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
