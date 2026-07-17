"use client";

import { useState } from "react";

export default function AuditoriaClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const auditSteps = [
    {
      num: "01",
      title: "Mapeo de Flujos de Trabajo",
      desc: "Revisamos junto a tus directivos y líderes de departamento los procesos manuales y repetitivos más costosos en tiempo y recursos.",
    },
    {
      num: "02",
      title: "Evaluación de Datos y Conectividad",
      desc: "Analizamos la calidad, estructuración y accesibilidad de tus bases de datos corporativas para evaluar la viabilidad de integrar bases de conocimiento vectoriales (RAG).",
    },
    {
      num: "03",
      title: "Análisis de Rentabilidad (ROI)",
      desc: "Calculamos el retorno de inversión potencial y la reducción de costos operativos proyectados para cada integración técnica recomendada.",
    },
    {
      num: "04",
      title: "Informe de Factibilidad y Arquitectura",
      desc: "Entregamos un documento con la arquitectura sugerida, API stack, costes de API estimados y plazos de implementación para cada agente de IA.",
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
            <a href="/#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="/#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="/#casos" className="hover:text-white transition-colors">Casos de Éxito</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:from-purple-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
            >
              Solicitar Auditoría
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
          <div className="md:hidden glass border-t border-white/5 py-4 px-6 absolute top-20 left-0 right-0 flex flex-col gap-4">
            <a href="/#servicios" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Servicios</a>
            <a href="/#proceso" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Proceso</a>
            <a href="/#casos" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Casos de Éxito</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Contacto</a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white font-medium text-base shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
            >
              Solicitar Auditoría
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs md:text-sm font-semibold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            Servicio de Diagnóstico Técnico
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-gradient-purple-cyan glow-purple">
            Auditorías de Inteligencia Artificial
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Evaluamos la infraestructura digital, almacenamiento de datos y flujos de trabajo de tu empresa para diseñar automatizaciones viables de alto impacto operativo.
          </p>
        </div>
      </section>

      {/* Technical content block */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-12 border border-white/5">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">¿En qué consiste nuestra Auditoría Técnica?</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              Muchas organizaciones cometen el error de implementar Inteligencia Artificial sin estructurar sus datos o entender sus cuellos de botella reales. Nuestra auditoría técnica realiza un escaneo profundo de la infraestructura de tu organización para asegurar que cualquier integración de agentes autónomos o LLMs sea **viable, segura y rentable**.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              Analizamos los sistemas legados corporativos (CRMs, bases de datos SQL/NoSQL, almacenamiento en la nube) y proponemos soluciones que respeten la seguridad de la información corporativa, asegurando que tus datos no se utilicen para entrenar modelos públicos externos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {auditSteps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-2xl space-y-4 hover:border-purple-500/20 transition-all duration-300">
                <div className="text-2xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{step.num}</div>
                <h3 className="text-lg font-display font-bold text-white">{step.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass-card rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold">Solicita una Auditoría Técnica</h3>
              <p className="text-gray-400 text-sm">
                Completa el formulario y analizaremos la viabilidad técnica preliminar de tu negocio.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center space-y-2">
                <svg className="w-12 h-12 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-bold text-emerald-300">¡Solicitud recibida!</h4>
                <p className="text-gray-400 text-sm">Nos comunicaremos contigo en breve para coordinar el acceso a la auditoría preliminar.</p>
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
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="message">Descripción corta de tu infraestructura</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Cuéntanos brevemente qué herramientas utilizas en tu empresa (ej. Salesforce, HubSpot, SAP, etc.)..."
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
                >
                  Agendar Auditoría
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-display font-bold text-xs text-white">
              DM
            </div>
            <span className="font-display font-bold text-white tracking-tight text-base">
              digitalmads
            </span>
          </div>
          <div>
            © {new Date().getFullYear()} DigitalMads. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
