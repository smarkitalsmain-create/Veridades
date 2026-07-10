import { Link } from "./Router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface SectionHeaderProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ id, badge, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div id={id} className={`mb-16 max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span className="micro-caps text-gold-600 block mb-3">
          {badge}
        </span>
      )}
      <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-navy-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="bg-soft-grey py-20 border-y border-border-grey relative overflow-hidden">
      {/* Decorative Gold lines to match corporate PPT feel */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-600" />
      <div className="absolute -right-48 -bottom-48 w-96 h-96 border border-gold-500/10 rounded-full pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-64 h-64 border border-navy-900/5 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <span className="micro-caps text-gold-600 block mb-4">
          Institutional Engagement
        </span>
        <h3 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 mt-4 mb-6">
          Ready to Elevate Your Operational and Deal Performance?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
          Connect with Nitin Sharma, Sanket Kulshrestha, and our senior advisory professionals for a structured, confidential assessment of your strategic, transaction, or governance priorities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center navy-bg text-white hover:bg-opacity-90 font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 transition-all duration-300 shadow-xs"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={14} className="ml-2" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
