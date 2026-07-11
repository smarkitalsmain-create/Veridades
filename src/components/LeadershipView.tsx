import { useState } from "react";
import { Mail, Linkedin, CheckCircle2, X, Award, BadgeCheck } from "lucide-react";
import { LEADERSHIP_DATA } from "../data";
import { SectionHeader } from "./Common";
import { LeaderItem } from "../types";
import { cn } from "../lib/utils";

export default function LeadershipView() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeLeader, setActiveLeader] = useState<LeaderItem | null>(null);

  const members = LEADERSHIP_DATA;
  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

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
        <div className="bg-soft-grey border border-border-grey p-8 md:p-12 mb-20 rounded-xs">
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

        {/* Leadership Showcase */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12 lg:gap-16 select-none w-full py-4">
          {/* Left: monogram tile grid */}
          <div className="flex gap-4 md:gap-5 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
            <div className="flex flex-col gap-4 md:gap-5">
              {col1.map((member) => (
                <MonogramTile
                  key={member.id}
                  member={member}
                  className="w-[155px] h-[168px] sm:w-[182px] sm:h-[196px] md:w-[217px] md:h-[231px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  onOpen={setActiveLeader}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 md:gap-5 mt-[67px] sm:mt-[78px] md:mt-[95px]">
              {col2.map((member) => (
                <MonogramTile
                  key={member.id}
                  member={member}
                  className="w-[171px] h-[185px] sm:w-[203px] sm:h-[217px] md:w-[241px] md:h-[255px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  onOpen={setActiveLeader}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 md:gap-5 mt-[31px] sm:mt-[36px] md:mt-[45px]">
              {col3.map((member) => (
                <MonogramTile
                  key={member.id}
                  member={member}
                  className="w-[161px] h-[175px] sm:w-[190px] sm:h-[204px] md:w-[227px] md:h-[241px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  onOpen={setActiveLeader}
                />
              ))}
            </div>
          </div>

          {/* Right: member roster */}
          <div className="flex flex-col gap-6 md:gap-7 pt-0 md:pt-2 flex-1 w-full">
            {members.map((member) => (
              <MemberRow
                key={member.id}
                member={member}
                hoveredId={hoveredId}
                onHover={setHoveredId}
                onOpen={setActiveLeader}
              />
            ))}
          </div>
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
            <button
              onClick={() => setActiveLeader(null)}
              className="absolute top-5 right-5 h-9 w-9 flex items-center justify-center rounded-full border border-border-grey text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-200"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="p-8 md:p-10">
              <div className="pr-10">
                <span className="micro-caps text-gold-600 block mb-2">
                  {activeLeader.role}
                </span>
                <h3 className="serif-heading text-3xl md:text-4xl font-light text-navy-900 leading-tight">
                  {activeLeader.name}
                </h3>
                <div className="mt-3 flex items-center gap-4">
                  <a
                    href={`mailto:${activeLeader.email}`}
                    className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    <Mail size={14} className="text-gold-600 shrink-0" />
                    {activeLeader.email}
                  </a>
                  {activeLeader.linkedin && (
                    <a
                      href={activeLeader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 hover:text-gold-600 transition-colors"
                    >
                      <Linkedin size={14} className="text-gold-600 shrink-0" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              <div className="w-full h-px bg-border-grey my-6" />

              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-sans">
                {activeLeader.bio}
              </p>

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

/* ─────────────────────────────────────────
   Monogram tile (brand stand-in for a headshot)
───────────────────────────────────────── */

function MonogramTile({
  member,
  className,
  hoveredId,
  onHover,
  onOpen,
}: {
  member: LeaderItem;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onOpen: (member: LeaderItem) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  const initials = member.name
    .split(" ")
    .filter((word) => !["CA", "Dr.", "Dr", "Mr.", "Mr", "Mrs.", "Mrs", "Ms.", "Ms"].includes(word))
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <button
      onClick={() => onOpen(member)}
      className={cn(
        "relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400 bg-navy-900 border-b-2 border-gold-600",
        className,
        isDimmed ? "opacity-50" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            "serif-heading font-light tracking-tight transition-all duration-500",
            isActive ? "text-gold-400 scale-110" : "text-gold-400/60 scale-100",
            "text-5xl sm:text-6xl md:text-7xl",
          )}
        >
          {initials}
        </span>
      </div>
      <div className="absolute top-3 right-3 h-6 w-6 border border-gold-400/30 rounded-full flex items-center justify-center">
        <span className="text-[8px] text-gold-400">VC</span>
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────
   Member roster row
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
  onOpen,
}: {
  member: LeaderItem;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onOpen: (member: LeaderItem) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onOpen(member)}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "h-3 rounded-[3px] flex-shrink-0 transition-all duration-300 bg-gold-600",
            isActive ? "w-6" : "w-4 opacity-40",
          )}
        />
        <span
          className={cn(
            "serif-heading text-xl md:text-2xl font-semibold leading-none tracking-tight transition-colors duration-300",
            isActive ? "text-navy-900" : "text-navy-900/75",
          )}
        >
          {member.name}
        </span>

        <div
          className={cn(
            "flex items-center gap-1.5 ml-1 transition-all duration-200",
            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none",
          )}
        >
          <a
            href={`mailto:${member.email}`}
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded text-gray-500 hover:text-gold-600 hover:bg-soft-grey transition-all duration-150 hover:scale-110"
            title="Email"
          >
            <Mail size={13} />
          </a>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded text-gray-500 hover:text-gold-600 hover:bg-soft-grey transition-all duration-150 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={13} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 pl-[28px] micro-caps text-gold-600">
        {member.role}
      </p>
      <p className="mt-1.5 pl-[28px] text-sm text-gray-600 font-sans max-w-xl line-clamp-2">
        {member.bio}
      </p>
    </div>
  );
}
