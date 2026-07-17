"use client";

import { useState, useEffect } from "react";

export default function AuditoriaClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState("Escaneando...");

  // Mock scanner logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setScanStatus("Análisis de Viabilidad Técnico Completo");
          return 100;
        }
        if (prev === 30) setScanStatus("Comprobando fuga de datos...");
        if (prev === 60) setScanStatus("Evaluando latencia de APIs corporativas...");
        if (prev === 85) setScanStatus("Generando reporte de ROI estimado...");
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const auditSteps = [
    {
      phase: "Fase 1",
      title: "Mapeo de Flujos y Procesos",
      desc: "Localizamos cuellos de botella operativos y tareas rutinarias que pueden delegarse a agentes autónomos de lenguaje natural.",
    },
    {
      phase: "Fase 2",
      title: "Análisis de Fuga de Datos (Data Leakage)",
      desc: "Evaluamos el cumplimiento de privacidad de tus datos corporativos sensibles para evitar fugas en modelos LLM públicos.",
    },
    {
      phase: "Fase 3",
      title: "Cálculo de ROI y Arquitectura",
      desc: "Diseñamos la topología ideal de base de vectores (RAG), coste estimado de consultas por token y ahorro proyectado.",
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
                <a href="/servicios/auditoria-ia" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors border-b border-white/5">
                  Auditorías de IA
                </a>
                <a href="/servicios/consultoria-ia" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
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
          <div className="md:hidden glass border-t border-white/5 py-4 px-6 absolute top-20 left-0 right-0 flex flex-col gap-4 animate-fade-in">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Inicio</a>
            <div className="pl-4 border-l border-white/10 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Servicios</span>
              <a href="/servicios/auditoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-300 hover:text-white text-base font-semibold">Auditorías de IA</a>
              <a href="/servicios/consultoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-300 hover:text-white text-base">Consultoría Estratégica</a>
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
              Solicitar Auditoría
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs md:text-sm font-semibold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              Diagnóstico y Ciberseguridad Avanzada
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 glow-purple">
              Auditorías de Inteligencia Artificial
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Escaneamos y diagnosticamos tus flujos de trabajo corporativos para identificar fugas de información, vulnerabilidades éticas y oportunidades técnicas de automatización rentable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                Solicitar Auditoría Corporativa
              </a>
              <a
                href="#fases"
                className="px-8 py-4 rounded-xl glass hover:bg-white/5 border-white/10 text-white font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                Ver Fases Técnicas
              </a>
            </div>
          </div>

          {/* Technical Scanner Graphic Block */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-[-10%] rounded-full bg-purple-500/10 blur-[80px] -z-10 pointer-events-none" />
            
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-6 font-mono text-xs md:text-sm text-purple-300 space-y-4">
              <div className="flex justify-between items-center text-gray-500 pb-2 border-b border-white/5">
                <span>VULNERABILITY SCANNER v1.02</span>
                <span className="text-cyan-400 animate-pulse">● ACTIVE SCAN</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Progreso de Análisis:</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full transition-all duration-150" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="space-y-1 text-gray-400 text-[10px] md:text-xs">
                <div>[INFO] Target: Corporate-DB-Node-02</div>
                <div>[STATUS] {scanStatus}</div>
                {progress > 20 && <div className="text-emerald-400">✓ [OK] Model API key Encryption: Checked</div>}
                {progress > 50 && <div className="text-emerald-400">✓ [OK] Corporate RAG document pipeline: Secured</div>}
                {progress > 80 && <div className="text-yellow-400">! [WARN] Detected 2 unoptimized background workflows (Make/Zapier)</div>}
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-300">Latencia de Modelo Estimada:</span>
                <span className="text-cyan-400 font-bold">120ms (Optimal)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Phases Content Blocks */}
      <section id="fases" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-400 text-xs md:text-sm font-semibold tracking-widest uppercase">Diagnóstico Estructurado</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">Fases de la Auditoría Técnica de IA</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Nuestro equipo de ingenieros de datos y seguridad evalúa detalladamente la infraestructura existente bajo un proceso transparente y riguroso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {auditSteps.map((step, idx) => (
            <div key={idx} className="glass-card backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-4 relative group">
              <div className="absolute top-4 right-6 text-5xl font-display font-extrabold text-white/5 group-hover:text-purple-500/10 transition-colors">
                {step.phase}
              </div>
              <h4 className="text-xl font-display font-bold text-white pt-4">
                {step.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass-card rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold">Agenda tu Auditoría de IA</h3>
              <p className="text-gray-400 text-sm">
                Completa el formulario corporativo y te enviaremos una propuesta de diagnóstico técnico en 24 horas.
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
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="message">Descripción de tu infraestructura y software legado</label>
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
