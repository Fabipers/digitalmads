"use client";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-200 bg-[#F8F9FA] text-[#475569] text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center font-display font-bold text-xs text-white">
              DM
            </div>
            <span className="font-display font-bold text-[#0F172A] tracking-tight text-base">
              digitalmads
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#475569] font-light max-w-xs">
            Transformamos empresas mediante arquitectura avanzada de Inteligencia Artificial y agentes autónomos en toda Colombia.
          </p>
        </div>

        {/* Col 1: Servicios */}
        <div className="space-y-3">
          <span className="text-xs uppercase font-bold text-[#0F172A] tracking-wider">Servicios</span>
          <ul className="space-y-2 text-xs">
            <li><a href="/servicios/auditoria-ia" className="hover:text-[#0F172A] transition-colors">Auditoría de IA</a></li>
            <li><a href="/servicios/consultoria-ia" className="hover:text-[#0F172A] transition-colors">Consultoría Estratégica</a></li>
            <li><a href="/servicios/desarrollo-llm" className="hover:text-[#0F172A] transition-colors">Desarrollo LLM</a></li>
          </ul>
        </div>

        {/* Col 2: Soluciones/Ubicaciones */}
        <div className="space-y-3">
          <span className="text-xs uppercase font-bold text-[#0F172A] tracking-wider">Soluciones & Ubicaciones</span>
          <ul className="space-y-2 text-xs grid grid-cols-2 gap-x-4">
            <li><a href="/industrias/ecommerce" className="hover:text-[#0F172A] transition-colors">E-commerce</a></li>
            <li><a href="/industrias/fintech" className="hover:text-[#0F172A] transition-colors">Fintech</a></li>
            <li><a href="/industrias/salud" className="hover:text-[#0F172A] transition-colors">Salud</a></li>
            <li><a href="/integraciones/crm" className="hover:text-[#0F172A] transition-colors">Integración CRM</a></li>
            <li><a href="/integraciones/whatsapp" className="hover:text-[#0F172A] transition-colors">Agentes WhatsApp</a></li>
            <li><a href="/bogota" className="hover:text-[#0F172A] font-semibold text-cyan-600 transition-colors">IA en Bogotá</a></li>
          </ul>
        </div>

        {/* Col 3: Secciones */}
        <div className="space-y-3">
          <span className="text-xs uppercase font-bold text-[#0F172A] tracking-wider">Secciones</span>
          <ul className="space-y-2 text-xs">
            <li><a href="/" className="hover:text-[#0F172A] transition-colors">Inicio</a></li>
            <li><a href="/#proceso" className="hover:text-[#0F172A] transition-colors">Proceso</a></li>
            <li><a href="/#casos" className="hover:text-[#0F172A] transition-colors">Casos de Éxito</a></li>
            <li><a href="/contacto" className="hover:text-[#0F172A] transition-colors">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div>
          © {new Date().getFullYear()} DigitalMads. Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <a href="/#proceso" className="hover:text-[#0F172A] transition-colors">Proceso</a>
          <a href="/#casos" className="hover:text-[#0F172A] transition-colors">Casos de Éxito</a>
        </div>
      </div>
    </footer>
  );
}
