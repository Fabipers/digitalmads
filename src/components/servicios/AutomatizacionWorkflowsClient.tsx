"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function AutomatizacionWorkflowsClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);

  const monthlyHoursSaved = teamSize * hoursPerWeek * 4;
  const estimatedAnnualSavings = monthlyHoursSaved * 12 * 25; // Asumiendo $25 USD / hora promedio de costo operativo

  const features = [
    {
      title: "Extracción y Procesamiento Inteligente de Documentos",
      desc: "Procesamiento automático de facturas, órdenes de compra y contratos escaneados usando modelos de visión y NLP sin errores de digitación.",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Sincronización Bidireccional de CRMs y ERPs",
      desc: "Conectamos tu ecosistema de software (HubSpot, Salesforce, Siigo, Alegra, Notion) con agentes que actualizan datos en tiempo real.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Orquestación Avanzada con Make & n8n",
      desc: "Diseñamos arquitecturas robustas y escalables con reintentos automáticos, alertas en Slack/Teams y registro de auditoría de cada ejecución.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Triaje y Enrutamiento Inteligente de Solicitudes",
      desc: "Los correos entrantes, tickets y mensajes se analizan por sentimiento y urgencia para asignarse automáticamente al área responsable.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
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
      phone: formData.get("phone"),
      company: formData.get("company") || "Automatización Workflows Lead",
      needs: "Automatización de Flujos de Trabajo (Workflows con IA)",
      message: formData.get("message"),
      source: "Servicios - Automatización Workflows"
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
            AI Operations & Workflow Automation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#0F172A] max-w-4xl mx-auto">
            Elimina las Tareas Repetitivas con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Automatización de Flujos & IA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Conectamos tus sistemas existentes (CRMs, ERPs, correo y hojas de cálculo) con agentes inteligentes usando Make, n8n y modelos LLM. Libera a tu equipo para lo que de verdad importa.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#calculadora"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Calcular Ahorro Estimado
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 rounded-xl bg-[#F8F9FA] hover:bg-gray-100 text-[#0F172A] font-semibold border border-gray-200 shadow-sm transition-all duration-300"
            >
              Solicitar Sprint de Automatización
            </a>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculadora" className="py-16 bg-[#F8F9FA] border-y border-gray-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-purple-600">Simulador de Eficiencia</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A]">
                ¿Cuánto tiempo y dinero pierde tu equipo en tareas manuales?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-[#475569]">Personas en el equipo operativo:</span>
                    <span className="text-purple-600 font-bold text-base">{teamSize} colaboradores</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-[#475569]">Horas semanales dedicadas a tareas manuales:</span>
                    <span className="text-purple-600 font-bold text-base">{hoursPerWeek} hrs / persona</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                <p className="text-xs text-[#94A3B8]">
                  * Cálculo estimado basado en un costo operativo estándar de $25 USD / hora y automatización promedio del 75% del volumen de tareas repetitivas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 border border-purple-100 rounded-2xl p-6 text-center space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#64748B] font-semibold">Horas liberadas al mes</span>
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-purple-600 mt-1">
                    ~{monthlyHoursSaved} hrs
                  </div>
                </div>

                <div className="pt-2 border-t border-purple-100">
                  <span className="text-xs uppercase tracking-wider text-[#64748B] font-semibold">Ahorro operativo anual estimado</span>
                  <div className="text-3xl md:text-4xl font-display font-extrabold text-[#0F172A] mt-1">
                    ${estimatedAnnualSavings.toLocaleString("en-US")} USD
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="block w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-sm transition-all duration-200"
                >
                  Automatizar estos procesos ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-600">Casos de Uso Comprobados</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">
            Flujos de Trabajo que Transformamos en Días
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-[#0F172A]">{feat.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#F8F9FA] border-t border-gray-200/80">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-purple-600">Sprint de 14 Días</span>
              <h2 className="text-3xl font-display font-bold text-[#0F172A]">
                ¿Listo para automatizar tu primer flujo?
              </h2>
              <p className="text-sm text-[#475569]">
                Cuéntanos qué herramienta o proceso repetitivo quieres optimizar y te enviaremos una propuesta técnica en menos de 24 horas.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <h3 className="text-lg font-bold text-emerald-800">¡Mensaje recibido con éxito!</h3>
                <p className="text-sm text-emerald-700">
                  Un arquitecto de automatización revisará tu caso y te contactará en menos de 24 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1">Correo Corporativo</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+57 300 123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1">Empresa</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1">¿Qué proceso te gustaría automatizar?</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Ejemplo: Manejamos 200 facturas a la semana en PDF y queremos que se carguen solas a Siigo / HubSpot..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {isError && (
                  <p className="text-xs text-red-600">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Propuesta de Automatización"}
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
