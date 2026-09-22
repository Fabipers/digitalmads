"use client";

import { useState } from "react";

type ServiceChoice = "whatsapp" | "rag" | "workflows" | "auditoria" | null;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceChoice>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const serviceResponses: Record<NonNullable<ServiceChoice>, { title: string; reply: string }> = {
    whatsapp: {
      title: "Agente de IA para WhatsApp",
      reply: "¡Excelente elección! 💬 Diseñamos agentes de IA que se conectan a WhatsApp Business API y a tu CRM (HubSpot, Salesforce, Siigo). Atienden preguntas técnicas, califican leads 24/7 y transfieren a asesores humanos cuando es necesario.\n\nPara enviarte una cotización personalizada y alcance técnico, por favor déjanos tus datos:"
    },
    rag: {
      title: "Base de Conocimiento Privada (RAG)",
      reply: "¡Gran opción! 🧠 Conectamos modelos de IA a los manuales, contratos, PDFs y bases de datos de tu empresa con control de accesos RBAC y cero alucinaciones. Tus datos nunca se usan para reentrenar modelos públicos.\n\nPara enviarte la propuesta formal y cotización a medida, compártenos tus datos:"
    },
    workflows: {
      title: "Automatización de Workflows (AI Ops)",
      reply: "¡La mejor forma de ahorrar tiempo! ⚡ Integramos Make, n8n, Zapier y LLMs para procesar facturas, actualizar registros de CRM y eliminar más de 20 horas semanales de trabajo manual repetitivo.\n\nPara preparar tu cotización estimada, déjanos tus datos a continuación:"
    },
    auditoria: {
      title: "Auditoría de IA Express (48h)",
      reply: "¡El paso ideal para empezar! 📋 Evaluamos tu infraestructura actual en 48 horas, mapeamos los cuellos de botella y te entregamos un plan técnico de arquitectura con ROI estimado antes de invertir a ciegas.\n\nCompleta tus datos para coordinar el inicio de la auditoría:"
    }
  };

  const handleSelectService = (key: NonNullable<ServiceChoice>) => {
    setSelectedService(key);
  };

  const handleReset = () => {
    setSelectedService(null);
    setFormSubmitted(false);
    setIsError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const details = formData.get("details") as string;

    const chosenServiceTitle = selectedService ? serviceResponses[selectedService].title : "Consulta General";

    const messageContent = `[LEAD CAPTURADO DESDE EL WIDGET DE CHAT EN VIVO]
Servicio Consultado: ${chosenServiceTitle}
Empresa: ${company || "No especificada"}
Detalles del requerimiento: ${details || "Solicita cotización personalizada"}
Canal: Live Assistant Widget`;

    const data = {
      name,
      email,
      phone,
      company,
      needs: chosenServiceTitle,
      message: messageContent,
      source: "Live Chat Widget (Agente Virtual)"
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormSubmitted(true);
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
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip bubble (visible when closed) */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white text-[#0F172A] border border-gray-200 px-4 py-2 rounded-full shadow-lg text-xs font-semibold hover:border-purple-300 hover:shadow-xl transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>¿Preguntas sobre IA? Habla con nuestro asistente 💬</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir asistente virtual"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 relative focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[580px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-base shadow-inner">
                DM
              </div>
              <div>
                <h3 className="font-display font-bold text-sm leading-tight">Agente DigitalMads</h3>
                <p className="text-[11px] text-white/80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  En línea · Responde al instante
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {selectedService && (
                <button
                  onClick={handleReset}
                  title="Reiniciar conversación"
                  className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors text-xs"
                >
                  ↻ Reiniciar
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors"
                aria-label="Cerrar chat"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Conversation Body */}
          <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs md:text-sm text-[#0F172A] bg-gray-50/50">
            {/* Bot Initial Message */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-purple-100 border border-purple-200 flex-shrink-0 flex items-center justify-center font-bold text-xs text-purple-700">
                DM
              </div>
              <div className="bg-white border border-gray-200 p-3.5 rounded-2xl rounded-tl-none shadow-sm space-y-2 max-w-[85%] text-left">
                <p className="leading-relaxed">
                  ¡Hola! 👋 Soy el asistente virtual de <strong>DigitalMads</strong>.
                </p>
                <p className="leading-relaxed text-[#475569]">
                  Ayudamos a empresas en Colombia y USA a implementar agentes de IA y automatizar operaciones repetitivas.
                </p>
                <p className="font-semibold text-purple-700">
                  ¿Sobre qué solución te gustaría recibir información y una cotización personalizada?
                </p>
              </div>
            </div>

            {/* Quick Prompts Options */}
            {!selectedService && (
              <div className="space-y-2 pl-9">
                <button
                  onClick={() => handleSelectService("whatsapp")}
                  className="w-full text-left p-3 bg-white border border-purple-200 hover:border-purple-500 hover:bg-purple-50 rounded-xl transition-all shadow-sm font-medium text-xs text-[#0F172A] flex items-center justify-between group"
                >
                  <span>💬 Agente de IA para WhatsApp</span>
                  <span className="text-purple-600 group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
                <button
                  onClick={() => handleSelectService("rag")}
                  className="w-full text-left p-3 bg-white border border-purple-200 hover:border-purple-500 hover:bg-purple-50 rounded-xl transition-all shadow-sm font-medium text-xs text-[#0F172A] flex items-center justify-between group"
                >
                  <span>🧠 Base de Conocimiento Privada (RAG)</span>
                  <span className="text-purple-600 group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
                <button
                  onClick={() => handleSelectService("workflows")}
                  className="w-full text-left p-3 bg-white border border-purple-200 hover:border-purple-500 hover:bg-purple-50 rounded-xl transition-all shadow-sm font-medium text-xs text-[#0F172A] flex items-center justify-between group"
                >
                  <span>⚡ Automatización de Workflows (Make/n8n)</span>
                  <span className="text-purple-600 group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
                <button
                  onClick={() => handleSelectService("auditoria")}
                  className="w-full text-left p-3 bg-white border border-purple-200 hover:border-purple-500 hover:bg-purple-50 rounded-xl transition-all shadow-sm font-medium text-xs text-[#0F172A] flex items-center justify-between group"
                >
                  <span>📋 Diagnóstico / Auditoría de IA (48h)</span>
                  <span className="text-purple-600 group-hover:translate-x-0.5 transition-transform">→</span>
                </button>
              </div>
            )}

            {/* User Selected Choice */}
            {selectedService && (
              <>
                <div className="flex justify-end">
                  <div className="bg-purple-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs font-medium max-w-[80%] text-right">
                    {serviceResponses[selectedService].title}
                  </div>
                </div>

                {/* Bot Response to Selected Choice */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-purple-100 border border-purple-200 flex-shrink-0 flex items-center justify-center font-bold text-xs text-purple-700">
                    DM
                  </div>
                  <div className="bg-white border border-gray-200 p-3.5 rounded-2xl rounded-tl-none shadow-sm space-y-2 max-w-[88%] text-left">
                    <p className="leading-relaxed whitespace-pre-line text-[#334155]">
                      {serviceResponses[selectedService].reply}
                    </p>
                  </div>
                </div>

                {/* Form or Confirmation */}
                {formSubmitted ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 ml-9">
                    <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto font-bold text-sm">
                      ✓
                    </div>
                    <h4 className="font-bold text-emerald-800 text-xs md:text-sm">¡Solicitud enviada con éxito!</h4>
                    <p className="text-[11px] text-emerald-700 leading-relaxed">
                      Un arquitecto de soluciones de DigitalMads revisará tus requerimientos y te enviará la cotización a tu correo en menos de 24 horas hábiles.
                    </p>
                    <button
                      onClick={handleReset}
                      className="text-xs text-purple-600 font-semibold hover:underline pt-2 inline-block"
                    >
                      Consultar otro servicio
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-4 rounded-2xl space-y-3 ml-9 shadow-sm">
                    {isError && (
                      <p className="text-[11px] text-red-600 font-medium">Error al enviar. Intenta de nuevo.</p>
                    )}

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#64748B] mb-0.5">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#64748B] mb-0.5">Correo Corporativo</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="tu@empresa.com"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#64748B] mb-0.5">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+57 300... o +1 555..."
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#64748B] mb-0.5">Empresa</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-[#64748B] mb-0.5">Detalles breves (Opcional)</label>
                      <textarea
                        name="details"
                        rows={2}
                        placeholder="¿Qué proceso o volumen de atención buscas automatizar?"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-sm transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? "Enviando solicitud..." : "Recibir Cotización Personalizada"}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
