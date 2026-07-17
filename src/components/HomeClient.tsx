"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HomeClient() {
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
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "workflows",
      title: "Automatización de Flujos (Workflows)",
      description: "Integramos tus herramientas diarias (CRMs, ERPs, Notion, Slack) usando Make/Zapier e IA para optimizar procesos repetitivos.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "consulting",
      title: "Consultoría de Estrategia IA",
      description: "Evaluamos el potencial de la Inteligencia Artificial en tu modelo de negocio y diseñamos un plan de transformación digital a medida.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      desc: "Monitorizamos los agentes de IA optimizando sus prompts y modelos conforme evoluciona tu volumen de negocio.",
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
      phone: formData.get("phone"),
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
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      {/* Light Mode Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      {/* Hero Section (Asymmetric 2-Column layout) */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 text-left relative z-10">
          {/* Column Left (60% Width) */}
          <div className="w-full lg:w-[60%] space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
              Consultoría de IA en Colombia
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-display font-extrabold tracking-tight leading-none text-[#0F172A]">
              Impulsamos tu negocio con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                Inteligencia Artificial Estratégica
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-light">
              Creamos agentes autónomos, optimizamos tus bases de datos con RAG vectoriales e integramos tus herramientas mediante automatizaciones avanzadas de flujos de trabajo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contacto"
                className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-center font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Agendar Auditoría Gratuita
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 rounded-xl bg-[#F8F9FA] hover:bg-gray-100 text-[#0F172A] text-center font-semibold border border-gray-200 shadow-sm transition-all duration-300"
              >
                Explorar Servicios
              </a>
            </div>
          </div>

          {/* Column Right (40% Width) - Tech system status card */}
          <div className="w-full lg:w-[40%] bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] font-mono text-xs text-[#475569] space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <span className="text-[#94A3B8] font-semibold text-[10px]">digitalmads-sys-status</span>
            </div>
            <div className="space-y-2">
              <p className="text-purple-600 font-bold">➜ Active Agents: 14</p>
              <p className="text-cyan-600 font-bold">➜ Optimization Rate: +42%</p>
              <p className="text-[#0F172A]">➜ Compliance: Ley 1581 (OK)</p>
              <p className="text-emerald-600 font-bold">➜ API Response Latency: 1.8s</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Nuestras Capacidades</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Soluciones de IA Corporativa</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-300"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 bg-purple-50 border border-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                  {service.badge}
                </span>
              )}
              <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] flex items-center justify-center mb-6 border border-gray-100">
                {service.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-display font-bold text-[#0F172A] mb-3">
                {service.title}
              </h4>
              <p className="text-[#475569] leading-relaxed text-sm md:text-base font-light mb-6">
                {service.description}
              </p>
              {service.id === "agents" && (
                <a href="/servicios/auditoria-ia" className="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Ver Auditorías de IA <span>→</span>
                </a>
              )}
              {service.id === "rag" && (
                <a href="/servicios/desarrollo-llm" className="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Ver Desarrollo LLM <span>→</span>
                </a>
              )}
              {service.id === "workflows" && (
                <a href="/integraciones/crm" className="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Ver Integración CRM <span>→</span>
                </a>
              )}
              {service.id === "consulting" && (
                <a href="/servicios/consultoria-ia" className="text-purple-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                  Ver Consultoría Estratégica <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="casos" className="py-24 border-t border-gray-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-cyan-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Casos de Estudio</h2>
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
          <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
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

      {/* Process Section (Structured grid with top-right index) */}
      <section id="proceso" className="py-24 max-w-7xl mx-auto px-6 border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Metodología de Trabajo</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Nuestra Ruta de Integración</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-shadow text-left">
              <span className="absolute top-6 right-8 text-2xl font-display font-extrabold text-[#E2E8F0] tracking-tight">
                {step.step}
              </span>
              <h4 className="text-lg md:text-xl font-display font-bold text-[#0F172A] mb-3 pr-8">
                {step.title}
              </h4>
              <p className="text-[#475569] text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 border-t border-gray-200/60 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-cyan-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Dudas Comunes</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Preguntas Frecuentes</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F8F9FA] rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-[#0F172A] hover:text-cyan-600 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openFaq === idx ? "transform rotate-180 text-cyan-600" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-[#475569] text-sm md:text-base leading-relaxed border-t border-gray-200/60 pt-4 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section (Split Form Layout) */}
      <section id="contacto" className="py-24 relative overflow-hidden border-t border-gray-200/60 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          {/* Column Left: persuasive content & checklist */}
          <div className="space-y-6">
            <h2 className="text-purple-600 text-xs md:text-sm font-semibold tracking-widest uppercase">Diagnóstico y ROI</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A]">Solicita tu Auditoría Técnica</h3>
            <p className="text-[#475569] text-base font-light leading-relaxed">
              Trabaja en conjunto con nuestros consultores expertos para identificar ineficiencias críticas y diseñar una solución viable a tu medida en menos de 24 horas.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Diagnóstico de infraestructura 100% gratuito.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Evaluación de viabilidad y ROI estimado.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#475569]">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Propuesta técnica de integraciones APIs.</span>
              </li>
            </ul>
          </div>

          {/* Column Right: Compact, styled form card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <svg className="w-12 h-12 text-emerald-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-lg font-bold text-emerald-800">¡Petición enviada con éxito!</h4>
                <p className="text-[#475569] text-sm">Nos pondremos en contacto contigo de inmediato (en menos de 24h) para agendar tu llamada técnica.</p>
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
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="name">Nombre Completo</label>
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
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="email">Correo Corporativo</label>
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
                    <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="phone">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Ej. +57 300 123 4567"
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
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
                      className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="needs">Especialidad de Interés</label>
                  <select
                    id="needs"
                    name="needs"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] transition-colors"
                  >
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option value="agents">Agentes de IA Autónomos</option>
                    <option value="rag">Sistemas RAG / Base de Conocimiento</option>
                    <option value="workflows">Automatización de Workflows</option>
                    <option value="strategy">Consultoría Estratégica Completa</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#475569] font-semibold" htmlFor="message">Cuéntanos sobre tu proyecto</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe brevemente tus necesidades..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors resize-none"
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
