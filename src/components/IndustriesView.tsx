import { INDUSTRIES_DATA } from "../data";
import { SectionHeader } from "./Common";
import * as Icons from "lucide-react";

export default function IndustriesView() {
  
  // Dynamic icon component helper
  const renderIcon = (iconName: string) => {
    // Safely look up icon by name or fall back to standard icons
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className="text-gold-600" size={24} />;
  };

  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto md:px-8 lg:px-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Market Segments"
          title="Industries We Serve"
          description="We work across sectors where strategic decisions, transactions, governance, risk and operating discipline directly influence enterprise value."
        />

        {/* Industrial Focus Statement Panel */}
        <div className="bg-navy-900 text-white p-8 md:p-12 mb-16 rounded-xs flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="max-w-2xl">
            <span className="micro-caps text-gold-400 block mb-2">
              Cross-Disciplinary Sector Value
            </span>
            <h3 className="serif-heading text-xl md:text-2xl font-light mt-2 leading-snug text-white">
              Sectors with Capital-Intensive Projects and High Transaction Volumes Benefit Most From Our Execution-Led Oversight.
            </h3>
          </div>
          <div className="h-px md:h-12 w-12 md:w-px bg-gold-600/40 shrink-0" />
          <div className="text-xs text-gray-300 font-sans max-w-xs leading-relaxed">
            From heavy manufacturing to hospitals, our team operates inside the physical operations, bringing compliance frameworks and deal structures to alignment.
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.id}
              className="bg-white border border-border-grey hover:border-gold-600 hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-start rounded-xs group"
            >
              <div className="p-3.5 bg-soft-grey border border-border-grey group-hover:bg-gold-50 group-hover:border-gold-200/50 transition-colors mb-6 rounded-xs">
                {renderIcon(industry.iconName)}
              </div>
              
              <h3 className="serif-heading text-lg font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                {industry.name}
              </h3>
              
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-sans">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
