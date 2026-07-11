import { useState } from "react";
import { LEADERSHIP_DATA } from "../data";
import { SectionHeader } from "./Common";
import { LeaderItem } from "../types";
import { Mail, CheckCircle2, X, Award, BadgeCheck } from "lucide-react";

export default function LeadershipView() {
  const [activeLeader, setActiveLeader] = useState<LeaderItem | null>(null);

  // Custom helper to generate beautiful elegant corporate initial avatars
  const renderAvatar = (name: string, role: string) => {
    const initials = name
      .split(" ")
      .filter(
        (word) =>
          !["CA", "Dr.", "Dr", "Mr.", "Mr", "Mrs.", "Mrs", "Ms.", "Ms"].includes(word)
      )
      .map((word) => word[0])
      .slice(0, 2)
      .join("");

    const isPlaceholder = name.includes("Placeholder") || name.includes("Advisory");

    return (
      <div className={`relative h-56 w-full flex items-center justify-center rounded-xs overflow-hidden border-b border-gold-600 shadow-sm ${
        isPlaceholder ? "bg-soft-grey text-navy-900/30" : "bg-navy-900 text-white"
      }`}>
        {/* Subtle background lines */}
        <div className="absolute inset-0 opacity-10 flex flex-col justify-between p-4 pointer-events-none select-none">
          <div className="flex justify-between">
            <span className="text-[10px] font-mono">VERIDADES</span>
            <span className="text-[10px] font-mono">EXECUTION</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] font-mono">DELHI</span>
            <span className="text-[10px] font-mono">JAIPUR</span>
          </div>
        </div>

        {/* Floating circular logo badge */}
        <div className="absolute top-4 right-4 h-6 w-6 border border-gold-400/30 rounded-full flex items-center justify-center">
          <span className="text-[8px] text-gold-400">VC</span>
        </div>

        {/* Display Initials in massive, gorgeous serif fonts */}
        <div className="text-center">
          <span className="serif-heading text-6xl md:text-7xl font-light tracking-tight block text-gold-400 opacity-90">
            {initials}
          </span>
          <span className="micro-caps text-gray-300 block mt-2">
            {role.split("&")[0]}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto md:px-8 lg:px-12">

        {/* Page Header */}
        <SectionHeader
          badge="Advisory Board"
          title="Senior Leadership Team"
          description="A senior-led team of corporate finance and operational advisory professionals committed to hands-on execution on every mandate."
        />

        {/* Operational Commitment Panel */}
        <div className="bg-soft-grey border border-border-grey p-8 md:p-12 mb-16 rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="micro-caps text-gold-600 block mb-1">
                Our Executive Promise
              </span>
              <h3 className="serif-heading text-2xl font-light text-navy-900 mt-2 mb-4 leading-snug">
                Senior Attention is Non-Negotiable
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-sans min-h-[150px]">
                Unlike mid-market consultancies where mandates are delegated to junior analysts, Veridades Consulting guarantees that Nitin Sharma, Sanket Kulshrestha, and our senior partners remain actively involved on the ground during every phase of diagnostics, financial modeling, valuation, and workflow stabilization.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-1 gap-2.5 bg-white p-6 border border-border-grey shadow-xs">
              <div className="flex items-center gap-2 text-xs text-navy-900 font-sans font-semibold">
                <CheckCircle2 size={14} className="text-gold-600 shrink-0" />
                <span>On-Site Implementation Lead</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-navy-900 font-sans font-semibold">
                <CheckCircle2 size={14} className="text-gold-600 shrink-0" />
                <span>Independent, No Conflicting Audits</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-navy-900 font-sans font-semibold">
                <CheckCircle2 size={14} className="text-gold-600 shrink-0" />
                <span>Confidential Promoter Firewall</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERSHIP_DATA.map((partner) => (
            <button
              key={partner.id}
              onClick={() => setActiveLeader(partner)}
              className="text-left bg-white border border-border-grey hover:shadow-lg hover:border-gold-600 transition-all duration-300 rounded-xs flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Avatar Container */}
                {renderAvatar(partner.name, partner.role)}

                {/* Profile details */}
                <div className="p-8">
                  <h3 className="serif-heading text-xl font-semibold text-navy-900 mb-1">
                    {partner.name}
                  </h3>

                  <div className="min-h-[42px] mb-4">
                    <span className="micro-caps text-gold-600 block leading-snug">
                      {partner.role}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed font-sans line-clamp-4">
                    {partner.bio}
                  </p>

                  <span className="micro-caps text-navy-900 group-hover:text-gold-600 inline-flex items-center gap-2 mt-6 transition-colors">
                    View Full Profile
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {activeLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-navy-900/70 backdrop-blur-sm"
          onClick={() => setActiveLeader(null)}
        >
          <div
            className="relative bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xs shadow-2xl border-t-4 border-gold-600"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveLeader(null)}
              className="absolute top-5 right-5 h-9 w-9 flex items-center justify-center rounded-full border border-border-grey text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-200"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="pr-10">
                <span className="micro-caps text-gold-600 block mb-2">
                  {activeLeader.role}
                </span>
                <h3 className="serif-heading text-3xl md:text-4xl font-light text-navy-900 leading-tight">
                  {activeLeader.name}
                </h3>
                <a
                  href={`mailto:${activeLeader.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 hover:text-gold-600 transition-colors"
                >
                  <Mail size={14} className="text-gold-600 shrink-0" />
                  {activeLeader.email}
                </a>
              </div>

              <div className="w-full h-px bg-border-grey my-6" />

              {/* Bio */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-sans">
                {activeLeader.bio}
              </p>

              {/* Areas of Expertise */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={15} className="text-gold-600" />
                  <span className="micro-caps text-navy-900 font-semibold">
                    Areas of Expertise
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeLeader.expertise.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-sans text-navy-900 bg-soft-grey border border-border-grey px-3 py-1.5 rounded-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Credentials */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <BadgeCheck size={15} className="text-gold-600" />
                  <span className="micro-caps text-navy-900 font-semibold">
                    Credentials
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {activeLeader.credentials.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600 font-sans"
                    >
                      <CheckCircle2 size={13} className="text-gold-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
