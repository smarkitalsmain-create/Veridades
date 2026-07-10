import { ENGAGEMENTS_DATA } from "../data";
import { SectionHeader } from "./Common";
import { ShieldCheck, ArrowRight, HelpCircle, Hammer, CheckSquare, Sparkles } from "lucide-react";

export default function EngagementsView() {
  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto md:px-8 lg:px-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Advisory Record"
          title="Representative Engagements"
          description="Illustrative and anonymised engagements reflecting the nature and scope of our work. Client identities are withheld to preserve confidentiality."
        />

        {/* Confidentiality Notice Block */}
        <div className="bg-soft-grey border border-border-grey p-8 md:p-12 mb-16 rounded-xs flex items-start gap-4 md:gap-6">
          <ShieldCheck className="text-gold-600 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="serif-heading text-lg font-semibold text-navy-900 mb-2">
              Confidentiality is Our Core Operational Mandate
            </h4>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans">
              As trusted advisors to promoter-families, boards, and institutional capital, Veridades Consulting respects that many of our transactions, restructurings, and diagnostics are highly sensitive. The engagements listed below reflect real case histories, but have been anonymized to protect the identity, proprietary formulations, and strategic timelines of our clients.
            </p>
          </div>
        </div>

        {/* Engagements Case Stack */}
        <div className="space-y-12">
          {ENGAGEMENTS_DATA.map((caseItem, idx) => {
            const stepNum = idx + 1;
            return (
              <div
                key={caseItem.id}
                className="bg-white border border-border-grey rounded-xs overflow-hidden hover:border-gold-600 hover:shadow-lg transition-all duration-300"
              >
                
                {/* Case Header Banner */}
                <div className="bg-navy-900 text-white px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gold-600">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-gold-400 bg-white/10 px-2 py-0.5 rounded-xs">
                      CASE 0{stepNum}
                    </span>
                    <span className="text-gold-400/50 hidden sm:inline">|</span>
                    <span className="micro-caps text-gold-400 text-xs">
                      {caseItem.category}
                    </span>
                  </div>
                  <h3 className="serif-heading text-sm sm:text-base font-light tracking-wide text-white">
                    {caseItem.title}
                  </h3>
                </div>

                {/* Case Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border-grey">
                  
                  {/* Column 1: Challenge */}
                  <div className="p-8 space-y-4">
                    <h4 className="flex items-center gap-2 serif-heading text-sm font-semibold text-navy-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                      <HelpCircle size={14} className="text-red-500" />
                      <span>The Challenge</span>
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans">
                      {caseItem.challenge}
                    </p>
                  </div>

                  {/* Column 2: Approach */}
                  <div className="p-8 space-y-4">
                    <h4 className="flex items-center gap-2 serif-heading text-sm font-semibold text-navy-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                      <Hammer size={14} className="text-gold-600" />
                      <span>Our Approach</span>
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans">
                      {caseItem.approach}
                    </p>
                  </div>

                  {/* Column 3: Outcome */}
                  <div className="p-8 space-y-4 bg-soft-grey/40">
                    <h4 className="flex items-center gap-2 serif-heading text-sm font-semibold text-navy-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                      <CheckSquare size={14} className="text-emerald-600" />
                      <span>The Outcome</span>
                    </h4>
                    <p className="text-navy-900 text-xs md:text-sm leading-relaxed font-sans font-semibold">
                      {caseItem.outcome}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
