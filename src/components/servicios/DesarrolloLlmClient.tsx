"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function DesarrolloLlmClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const comparisonRows = [
    {
      feature: "Privacidad y Soberanía de Datos",
      publicLlm: "Tus datos pueden ser utilizados para reentrenar modelos comerciales públicos.",
      digitalmadsRag: "Cero retención (Zero Data Retention) y despliegue en nube privada o local."
    },
    {
      feature: "Control de Accesos (RBAC)",
      publicLlm: "Inexistente. Cualquier usuario con acceso ve toda la información cargada.",
      digitalmadsRag: "Estricto control por roles: Recursos Humanos, Finanzas y Ventas solo ven lo autorizado."
    },
    {
      feature: "Precisión y Citas",
      publicLlm: "Alta probabilidad de alucinaciones e invención de datos no corroborados.",
      digitalmadsRag: "Cero alucinaciones: cada respuesta incluye enlaces directos y citas al PDF o documento original."
    },
    {
      feature: "Actualización de Información",
      publicLlm: "Requiere reentrenar modelos (costoso y lento).",
      digitalmadsRag: "Instantánea: basta con subir o actualizar el archivo en tu Drive/Notion/S3."
    }
  ];

  const features = [
    {
      title: "Arquitectura RAG con Bases Vectoriales",
      desc: "Conectamos Pinecone, Qdrant o pgvector a la documentación interna de tu empresa para respuestas en milisegundos con citas exactas.",
      icon: "⚡"
    },
    {
      title: "Control de Accesos Basado en Roles (RBAC)",
      desc: "Tus colaboradores solo acceden a la información que les corresponde según su departamento, garantizando máxima confidencialidad.",
      icon: "🔒"
    },
    {
      title: "Despliegue On-Premise y Nube Privada",
      desc: "Alojamos modelos abiertos como Llama 3 o Mistral en tu propia infraestructura (AWS, GCP, Azure, Coolify) sin intermediarios.",
      icon: "☁️"
    },
    {
      title: "Fine-Tuning de Especialidad",
      desc: "Entrenamos y afinamos pesos de modelos con tu jerga interna, contratos o casos históricos para automatizar razonamientos complejos.",
      icon: "🧠"
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
      company: formData.get("company") || "RAG & LLM Lead",
      needs: "Private Enterprise Brain (RAG As-a-Service)",
      message: formData.get("message"),
      source: "Servicios - Desarrollo LLM & RAG"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
            Private Enterprise Brain · RAG As-a-Service
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-none">
            Convierte los Documentos de tu Empresa en un <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Asistente Inteligente Privado
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Conectamos LLMs de última generación a tus manuales, políticas, contratos y bases de datos con control estricto de privacidad, cero alucinaciones y citas a fuentes reales.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Solicitar Demostración Privada
            </a>
            <a
              href="#comparativa"
              className="px-8 py-4 rounded-xl bg-[#F8F9FA] hover:bg-gray-100 text-[#0F172A] font-semibold border border-gray-200 shadow-sm transition-all duration-300"
            >
              Ver Comparativa de Seguridad
            </a>
          </div>
        </div>
      </section>

      {/* Security Comparison Table */}
      <section id="comparativa" className="py-20 bg-[#F8F9FA] border-y border-gray-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-purple-600">Seguridad & Cumplimiento</span>
            <h2 className="text-3xl font-display font-bold text-[#0F172A]">
              Chatbots Públicos vs. RAG Corporativo DigitalMads
            </h2>
            <p className="text-sm text-[#475569] max-w-xl mx-auto">
              Por qué las empresas que manejan información sensible eligen arquitecturas privadas.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/80 text-xs uppercase tracking-wider text-[#64748B]">
                    <th className="p-4 md:p-6">Aspecto Clave</th>
                    <th className="p-4 md:p-6 text-rose-600">Herramientas Públicas de Terceros</th>
                    <th className="p-4 md:p-6 bg-purple-50/50 text-purple-900 font-bold">RAG Privado DigitalMads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs md:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-purple-50/10">
                      <td className="p-4 md:p-6 font-semibold text-[#0F172A]">{row.feature}</td>
                      <td className="p-4 md:p-6 text-[#64748B] leading-relaxed">{row.publicLlm}</td>
                      <td className="p-4 md:p-6 bg-purple-50/30 text-purple-900 font-medium leading-relaxed">
                        ✓ {row.digitalmadsRag}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-600">Capacidades Técnicas</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">
            Ingeniería de Inteligencia Artificial para Producción
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="text-3xl mb-2">{feat.icon}</div>
              <h3 className="text-xl font-bold font-display text-[#0F172A]">{feat.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-[#F8F9FA] border-t border-gray-200/80">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-purple-600">Prueba de Concepto en 14 Días</span>
              <h2 className="text-3xl font-display font-bold text-[#0F172A]">
                Conecta tu Conocimiento Corporativo
              </h2>
              <p className="text-sm text-[#475569]">
                Cuéntanos qué documentos o sistemas deseas consultar y te prepararemos una demostración de viabilidad técnica sin costo.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <h3 className="text-lg font-bold text-emerald-800">¡Solicitud recibida con éxito!</h3>
                <p className="text-sm text-emerald-700">
                  Un arquitecto de soluciones RAG revisará tu caso y se comunicará en menos de 24 horas hábiles.
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
                  <label className="block text-xs font-semibold text-[#475569] mb-1">¿Qué tipo de información deseas conectar con IA?</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Ejemplo: Tenemos manuales de operación en PDF y políticas internas que nuestros colaboradores necesitan consultar rápidamente sin perder tiempo..."
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
                  {isSubmitting ? "Enviando..." : "Solicitar Demostración RAG"}
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
