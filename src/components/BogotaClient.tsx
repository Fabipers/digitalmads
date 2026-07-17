"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BogotaClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activeTab, setActiveTab] = useState("fintech");

  const services = [
    {
      title: "Despliegue de Agentes de IA en Bogotá",
      description: "Creamos agentes automatizados entrenados con datos locales y políticas de la empresa para resolver soporte y ventas en Cundinamarca.",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      badge: "Local",
    },
    {
      title: "Integración de Sistemas Corporativos",
      description: "Conectamos CRM, ERP y bases de datos legadas mediante webhooks seguros con LLMs privados sin fuga de datos.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    }
  ];

  const caseStudies = {
    fintech: {
      title: "Fintech CoreCorp: Cobranza en Bogotá Norte",
      results: [
        { label: "Ahorro de Personal", value: "62%" },
        { label: "Satisfacción Bogotá", value: "94%" },
        { label: "Latencia Servidor", value: "< 2s" },
      ],
      description: "Agente inteligente de voz que llama automáticamente a clientes con mora, ofreciendo opciones de refinanciación basadas en flujos locales de crédito.",
      technologies: ["OpenAI API", "Python", "Make.com"],
    },
    logistics: {
      title: "LogisAI: Despachos en Funza y Siberia",
      results: [
        { label: "Menos demoras", value: "18%" },
        { label: "Soporte Pilotos", value: "85%" },
        { label: "Eficiencia Bogotá", value: "+22%" },
      ],
      description: "Optimizador de rutas de entrega para la sabana de Bogotá con un asistente de chat conectado por WhatsApp para coordinar despachos en tiempo real.",
      technologies: ["LangChain", "Node.js", "FastAPI"],
    },
    ecommerce: {
      title: "VestiShop: Envío Express en Bogotá",
      results: [
        { label: "Conversión Local", value: "+35%" },
        { label: "Ticket Promedio", value: "+15%" },
        { label: "Soporte WhatsApp", value: "98%" },
      ],
      description: "Agente experto en ventas para WhatsApp Business de VestiShop, coordinando despachos express de ropa en la capital directamente.",
      technologies: ["Claude 3", "Pinecone", "Meta Cloud API"],
    },
  };

  const processSteps = [
    { step: "01", title: "Auditoría en Bogotá", desc: "Analizamos tus procesos in situ o de manera virtual." },
    { step: "02", title: "Prototipo en 2 semanas", desc: "Desarrollamos una beta para tu aprobación." },
    { step: "03", title: "Despliegue Local", desc: "Conexión con servidores cumpliendo la ley colombiana." },
    { step: "04", title: "Mejora y Soporte", desc: "Mantenimiento presencial o remoto continuo." }
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
      company: formData.get("company") || "Bogotá Lead",
      needs: "IA para el mercado local de Bogotá",
      message: formData.get("message"),
      source: "Bogotá Local SEO"
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
            Consultoría de IA en Bogotá
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
            Optimización y Consultoría de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Inteligencia Artificial en Bogotá
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-light">
            Ayudamos a startups y grandes corporaciones de Bogotá a automatizar sus operaciones mediante flujos locales seguros con cumplimiento de la Ley 1581 (Habeas Data).
          </p>
        </div>
      </section>

      {/* Terminal Grid Section */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
              Contexto Tecnológico de Bogotá
            </h3>
            <p className="text-[#475569] leading-relaxed font-light mb-6">
              Bogotá se ha consolidado como el principal centro de innovación tecnológica del país. Sin embargo, el aumento de la competencia obliga a las empresas locales a buscar eficiencias operativas reales. Implementamos arquitecturas de IA dedicadas en la capital que aceleran los procesos repetitivos de tu negocio y reducen los tiempos de respuesta comerciales de forma dramática.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <span className="text-xs text-[#94A3B8] font-bold uppercase">Soporte Express</span>
                <p className="text-sm font-semibold text-[#0F172A] mt-2">Automatización de mensajería para toda Cundinamarca.</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                <span className="text-xs text-[#94A3B8] font-bold uppercase">Privacidad Total</span>
                <p className="text-sm font-semibold text-[#0F172A] mt-2">LLMs privados instalados localmente o en tu nube corporativa.</p>
              </div>
            </div>
          </div>

          {/* Terminal UI (Light theme) */}
          <div className="bg-[#1e1e24] text-gray-300 font-mono text-xs rounded-3xl p-6 shadow-lg border border-gray-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-gray-500">terminal@digitalmads.co</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-purple-400">➜</span>
                  <span>Executing server check...</span>
                </div>
                <div className="flex gap-2 pl-4 text-emerald-400">
                  <span>✔</span>
                  <span>Active node server ready in Bogotá Northern DC Hub.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400">➜</span>
                  <span>Local Agent Active: <span className="text-amber-400">&apos;Consultoría Bogotá&apos;</span></span>
                </div>
              </div>
            </div>
            
            <div className="pt-8 text-gray-500 text-[10px]">
              Waiting for enquiries from Bogotá enterprises...
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Optimización Operativa Bogotá</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight text-[#0F172A]">Reducción de Costos y Mayor Eficiencia en la Capital</h3>
            <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
              Bogotá es el epicentro empresarial de Colombia, pero la competencia y los costes operativos continúan en aumento. En **DigitalMads** ayudamos a startups, agencias y grandes corporativos bogotanos a automatizar flujos complejos de soporte técnico, gestión documental y cobranzas mediante Inteligencia Artificial adaptada.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#F8F9FA] border border-gray-200 p-6 rounded-2xl shadow-sm space-y-2">
              <h4 className="text-lg font-bold text-cyan-600 font-display">Startups Bogotanas</h4>
              <p className="text-xs text-[#475569] leading-relaxed font-light">Escala tu soporte de usuarios a miles de transacciones diarias sin necesidad de contratar grandes call-centers locales.</p>
            </div>
            <div className="bg-[#F8F9FA] border border-gray-200 p-6 rounded-2xl shadow-sm space-y-2">
              <h4 className="text-lg font-bold text-purple-600 font-display">Grandes Corporaciones</h4>
              <p className="text-xs text-[#475569] leading-relaxed font-light">Audita e integra sistemas legados bancarios o logísticos con agentes de IA autónomos que procesan datos de forma segura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section id="servicios" className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Nuestros Servicios en Bogotá</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Arquitectura de IA a tu Medida</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden group shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-[#F8F9FA] flex items-center justify-center mb-6 border border-gray-100">
                {service.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-display font-bold text-[#0F172A] mb-3">
                {service.title}
              </h4>
              <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="casos" className="py-24 border-t border-gray-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-cyan-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Casos de Éxito en Bogotá</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Resultados Reales de Agentes Desplegados</h3>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(caseStudies).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-purple-50 border-purple-200 text-purple-700 shadow-sm"
                    : "border-gray-200 hover:border-gray-300 text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                {key === "fintech" ? "Fintech" : key === "logistics" ? "Logística" : "E-commerce"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 shadow-sm">
            <div className="flex-1 space-y-6">
              <h4 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
                {caseStudies[activeTab as keyof typeof caseStudies].title}
              </h4>
              <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light">
                {caseStudies[activeTab as keyof typeof caseStudies].description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {caseStudies[activeTab as keyof typeof caseStudies].technologies.map((tech, idx) => (
                  <span key={idx} className="bg-white border border-gray-200 text-[#475569] text-xs px-3 py-1.5 rounded-lg shadow-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 min-w-[280px]">
              {caseStudies[activeTab as keyof typeof caseStudies].results.map((res, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl text-center lg:text-left shadow-sm">
                  <div className="text-3xl font-display font-extrabold text-cyan-600">{res.value}</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-widest mt-1 font-bold">{res.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">Impulsa tu Empresa en Bogotá</h3>
              <p className="text-[#475569] text-sm md:text-base font-light">
                Completa el formulario y uno de nuestros ingenieros senior en Bogotá agendará una sesión técnica presencial o virtual.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <h4 className="text-lg font-bold text-emerald-800">¡Petición enviada con éxito!</h4>
                <p className="text-[#475569] text-sm">Nos pondremos en contacto contigo de inmediato (en menos de 24h) para coordinar la llamada corporativa.</p>
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
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="message">Contenido del Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente sobre las necesidades de automatización..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
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
