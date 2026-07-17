"use client";

import { useState } from "react";

export default function ConsultoriaClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const modelEcosystem = [
    {
      name: "OpenAI GPT-4o",
      type: "Propiedad Cerrada",
      desc: "Excelente rendimiento para razonamiento lógico complejo, integraciones de agentes autónomos y análisis de lenguaje natural premium.",
      badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      logoSvg: (
        <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" />
        </svg>
      )
    },
    {
      name: "Anthropic Claude 3.5 Sonnet",
      type: "Propiedad Cerrada",
      desc: "Líder indiscutible en redacción creativa de alta calidad, procesamiento contextual masivo (documentos extensos) y codificación fluida.",
      badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      logoSvg: (
        <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1M12 2v12" />
        </svg>
      )
    },
    {
      name: "Meta Llama 3 (Open Source)",
      type: "Código Abierto",
      desc: "Alojamiento local completo en tu propia nube corporativa. Cero fuga de información comercial y reducción drástica en costos de tokens.",
      badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
      logoSvg: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7l6 10V7" />
        </svg>
      )
    }
  ];

  const consultingServices = [
    {
      title: "Hojas de Ruta e Inversión",
      desc: "Creamos planes estratégicos de adopción tecnológica detallando costes de infraestructura, APIs y hardware, junto con estimaciones de retorno de inversión.",
    },
    {
      title: "Gobernanza de Datos y Legalidad",
      desc: "Te guiamos en el cumplimiento normativo legal (GDPR, regulaciones de protección de datos colombianas) garantizando la privacidad de tu información sensible.",
    },
    {
      title: "Selección de Modelos & Fine-tuning",
      desc: "Te ayudamos a elegir el modelo de lenguaje ideal (OpenAI, Anthropic Claude, Llama 3) y determinamos si requieres afinación a medida (Fine-tuning) o RAG.",
    },
    {
      title: "Formación Directiva y de Equipos",
      desc: "Capacitamos a tus directivos y programadores en ingeniería de prompts avanzada, automatizaciones integrales de negocio y seguridad en el uso diario de IA.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white relative font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] radial-glow-purple -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] radial-glow-cyan -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-20 opacity-70 pointer-events-none" />

      {/* Floating Glass Navbar */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-display font-bold text-xl shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform duration-300">
              DM
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
              digital<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">mads</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            
            {/* Services Dropdown */}
            <div className="relative group/dropdown">
              <button className="flex items-center gap-1 hover:text-white transition-colors py-2 focus:outline-none">
                Servicios
                <svg className="w-4 h-4 transition-transform group-hover/dropdown:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl glass p-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 shadow-xl border border-white/10 z-50">
                <a href="/servicios/auditoria-ia" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  Auditorías de IA
                </a>
                <a href="/servicios/consultoria-ia" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors border-b border-white/5">
                  Consultoría Estratégica
                </a>
              </div>
            </div>

            <a href="/bogota" className="hover:text-white transition-colors text-cyan-400 font-semibold">IA en Bogotá</a>
            <a href="/#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="/#casos" className="hover:text-white transition-colors">Casos de Éxito</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:from-purple-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
            >
              Contactar Consultor
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/5 py-4 px-6 absolute top-20 left-0 right-0 flex flex-col gap-4 animate-fade-in">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Inicio</a>
            <div className="pl-4 border-l border-white/10 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Servicios</span>
              <a href="/servicios/auditoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-300 hover:text-white text-base">Auditorías de IA</a>
              <a href="/servicios/consultoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-300 hover:text-white text-base font-semibold">Consultoría Estratégica</a>
            </div>
            <a href="/bogota" onClick={() => setMobileMenuOpen(false)} className="py-2 text-cyan-400 hover:text-white text-lg font-semibold">IA en Bogotá</a>
            <a href="/#proceso" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Proceso</a>
            <a href="/#casos" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Casos de Éxito</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Contacto</a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white font-medium text-base shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
            >
              Contactar Consultor
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs md:text-sm font-semibold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            Estrategia de Transformación y Gobernanza Corporativa
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glow-purple">
            Consultoría Estratégica en IA
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Diseñamos e integramos hojas de ruta y arquitecturas corporativas sólidas de IA, alineadas con la soberanía de tus datos y seguridad regulatoria.
          </p>
        </div>
      </section>

      {/* Model Ecosystem Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 border-t border-white/5">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-purple-400 text-xs md:text-sm font-semibold tracking-widest uppercase">Ecosistema de Modelos</h2>
          <h3 className="text-2xl md:text-4xl font-display font-bold">Integración Segura con Modelos Líderes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modelEcosystem.map((model, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-purple-500/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                    {model.logoSvg}
                  </div>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${model.badgeColor}`}>
                    {model.type}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-display">{model.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy Block ("Alta Seguridad") */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 bg-gradient-to-tr from-black to-purple-950/20 relative overflow-hidden">
          <div className="absolute right-[-10%] top-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                Cumplimiento y Privacidad
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Cumplimiento Legal (Habeas Data & GDPR)</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                Garantizamos que la información de tu organización permanezca completamente resguardada. Diseñamos e implementamos entornos de nube dedicados en **Amazon Web Services (AWS)** o **Google Cloud Platform (GCP)** donde tus datos corporativos se procesan bajo cifrado SSL de grado militar de punto a punto.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                Nuestros desarrollos cumplen en su totalidad con la **Ley 1581 de Protección de Datos de Colombia** (Habeas Data) y con el **Reglamento General de Protección de Datos (GDPR)** de la Unión Europea, asegurando que tus datos no se utilicen bajo ninguna circunstancia para el re-entrenamiento de APIs públicas.
              </p>
            </div>
            
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Services Details */}
      <section className="py-16 max-w-5xl mx-auto px-6 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingServices.map((service, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-2xl space-y-3 hover:border-purple-500/20 transition-all duration-300">
              <h3 className="text-lg font-display font-bold text-white font-display">{service.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass-card rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold">Contacta con un Consultor Senior</h3>
              <p className="text-gray-400 text-sm">
                Diseña hoy la hoja de ruta técnica de IA para tu organización.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center space-y-2">
                <svg className="w-12 h-12 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-bold text-emerald-300">¡Mensaje recibido!</h4>
                <p className="text-gray-400 text-sm">Uno de nuestros consultores senior se pondrá en contacto contigo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="email">Correo Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="message">¿Cuáles son tus objetivos estratégicos?</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente sobre las necesidades estratégicas de tu empresa..."
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                >
                  Agendar Sesión de Consultoría
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-500 text-sm mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-display font-bold text-xs text-white">
                DM
              </div>
              <span className="font-display font-bold text-white tracking-tight text-base">
                digitalmads
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              Transformamos empresas mediante arquitectura avanzada de Inteligencia Artificial en toda Colombia.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Servicios</span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/servicios/auditoria-ia" className="hover:text-white transition-colors">Auditorías de IA</a></li>
              <li><a href="/servicios/consultoria-ia" className="hover:text-white transition-colors">Consultoría Estratégica</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Ubicaciones</span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/bogota" className="hover:text-white transition-colors">IA en Bogotá</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Colombia (Nacional)</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-xs">
          <div>
            © {new Date().getFullYear()} DigitalMads. Todos los derechos reservados.
          </div>
          <div className="flex gap-4">
            <a href="/#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="/#casos" className="hover:text-white transition-colors">Casos de Éxito</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
