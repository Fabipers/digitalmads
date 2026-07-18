"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function CotizadorClient() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    projectType: "",
    infrastructure: "",
    urgency: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const selectOption = (field: "projectType" | "infrastructure" | "urgency", value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
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

    const messageContent = `Tipo de Proyecto elegido: ${answers.projectType}

Infraestructura del cliente: ${answers.infrastructure}

Urgencia: ${answers.urgency}`;

    const data = {
      name,
      email,
      phone,
      company,
      needs: answers.projectType,
      message: messageContent,
      source: "Cotizador Interactivo"
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

  const progressPercentage = ((step - 1) / 3) * 100;

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      {/* Light Mode Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      <main className="pt-28 pb-24 max-w-3xl mx-auto px-6 text-left">
        {/* Progress Bar Container */}
        <div className="space-y-4 mb-12">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
            <span>Paso {step} de 4</span>
            <span>{Math.round(progressPercentage)}% Completado</span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full w-full overflow-hidden">
            <div
              className="h-full bg-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Step 1: Tipo de Proyecto */}
        {step === 1 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-purple-600">Simulador Técnico</span>
              <h2 className="text-3xl font-display font-extrabold text-[#0F172A]">
                ¿Qué tipo de solución requiere tu empresa?
              </h2>
              <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed">
                Selecciona la vertical principal del desarrollo de Inteligencia Artificial.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {[
                "Auditoría de Procesos",
                "Consultoría Estratégica",
                "Desarrollo LLM",
                "Agentes para WhatsApp",
                "Integración CRM"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption("projectType", option)}
                  className="w-full text-left p-5 bg-[#F8F9FA] border border-gray-200 hover:border-purple-500 hover:bg-white rounded-2xl transition-all duration-300 font-medium text-[#0F172A] hover:shadow-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Infraestructura */}
        {step === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-3">
              <button
                onClick={handleBack}
                className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 uppercase tracking-wider"
              >
                <span>←</span> Atrás
              </button>
              <h2 className="text-3xl font-display font-extrabold text-[#0F172A]">
                ¿Cuál es el estado de tu infraestructura actual?
              </h2>
              <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed">
                Esto nos ayuda a dimensionar los requisitos de conectividad y capas de datos.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {[
                { title: "ERP Monolítico Local / Servidor Físico", desc: "Sistemas legados locales con acceso restringido." },
                { title: "Base de Datos SQL / NoSQL en la Nube", desc: "Infraestructura moderna en AWS, Google Cloud o Azure con APIs operativas." },
                { title: "PDFs, Hojas de Cálculo y Documentación sin Estructurar", desc: "Información institucional distribuida sin bases de datos unificadas." },
                { title: "Sin Infraestructura - Desarrollo Desde Cero", desc: "Emprendimientos o nuevas líneas de negocio listas para diseñar desde cero." }
              ].map((option) => (
                <button
                  key={option.title}
                  onClick={() => selectOption("infrastructure", option.title)}
                  className="w-full text-left p-5 bg-[#F8F9FA] border border-gray-200 hover:border-purple-500 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-sm space-y-1"
                >
                  <div className="font-semibold text-[#0F172A]">{option.title}</div>
                  <div className="text-xs text-[#475569] font-light leading-relaxed">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Urgencia */}
        {step === 3 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-3">
              <button
                onClick={handleBack}
                className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 uppercase tracking-wider"
              >
                <span>←</span> Atrás
              </button>
              <h2 className="text-3xl font-display font-extrabold text-[#0F172A]">
                ¿Cuál es la urgencia de implementación?
              </h2>
              <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed">
                Selecciona la escala de tiempo óptima para iniciar el diseño preliminar.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {[
                "Inmediata (Menos de 1 mes)",
                "Mediano Plazo (1 a 3 meses)",
                "Planificación (Más de 3 meses)"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption("urgency", option)}
                  className="w-full text-left p-5 bg-[#F8F9FA] border border-gray-200 hover:border-purple-500 hover:bg-white rounded-2xl transition-all duration-300 font-medium text-[#0F172A] hover:shadow-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Formulario Final */}
        {step === 4 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-3">
              <button
                onClick={handleBack}
                disabled={formSubmitted || isSubmitting}
                className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>←</span> Atrás
              </button>
              <h2 className="text-3xl font-display font-extrabold text-[#0F172A]">
                Recibe tu Diagnóstico Técnico de IA
              </h2>
              <p className="text-sm md:text-base text-[#475569] font-light leading-relaxed">
                Ingresa tus datos corporativos de contacto para procesar la cotización estimativa y agendar la llamada con un ingeniero de sistemas.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4">
                <svg className="w-16 h-16 text-emerald-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-xl font-bold text-emerald-800">¡Diagnóstico enviado con éxito!</h4>
                <p className="text-[#475569] text-sm md:text-base leading-relaxed font-light">
                  Hemos mapeado tus necesidades y requerimientos de infraestructura. Un ingeniero evaluador se comunicará a tu correo en menos de 24 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 shadow-sm">
                {isError && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-center text-rose-800 text-xs font-medium">
                    Hubo un problema al enviar la cotización. Por favor, inténtalo nuevamente.
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="name">Nombre Completo</label>
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
                  <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="email">Correo Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="juan@empresa.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="phone">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Ej. +57 350 261 7242"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#0F172A] font-bold" htmlFor="company">Empresa / Organización</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Ej. CoreCorp S.A.S."
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-purple-500 rounded-xl focus:outline-none text-[#0F172A] placeholder-gray-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Procesando Cotización..." : "Enviar Diagnóstico Técnico"}
                </button>
              </form>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
