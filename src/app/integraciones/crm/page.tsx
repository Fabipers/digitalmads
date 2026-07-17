import CrmClient from "@/components/integraciones/CrmClient";

export const metadata = {
  title: "Integración de IA en CRMs (HubSpot, Salesforce) | DigitalMads",
  description: "Conectamos agentes autónomos y modelos de lenguaje con tu CRM de ventas para calificar leads y automatizar el pipeline en tiempo real.",
  alternates: { canonical: "https://digitalmads.net/integraciones/crm" }
};

export default function Page() {
  return <CrmClient />;
}
