import { useState } from "react";
import { FRAMEWORKS_DATA } from "../data";
import { SectionHeader } from "./Common";
import { ChevronRight, ArrowRight, Layers, Workflow, ShieldCheck, Compass, Gauge, Landmark, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FrameworksView() {
  const [activeFrameworkId, setActiveFrameworkId] = useState<string>(FRAMEWORKS_DATA[0].id);

  const activeFramework = FRAMEWORKS_DATA.find((f) => f.id === activeFrameworkId) || FRAMEWORKS_DATA[0];

  // Map appropriate icons for each framework sidebar tab
  const getFrameworkIcon = (id: string) => {
    switch (id) {
      case "transaction-lifecycle":
        return <Workflow size={16} />;
      case "execution-framework":
        return <Gauge size={16} />;
      case "governance-framework":
        return <ShieldCheck size={16} />;
      case "business-transformation":
        return <Layers size={16} />;
      case "value-creation":
        return <Award size={16} />;
      case "client-journey":
        return <Compass size={16} />;
      case "business-maturity":
        return <Landmark size={16} />;
      default:
        return <ChevronRight size={16} />;
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto md:px-8 lg:px-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Methodology"
          title="Proprietary Advisory Frameworks"
          description="We run every corporate advisory mandate through structured, repeatable, and rigorously tested execution templates."
        />

        {/* Layout Grid: Sidebar Selector on Left, Interactive Diagram on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sidebar Selector */}
          <div className="lg:col-span-4 space-y-2">
            <span className="micro-caps text-gray-400 block mb-3 px-1">
              Advisory Blueprints
            </span>
            {FRAMEWORKS_DATA.map((fw) => {
              const isActive = fw.id === activeFrameworkId;
              return (
                <button
                  key={fw.id}
                  onClick={() => setActiveFrameworkId(fw.id)}
                  className={`w-full text-left p-4 border transition-all flex items-center justify-between rounded-xs group ${
                    isActive
                      ? "bg-navy-900 text-white border-navy-900 shadow-md"
                      : "bg-white text-navy-900 border-border-grey hover:border-gold-600 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? "text-gold-400" : "text-gold-600"}>
                      {getFrameworkIcon(fw.id)}
                    </span>
                    <span className="serif-heading text-xs md:text-sm font-semibold">
                      {fw.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={14}
                    className={`transition-transform ${
                      isActive ? "text-gold-400 translate-x-1" : "text-navy-900/20 group-hover:text-gold-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Step Visualisation Panel */}
          <div className="lg:col-span-8 bg-soft-grey border border-border-grey p-8 md:p-12 shadow-sm rounded-xs min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFramework.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Header block */}
                <div>
                  <span className="micro-caps text-gold-600 border border-gold-300 bg-gold-100/20 px-2 py-0.5 rounded-xs inline-block">
                    METHODOLOGY TEMPLATE
                  </span>
                  <h3 className="serif-heading text-2xl md:text-3xl font-light text-navy-900 mt-3">
                    {activeFramework.title}
                  </h3>
                  {activeFramework.subtitle && (
                    <p className="text-gray-500 font-sans text-xs md:text-sm leading-relaxed mt-2">
                      {activeFramework.subtitle}
                    </p>
                  )}
                </div>

                {/* VISUAL DIAGRAM - Flowchart Timeline style */}
                <div className="relative pl-8 md:pl-12 border-l border-gold-600/30 space-y-12 py-4">
                  {activeFramework.steps.map((step, index) => {
                    const stepNum = index + 1;
                    return (
                      <div key={index} className="relative group">
                        
                        {/* Connecting point node */}
                        <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center">
                          <div className="h-6 w-6 rounded-full bg-navy-900 border border-gold-500 flex items-center justify-center shadow-md transition-all group-hover:scale-110 group-hover:border-white">
                            <span className="micro-caps text-[9px] text-gold-400 font-bold">
                              {stepNum}
                            </span>
                          </div>
                        </div>

                        {/* Step Details */}
                        <div className="bg-white border border-border-grey p-6 shadow-xs rounded-xs group-hover:border-gold-600 transition-colors duration-200">
                          <h4 className="serif-heading text-sm md:text-base font-semibold text-navy-900 mb-2 flex items-center gap-2">
                            <span className="micro-caps text-gold-600 text-[10px]">
                              Phase 0{stepNum}
                            </span>
                            <span className="text-navy-900/30">•</span>
                            <span>{step.title}</span>
                          </h4>
                          <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans">
                            {step.description}
                          </p>
                        </div>

                      </div>
                    );
                  })}
                </div>

                {/* Footer disclaimer summary */}
                <div className="bg-white border-t border-border-grey p-5 text-center text-xs text-gray-500 rounded-xs font-sans">
                  The above methodology remains highly customizable based on the specific transaction size, market complexity, or board timeline parameters.
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
