import SaludClient from "@/components/industrias/SaludClient";

export const metadata = {
  title: "Inteligencia Artificial en Salud y Gestión Médica | DigitalMads",
  description: "Soluciones de IA para optimizar la gestión de clínicas, agendamiento inteligente de citas y asistentes para transcripción médica.",
  alternates: { canonical: "https://digitalmads.net/industrias/salud" }
};

export default function Page() {
  return <SaludClient />;
}
