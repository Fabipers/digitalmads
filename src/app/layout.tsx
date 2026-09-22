import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import JsonLd from "../components/JsonLd";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalmads.net"),
  title: {
    default: "DigitalMads | Agentes de IA & Automatización de Procesos",
    template: "%s | DigitalMads",
  },
  description: "Desarrollamos e implementamos agentes de IA autónomos, sistemas RAG corporativos y flujos de automatización operativa para empresas en Colombia y Estados Unidos.",
  keywords: [
    "agentes de ia",
    "automatizacion con ia",
    "agente ia whatsapp colombia",
    "consultoria inteligencia artificial bogota",
    "rag empresarial",
    "ai workflow automation",
    "nearshore ai agency",
    "digitalmads"
  ],
  authors: [{ name: "DigitalMads" }],
  creator: "DigitalMads",
  publisher: "DigitalMads",
  alternates: {
    canonical: "https://digitalmads.net",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://digitalmads.net",
    title: "DigitalMads | Agentes de IA & Automatización de Procesos",
    description: "Desarrollo e implementación de agentes de IA autónomos y automatización operativa para empresas en Colombia y USA.",
    siteName: "DigitalMads",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalMads | Agentes de IA & Automatización",
    description: "Soluciones de Inteligencia Artificial práctica y automatización para empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <JsonLd />
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body className="antialiased">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
