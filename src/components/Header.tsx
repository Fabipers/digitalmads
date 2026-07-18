"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [mobileSolucionesOpen, setMobileSolucionesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center font-display font-bold text-xl text-white shadow-sm">
            DM
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-[#0F172A]">
            digital<span className="text-purple-600">mads</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[#475569]">
          <a href="/" className="hover:text-[#0F172A] transition-colors">Inicio</a>
          
          {/* Services Dropdown */}
          <div className="relative group/dropdown py-2">
            <button className="flex items-center gap-1 hover:text-[#0F172A] transition-colors focus:outline-none">
              Servicios
              <svg className="w-4 h-4 transition-transform group-hover/dropdown:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 rounded-xl bg-white border border-gray-200/80 p-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 shadow-xl z-50">
              <a href="/servicios/auditoria-ia" className="block px-4 py-2.5 text-sm text-[#475569] hover:text-[#0F172A] hover:bg-[#F8F9FA] rounded-lg transition-colors">
                Auditoría de IA
              </a>
              <a href="/servicios/consultoria-ia" className="block px-4 py-2.5 text-sm text-[#475569] hover:text-[#0F172A] hover:bg-[#F8F9FA] rounded-lg transition-colors">
                Consultoría Estratégica
              </a>
              <a href="/servicios/desarrollo-llm" className="block px-4 py-2.5 text-sm text-[#475569] hover:text-[#0F172A] hover:bg-[#F8F9FA] rounded-lg transition-colors">
                Desarrollo LLM
              </a>
            </div>
          </div>

          {/* Mega Dropdown Solutions */}
          <div className="relative group/mega py-2">
            <button className="flex items-center gap-1 hover:text-[#0F172A] transition-colors focus:outline-none">
              Soluciones
              <svg className="w-4 h-4 transition-transform group-hover/mega:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] rounded-2xl bg-white border border-gray-200/80 p-6 opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-200 shadow-xl z-50 grid grid-cols-2 gap-8">
              {/* Col 1: Industrias */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold">Industrias</span>
                <div className="flex flex-col gap-1">
                  <a href="/industrias/ecommerce" className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                    <span className="text-sm font-semibold text-[#475569] group-hover/item:text-[#0F172A]">E-commerce</span>
                    <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 text-purple-600 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="/industrias/fintech" className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                    <span className="text-sm font-semibold text-[#475569] group-hover/item:text-[#0F172A]">Fintech</span>
                    <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 text-purple-600 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="/industrias/salud" className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                    <span className="text-sm font-semibold text-[#475569] group-hover/item:text-[#0F172A]">Salud</span>
                    <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 text-purple-600 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Col 2: Integraciones */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-bold">Integraciones</span>
                <div className="flex flex-col gap-1">
                  <a href="/#proceso" className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                    <span className="text-sm font-semibold text-[#475569] group-hover/item:text-[#0F172A]">Automatización</span>
                    <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 text-purple-600 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="/integraciones/crm" className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                    <span className="text-sm font-semibold text-[#475569] group-hover/item:text-[#0F172A]">Integración CRM</span>
                    <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 text-purple-600 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="/integraciones/whatsapp" className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors">
                    <span className="text-sm font-semibold text-[#475569] group-hover/item:text-[#0F172A]">Agentes de WhatsApp</span>
                    <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 text-purple-600 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="/bogota" className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 hover:bg-cyan-100 text-cyan-700 hover:text-cyan-800 transition-colors text-xs font-semibold">
            IA en Bogotá
          </a>
          <a href="/blog" className="hover:text-[#0F172A] transition-colors">Blog</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/cotizador"
            className="px-4 py-2.5 rounded-xl border border-gray-300 hover:border-purple-500 hover:bg-purple-50 text-[#475569] hover:text-purple-700 font-medium text-sm transition-all duration-300"
          >
            Simular Presupuesto
          </a>
          <a
            href="/contacto"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Agendar Asesoría
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#475569] hover:text-[#0F172A] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-6 px-6 absolute top-20 left-0 right-0 flex flex-col gap-4 shadow-lg z-50">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#475569] hover:text-[#0F172A] text-lg font-medium border-b border-gray-100">
            Inicio
          </a>
          
          {/* Mobile Servicios Accordion */}
          <div className="border-b border-gray-100 py-2">
            <button
              onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
              className="w-full flex items-center justify-between text-left text-[#475569] hover:text-[#0F172A] text-lg font-medium focus:outline-none"
            >
              <span>Servicios</span>
              <svg className={`w-5 h-5 transition-transform ${mobileServiciosOpen ? "transform rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServiciosOpen && (
              <div className="mt-3 pl-4 flex flex-col gap-2 border-l border-gray-100">
                <a href="/servicios/auditoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm text-[#475569] hover:text-[#0F172A]">Auditoría de IA</a>
                <a href="/servicios/consultoria-ia" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm text-[#475569] hover:text-[#0F172A]">Consultoría Estratégica</a>
                <a href="/servicios/desarrollo-llm" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm text-[#475569] hover:text-[#0F172A]">Desarrollo LLM</a>
              </div>
            )}
          </div>

          {/* Mobile Soluciones Accordion */}
          <div className="border-b border-gray-100 py-2">
            <button
              onClick={() => setMobileSolucionesOpen(!mobileSolucionesOpen)}
              className="w-full flex items-center justify-between text-left text-[#475569] hover:text-[#0F172A] text-lg font-medium focus:outline-none"
            >
              <span>Soluciones</span>
              <svg className={`w-5 h-5 transition-transform ${mobileSolucionesOpen ? "transform rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileSolucionesOpen && (
              <div className="mt-3 pl-4 flex flex-col gap-4 border-l border-gray-100">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-[#94A3B8]">Industrias</span>
                  <a href="/industrias/ecommerce" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-[#475569] hover:text-[#0F172A]">E-commerce</a>
                  <a href="/industrias/fintech" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-[#475569] hover:text-[#0F172A]">Fintech</a>
                  <a href="/industrias/salud" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-[#475569] hover:text-[#0F172A]">Salud</a>
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-[#94A3B8]">Integraciones</span>
                  <a href="/#proceso" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-[#475569] hover:text-[#0F172A]">Automatización</a>
                  <a href="/integraciones/crm" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-[#475569] hover:text-[#0F172A]">Integración CRM</a>
                  <a href="/integraciones/whatsapp" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-[#475569] hover:text-[#0F172A]">Agentes de WhatsApp</a>
                </div>
              </div>
            )}
          </div>

          <a href="/bogota" onClick={() => setMobileMenuOpen(false)} className="py-2 text-cyan-600 hover:text-cyan-700 text-lg font-semibold border-b border-gray-100">
            IA en Bogotá
          </a>
          <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#475569] hover:text-[#0F172A] text-lg font-medium border-b border-gray-100">
            Blog
          </a>
          
          <a
            href="/cotizador"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 mt-4 rounded-xl border border-gray-300 text-center text-[#475569] font-medium text-base hover:bg-purple-50 hover:text-purple-700 transition-colors"
          >
            Simular Presupuesto
          </a>
          
          <a
            href="/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 mt-2 rounded-xl bg-purple-600 text-center text-white font-medium text-base shadow-sm hover:bg-purple-700"
          >
            Agendar Asesoría
          </a>
        </div>
      )}
    </header>
  );
}
