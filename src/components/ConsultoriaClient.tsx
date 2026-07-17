"use client";

import { useState } from "react";

export default function ConsultoriaClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
              Contactar Consultor
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs md:text-sm font-semibold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            Estrategia de Transformación Corporativa
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-gradient-purple-cyan glow-purple">
            Consultoría Estratégica en IA
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Guiamos a grandes compañías en la estructuración de planes de adopción de Inteligencia Artificial para optimizar de manera segura, legal y rentable sus procesos.
          </p>
        </div>
      </section>

      {/* Strategic content block */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-12 border border-white/5">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Adopción de IA Segura y Rentable</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              La integración de la Inteligencia Artificial en los procesos corporativos no es solo un desafío de software; es principalmente una cuestión de estrategia de negocio, gobernanza de datos y adecuación jurídica.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
              Nuestro servicio de consultoría premium provee acompañamiento de punta a punta para directores y equipos de TI. Identificamos los casos de uso más rentables, elegimos los modelos con la relación costo-beneficio óptima y estructuramos planes de despliegue que garanticen la seguridad jurídica y de propiedad intelectual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {consultingServices.map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-2xl space-y-3 hover:border-purple-500/20 transition-all duration-300">
                <h3 className="text-lg font-display font-bold text-white">{service.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">{service.desc}</p>
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
