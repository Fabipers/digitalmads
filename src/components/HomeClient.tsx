"use client";

import { useState } from "react";

export default function HomeClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activeTab, setActiveTab] = useState("fintech");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      id: "agents",
      title: "Agentes de IA Autónomos",
      description: "Desplegamos agentes que automatizan el soporte técnico, ventas y flujos internos complejos, operando 24/7 sin intervención humana.",
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      badge: "Más Demandado",
    },
    {
      id: "rag",
      title: "Sistemas RAG y Base de Conocimientos",
      description: "Conectamos LLMs de última generación a la base de datos y documentos de tu empresa para consultas instantáneas y precisas.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "workflows",
      title: "Automatización de Flujos (Workflows)",
      description: "Integramos tus herramientas diarias (CRMs, ERPs, Notion, Slack) usando Make/Zapier e IA para optimizar procesos repetitivos.",
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "consulting",
      title: "Consultoría de Estrategia IA",
      description: "Evaluamos el potencial de la Inteligencia Artificial en tu modelo de negocio y diseñamos un plan de transformación digital a medida.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const caseStudies = {
    fintech: {
      title: "Fintech CoreCorp: Agente de Cobranza Autónomo",
      results: [
        { label: "Reducción de Costes", value: "62%" },
        { label: "Satisfacción Cliente", value: "94%" },
        { label: "Tiempo de Respuesta", value: "< 2s" },
      ],
      description: "Desarrollamos un agente de voz y texto inteligente integrado con el CRM interno para realizar gestiones personalizadas con clientes de forma automatizada y con lenguaje natural.",
      technologies: ["OpenAI API", "LangChain", "Next.js", "Python"],
    },
    logistics: {
      title: "LogisAI: Optimización de Rutas y Soporte",
      results: [
        { label: "Ahorro Combustible", value: "18%" },
        { label: "Automatización Consultas", value: "85%" },
        { label: "Eficiencia de Flota", value: "+22%" },
      ],
      description: "Sistema inteligente de asignación de cargas y un bot especializado que asiste a los transportistas en tiempo real con respecto a las rutas y contingencias meteorológicas.",
      technologies: ["Custom LLM", "RAG vector database", "FastAPI", "PostgreSQL"],
    },
    ecommerce: {
      title: "VestiShop: Agente Experto de Venta Asistida",
      results: [
        { label: "Conversión de Leads", value: "+35%" },
        { label: "Ticket Promedio", value: "+15%" },
        { label: "Resolución de Dudas", value: "98%" },
      ],
      description: "Implementación de un recomendador de estilo y tallas con IA generativa que simula un personal shopper directo en el chat web de la tienda de ropa.",
      technologies: ["Anthropic Claude", "Pinecone", "Tailwind CSS", "Next.js"],
    },
  };

  const processSteps = [
    {
      step: "01",
      title: "Auditoría Técnica",
      desc: "Analizamos tu flujo operativo actual para identificar tareas repetitivas y cuellos de botella optimizables con IA.",
    },
    {
      step: "02",
      title: "Prototipado Rápido",
      desc: "Desarrollamos una versión beta funcional en 2 semanas para validar el impacto real en tus métricas corporativas.",
    },
    {
      step: "03",
      title: "Despliegue y Ajuste",
      desc: "Conectamos la IA con tus sistemas internos asegurando máxima confidencialidad, privacidad y cumplimiento legal.",
    },
    {
      step: "04",
      title: "Escalabilidad Continua",
      desc: "Monitorizamos los agentes de IA optimizando sus prompts and modelos conforme evoluciona tu volumen de negocio.",
    },
  ];

  const faqs = [
    {
      question: "¿Qué tipo de empresas pueden beneficiarse de vuestra consultoría de IA?",
      answer: "Trabajamos principalmente con empresas medianas y grandes del sector de servicios, fintech, logística y e-commerce que manejan volúmenes significativos de soporte al cliente, procesamiento de documentos, o flujos de trabajo repetitivos en la nube.",
    },
    {
      question: "¿Cómo garantizan la seguridad de los datos sensibles de nuestra empresa?",
      answer: "La privacidad es nuestra máxima prioridad. Implementamos modelos en entornos dedicados que no utilizan tus datos para entrenamiento público (cumplimiento GDPR). Los datos empresariales están cifrados y los accesos están estrictamente limitados.",
    },
    {
      question: "¿Cuánto tiempo toma ver los primeros resultados?",
      answer: "Generalmente entregamos prototipos funcionales y medibles (MVPs) en un plazo de 2 a 3 semanas. La integración completa de sistemas empresariales suele durar entre 6 y 10 semanas dependiendo de la complejidad.",
    },
    {
      question: "¿Se requiere un equipo de desarrollo propio para trabajar con vosotros?",
      answer: "No es necesario. Nosotros nos encargamos de todo el proceso de arquitectura, desarrollo, integraciones de APIs y mantenimiento. Si tienes un equipo de TI, trabajamos en coordinación con ellos mediante APIs limpias y documentación detallada.",
    },
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
      company: formData.get("company"),
      needs: formData.get("needs"),
      message: formData.get("message"),
      source: "Colombia Landing"
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
    <div className="min-h-screen bg-[#030305] text-white relative font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] radial-glow-purple -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] radial-glow-cyan -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[60%] h-[50%] radial-glow-purple -z-10 pointer-events-none" />
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
                <a href="/servicios/consultoria-ia" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  Consultoría Estratégica
                </a>
              </div>
            </div>

            <a href="/bogota" className="hover:text-white transition-colors text-cyan-400 font-semibold">IA en Bogotá</a>
            <a href="/#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="/#casos" className="hover:text-white transition-colors">Casos de Éxito</a>
            <a href="/#faqs" className="hover:text-white transition-colors">Preguntas</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm hover:from-purple-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(139,92,246,0.2)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Agendar Asesoría
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
              <a href="/servicios/consultoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-gray-300 hover:text-white text-base">Consultoría Estratégica</a>
            </div>
            <a href="/bogota" onClick={() => setMobileMenuOpen(false)} className="py-2 text-cyan-400 hover:text-white text-lg font-semibold">IA en Bogotá</a>
            <a href="/#proceso" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Proceso</a>
            <a href="/#casos" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Casos de Éxito</a>
            <a href="/#faqs" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Preguntas</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-300 hover:text-white text-lg">Contacto</a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white font-medium text-base shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
            >
              Agendar Asesoría
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-24 md:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs md:text-sm font-semibold tracking-wider text-purple-300 uppercase shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Líderes en Consultoría de IA
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-white">
              Agencia de Inteligencia Artificial en Colombia | DigitalMads
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Diseñamos e integramos agentes autónomos de IA y flujos automatizados de lenguaje natural que optimizan operaciones, reducen costes y aumentan la conversión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                Hablar con un Experto
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 rounded-xl glass hover:bg-white/5 border-white/10 text-white font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                Nuestros Servicios
              </a>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            {/* Ambient background decoration */}
            <div className="absolute inset-[-10%] rounded-full bg-purple-500/10 blur-[80px] -z-10 pointer-events-none animate-pulse duration-5000" />
            <div className="absolute inset-[-10%] rounded-full bg-cyan-500/10 blur-[80px] -z-10 pointer-events-none animate-pulse duration-7000 delay-1000" />
            
            {/* Premium mock-up terminal */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-black/60 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs text-gray-500 font-mono">digitalmads-ai-agent.log</div>
                <div className="w-6" />
              </div>
              <div className="p-6 font-mono text-xs md:text-sm text-gray-300 space-y-4 overflow-x-auto min-h-[300px]">
                <div className="flex gap-2">
                  <span className="text-purple-400">➜</span>
                  <span className="text-gray-500">[15:53:02]</span>
                  <span className="text-green-400 font-semibold">Initializing core AI pipeline...</span>
                </div>
                <div className="flex gap-2 pl-4 text-cyan-400">
                  <span>✔</span>
                  <span>Successfully connected to vector database (Pinecone).</span>
                </div>
                <div className="flex gap-2 pl-4 text-cyan-400">
                  <span>✔</span>
                  <span>Loaded custom corporate LLM model (Llama-3-70B-Instruct).</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400">➜</span>
                  <span className="text-gray-500">[15:53:03]</span>
                  <span>Agent ready: <span className="text-amber-400">&apos;Soporte Técnico&apos;</span></span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 mt-4 space-y-2">
                  <div className="flex gap-2 text-white">
                    <span className="text-purple-400 font-bold">Cliente:</span>
                    <span>¿Cómo puedo integrar la IA en mi CRM de Ventas?</span>
                  </div>
                  <div className="flex gap-2 text-cyan-300">
                    <span className="font-bold">Agente:</span>
                    <span>Analizando arquitectura... La integración se realizará a través de un webhook de Node.js, almacenando el historial del cliente en Pinecone para contexto RAG. ¿Deseas generar el código de conexión?</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 text-gray-500 animate-pulse">
                  <span>█</span>
                  <span>Esperando nuevas peticiones de flujo...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">+95%</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Ahorro de Tiempo</div>
          </div>
          <div className="space-y-2 border-l border-white/5">
            <div className="text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">3.5x</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Retorno de Inversión</div>
          </div>
          <div className="space-y-2 border-l border-white/5">
            <div className="text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">20+</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Agentes en Producción</div>
          </div>
          <div className="space-y-2 border-l border-white/5">
            <div className="text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300">24/7</div>
            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Monitoreo Autónomo</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-400 text-xs md:text-sm font-semibold tracking-widest uppercase">Nuestra Especialidad</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">Soluciones de IA a la Medida de tu Empresa</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            No vendemos soluciones genéricas. Desarrollamos la infraestructura de IA y automatización exacta que necesitas para dominar tu sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              {service.badge && (
                <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs px-2.5 py-1 rounded-full font-medium">
                  {service.badge}
                </div>
              )}
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {service.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="casos" className="py-24 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase">Casos de Éxito</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Resultados Reales de Agentes Desplegados</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Descubre cómo hemos ayudado a empresas líderes a automatizar flujos complejos y optimizar sus ingresos mediante IA corporativa.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.keys(caseStudies).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-purple-600/10 border-purple-500 text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                    : "border-white/5 hover:border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {key === "fintech" ? "Fintech" : key === "logistics" ? "Logística" : "E-commerce"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h4 className="text-2xl md:text-3xl font-display font-bold text-white">
                {caseStudies[activeTab as keyof typeof caseStudies].title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-base">
                {caseStudies[activeTab as keyof typeof caseStudies].description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {caseStudies[activeTab as keyof typeof caseStudies].technologies.map((tech, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/5 text-gray-300 text-xs px-3 py-1.5 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 min-w-[280px]">
              {caseStudies[activeTab as keyof typeof caseStudies].results.map((res, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-xl text-center lg:text-left">
                  <div className="text-3xl font-display font-extrabold text-cyan-400">{res.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{res.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-400 text-xs md:text-sm font-semibold tracking-widest uppercase">Metodología</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">Nuestro Proceso Hacia el Éxito</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Garantizamos una integración sin fricciones mediante fases bien definidas y acompañamiento técnico constante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 relative group">
              <div className="text-5xl font-display font-extrabold text-white/5 mb-4 group-hover:text-purple-500/10 transition-colors">
                {step.step}
              </div>
              <h4 className="text-lg md:text-xl font-display font-bold mb-2 text-white">
                {step.title}
              </h4>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 border-t border-white/5 bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase">Dudas Comunes</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Preguntas Frecuentes</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass rounded-xl border border-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-white hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openFaq === idx ? "transform rotate-180 text-cyan-400" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="glass-card rounded-3xl border border-white/10 p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold">¿Listo para llevar la IA a tu negocio?</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                Completa el formulario y uno de nuestros consultores de arquitectura de IA se pondrá en contacto contigo en menos de 24 horas.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center space-y-2 animate-fade-in">
                <svg className="w-12 h-12 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-bold text-emerald-300">¡Petición enviada con éxito!</h4>
                <p className="text-gray-400 text-sm">Nos pondremos en contacto contigo de inmediato (en menos de 24h) para agendar tu llamada técnica.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {isError && (
                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center text-rose-300 text-xs font-medium animate-fade-in">
                    Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="email">Correo Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Ej. CoreCorp"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="needs">Especialidad de Interés</label>
                    <select
                      id="needs"
                      name="needs"
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white transition-colors"
                    >
                      <option value="" disabled selected>Selecciona una opción</option>
                      <option value="agents">Agentes de IA Autónomos</option>
                      <option value="rag">Sistemas RAG / Base de Conocimiento</option>
                      <option value="workflows">Automatización de Workflows</option>
                      <option value="strategy">Consultoría Estratégica Completa</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold" htmlFor="message">Cuéntanos sobre tu proyecto</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe brevemente tus necesidades o los cuellos de botella actuales de tu empresa..."
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 focus:border-purple-500 rounded-xl focus:outline-none text-white placeholder-gray-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Petición de Consultoría"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-gray-500 text-sm mb-8">
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
              <li><a href="/servicios/desarrollo-llm" className="hover:text-white transition-colors">Desarrollo LLM</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Integraciones</span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/integraciones/crm" className="hover:text-white transition-colors">Integración CRM</a></li>
              <li><a href="/integraciones/whatsapp" className="hover:text-white transition-colors">Agentes de WhatsApp</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Industrias</span>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/industrias/ecommerce" className="hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="/industrias/fintech" className="hover:text-white transition-colors">Fintech</a></li>
              <li><a href="/industrias/salud" className="hover:text-white transition-colors">Salud</a></li>
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
