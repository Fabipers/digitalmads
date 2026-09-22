"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

type ServiceId = "whatsapp" | "rag" | "workflows" | "auditoria";
type ScaleId = "startup" | "growth" | "enterprise";
type Currency = "USD" | "COP";

export default function CotizadorClient() {
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState<Currency>("COP");
  const [serviceId, setServiceId] = useState<ServiceId>("whatsapp");
  const [scaleId, setScaleId] = useState<ScaleId>("growth");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const servicesData = {
    whatsapp: {
      name: "Agente de IA para WhatsApp & Soporte 24/7",
      desc: "Atención al cliente autónoma, calificación de prospectos y cobranza integrada a WhatsApp Business API y CRM.",
      delivery: "7 a 10 días laborables",
      roi: "Reducción de hasta 65% en costos operativos de soporte",
      deliverables: [
        "Conexión oficial a WhatsApp Business Cloud API",
        "Entrenamiento contextual con catálogo, políticas y FAQs",
        "Integración bidireccional con tu CRM (HubSpot, Siigo, Salesforce)",
        "Escalamiento automático a asesores humanos",
        "Panel de métricas y transcripción de conversaciones en tiempo real"
      ],
      pricing: {
        startup: { usd: "$1,200 – $1,800 USD", cop: "$4.800.000 – $7.200.000 COP" },
        growth: { usd: "$1,800 – $3,200 USD", cop: "$7.200.000 – $12.800.000 COP" },
        enterprise: { usd: "$3,200 – $5,500+ USD", cop: "$12.800.000 – $22.000.000+ COP" },
      }
    },
    rag: {
      name: "Private Enterprise Brain (RAG As-a-Service)",
      desc: "Asistente inteligente sobre bases de datos, manuales, PDFs y tickets internos con búsqueda semántica sin alucinaciones.",
      delivery: "10 a 14 días laborables",
      roi: "Ahorro de 5 a 10 horas semanales por trabajador operativo",
      deliverables: [
        "Pipeline vectorial seguro (Pinecone / pgvector / Qdrant)",
        "Búsqueda semántica con citas directas a la documentación fuente",
        "Control de accesos basado en roles (RBAC) y privacidad de datos",
        "Contrato con política Zero Data Retention (sin entrenamiento público)",
        "Integración web corporativa o bot interno para Slack/Teams"
      ],
      pricing: {
        startup: { usd: "$1,500 – $2,500 USD", cop: "$6.000.000 – $10.000.000 COP" },
        growth: { usd: "$2,500 – $4,200 USD", cop: "$10.000.000 – $16.800.000 COP" },
        enterprise: { usd: "$4,200 – $7,000+ USD", cop: "$16.800.000 – $28.000.000+ COP" },
      }
    },
    workflows: {
      name: "AI Ops & Automatización de Workflows",
      desc: "Integración de herramientas (CRMs, ERPs, Notion, Make, n8n) con IA para extraer facturas y eliminar tareas manuales.",
      delivery: "7 a 14 días laborables",
      roi: "Elimina más de 20 horas de trabajo manual repetitivo por semana",
      deliverables: [
        "Mapeo de flujos repetitivos y eliminación de cuellos de botella",
        "Extracción inteligente de datos de facturas y contratos escaneados",
        "Sincronización automatizada entre correos, WhatsApp y bases de datos",
        "Sistema de reintentos automáticos y alertas operativas",
        "Capacitación práctica y documentación técnica de mantenimiento"
      ],
      pricing: {
        startup: { usd: "$900 – $1,600 USD", cop: "$3.600.000 – $6.400.000 COP" },
        growth: { usd: "$1,600 – $2,900 USD", cop: "$6.400.000 – $11.600.000 COP" },
        enterprise: { usd: "$2,900 – $5,000+ USD", cop: "$11.600.000 – $20.000.000+ COP" },
      }
    },
    auditoria: {
      name: "Auditoría Express de Madurez & Viabilidad IA (48h)",
      desc: "Diagnóstico técnico intensivo para identificar procesos candidatos a IA, calcular ROI y evitar inversiones a ciegas.",
      delivery: "48 horas hábiles",
      roi: "Hoja de ruta con ROI garantizado antes de gastar en desarrollo",
      deliverables: [
        "Mapeo exhaustivo de la infraestructura y datos actuales de la empresa",
        "Matriz de viabilidad técnica y estimación financiera de retorno",
        "Comparativa de costos de consumo de APIs vs. costos de personal",
        "Diseño de arquitectura recomendado y selección de modelos óptimos",
        "Sesión ejecutiva de 60 minutos con entrega del informe final"
      ],
      pricing: {
        startup: { usd: "$450 – $750 USD", cop: "$1.800.000 – $3.000.000 COP" },
        growth: { usd: "$750 – $1,400 USD", cop: "$3.000.000 – $5.600.000 COP" },
        enterprise: { usd: "$1,400 – $2,200 USD", cop: "$5.600.000 – $8.800.000 COP" },
      }
    }
  };

  const scaleOptions = [
    {
      id: "startup" as ScaleId,
      title: "Startup / Pequeña Empresa",
      desc: "Hasta 1,500 interacciones al mes, equipo de 1 a 10 personas, herramientas estándar (Gmail, Google Drive, WhatsApp).",
    },
    {
      id: "growth" as ScaleId,
      title: "Empresa en Crecimiento (Recomendado)",
      desc: "1,500 a 15,000 interacciones al mes, equipo de 10 a 50 personas, uso de CRM (HubSpot, Salesforce, Siigo, Alegra).",
    },
    {
      id: "enterprise" as ScaleId,
      title: "Corporativo / Alto Volumen",
      desc: "Más de 15,000 interacciones al mes, sistemas legados, múltiples sucursales y requisitos avanzados de cumplimiento/seguridad.",
    },
  ];

  const currentService = servicesData[serviceId];
  const currentPricing = currency === "COP" ? currentService.pricing[scaleId].cop : currentService.pricing[scaleId].usd;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;

    const messageContent = `[COTIZADOR INTERACTIVO]
Servicio Seleccionado: ${currentService.name}
Escala: ${scaleId}
Moneda: ${currency}
Estimado Calculado: ${currentPricing}
Tiempo de Entrega: ${currentService.delivery}
ROI Proyectado: ${currentService.roi}
Notas adicionales: ${formData.get("notes") || "Ninguna"}`;

    const data = {
      name,
      email,
      phone,
      company,
      needs: currentService.name,
      message: messageContent,
      source: "Cotizador Interactivo Dinámico"
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

  const progressPercentage = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      <main className="pt-24 pb-24 max-w-4xl mx-auto px-6 text-left">
        {/* Header Title & Currency Switch */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-purple-600">Simulador de Inversión en Tiempo Real</span>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A]">
              Cotiza tu Proyecto de IA
            </h1>
          </div>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-xl border border-gray-200 self-start sm:self-auto">
            <button
              onClick={() => setCurrency("COP")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "COP" ? "bg-white text-purple-700 shadow-sm" : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              🇨🇴 COP ($)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "USD" ? "bg-white text-purple-700 shadow-sm" : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              🇺🇸 USD ($)
            </button>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-3 mb-10">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
            <span>Paso {step} de 4</span>
            <span>{Math.round(progressPercentage)}% Completado</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Solución Productizada */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A]">
                1. ¿Qué solución de IA deseas implementar?
              </h2>
              <p className="text-sm text-[#475569]">
                Selecciona el servicio específico que resolverá el cuello de botella de tu empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(servicesData) as ServiceId[]).map((key) => {
                const s = servicesData[key];
                const isSelected = serviceId === key;
                return (
                  <button
                    key={key}
                    onClick={() => setServiceId(key)}
                    className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 ${
                      isSelected
                        ? "border-purple-600 bg-purple-50/50 shadow-md ring-2 ring-purple-600/20"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0F172A] text-lg font-display">{s.name}</span>
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-purple-600 bg-purple-600 text-white" : "border-gray-300"
                        }`}>
                          {isSelected && <span className="text-xs">✓</span>}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">{s.desc}</p>
                    </div>
                    <div className="text-xs font-semibold text-purple-700 bg-purple-100/60 px-2.5 py-1 rounded-md self-start">
                      ⚡ Entrega: {s.delivery}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNext}
                className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
              >
                Siguiente: Escala del Negocio →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Escala y Volumen */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <button
                onClick={handleBack}
                className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 uppercase tracking-wider mb-2"
              >
                <span>←</span> Volver al paso 1
              </button>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A]">
                2. ¿Cuál es el tamaño y volumen operativo de tu empresa?
              </h2>
              <p className="text-sm text-[#475569]">
                Esto nos ayuda a calibrar la infraestructura de datos y la capacidad de concurrencia.
              </p>
            </div>

            <div className="space-y-3">
              {scaleOptions.map((opt) => {
                const isSelected = scaleId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setScaleId(opt.id)}
                    className={`w-full p-5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "border-purple-600 bg-purple-50/50 shadow-md ring-2 ring-purple-600/20"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-[#0F172A] text-base">{opt.title}</div>
                      <div className="text-xs text-[#475569]">{opt.desc}</div>
                    </div>
                    <span className={`w-5 h-5 rounded-full border flex-shrink-0 ml-4 flex items-center justify-center ${
                      isSelected ? "border-purple-600 bg-purple-600 text-white" : "border-gray-300"
                    }`}>
                      {isSelected && <span className="text-xs">✓</span>}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={handleBack}
                className="px-6 py-3 border border-gray-200 hover:bg-gray-50 text-[#475569] font-medium text-sm rounded-xl transition-all"
              >
                Atrás
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
              >
                Siguiente: Ver Estimación de Inversión →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 & 4: Pantalla de Cálculo en Vivo y Formulario */}
        {(step === 3 || step === 4) && (
          <div className="space-y-8">
            <div className="space-y-2">
              <button
                onClick={handleBack}
                className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 uppercase tracking-wider mb-2"
              >
                <span>←</span> Cambiar parámetros
              </button>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0F172A]">
                3. Estimación de tu Proyecto en Tiempo Real
              </h2>
              <p className="text-sm text-[#475569]">
                Basado en tu selección de <strong>{currentService.name}</strong> para escala <strong>{scaleId}</strong>.
              </p>
            </div>

            {/* Price & Specs Card */}
            <div className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 border border-purple-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-100 pb-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#64748B]">Inversión Estimada del Proyecto</span>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-purple-700 mt-1">
                    {currentPricing}
                  </div>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#64748B]">Tiempo de Entrega</span>
                  <div className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] mt-1">
                    ⏱️ {currentService.delivery}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-[#64748B]">Entregables Incluidos en el Sprint:</span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-[#475569]">
                  {currentService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-white/80 border border-purple-100 rounded-xl text-xs font-semibold text-purple-900 flex items-center gap-2">
                <span>🎯</span>
                <span>Impacto proyectado: {currentService.roi}</span>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-[#0F172A]">
                  Congela este Presupuesto y Agenda tu Diagnóstico Técnico
                </h3>
                <p className="text-xs md:text-sm text-[#475569]">
                  Sin compromiso de compra. Un arquitecto de IA revisará tu caso y agendará una sesión de 20 minutos para validar la factibilidad técnica de tus sistemas.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-emerald-800">¡Estimación reservada con éxito!</h4>
                  <p className="text-sm text-emerald-700">
                    Te hemos enviado un correo de confirmación. Un ingeniero se comunicará en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {isError && (
                    <p className="text-xs text-red-600">Hubo un error al procesar tu solicitud. Por favor intenta de nuevo.</p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Correo Corporativo</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="tu@empresa.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+57 300 123 4567 o +1 555..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#475569] mb-1">Nombre de la Empresa</label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Empresa SAS / LLC"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#475569] mb-1">Detalles del Proyecto o Sistemas Actuales (Opcional)</label>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="Ejemplo: Queremos conectar el agente con Siigo y tenemos 5,000 clientes al mes..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Procesando..." : "Congelar Presupuesto y Agendar Diagnóstico"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
