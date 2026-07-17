import DesarrolloLlmClient from "@/components/servicios/DesarrolloLlmClient";

export const metadata = {
  title: "Desarrollo y Fine-Tuning de Modelos de Lenguaje (LLM) | DigitalMads",
  description: "Entrenamos y adaptamos modelos de código abierto (Llama 3) y cerrados para procesar la información privada de tu corporativo.",
  alternates: { canonical: "https://digitalmads.net/servicios/desarrollo-llm" }
};

export default function Page() {
  return <DesarrolloLlmClient />;
}
