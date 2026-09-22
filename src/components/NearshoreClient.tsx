"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function NearshoreClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const highlights = [
    {
      title: "Real-Time Timezone (EST / COT)",
      desc: "Zero communication lag. Our senior engineers work side-by-side with your team in Slack, Teams, and daily standups across US Eastern and Central time zones.",
      icon: (
        <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "60% Engineering Cost Advantage",
      desc: "Top 3% Colombian tech talent at $45–$80/hr compared to $150–$250/hr charged by US agencies. Extend your runway without sacrificing code quality.",
      icon: (
        <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Senior Bilingual Engineers",
      desc: "Full professional English proficiency (C1/B2) with experience delivering production architectures for high-growth tech startups and SMBs.",
      icon: (
        <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      title: "2-Week Production Sprints",
      desc: "No vague multi-month retainers. We deliver working MVPs, agents, and pipelines in closed 14-day sprints with measurable business ROI.",
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const nearshoreServices = [
    {
      title: "Autonomous Customer Support & Sales Agents",
      desc: "Deploy intelligent agents across Zendesk, Intercom, WhatsApp, or web chat that resolve tier-1 and tier-2 tickets autonomously with function calling to your CRM/ERP.",
      badge: "7-10 Day Delivery",
      results: "70%+ autonomous resolution · <1.5s latency",
    },
    {
      title: "Private Enterprise Brains (RAG As-a-Service)",
      desc: "Connect LLMs to your company's proprietary knowledge (Google Drive, Notion, Jira, internal PDFs) with role-based access control and Zero Data Retention contracts.",
      badge: "Enterprise Security",
      results: "Zero hallucinations · 100% data sovereignty",
    },
    {
      title: "End-to-End AI Ops & Workflow Automation",
      desc: "Automate complex manual workflows using Make, n8n, Zapier, and custom Python microservices. Eliminate manual copy-pasting, invoice data extraction, and CRM updates.",
      badge: "High ROI",
      results: "20+ hours saved weekly per operational team",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setFormSubmitted(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone") || "US Lead",
      needs: formData.get("needs") || "Nearshore AI Development",
      message: formData.get("message"),
      source: "US Nearshore Landing Page"
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        e.currentTarget.reset();
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs md:text-sm font-semibold tracking-wider text-purple-700 uppercase shadow-sm">
            🇺🇸 US & LATAM Nearshore AI Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-display font-extrabold tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-none">
            Scale Faster with Dedicated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              Nearshore AI Engineers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed">
            We build, integrate, and deploy production-grade AI agents, private enterprise RAG pipelines, and automated workflows for US startups and SMBs. Aligned in your timezone (EST/COT) at 60% lower cost.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#contact-us"
              className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book a 20-Min Discovery Call
            </a>
            <a
              href="#comparison"
              className="px-8 py-4 rounded-xl bg-[#F8F9FA] hover:bg-gray-100 text-[#0F172A] font-semibold border border-gray-200 shadow-sm transition-all duration-300"
            >
              View Cost Comparison
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center border-t border-gray-100">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold font-display text-[#0F172A]">EST / COT</div>
              <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mt-1">Same Timezone</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold font-display text-purple-600">60%</div>
              <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mt-1">Cost Advantage</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold font-display text-cyan-600">14 Days</div>
              <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mt-1">Sprint Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold font-display text-[#0F172A]">100% IP</div>
              <div className="text-xs uppercase tracking-wider text-[#64748B] font-semibold mt-1">Ownership to You</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 bg-[#F8F9FA] border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-purple-600">The Nearshore Advantage</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">
              Why US Companies Choose Colombia over Offshore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#0F172A]">{item.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-600">Core Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A]">
            Productized AI Solutions for US Startups & SMBs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nearshoreServices.map((service, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold">
                  {service.badge}
                </span>
                <h3 className="text-xl font-bold font-display text-[#0F172A]">{service.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{service.desc}</p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs font-semibold text-purple-800">
                ⚡ {service.results}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section id="comparison" className="py-20 bg-[#F8F9FA] border-y border-gray-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-purple-600">Transparent Economics</span>
            <h2 className="text-3xl font-display font-bold text-[#0F172A]">
              Cost Breakdown: US vs. DigitalMads Nearshore
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70 text-xs uppercase tracking-wider text-[#64748B]">
                    <th className="p-4 md:p-6">Metric</th>
                    <th className="p-4 md:p-6">US In-House Senior</th>
                    <th className="p-4 md:p-6">US Boutique Agency</th>
                    <th className="p-4 md:p-6 bg-purple-50/50 text-purple-900 font-bold">DigitalMads Nearshore</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-[#0F172A]">Effective Hourly Rate</td>
                    <td className="p-4 md:p-6 text-[#475569]">$120 – $180 / hr</td>
                    <td className="p-4 md:p-6 text-[#475569]">$200 – $350 / hr</td>
                    <td className="p-4 md:p-6 bg-purple-50/30 text-purple-700 font-bold">$45 – $80 / hr</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-[#0F172A]">2-Week Sprint Cost</td>
                    <td className="p-4 md:p-6 text-[#475569]">$12,000 – $18,000</td>
                    <td className="p-4 md:p-6 text-[#475569]">$25,000 – $40,000</td>
                    <td className="p-4 md:p-6 bg-purple-50/30 text-purple-700 font-bold">$4,500 – $8,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-[#0F172A]">Timezone Latency</td>
                    <td className="p-4 md:p-6 text-[#475569]">0 hours</td>
                    <td className="p-4 md:p-6 text-[#475569]">0 hours</td>
                    <td className="p-4 md:p-6 bg-purple-50/30 text-purple-700 font-bold">0 hours (EST / COT)</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-[#0F172A]">Recruitment & Ramp-Up</td>
                    <td className="p-4 md:p-6 text-[#475569]">6 – 10 weeks</td>
                    <td className="p-4 md:p-6 text-[#475569]">2 – 4 weeks</td>
                    <td className="p-4 md:p-6 bg-purple-50/30 text-purple-700 font-bold">&lt; 48 hours</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-[#0F172A]">Contract Commitment</td>
                    <td className="p-4 md:p-6 text-[#475569]">Full-time salary + benefits</td>
                    <td className="p-4 md:p-6 text-[#475569]">6-month minimum retainer</td>
                    <td className="p-4 md:p-6 bg-purple-50/30 text-purple-700 font-bold">Sprint-by-sprint flexibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* US Lead Form */}
      <section id="contact-us" className="py-20 max-w-3xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-purple-600">Fast Technical Scoping</span>
            <h2 className="text-3xl font-display font-bold text-[#0F172A]">
              Let’s Scope Your AI Project
            </h2>
            <p className="text-sm text-[#475569]">
              Tell us about the agent or workflow you want to automate. An AI solutions architect will review your project and reply within 24 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
              <h3 className="text-lg font-bold text-emerald-800">Thank you! We received your request.</h3>
              <p className="text-sm text-emerald-700">
                A senior AI architect will contact you within 24 business hours to review technical feasibility.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1">Company / Project Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Acme Tech Inc."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#475569] mb-1">Primary Objective</label>
                  <select
                    name="needs"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  >
                    <option value="Customer Support / Sales AI Agent">Customer Support / Sales AI Agent</option>
                    <option value="Enterprise Internal Knowledge RAG">Enterprise Internal Knowledge RAG</option>
                    <option value="AI Ops & Workflow Automation">AI Ops & Workflow Automation</option>
                    <option value="Dedicated Nearshore AI Engineer">Dedicated Nearshore AI Engineer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#475569] mb-1">Project Details & Stack</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe what you want to build or automate (e.g., We want to connect an AI agent to Zendesk and our PostgreSQL database)..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {isError && (
                <p className="text-xs text-red-600">Something went wrong. Please try again or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-md transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Request Nearshore Discovery Call"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
