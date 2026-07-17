"use client";

import { useState } from "react";

export default function FintechClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const services = [
    {
      title: "Análisis de Riesgo Crediticio",
      desc: "Implementamos algoritmos predictivos que evalúan el riesgo financiero de clientes a partir de datos estructurados e históricos.",
    },
    {
      title: "Agentes de Cobranza Autónomos",
      desc: "Desplegamos agentes de voz y texto con lenguaje natural inteligente que gestionan pagos pendientes integrados con tu CRM.",
    },
    {
      title: "Procesamiento de Documentos",
      desc: "Extracción automática de datos estructurados de extractos bancarios, facturas y registros legales usando LLMs de alta precisión.",
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
      company: formData.get("company") || "Fintech Lead",
      needs: "IA para el Sector Financiero y Fintech",
      message: formData.get("message"),
      source: "Industrias - Fintech"
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
    <div className="min-h-screen bg-[#fafafc] text-[#111113] relative font-sans">
      {/* Light Mode Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      {/* Floating Light Glass Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center font-display font-bold text-xl text-white shadow-sm">
              DM
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-gray-900">
              digital<span className="text-purple-600">mads</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 transition-colors">Inicio</a>
            
            {/* Services Dropdown */}
            <div className="relative group/dropdown">
              <button className="flex items-center gap-1 hover:text-gray-900 transition-colors py-2 focus:outline-none">
                Servicios
                <svg className="w-4 h-4 transition-transform group-hover/dropdown:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white border border-gray-200 p-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 shadow-lg z-50">
                <a href="/servicios/auditoria-ia" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  Auditorías de IA
                </a>
                <a href="/servicios/consultoria-ia" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  Consultoría Estratégica
                </a>
              </div>
            </div>

            <a href="/bogota" className="hover:text-gray-900 transition-colors text-purple-600 font-semibold">IA en Bogotá</a>
            <a href="/#proceso" className="hover:text-gray-900 transition-colors">Proceso</a>
            <a href="/#casos" className="hover:text-gray-900 transition-colors">Casos de Éxito</a>
            <a href="#contacto" className="hover:text-gray-900 transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Agendar Asesoría
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
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
          <div className="md:hidden bg-white border-b border-gray-200 py-4 px-6 absolute top-20 left-0 right-0 flex flex-col gap-4 shadow-lg">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-gray-900 text-lg">Inicio</a>
            <div className="pl-4 border-l border-gray-200 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Servicios</span>
              <a href="/servicios/auditoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-600 hover:text-gray-900 text-base">Auditorías de IA</a>
              <a href="/servicios/consultoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-600 hover:text-gray-900 text-base">Consultoría Estratégica</a>
            </div>
            <a href="/bogota" onClick={() => setMobileMenuOpen(false)} className="py-2 text-purple-600 hover:text-purple-700 text-lg font-semibold">IA en Bogotá</a>
            <a href="/#proceso" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-gray-900 text-lg">Proceso</a>
            <a href="/#casos" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-gray-900 text-lg">Casos de Éxito</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-gray-900 text-lg">Contacto</a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-xl bg-purple-600 text-center text-white font-medium text-base shadow-sm"
            >
              Agendar Asesoría
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
            Fintech & Banca Vertical
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-gray-900">
            Inteligencia Artificial para el Sector <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Financiero y Fintech</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Soluciones de IA robustas diseñadas bajo estrictos esquemas de privacidad de datos, destinadas a optimizar la cobranza, el procesamiento de documentos corporativos y la evaluación de riesgos.
          </p>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 space-y-12 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Gobernanza y Rendimiento para Fintech</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">
              La optimización del sector financiero exige precisión y un estricto cumplimiento normativo (Habeas Data). Conectamos modelos de lenguaje en infraestructuras dedicadas, asegurando que tus datos no se compartan con modelos públicos y reduciendo los costes operativos de procesamiento hasta en un 62%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-3">
                <h3 className="text-lg font-display font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Solicita Asesoría Fintech</h3>
              <p className="text-gray-600 text-sm">
                Diseña hoy la hoja de ruta tecnológica segura y estructurada de IA para tu corporación financiera.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <h4 className="text-lg font-bold text-emerald-800">¡Petición enviada con éxito!</h4>
                <p className="text-emerald-700 text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
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
                    <label className="text-xs uppercase tracking-wider text-gray-600 font-semibold" htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-gray-900 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-600 font-semibold" htmlFor="email">Correo Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-gray-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-600 font-semibold" htmlFor="message">Cuéntanos sobre tus necesidades de integración</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe brevemente tus requerimientos o retos operativos..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-gray-900 resize-none transition-colors"
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

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-500 text-sm mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center font-display font-bold text-xs text-white">
                DM
              </div>
              <span className="font-display font-bold text-gray-900 tracking-tight text-base">
                digitalmads
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              Transformamos empresas mediante arquitectura avanzada de Inteligencia Artificial en toda Colombia.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-gray-700 tracking-wider">Servicios</span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/servicios/auditoria-ia" className="hover:text-gray-900 transition-colors">Auditorías de IA</a></li>
              <li><a href="/servicios/consultoria-ia" className="hover:text-gray-900 transition-colors">Consultoría Estratégica</a></li>
              <li><a href="/servicios/desarrollo-llm" className="hover:text-gray-900 transition-colors">Desarrollo LLM</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-gray-700 tracking-wider">Integraciones</span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/integraciones/crm" className="hover:text-gray-900 transition-colors">Integración CRM</a></li>
              <li><a href="/integraciones/whatsapp" className="hover:text-gray-900 transition-colors">Agentes de WhatsApp</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-gray-700 tracking-wider">Ubicaciones</span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/bogota" className="hover:text-gray-900 transition-colors">IA en Bogotá</a></li>
              <li><a href="/" className="hover:text-gray-900 transition-colors">Colombia (Nacional)</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <div>
            © {new Date().getFullYear()} DigitalMads. Todos los derechos reservados.
          </div>
          <div className="flex gap-4">
            <a href="/#proceso" className="hover:text-gray-900 transition-colors">Proceso</a>
            <a href="/#casos" className="hover:text-gray-900 transition-colors">Casos de Éxito</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
