import { ServiceItem, IndustryItem, FrameworkItem, LeaderItem, EngagementItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "mergers-acquisitions",
    category: "Transaction Advisory",
    title: "Mergers & Acquisitions Advisory",
    description: "End-to-end advisory across the deal lifecycle from target identification and structuring through negotiation, closing and post-merger integration.",
    challenges: [
      "Identifying high-synergy target entities or strategic buyers in opaque markets",
      "Managing complex transaction negotiations while preserving operational focus",
      "Bridging valuation gaps between buyers and sellers with structured transaction instruments",
      "Navigating complex post-closing integration to capture planned synergies"
    ],
    approach: [
      "Formulate robust buy-side/sell-side strategies based on clear corporate growth objectives",
      "Rigorous pre-deal target scanning and confidential positioning",
      "End-to-end transaction management including structuring, valuation, and transaction orchestration",
      "Structured post-merger integration frameworks focusing on cultural, system, and process alignment"
    ],
    deliverables: [
      "Information Memorandums (IM) & Pitch Decks",
      "Target Identification & Strategic Match-making Matrix",
      "Transaction Structuring Memorandums",
      "Definitive Agreement negotiation frameworks and term sheets"
    ],
    benefits: [
      "Optimised deal value through experienced transaction architecture and competitive positioning",
      "Minimized risk of transaction failure via objective pre-deal diligence",
      "Enhanced governance and alignment of cross-functional transaction teams"
    ],
    industriesServed: ["Manufacturing", "Infrastructure", "Energy & Renewables", "Healthcare & Pharmaceuticals", "Financial Services", "Technology", "Consumer & Retail"]
  },
  {
    id: "due-diligence",
    category: "Transaction Advisory",
    title: "Transaction & Due Diligence Advisory",
    description: "Commercial and operational due diligence that gives investors and promoters an unvarnished view of a target’s performance, risk profile and value drivers.",
    challenges: [
      "Asymmetric or low-quality target data limiting objective risk assessment",
      "Hidden operational, commercial, or regulatory liabilities that erode deal value post-transaction",
      "Unverified revenue quality, customer concentration risks, or product margin sustainability"
    ],
    approach: [
      "In-depth market-grounded commercial due diligence and competitive analysis",
      "Hands-on operational due diligence testing capacity constraints, supply chain risk, and cost-efficiency",
      "Collaborative diagnostic of standard reporting quality, regulatory compliance posture, and key risk exposures"
    ],
    deliverables: [
      "Commercial Due Diligence Reports",
      "Operational & Technology Readiness Appraisals",
      "Red-Flag Reports highlighting deal-breaker risks",
      "Value-creation and operational improvement roadmaps"
    ],
    benefits: [
      "Unbiased, unvarnished insight into target performance metrics and risk factors",
      "Stronger negotiation leverage backed by evidence-based due diligence",
      "Informed post-acquisition plans created ahead of deal closure"
    ],
    industriesServed: ["Manufacturing", "Infrastructure", "Financial Services", "Healthcare & Pharmaceuticals", "Energy & Renewables", "Technology", "Consumer & Retail"]
  },
  {
    id: "valuation-modelling",
    category: "Transaction Advisory",
    title: "Business Valuation & Financial Modelling",
    description: "Independent valuations and robust financial models that support transactions, fundraising, litigation, regulatory filings and strategic decisions.",
    challenges: [
      "Defending complex valuation metrics in front of regulators, tax departments, or audit committees",
      "Unreliable financial forecasts that fail stress testing or do not reflect operational realities",
      "Navigating disputes among partners, shareholders, or promoters regarding fair value allocation"
    ],
    approach: [
      "Build dynamic, multi-scenario financial models using best-in-class methodologies",
      "Apply multiple standard valuation methodologies (DCF, Relative Valuation, Asset-based) adjusted for risk factors",
      "Incorporate robust operational drivers to ensure forecasting reflects physical capacity and cost dynamics"
    ],
    deliverables: [
      "Independent Business Valuation Reports",
      "Dynamic multi-scenario Integrated Financial Models (P&L, Balance Sheet, Cash Flow)",
      "Sensitivity analysis and scenario matrix tools",
      "Board-ready valuation presentations and defenses"
    ],
    benefits: [
      "Highly defensible valuation positions backed by rigorous corporate finance methodologies",
      "Improved strategic clarity through thorough sensitivity analysis on critical business drivers",
      "Full transparency for promoters, boards, and lenders"
    ],
    industriesServed: ["Financial Services", "Manufacturing", "Technology", "Healthcare & Pharmaceuticals", "Real Estate", "Consumer Businesses", "Infrastructure"]
  },
  {
    id: "risk-internal-audit",
    category: "Governance & Risk",
    title: "Risk Advisory & Internal Audit",
    description: "Independent internal audit and risk advisory that strengthens control environments, safeguards assets and gives boards genuine assurance.",
    challenges: [
      "Internal controls failing to keep pace with rapid business growth",
      "High incidence of leakages, stock variances, or process bypasses across distributed operations",
      "Low board or audit committee comfort on regulatory compliance and operational safety"
    ],
    approach: [
      "Develop a risk-based internal audit universe focusing on high-risk transaction cycles",
      "Deep-dive testing of transactions, system controls, and physical checks",
      "Collaborate with process owners to establish permanent, automated controls rather than temporary patches"
    ],
    deliverables: [
      "Risk-Based Internal Audit Reports & Executive Summaries",
      "Internal Financial Controls (IFC) Framework & Testing Matrix",
      "Process-level GAP registers and corrective action plans (CAPA)",
      "Audit Committee presentation packages"
    ],
    benefits: [
      "Enhanced assurance for boards, promoters, and external regulators",
      "Substantial cost recoveries from identified process leakages and asset misallocations",
      "A culture of strong internal control and risk awareness across teams"
    ],
    industriesServed: ["Manufacturing", "Banking & NBFCs", "Healthcare & Pharmaceuticals", "Retail & Consumer", "Logistics & Supply Chain", "Hospitality", "Industrial Enterprises"]
  },
  {
    id: "enterprise-risk-management",
    category: "Governance & Risk",
    title: "Enterprise Risk Management",
    description: "Structured ERM frameworks that help organisations identify, assess, prioritise and monitor strategic, operational, financial and compliance risks.",
    challenges: [
      "Siloed approach to risk where individual departments manage risks in isolation",
      "Lack of early-warning risk indicators resulting in fire-fighting when issues erupt",
      "Difficulty in connecting board-level risk tolerance with daily operational decision-making"
    ],
    approach: [
      "Conduct comprehensive enterprise risk assessment workshops with senior leadership",
      "Co-create a pragmatic Enterprise Risk Management policy and structured registry",
      "Design clear, actionable Key Risk Indicators (KRIs) with defined escalation triggers"
    ],
    deliverables: [
      "Enterprise Risk Policy & Charter",
      "Corporate Risk Register & Risk Map (Heatmaps)",
      "Key Risk Indicator (KRI) Dashboard specifications",
      "Business Continuity Planning (BCP) guidelines"
    ],
    benefits: [
      "Proactive instead of reactive response to strategic and operational shocks",
      "Unified definition of corporate risk profile and appetite across business lines",
      "Improved allocation of capital to activities within defined risk boundaries"
    ],
    industriesServed: ["Financial Services", "Manufacturing", "Infrastructure", "Energy & Renewables", "Technology", "Healthcare & Pharmaceuticals", "Industrial Enterprises"]
  },
  {
    id: "corporate-governance",
    category: "Governance & Risk",
    title: "Corporate Governance & Board Advisory",
    description: "Advisory to boards, promoters and audit committees on governance structures, charters, composition and practices.",
    challenges: [
      "Balancing family interest with professional management in promoter-driven firms",
      "Ensuring boards spend time on strategic oversight rather than administrative details",
      "Designing effective succession plans and independent board feedback loops"
    ],
    approach: [
      "Objective assessment of existing board structures, charter allocations, and committee operations",
      "Formulate solid family constitutions, board charters, and clear delegation matrices",
      "Facilitate constructive board evaluation cycles and independent director inputs"
    ],
    deliverables: [
      "Corporate Governance Charters & Delegation of Authority (DoA) matrices",
      "Board Committee Charters (Audit, NRC, Risk Committees)",
      "Family Business Governance Constitutions",
      "Board Effectiveness Evaluation methodologies"
    ],
    benefits: [
      "Protected promoter interests coupled with professional market reputation",
      "Enhanced trust among minority shareholders, lenders, and rating agencies",
      "Efficient board processes focused on long-term value creation"
    ],
    industriesServed: ["Listed Companies", "Family Businesses", "Financial Services", "Manufacturing", "Technology", "Healthcare & Pharmaceuticals", "Private Equity Portfolio Companies"]
  },
  {
    id: "corporate-strategy",
    category: "Strategy & Transformation",
    title: "Corporate Strategy & Growth Strategy",
    description: "Strategy development that connects market opportunity to executable roadmaps, portfolio choices and growth pathways.",
    challenges: [
      "Declining margins in legacy product lines without clear future avenues",
      "Disconnection between high-level board visions and middle-management execution",
      "Difficulty prioritising competing growth avenues (geographic expansion vs. product extensions)"
    ],
    approach: [
      "Conduct deep analysis of market sizes, competitive landscapes, and core internal assets",
      "Establish structured multi-year strategic plans with clearly bounded focus vectors",
      "Build rigorous economic models to compare ROI across competing initiatives"
    ],
    deliverables: [
      "3-to-5 Year Corporate Strategic Blueprint",
      "Growth Vector Analysis and Market Entry Blueprints",
      "Resource allocation and Capex priority plans",
      "Execution dashboards and corporate scorecard indicators"
    ],
    benefits: [
      "Unified direction for the executive team and business unit leaders",
      "Pragmatic growth roadmap focused strictly on high-ROI vectors",
      "Systematic avoidance of expensive, off-strategy projects"
    ],
    industriesServed: ["Manufacturing", "Consumer & Retail", "Technology", "Healthcare & Pharmaceuticals", "Financial Services", "Infrastructure", "Emerging Enterprises"]
  },
  {
    id: "business-transformation",
    category: "Strategy & Transformation",
    title: "Business Transformation, BPR & SOP Development",
    description: "Process re-engineering and SOP development that translates strategic intent into disciplined, repeatable and measurable execution.",
    challenges: [
      "High dependency on key individuals leading to operational bottlenecks",
      "Inconsistent process execution resulting in customer complaints and variance",
      "Inefficient manual handoffs causing high turnaround times and cost leakage"
    ],
    approach: [
      "As-Is process mapping to locate bottlenecks, leakages, and non-value-adding loops",
      "Design standard To-Be workflows based on lean practices and digitization capability",
      "Collaborative development of highly visual, plain-language Standard Operating Procedures (SOPs)",
      "Hands-on training and monitoring to ensure operational adoption"
    ],
    deliverables: [
      "As-Is Process Diagnosis & Opportunity Register",
      "To-Be Process Blueprints",
      "Comprehensive Standard Operating Procedures (SOP) Library",
      "Process Performance Dashboards (SLA & TAT targets)"
    ],
    benefits: [
      "Institutionalised operational knowledge, eliminating reliance on key individuals",
      "Dramatic reduction in cycle times (TAT) and waste metrics",
      "Consistent quality of service delivery leading to elevated customer scores"
    ],
    industriesServed: ["Manufacturing", "Healthcare & Pharmaceuticals", "Logistics & Supply Chain", "Retail & Consumer", "Hospitality", "Financial Services", "Shared Services"]
  },
  {
    id: "digital-transformation",
    category: "Strategy & Transformation",
    title: "Digital Transformation & Performance Improvement",
    description: "Digital and performance improvement advisory that identifies technology-enabled and operational levers to improve productivity, margins and decision-making speed.",
    challenges: [
      "Fragmented IT landscapes with legacy systems that do not talk to each other",
      "Manual data compilation causing delayed, retroactive decision-making",
      "Failure of previous expensive software implementations due to low user adoption"
    ],
    approach: [
      "Independent IT landscape review focusing on process coverage and integration potential",
      "Formulate modular, high-impact digital transformation roadmaps (ERP, CRM, Analytics)",
      "Design executive management dashboards (MIS) to stream unified operational truth",
      "Serve as independent client advocates during vendor selection and system design"
    ],
    deliverables: [
      "Digital Blueprint & IT Architecture Strategy",
      "Vendor RFP documents and Selection Evaluation Matrix",
      "Executive MIS Dashboard prototypes and metrics specs",
      "Adoption tracking metrics and governance models"
    ],
    benefits: [
      "Technology spends tied directly to tangible operational performance metrics",
      "Single version of operational truth available for leadership in real-time",
      "Vastly accelerated decision-making speed across the enterprise"
    ],
    industriesServed: ["Manufacturing", "Technology", "Financial Services", "Retail & Consumer", "Logistics & Supply Chain", "Healthcare & Pharmaceuticals", "Professional Services"]
  },
  {
    id: "virtual-cfo",
    category: "Financial Advisory",
    title: "Virtual CFO & Cost Optimisation Advisory",
    description: "Outsourced CFO capability and structured cost optimisation for growing businesses that need institutional-grade financial discipline.",
    challenges: [
      "Lack of senior financial oversight leading to poor cash flow management",
      "Undefined costing structures resulting in sales that erode overall margins",
      "Inability to present institutional-grade financials to banks, lenders, or investors"
    ],
    approach: [
      "Deploy experienced corporate finance professionals to establish immediate control",
      "Re-engineer working capital cycles, cash flow forecasting, and debt structures",
      "Implement product-level profitability testing and systematic cost reviews"
    ],
    deliverables: [
      "Monthly Financial Performance Dashboard & MIS",
      "Rolling Cash Flow Forecast Models",
      "Profitability analysis report by product/customer/region",
      "Cost reduction and expense optimization register"
    ],
    benefits: [
      "Professional-grade corporate financial management at a fraction of full-time cost",
      "Improved cash flow visibility and reduction in interest costs",
      "Higher readiness for growth capital audits or bank reviews"
    ],
    industriesServed: ["MSMEs", "Family Businesses", "Manufacturing", "Consumer Businesses", "Technology", "Healthcare & Pharmaceuticals", "Professional Services"]
  },
  {
    id: "turnaround-advisory",
    category: "Financial Advisory",
    title: "Turnaround & Family Business Advisory",
    description: "Advisory for businesses under financial or operational stress and family enterprises navigating succession, governance and professionalisation.",
    challenges: [
      "Eroding liquidity and severe debt-service pressures",
      "Promoter fatigue and lack of viable internal succession plans",
      "Inter-generational conflicts regarding professionalisation and strategic paths"
    ],
    approach: [
      "Quick diagnostic of core cash leaks and quick-win liquidity recovery levers",
      "Formulate realistic debt restructuring proposals for presentation to lenders",
      "Structured mediation and succession alignment workshops for family business leaders",
      "Establish formal family governance codes and next-generation induction paths"
    ],
    deliverables: [
      "Liquidity Recovery & Cash Conservation Plan",
      "Lender Restructuring Proposal & Business Viability Model",
      "Family Business Constitution and Governance Charter",
      "Professionalisation and Leadership Succession Roadmap"
    ],
    benefits: [
      "Immediate stabilization of liquidity to protect enterprise continuity",
      "Restored trust among lending institutions and operational vendors",
      "Secured family legacy and clean leadership transition to the next generation"
    ],
    industriesServed: ["Family Businesses", "Manufacturing", "Consumer Businesses", "Real Estate", "Hospitality", "Trading Enterprises", "Mid-Market Companies"]
  },
  {
    id: "business-facilitation",
    category: "Growth & Partnerships",
    title: "Business Facilitation & Strategic Partnerships",
    description: "Facilitation of investment opportunities, joint ventures and strategic partnerships connecting promoters, investors and operating partners.",
    challenges: [
      "Difficulty finding trustworthy joint venture or operating partners in new geographies",
      "Structuring complex partnerships that protect local promoter control and IP",
      "High cultural or communication gaps during deal framing leading to early friction"
    ],
    approach: [
      "Deep search for partners with complementary assets, values, and objectives",
      "Design balanced governance structures for joint ventures (JV)",
      "Act as neutral advisors to align commercial incentives and settle early friction areas"
    ],
    deliverables: [
      "Joint Venture & Partnership Opportunity Matrix",
      "Commercial Term Sheets & Alliance Frameworks",
      "Strategic Fit Evaluation Report",
      "Alliance governance models"
    ],
    benefits: [
      "Substantially lower risk of partnership breakup or operational deadlocks",
      "Protected IP and commercial interests of the local promoter",
      "Access to premium operational, technological, or market reach"
    ],
    industriesServed: ["Manufacturing", "Technology", "Infrastructure", "Healthcare & Pharmaceuticals", "Consumer Brands", "Financial Services", "International Businesses"]
  },
  {
    id: "project-monitoring",
    category: "Growth & Partnerships",
    title: "Project & Independent Monitoring",
    description: "Independent monitoring of capital projects and lender-funded programmes, giving financiers, investors and boards objective assurance on progress, cost and compliance.",
    challenges: [
      "Large-scale capital project delays leading to massive interest-during-construction (IDC) spikes",
      "Diversion or inefficient utilization of funds raised for project execution",
      "Asymmetric progress reporting from contractors (EPC) to lenders or investors"
    ],
    approach: [
      "Physical site inspections paired with objective verification of work completed",
      "Independent audit of vendor bills, payment disbursements, and material reconciliations",
      "Objective project milestone and cost-to-complete forecasting models"
    ],
    deliverables: [
      "Independent Engineer / Monitor Periodic Progress Reports",
      "Funds End-Use Verification Certificates",
      "Project Cost-to-Complete & Cash Drawdown Forecasts",
      "Technical, commercial, and schedule risk registers"
    ],
    benefits: [
      "Protected capital for lenders and institutional project sponsors",
      "Early visibility into execution bottlenecks allowing swift intervention",
      "High compliance with lender-dictated covenants and escrow arrangements"
    ],
    industriesServed: ["Infrastructure", "Real Estate", "Manufacturing", "Renewable Energy", "Industrial Projects", "EPC", "Capital Projects"]
  },
  {
    id: "business-expansion",
    category: "Growth & Partnerships",
    title: "Business Expansion Strategy",
    description: "Structured advisory for organisations planning geographic, category or capacity expansion with disciplined phased execution.",
    challenges: [
      "Expanding blindly into unfamiliar geographies resulting in severe capital loss",
      "Underestimating local regulatory compliance, hiring costs, or competitor reactions",
      "Over-extending management bandwidth and neglecting the profitable core business"
    ],
    approach: [
      "Data-driven location attractiveness mapping and market assessment",
      "Analyze regulatory hurdles, tax environments, and distribution options",
      "Formulate phased, risk-bounded entry blueprints (Organic vs. Partnership vs. M&A)"
    ],
    deliverables: [
      "Market Feasibility Study & Entry Strategy",
      "Phased Business Expansion Blueprint",
      "Operational Readiness checklist",
      "Financial projection models for new markets"
    ],
    benefits: [
      "Lower capital-at-risk through phased, milestone-based investment strategies",
      "In-depth local regulatory and market familiarity before committing capital",
      "Optimised deployment of corporate bandwidth and funds"
    ],
    industriesServed: ["Consumer & Retail", "Manufacturing", "Technology", "Healthcare & Pharmaceuticals", "Food & Beverage", "Hospitality", "D2C & Growth Businesses"]
  },
  {
    id: "mfo-family-office-advisory",
    category: "MFO & Investment Services",
    title: "Multi Family Office (MFO) Advisory",
    description: "Institutional-grade advisory for business families, promoters and ultra-high-net-worth individuals seeking an integrated approach to wealth governance, family governance, investment oversight and long-term value preservation.",
    challenges: [
      "Fragmented wealth oversight",
      "Lack of institutional governance",
      "Multi-generational succession complexity"
    ],
    approach: [
      "Family office framework design",
      "Governance and reporting structure",
      "Independent strategic oversight"
    ],
    deliverables: [
      "Family Office Blueprint",
      "Governance Framework",
      "Investment Governance Structure"
    ],
    benefits: [
      "Professional wealth governance",
      "Better decision-making",
      "Sustainable long-term family wealth"
    ],
    industriesServed: ["Family Businesses", "Promoters", "HNIs", "UHNW Families", "Business Groups"]
  },
  {
    id: "investment-advisory-capital-allocation",
    category: "MFO & Investment Services",
    title: "Investment Advisory & Capital Allocation",
    description: "Strategic investment support across private markets, capital allocation, investment evaluation and portfolio oversight, helping clients deploy capital with discipline and long-term focus.",
    challenges: [
      "Poor capital allocation",
      "Limited access to quality opportunities",
      "Unstructured portfolio decisions"
    ],
    approach: [
      "Opportunity screening",
      "Investment evaluation",
      "Portfolio review support",
      "Capital allocation strategy"
    ],
    deliverables: [
      "Investment Assessment Reports",
      "Portfolio Review Framework",
      "Capital Allocation Roadmap"
    ],
    benefits: [
      "Better investment discipline",
      "Improved portfolio visibility",
      "Stronger capital allocation"
    ],
    industriesServed: ["Family Offices", "HNIs", "Promoters", "Entrepreneurs", "Investors"]
  },
  {
    id: "wealth-structuring-legacy-planning",
    category: "MFO & Investment Services",
    title: "Wealth Structuring & Legacy Planning",
    description: "Strategic advisory for preserving, governing and transferring wealth across generations through robust governance structures and succession planning.",
    challenges: [
      "Succession uncertainty",
      "Family governance conflicts",
      "Wealth fragmentation"
    ],
    approach: [
      "Family governance advisory",
      "Succession planning coordination",
      "Wealth structuring support"
    ],
    deliverables: [
      "Succession Roadmap",
      "Family Governance Charter",
      "Legacy Planning Framework"
    ],
    benefits: [
      "Smooth generational transition",
      "Stronger governance",
      "Long-term wealth preservation"
    ],
    industriesServed: ["Business Families", "Family Offices", "Promoters", "Legacy Enterprises", "Private Capital Families"]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  { id: "mfg", name: "Manufacturing", description: "Discrete & Process manufacturing operations aiming for process re-engineering and transaction growth.", iconName: "Factory" },
  { id: "chem", name: "Distilleries & Chemicals", description: "Compliance-heavy, high-investment process sectors needing robust project monitoring and partner facilitation.", iconName: "Flask" },
  { id: "energy", name: "Renewable Energy", description: "Independent monitoring, transactions, and joint venture advisory for green energy assets.", iconName: "Sun" },
  { id: "infra", name: "Infrastructure & Engineering", description: "Independent monitoring and strategic transaction advisory for large capital projects and EPC contracts.", iconName: "HardHat" },
  { id: "healthcare", name: "Healthcare & Hospitals", description: "Operational SOP development, patient-flow optimization, and risk management for healthcare networks.", iconName: "Activity" },
  { id: "pharma", name: "Pharmaceutical & Medical Devices", description: "Rigorous quality controls, governance systems, and transaction advice for health science producers.", iconName: "ShieldAlert" },
  { id: "retail", name: "Retail & FMCG", description: "SOP designs, digital transformation, inventory control, and expansion strategies for distribution networks.", iconName: "ShoppingBag" },
  { id: "food", name: "Food Processing", description: "Process mapping, quality standard systems, and supply-chain efficiency audits.", iconName: "Utensils" },
  { id: "tech", name: "Technology & SaaS", description: "Valuation, investment facilitation, digital advisory, and financial modeling for high-growth tech firms.", iconName: "Cpu" },
  { id: "re", name: "Real Estate", description: "Capital project monitoring, funds verification, and family asset restructuring.", iconName: "Building" },
  { id: "nbfc", name: "NBFC & Financial Services", description: "Internal audits, governance, and enterprise risk systems for lenders and financial firms.", iconName: "Briefcase" },
  { id: "prof", name: "Professional Services", description: "Organizational structures, partner frameworks, and digital support models.", iconName: "Layers" },
  { id: "hospitality", name: "Hospitality", description: "SOP development, brand-owner alignment, cost-management reviews, and audit controls.", iconName: "Coffee" },
  { id: "edu", name: "Education", description: "Institutional governance, capacity expansion planning, and control framework setups.", iconName: "GraduationCap" },
  { id: "msme", name: "MSME & Family Business", description: "Virtual CFO advisory, successor induction, family constitutions, and professionalisation strategies.", iconName: "Users" }
];

export const FRAMEWORKS_DATA: FrameworkItem[] = [
  {
    id: "transaction-lifecycle",
    title: "Transaction Lifecycle",
    subtitle: "A structured, risk-mitigated deal execution path from alignment through integration.",
    steps: [
      { title: "Origination & Scan", description: "Define corporate growth parameters, compile blind candidate lists, and execute highly confidential warm reaches." },
      { title: "Structuring & Value Design", description: "Evaluate tax effects, define optimal funding combinations, and model transaction outcomes under varied conditions." },
      { title: "Commercial & Operational Diligence", description: "Deep-dive target commercial position, verify customer asset quality, and trace operational efficiency/margin safety." },
      { title: "Strategic Negotiation", description: "Formulate negotiation agendas, address valuation gaps via earn-outs or milestones, and support definitive terms creation." },
      { title: "Closing & Handover", description: "Verify all conditions precedent (CPs) are resolved and oversee the physical fund flow and secure closing protocol." },
      { title: "Post-Merger Integration", description: "Deploy 100-day integration plans focusing on cultural alignment, reporting consolidation, and synergy capture tracking." }
    ]
  },
  {
    id: "execution-framework",
    title: "Execution Framework (The Veridades Core)",
    subtitle: "How we move beyond standard advisory to drive tangible client execution.",
    steps: [
      { title: "Diagnose", description: "Undertake rapid root-cause analyses, process mapping, and commercial data auditing to isolate true performance blockers." },
      { title: "Design", description: "Build custom, practical target operating models, robust workflows, and visual standard operating procedures (SOPs)." },
      { title: "Mobilise", description: "Align key stakeholders, deliver team training, and establish clear corporate steering protocols." },
      { title: "Execute", description: "Provide direct client-side execution support, tracking weekly performance against clear project milestones." },
      { title: "Sustain", description: "Embed automated control checks, transfer key operational capability, and execute independent compliance reviews." }
    ]
  },
  {
    id: "governance-framework",
    title: "Governance Framework",
    subtitle: "Building institutional trust and structural resilience.",
    steps: [
      { title: "Structure & Charter Definition", description: "Define clear scopes of authority, board composition norms, and structured committee charters." },
      { title: "Policy Alignment", description: "Create plain-language operational policies, code of ethics, and explicit family/corporate governance standards." },
      { title: "Oversight & Review Cadence", description: "Design executive dashboard streams to help board committees focus on long-term strategy and material risk elements." },
      { title: "Assurance & Control Systems", description: "Implement risk-based internal reviews and testing structures to give promoters absolute operational comfort." }
    ]
  },
  {
    id: "business-transformation",
    title: "Business Transformation Model",
    subtitle: "Translating strategic goals into repeatable daily operations.",
    steps: [
      { title: "Assess & Benchmark", description: "Benchmark current operational cost structures, cycle times, and resource utilization metrics against peer levels." },
      { title: "Reimagine Workflows", description: "Strip out non-value-adding administrative tasks and design high-velocity operating paths." },
      { title: "Redesign Controls", description: "Build risk-checks directly into digital steps to eliminate human variance." },
      { title: "Implement & Train", description: "Work directly on the shop floor or in back offices to coach team members through updated SOPs." },
      { title: "Institutionalise", description: "Tie performance scorecards to the updated process KPIs to secure continuous compliance." }
    ]
  },
  {
    id: "value-creation",
    title: "Value Creation Cycle",
    subtitle: "Our framework for unlocking trapped equity and cash value.",
    steps: [
      { title: "Identify Value Leaks", description: "Analyze customer churn, process scrap levels, inventory holding periods, and vendor pricing structures." },
      { title: "Prioritise Actions", description: "Map opportunities on an Ease of Execution vs. EBITDA Impact matrix to isolate quick wins." },
      { title: "Execute Optimisations", description: "Deploy small, focused sprints to streamline operations and recover cash leakages." },
      { title: "Measure Impact", description: "Quantify bottom-line improvements directly in monthly cash flow Statements." },
      { title: "Reinvest in Growth", description: "Channel recovered cash into funding core market expansions and tech investments." }
    ]
  },
  {
    id: "client-journey",
    title: "Client Engagement Journey",
    subtitle: "A professional, step-by-step collaborative journey.",
    steps: [
      { title: "Discover & Assess", description: "Conduct brief, confidential consultations to map operational pains, deal criteria, or risk exposures." },
      { title: "Propose Custom Scope", description: "Design a crystal-clear, milestone-defined proposal with structured pricing and clear execution goals." },
      { title: "Deliver with Rigour", description: "Deploy senior-led teams to drive diagnostics, model build, or hands-on implementation support." },
      { title: "Sustain & Transition", description: "Systematically transfer execution capability to internal teams and conduct standard post-project health reviews." }
    ]
  },
  {
    id: "business-maturity",
    title: "Business Maturity Model",
    subtitle: "Diagnosing and elevating organizational operational discipline.",
    steps: [
      { title: "Ad Hoc (Level 1)", description: "Highly chaotic, founder-reliant processes with inconsistent customer deliverables and high leakage." },
      { title: "Defined (Level 2)", description: "Documented processes and basic policies, with primary workflows stabilized and understood." },
      { title: "Managed (Level 3)", description: "Systems-driven operations monitored via clear KPIs, dashboards, and independent internal reviews." },
      { title: "Optimised (Level 4)", description: "Continuous improvement embedded, with digitised workflows driving high-speed decision-making." }
    ]
  }
];

export const LEADERSHIP_DATA: LeaderItem[] = [
  {
    id: "nitin-sharma",
    name: "Nitin Sharma",
    role: "Managing Partner",
    bio: "Nitin Sharma leads Veridades Consulting's corporate advisory and transaction practice, with experience across transaction advisory, business facilitation, governance and business transformation. He advises promoters and enterprises on strategic growth, operational improvement, commercial decision-making and complex business transactions.",
    email: "nitin.sharma@veridadesconsulting.com",
    expertise: [
      "Mergers & Acquisitions Advisory",
      "Transaction Advisory & Due Diligence",
      "Business Facilitation & Strategic Partnerships",
      "Corporate Governance",
      "Business Transformation"
    ],
    credentials: ["Managing Partner, Veridades Consulting", "Delhi & Jaipur"]
  },
  {
    id: "sanket-kulshrestha",
    name: "Sanket Kulshrestha",
    role: "Co-Managing Partner",
    bio: "Sanket Kulshrestha specializes in corporate strategy, business setup advisory, startup consulting, enterprise risk, internal audit, process setup, SOP development and business transformation. He partners with founders and organisations to strengthen governance, redesign processes, improve performance and build scalable businesses.",
    email: "sanket.kulshrestha@veridadesconsulting.com",
    expertise: [
      "Corporate Strategy & Business Setup Advisory",
      "Startup Consulting",
      "Enterprise Risk & Internal Audit",
      "Process Setup & SOP Development",
      "Business Transformation"
    ],
    credentials: ["Co-Managing Partner, Veridades Consulting", "Delhi & Jaipur"]
  },
  {
    id: "aditi-aggarwal",
    name: "CA Aditi Aggarwal",
    role: "Executive Partner – Indirect Tax & Regulatory Advisory",
    bio: "CA Aditi Aggarwal leads the firm's Indirect Tax and Regulatory Advisory practice, with expertise in GST, UAE VAT, tax litigation, regulatory compliance and tax transformation. She advises businesses on tax governance, dispute resolution, restructuring, compliance automation and commercially practical tax solutions.",
    email: "aditi.aggarwal@veridadesconsulting.com",
    expertise: [
      "GST Advisory & Compliance",
      "UAE VAT",
      "Tax Litigation & Dispute Resolution",
      "Regulatory Compliance & Restructuring",
      "Tax Transformation & Compliance Automation"
    ],
    credentials: ["Chartered Accountant (CA)", "Executive Partner, Veridades Consulting"]
  }
];

export const ENGAGEMENTS_DATA: EngagementItem[] = [
  {
    id: "renewable-energy",
    category: "Renewable Energy / Ethanol",
    title: "Strategic Advisory for an Ethanol Manufacturing Transaction",
    challenge: "A promoter-led ethanol manufacturer required independent advisory on a strategic transaction involving new capacity investment and partner selection.",
    approach: "Structured opportunity assessment, valuation analysis and hands-on negotiation support through to closing.",
    outcome: "Transaction closed on favourable terms with a well-structured partnership and clear governance arrangements."
  },
  {
    id: "infrastructure",
    category: "Infrastructure",
    title: "Business Facilitation for an Investment Opportunity",
    challenge: "An infrastructure developer sought capital and a strategic partner to fund the next phase of project expansion.",
    approach: "Targeted investor mapping, structured facilitation and negotiation support aligned to the developer’s objectives.",
    outcome: "Investment secured from a strategically aligned partner within an accelerated timeline."
  },
  {
    id: "manufacturing",
    category: "Manufacturing",
    title: "Operational Transformation Programme",
    challenge: "A multi-site manufacturer faced inconsistent processes, quality variance and rising operating costs.",
    approach: "End-to-end process re-engineering, SOP development and performance tracking across all sites.",
    outcome: "Meaningful improvement in efficiency and consistency, with a sustainable performance-management system in place."
  },
  {
    id: "nbfc",
    category: "NBFC",
    title: "Internal Audit & Control Framework Implementation",
    challenge: "A growing NBFC needed a robust internal audit function to strengthen assurance for its board and regulators.",
    approach: "Risk-based internal audit programme design, control testing and audit committee reporting cadence.",
    outcome: "Strengthened control environment and materially improved board-level assurance."
  },
  {
    id: "family-business",
    category: "Family Business / Manufacturing",
    title: "Corporate Restructuring & Transaction Support",
    challenge: "A family-owned manufacturing group required restructuring to separate business lines ahead of a planned transaction.",
    approach: "Corporate restructuring design, governance framework and transaction readiness support.",
    outcome: "Clean corporate structure achieved, positioning the group for a successful transaction process."
  },
  {
    id: "healthcare",
    category: "Healthcare",
    title: "Enterprise Risk Framework Implementation",
    challenge: "A hospital network lacked a structured enterprise-wide view of strategic and operational risk.",
    approach: "Enterprise risk workshops, risk register design and quarterly monitoring dashboards.",
    outcome: "Board-level risk oversight established with early visibility of emerging risks."
  }
];
