import AutomatizacionWorkflowsClient from "@/components/servicios/AutomatizacionWorkflowsClient";

export const metadata = {
  title: "Automatización de Flujos de Trabajo con IA (Make, n8n, CRMs) | DigitalMads",
  description: "Elimina tareas manuales repetitivas. Diseñamos e integramos automatizaciones avanzadas de procesos con Inteligencia Artificial para empresas en Colombia y USA.",
  alternates: { canonical: "https://digitalmads.net/servicios/automatizacion-workflows" },
};

export default function Page() {
  return <AutomatizacionWorkflowsClient />;
}
