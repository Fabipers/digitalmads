import { Metadata } from 'next';
import ContactoClient from '@/components/ContactoClient';

export const metadata: Metadata = {
  title: 'Contacto y Cotizaciones de Ingeniería de IA | DigitalMads',
  description: 'Ponte en contacto con nuestro equipo de ingenieros para cotizar auditorías de procesos, desarrollo de agentes autónomos y consultoría estratégica en Colombia.',
  alternates: { canonical: 'https://digitalmads.net/contacto' }
};

export default function ContactoPage() {
  return <ContactoClient />;
}
