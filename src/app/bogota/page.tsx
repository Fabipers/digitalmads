import BogotaClient from "@/components/BogotaClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia de Inteligencia Artificial en Bogotá | DigitalMads",
  description: "Agencia especializada en desarrollo de agentes de IA, automatización de procesos y consultoría en Bogotá, Colombia. Aumenta la eficiencia y reduce costos.",
  keywords: [
    "agencia de inteligencia artificial bogota",
    "agencia de inteligencia artificial colombia",
    "agencia de transformacion digital bogota",
    "consultoria ia bogota",
    "desarrollo agentes ia bogota",
    "agencia ia colombia"
  ],
  alternates: { canonical: "https://digitalmads.net/bogota" },
  openGraph: {
    title: "Agencia de Inteligencia Artificial en Bogotá | DigitalMads",
    description: "Desarrollo de agentes autónomos, RAG y automatización de procesos para empresas en Bogotá y Colombia.",
    url: "https://digitalmads.net/bogota",
    type: "website"
  }
};

export default function Page() {
  return <BogotaClient />;
}
