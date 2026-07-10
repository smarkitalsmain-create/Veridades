import { Link } from "./Router";
import { Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Frameworks", path: "/frameworks" },
    { name: "Leadership", path: "/leadership" },
    { name: "Engagements", path: "/representative-engagements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer id="footer" className="bg-navy-900 text-white pt-20 pb-10 border-t-2 border-gold-600">
      <div className="container mx-auto md:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start mb-6">
              <span className="serif-heading text-2xl font-bold tracking-tight text-white">
                VERIDADES
              </span>
              <span className="micro-caps mt-1 text-gold-500">
                CONSULTING
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              We help organisations navigate strategic decisions, transactions, governance, risk and business transformation with rigorous advice and disciplined execution.
            </p>
            <div className="text-xs tracking-wide text-gold-200/90 font-medium uppercase font-sans border-l-2 border-gold-500 pl-4 py-1">
              Strategy · Transactions · Governance · Risk · Business Transformation
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-sm font-sans font-bold tracking-wider uppercase text-gold-500 mb-6 pb-2 border-b border-white/10">
              Institutional Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1.5 text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    <ChevronRight size={14} className="text-gold-500/60 group-hover:text-gold-500 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-sm font-sans font-bold tracking-wider uppercase text-gold-500 mb-6 pb-2 border-b border-white/10">
              Contact Office
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-500 mt-1 shrink-0" />
                <a href="mailto:office@veridadesconsulting.com" className="hover:text-white transition-colors break-all">
                  office@veridadesconsulting.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-500 mt-1 shrink-0" />
                <a href="tel:+910000000000" className="hover:text-white transition-colors">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-white">Delhi · Jaipur</p>
                  <p className="text-xs text-gray-400 mt-0.5">Corporate Presence & Advisory Offices</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe size={16} className="text-gold-500 mt-1 shrink-0" />
                <a href="http://www.veridadesconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.veridadesconsulting.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Regulatory Disclaimer */}
            <div className="lg:col-span-8 text-[11px] leading-relaxed text-gray-400">
              <span className="font-sans font-semibold uppercase tracking-wider text-gold-500 mr-2">
                Disclaimer:
              </span>
              This website is for general information only and does not constitute legal, financial, tax, investment, or professional advice. Veridades Consulting is not liable for any actions taken in reliance on information presented on this platform.
            </div>

            {/* Copyright and Location footer details */}
            <div className="lg:col-span-4 lg:text-right text-[12px] text-gray-400 font-sans flex flex-col md:flex-row lg:flex-col justify-between items-start lg:items-end gap-2">
              <div>
                © {currentYear} Veridades Consulting. All rights reserved.
              </div>
              <div className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                Delhi · Jaipur · India
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
