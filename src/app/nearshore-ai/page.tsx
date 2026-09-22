import NearshoreClient from "@/components/NearshoreClient";

export const metadata = {
  title: "Nearshore AI Development & Autonomous Agents for US Startups | DigitalMads",
  description: "Hire dedicated Nearshore AI engineers and build custom AI agent workflows at 60% lower cost. Real-time timezone alignment (EST/COT), bilingual senior talent, and 14-day delivery sprints.",
  alternates: { canonical: "https://digitalmads.net/nearshore-ai" },
  openGraph: {
    title: "Nearshore AI Development & Autonomous Agents | DigitalMads",
    description: "Scale your US startup with dedicated Nearshore AI engineers from Colombia. EST timezone, bilingual senior talent, 60% cost advantage.",
    url: "https://digitalmads.net/nearshore-ai",
    siteName: "DigitalMads",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <NearshoreClient />;
}
