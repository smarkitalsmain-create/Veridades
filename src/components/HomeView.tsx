import { Link } from "./Router";
import { ArrowRight, Award, Shield, Users, Compass, Activity, CheckCircle, TrendingUp, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function HomeView() {
  const stats = [
    { value: "27+", label: "Advisory Service Lines", desc: "Across transaction, governance, risk and finance cycles" },
    { value: "15+", label: "Industries Served", desc: "Deep sector knowledge across core growth markets" },
    { value: "8", label: "Proprietary Frameworks", desc: "Rigorous execution templates from diagnose to sustain" },
  ];

  const servicePillars = [
    {
      num: "01",
      title: "Transaction Advisory",
      items: ["M&A Advisory", "Transaction & Due Diligence", "Business Valuation", "Financial Modelling"],
      desc: "End-to-end deal structure, deep due diligence, and capital finance solutions.",
    },
    {
      num: "02",
      title: "Governance & Risk",
      items: ["Risk Advisory & Internal Audit", "Enterprise Risk Management (ERM)", "Corporate Governance", "Board Advisory"],
      desc: "Pragmatic, board-ready internal controls and strategic risk oversight systems.",
    },
    {
      num: "03",
      title: "Strategy & Transformation",
      items: ["Corporate Strategy", "Growth Strategy", "Process Re-engineering (BPR)", "SOP Development", "Digital Transformation"],
      desc: "Translating high-level board vision into standard repeatable execution frameworks.",
    },
    {
      num: "04",
      title: "Financial Advisory",
      items: ["Virtual CFO Advisory", "Cost Optimisation", "Turnaround Advisory", "Family Business Advisory"],
      desc: "Institutional-grade cash flow management and corporate restructuring.",
    },
    {
      num: "05",
      title: "Growth & Partnerships",
      items: ["Business Facilitation", "Strategic Partnerships", "Project Monitoring", "Business Expansion Strategy"],
      desc: "Connecting local promoters to global partners with rigorous monitoring.",
    },
    {
      num: "06",
      title: "MFO & Investment Services",
      items: [
        "Multi-Family Office Advisory",
        "Investment Advisory Support",
        "Wealth Structuring & Legacy Planning",
        "Private Market Opportunities"
      ],
      desc: "Advisory support across capital allocation, private market opportunities, investment evaluation, and legacy planning.",
    },
  ];

  const whyVeridades = [
    {
      title: "Execution-Led, Not Just Advisory",
      desc: "Our role does not end at the recommendations slides. We stay engaged on-site to execute the plan and anchor the outcomes.",
      icon: <Activity className="text-gold-500" size={24} />,
    },
    {
      title: "Cross-Disciplinary Expertise",
      desc: "We bring unified transaction, risk, strategy, process, and financial specialists to address problems holistically.",
      icon: <Users className="text-gold-500" size={24} />,
    },
    {
      title: "Sector Depth",
      desc: "Over 15 industries served, ranging from heavy manufacturing, renewables, and healthcare to financial services and family MSMEs.",
      icon: <Compass className="text-gold-500" size={24} />,
    },
    {
      title: "Independent & Objective",
      desc: "Free from audit conflicts, software affiliations, or broker biases, offering promoters completely objective advisorship.",
      icon: <Shield className="text-gold-500" size={24} />,
    },
    {
      title: "Confidentiality by Design",
      desc: "Rigorous information firewalls protect sensitive transactions and promoter discussions, honoring absolute trust.",
      icon: <Award className="text-gold-500" size={24} />,
    },
    {
      title: "Speed with Rigour",
      desc: "We deploy lean, senior-led teams that execute diagnostic sprints in days, not months, delivering pace with absolute precision.",
      icon: <TrendingUp className="text-gold-500" size={24} />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-10 pb-20 md:py-28 overflow-hidden">
        <div className="container mx-auto md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              <div className="w-12 h-1 bg-navy-900 mb-8" />
              <h1 className="serif-heading text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] font-light text-navy-900 mb-6">
                One-Stop Financial Boutique <span className="italic">— Strategy, Governance & Growth</span>
              </h1>
              <p className="font-sans text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                One partner for the full arc of corporate life — strategy, transactions, governance, risk and growth — delivered with rigorous advice and disciplined execution, all under one roof.
              </p>
              
              <div className="text-xs md:text-sm font-semibold tracking-wide text-navy-900 font-sans uppercase mb-8 flex flex-wrap items-center gap-2">
                <span>Strategy</span>
                <span className="text-gold-600 font-bold">•</span>
                <span>Transactions</span>
                <span className="text-gold-600 font-bold">•</span>
                <span>Governance</span>
                <span className="text-gold-600 font-bold">•</span>
                <span>Risk</span>
                <span className="text-gold-600 font-bold">•</span>
                <span>Business Transformation</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="navy-bg text-white hover:bg-opacity-90 font-sans text-xs tracking-wider uppercase font-semibold py-4 px-8 transition-all duration-300 shadow-xs text-center"
                >
                  Explore Our Services
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-sans text-xs tracking-wider uppercase font-semibold py-4 px-8 transition-all duration-300 text-center"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>

            {/* Right Philosophy Panel - Styled exactly per Luxury / Prestige requirements */}
            <div className="lg:col-span-5 navy-bg p-10 md:p-12 text-white flex flex-col justify-between rounded-lg shadow-xl border-l-4 border-gold-600">
              <div className="my-auto">
                <span className="micro-caps text-gold-600 block mb-4">Our Philosophy</span>
                <h2 className="serif-heading text-2xl md:text-3xl font-light leading-snug italic text-white mb-6">
                  "Advice creates value only when it is executed."
                </h2>
                <div className="h-px w-24 border-t border-white opacity-20 my-8"></div>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-4 text-xl leading-none">•</span>
                    <div>
                      <div className="font-semibold text-[15px] font-serif text-white">Transaction Advisory</div>
                      <p className="text-gray-300 text-xs mt-1 leading-relaxed">M&A, Due Diligence, and Valuation support across the deal lifecycle.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-4 text-xl leading-none">•</span>
                    <div>
                      <div className="font-semibold text-[15px] font-serif text-white">Governance & Risk</div>
                      <p className="text-gray-300 text-xs mt-1 leading-relaxed">Enterprise risk management and board-level governance assurance.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-600 mr-4 text-xl leading-none">•</span>
                    <div>
                      <div className="font-semibold text-[15px] font-serif text-white">Strategy & Transformation</div>
                      <p className="text-gray-300 text-xs mt-1 leading-relaxed">BPR, Digital transformation, and growth pathways with measurable results.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gold-600 pl-6 py-2 mt-10">
                <p className="text-[11px] uppercase tracking-widest text-gray-400 leading-relaxed font-sans">
                  Strategy &middot; Transactions &middot; Governance &middot; Risk <br/> 
                  Business Transformation &middot; MFO &amp; Investment Services
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-navy-900 text-white py-12 border-y border-gold-600">
        <div className="container mx-auto md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start text-center md:text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col md:border-l border-white/15 md:pl-8 first:border-0 first:pl-0">
                <span className="serif-heading text-4xl lg:text-5xl font-light text-gold-400 tracking-tight mb-2">
                  {stat.value}
                </span>
                <span className="micro-caps text-gray-300 font-semibold mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-gray-400 font-sans leading-relaxed">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRO SECTION */}
      <section className="bg-white py-20 border-b border-border-grey">
        <div className="container mx-auto md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <span className="micro-caps text-gold-600 block mb-3">
                Our Foundational Philosophy
              </span>
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 tracking-tight leading-tight">
                Advice Creates Value Only When It Is Executed
              </h2>
              <div className="h-[2px] w-12 bg-gold-600 mt-6" />
            </div>

            <div className="lg:col-span-7">
              <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                <strong>Veridades Consulting</strong> is a one-stop financial boutique serving promoters, management teams, investors and institutional stakeholders. We bring strategy, governance, risk, transactions and growth advisory under one roof, combining analytical rigour with hands-on execution discipline.
              </p>
              <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed">
                Many boutique firms deliver high-level presentation slides and leave the implementation risk solely to the client. At Veridades, we believe true corporate counsel requires active participation. We bridge the critical gap between recommendations and real-world outcomes, remaining engaged side-by-side until the intended enterprise value is unlocked.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICE OVERVIEW SECTOR PILLARS */}
      <section className="bg-soft-grey py-20 border-b border-border-grey">
        <div className="container mx-auto md:px-8 lg:px-12">
          
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <span className="micro-caps text-gold-600 block mb-3">
                Areas of Expertise
              </span>
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 tracking-tight">
                Advisory Service Pillars
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-navy-900 font-sans text-xs tracking-wider uppercase font-semibold mt-4 md:mt-0 group transition-colors"
            >
              <span>Explore full catalog</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-border-grey p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-gold-600">{pillar.num}</span>
                    <span className="h-px bg-border-grey flex-grow mx-4"></span>
                  </div>
                  
                  <h3 className="serif-heading text-xl font-semibold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs font-sans mb-6 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-sans font-medium">
                        <CheckCircle size={12} className="text-gold-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-navy-900 hover:text-gold-600 font-sans text-xs tracking-widest uppercase font-semibold transition-colors pt-4 border-t border-gray-50"
                >
                  <span>Detail Panel</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY VERIDADES SECTION */}
      <section className="bg-white py-20">
        <div className="container mx-auto md:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="micro-caps text-gold-600 block mb-3">
              Competitive Advantage
            </span>
            <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light text-navy-900 tracking-tight">
              Why Corporate Leaders Choose Veridades
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4">
              We position ourselves as long-term trusted advisors with institutional-grade capability and hands-on execution speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyVeridades.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-border-grey/80 p-8 hover:border-gold-600 hover:shadow-lg transition-all duration-300 rounded-xs flex flex-col items-start"
              >
                <div className="p-3 bg-gold-50 border border-gold-200/50 mb-6 rounded-xs">
                  {item.icon}
                </div>
                <h3 className="serif-heading text-lg font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
