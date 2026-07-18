import { Metadata } from 'next';
import CotizadorClient from '@/components/CotizadorClient';

export const metadata: Metadata = {
  title: 'Simulador de Cotización de Inteligencia Artificial | DigitalMads',
  description: 'Calcula el alcance, complejidad y viabilidad técnica de tu proyecto de IA en 4 pasos con nuestro estimador interactivo para empresas.',
  alternates: { canonical: 'https://digitalmads.net/cotizador' }
};

export default function CotizadorPage() {
  return <CotizadorClient />;
}
