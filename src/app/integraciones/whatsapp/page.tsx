import WhatsappClient from "@/components/integraciones/WhatsappClient";

export const metadata = {
  title: "Agentes de Inteligencia Artificial para WhatsApp Business | DigitalMads",
  description: "Desarrollamos asistentes conversacionales avanzados con LLMs integrados directamente en WhatsApp para ventas autónomas 24/7.",
  alternates: { canonical: "https://digitalmads.net/integraciones/whatsapp" }
};

export default function Page() {
  return <WhatsappClient />;
}
