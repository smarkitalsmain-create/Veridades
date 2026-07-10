import React, { useState } from "react";
import { SectionHeader } from "./Common";
import { Mail, Phone, MapPin, Globe, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    serviceInterest: "Transaction Advisory",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const serviceOptions = [
    "Transaction Advisory",
    "Risk Advisory & Internal Audit",
    "Business Transformation",
    "Virtual CFO & Cost Optimisation",
    "Business Facilitation",
    "Corporate Strategy",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate premium API intake
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto md:px-8 lg:px-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Inquiries & intake"
          title="Let’s Start the Conversation"
          description="We welcome the opportunity to discuss how Veridades can support your organisation’s strategic, transactional and transformational priorities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="serif-heading text-2xl font-semibold text-navy-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans mb-6">
                Every engagement begins with a confidential consultation to understand the client's objectives, assess project requirements, and establish the scope, engagement structure, and execution roadmap.
              </p>
            </div>

            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 border border-gold-200/40 rounded-xs shrink-0 text-gold-600">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="serif-heading text-sm font-semibold text-navy-900 uppercase tracking-wide">
                    Direct Corporate Email
                  </h4>
                  <a href="mailto:office@veridadesconsulting.com" className="text-gray-600 hover:text-gold-600 transition-colors break-all text-xs md:text-sm">
                    office@veridadesconsulting.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 border border-gold-200/40 rounded-xs shrink-0 text-gold-600">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="serif-heading text-sm font-semibold text-navy-900 uppercase tracking-wide">
                    CLIENT ADVISORY DESK
                  </h4>
                  <a href="tel:+919773946072" className="text-gray-600 hover:text-gold-600 transition-colors text-xs md:text-sm">
                    +91 9773946072
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 border border-gold-200/40 rounded-xs shrink-0 text-gold-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="serif-heading text-sm font-semibold text-navy-900 uppercase tracking-wide">
                    Corporate Presence
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Delhi · Jaipur
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1 font-sans">Advisors deployed pan-India based on client assets.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 border border-gold-200/40 rounded-xs shrink-0 text-gold-600">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="serif-heading text-sm font-semibold text-navy-900 uppercase tracking-wide">
                    Response Benchmark SLA
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    We endeavour to respond to all enquiries promptly during business days.
                  </p>
                </div>
              </li>
            </ul>

            {/* Conflict checks notice */}
            <div className="bg-soft-grey border border-border-grey p-6 rounded-xs space-y-3">
              <h4 className="flex items-center gap-2 serif-heading text-xs font-semibold uppercase tracking-wider text-navy-900">
                <ShieldAlert size={14} className="text-gold-600 shrink-0" />
                <span>Strict Conflict checks</span>
              </h4>
              <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed font-sans">
                We perform thorough conflict reviews before formal onboarding. Please avoid sending proprietary transaction targets or secret formulations during your initial intake request.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-soft-grey border border-border-grey p-8 md:p-12 shadow-sm rounded-xs">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <h3 className="serif-heading text-xl font-semibold text-navy-900 pb-3 border-b border-border-grey">
                  Initial Inquiry & Intake Brief
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="micro-caps text-navy-900 block mb-1">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Nitin Sharma"
                      className="w-full bg-white border border-border-grey text-xs md:text-sm p-3.5 focus:outline-none focus:border-gold-600 rounded-xs"
                    />
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="micro-caps text-navy-900 block mb-1">
                      Company / Organization *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Veridades Ltd"
                      className="w-full bg-white border border-border-grey text-xs md:text-sm p-3.5 focus:outline-none focus:border-gold-600 rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="micro-caps text-navy-900 block mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="office@company.com"
                      className="w-full bg-white border border-border-grey text-xs md:text-sm p-3.5 focus:outline-none focus:border-gold-600 rounded-xs"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="micro-caps text-navy-900 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 99999 99999"
                      className="w-full bg-white border border-border-grey text-xs md:text-sm p-3.5 focus:outline-none focus:border-gold-600 rounded-xs"
                    />
                  </div>
                </div>

                {/* Service Interest dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="service-interest" className="micro-caps text-navy-900 block mb-1">
                    Primary Service Interest
                  </label>
                  <select
                    id="service-interest"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-white border border-border-grey text-xs md:text-sm p-3.5 focus:outline-none focus:border-gold-600 rounded-xs"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="micro-caps text-navy-900 block mb-1">
                    How Can We Assist? *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your current operational blocks or transaction timeline goals..."
                    className="w-full bg-white border border-border-grey text-xs md:text-sm p-3.5 focus:outline-none focus:border-gold-600 rounded-xs"
                  />
                </div>

                {/* Disclaimer */}
                <div className="text-[10px] text-gray-500 leading-normal font-sans pt-2 border-t border-border-grey">
                  Submitting this form does not create a client-advisor relationship. Engagements are accepted subject to conflict checks, scope confirmation and formal engagement documentation.
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full navy-bg hover:bg-opacity-95 disabled:bg-gray-400 text-white font-sans text-xs tracking-widest uppercase font-semibold py-4 px-6 transition-all duration-200 rounded-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  {submitting ? "Transmitting Brief..." : "Submit Briefing Request"}
                </button>

              </form>
            ) : (
              <div className="text-center py-12 space-y-6">
                <div className="inline-flex p-4 bg-gold-50 border border-gold-200/50 rounded-full text-gold-600 mb-2">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="serif-heading text-2xl font-semibold text-navy-900">
                  Brief Transmitted Successfully
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-md mx-auto font-sans">
                  Thank you, <strong>{formData.name}</strong>. Your intake briefing regarding <strong>{formData.serviceInterest}</strong> at <strong>{formData.company}</strong> has been secured on our encrypted server.
                </p>
                <span className="micro-caps text-gold-600 block mt-2">
                  Managing Partner SLA: response within 24 hours
                </span>
                <div className="pt-6 border-t border-border-grey">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        serviceInterest: "Transaction Advisory",
                        message: "",
                      });
                    }}
                    className="text-navy-900 hover:text-gold-600 font-sans text-xs uppercase tracking-wider font-semibold underline"
                  >
                    Submit another intake brief
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
