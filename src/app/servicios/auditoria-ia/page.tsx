import AuditoriaClient from "@/components/AuditoriaClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auditoría de IA y Machine Learning para Empresas | DigitalMads",
  description: "Auditoría de soluciones y proyectos de Inteligencia Artificial para empresas. Evaluamos viabilidad técnica, arquitectura de datos, ROI y seguridad en 48 horas.",
  keywords: [
    "auditoria de soluciones de ia para empresas",
    "auditoria de soluciones de inteligencia artificial para empresas",
    "auditoria de inteligencia artificial para empresas",
    "auditoria en machine learning para empresas",
    "auditoria de proyectos de inteligencia artificial para empresas",
    "auditoria de proyectos de ia para empresas",
    "auditoria de ia personalizada",
    "auditoria de algoritmos para empresas",
    "consultoria ia bogota colombia"
  ],
  alternates: { canonical: "https://digitalmads.net/servicios/auditoria-ia" },
  openGraph: {
    title: "Auditoría de Soluciones de Inteligencia Artificial para Empresas | DigitalMads",
    description: "Evaluación técnica de viabilidad, arquitectura de datos y cálculo de ROI para implementaciones de IA en empresas.",
    url: "https://digitalmads.net/servicios/auditoria-ia",
    type: "website"
  }
};

export default function Page() {
  return <AuditoriaClient />;
}
