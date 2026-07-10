import { SectionHeader } from "./Common";
import { Award, ShieldCheck, HeartHandshake, EyeOff, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function AboutView() {
  const coreValues = [
    {
      title: "Integrity",
      desc: "Absolute honesty in our diagnostic findings and independent recommendations, regardless of transaction pressure.",
      icon: <ShieldCheck className="text-gold-500" size={24} />,
    },
    {
      title: "Rigour",
      desc: "Methodical, evidence-based financial and operational analysis. We test assumptions thoroughly before committing capital.",
      icon: <Sparkles className="text-gold-500" size={24} />,
    },
    {
      title: "Partnership",
      desc: "We operate as trust-embedded extensions of promoters and executive teams, working side-by-side inside the firm.",
      icon: <HeartHandshake className="text-gold-500" size={24} />,
    },
    {
      title: "Confidentiality",
      desc: "Complete operational firewalls and absolute discretion. Information security is native to our client governance model.",
      icon: <EyeOff className="text-gold-500" size={24} />,
    },
    {
      title: "Excellence",
      desc: "Continuous refinement of our templates and custom execution workflows to unlock maximum EBITDA and deal value.",
      icon: <Award className="text-gold-500" size={24} />,
    },
  ];

  const philosophyCards = [
    {
      num: "01",
      title: "Evidence Before Opinion",
      desc: "We reject generic benchmark summaries. Every advisory output is backed by primary transaction audits, customer audits, and ground-level physical capacity testing."
    },
    {
      num: "02",
      title: "Partnership Over Transactions",
      desc: "We do not chase short-term deal volumes. We partner with promoters and families for years, aligning our guidance to multi-generational enterprise durability."
    },
    {
      num: "03",
      title: "Discipline Through Execution",
      desc: "Strategy only has power when translated into daily operating habits. We remain engaged to build, train, test, and audit until standard processes stick."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto md:px-8 lg:px-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Who We Are"
          title="Advice is Valuable Only When Carried Out to Fruition"
          description="Veridades Consulting is an execution-led corporate advisory firm built for organisations that need more than recommendations."
        />

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7">
            <h3 className="serif-heading text-2xl font-semibold text-navy-900 mb-6">
              Our Core Advisory Mandate
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 font-sans">
              Veridades Consulting was founded on a simple, powerful insight: <strong>Advice only creates value when it is executed.</strong> In today’s competitive corporate climate, promoter-families and corporate boards are overwhelmed by slide decks outlining high-level theoretical strategies, but face a critical shortage of hands-on expertise to translate those ideas into actual operational habits.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-sans">
              We operate at the intersection of high-end corporate strategy, transaction advisory, governance, and business transformation. We combine the analytical rigour of top-tier institutional consultancies with the pragmatic, gritty execution discipline of operational managers. From initial target diagnostics through workflow design and daily control implementation, we partner with clients until measurable results are achieved.
            </p>
          </div>
          <div className="lg:col-span-5 bg-soft-grey border-l-4 border-gold-600 p-8 shadow-sm">
            <h4 className="serif-heading text-lg font-semibold text-navy-900 mb-4">
              Institutional Support
            </h4>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
              We support a diverse stakeholder base, including:
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-navy-900 font-sans font-semibold">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold-500" />
                <span>Promoters & Promoter-Led Family Offices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold-500" />
                <span>Executive Management Teams & CEOs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold-500" />
                <span>Institutional Investors & Private Equity Firms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold-500" />
                <span>Lenders, Banks & Corporate Creditors</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Philosophy Blockquote Section */}
        <div className="bg-navy-900 text-white p-8 md:p-16 mb-24 relative overflow-hidden rounded-xs border-r-4 border-gold-600">
          <div className="absolute right-0 bottom-0 text-white/5 font-serif text-[180px] select-none pointer-events-none transform translate-y-12 translate-x-12">
            “
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="micro-caps text-gold-400 block mb-2">
              Our Advisory Philosophy
            </span>
            <blockquote className="serif-heading text-xl md:text-3xl lg:text-4xl italic font-light leading-normal text-white mt-6 mb-8">
              “Advice only creates value when it is executed. Our role does not end at the recommendation. It ends when the result is achieved.”
            </blockquote>
            <div className="h-[2px] w-12 bg-gold-600 mx-auto mb-4" />
            <cite className="font-sans text-xs md:text-sm uppercase tracking-widest text-gold-400 font-bold not-italic">
              Veridades Consulting Leadership Charter
            </cite>
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {philosophyCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-border-grey p-8 hover:shadow-lg transition-shadow">
              <span className="font-mono text-xs font-semibold text-gold-600 block mb-4">{card.num}</span>
              <h4 className="serif-heading text-lg font-semibold text-navy-900 mb-3">{card.title}</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Vision Panel */}
          <div className="border border-border-grey bg-soft-grey p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-navy-900" />
            <span className="micro-caps text-gold-600 block mb-2">
              Looking Forward
            </span>
            <h3 className="serif-heading text-2xl md:text-3xl font-light text-navy-900 mt-3 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-sans">
              To be the most trusted execution-led advisory partner for organisations navigating complex strategic, transactional and transformational decisions. We strive to establish a global standard for objective, data-proven corporate guidance.
            </p>
          </div>

          {/* Mission Panel */}
          <div className="border border-border-grey bg-soft-grey p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gold-600" />
            <span className="micro-caps text-gold-600 block mb-2">
              Our Daily Driving Force
            </span>
            <h3 className="serif-heading text-2xl md:text-3xl font-light text-navy-900 mt-3 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-sans">
              To deliver rigorous, evidence-based advisory and remain engaged through implementation, partnering with clients until measurable results are achieved. We protect and compound client enterprise capital through sheer execution discipline.
            </p>
          </div>

        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center mb-16">
            <span className="micro-caps text-gold-600 block mb-2">
              Operational Bedrock
            </span>
            <h2 className="serif-heading text-3xl md:text-4xl font-light text-navy-900">
              Our Institutional Core Values
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-3">
              These simple guidelines direct every project engagement and promoter dialogue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white border border-border-grey p-6 flex flex-col items-center text-center rounded-xs hover:border-gold-600 transition-colors">
                <div className="p-3 bg-gold-50 border border-gold-200/40 rounded-xs mb-4">
                  {val.icon}
                </div>
                <h4 className="serif-heading text-base font-semibold text-navy-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-gray-500 text-[11px] leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
