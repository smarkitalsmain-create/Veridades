import { useState, useEffect } from "react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";
import { SectionHeader } from "./Common";
import { CheckCircle2, ChevronRight, AlertCircle, TrendingUp, Sparkles, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ServicesView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  // Filtered services
  const categories = ["All", "Transaction Advisory", "Governance & Risk", "Strategy & Transformation", "Financial Advisory", "Growth & Partnerships", "MFO & Investment Services"];

  const filteredServices = SERVICES_DATA.filter(
    (s) => selectedCategory === "All" || s.category === selectedCategory
  );

  // If the currently selected service is filtered out, select the first available filtered service
  useEffect(() => {
    if (filteredServices.length > 0 && !filteredServices.find((s) => s.id === selectedServiceId)) {
      setSelectedServiceId(filteredServices[0].id);
    }
  }, [selectedCategory, filteredServices, selectedServiceId]);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <div className="bg-white min-h-screen py-12 md:py-16">
      <div className="container mx-auto md:px-8 lg:px-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Advisory Catalog"
          title="Execution-Led Solutions Across Six Pillars"
          description="We combine deep analytical research with hands-on process management to safeguard, restructure, and grow client corporate assets."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-border-grey overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-sans uppercase tracking-wider font-semibold transition-all shrink-0 rounded-xs ${
                selectedCategory === cat
                  ? "bg-navy-900 text-white shadow-sm"
                  : "bg-soft-grey text-navy-900/80 hover:bg-border-grey hover:text-navy-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Split Layout for Desktop / Stack for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Service List Selector (4 Cols on Large) */}
          <div className="lg:col-span-5 space-y-3 max-h-[750px] lg:overflow-y-auto pr-2 custom-scrollbar">
            <span className="micro-caps text-gray-400 block mb-3 px-1">
              Select Advisory Line ({filteredServices.length})
            </span>
            {filteredServices.map((service) => {
              const isActive = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-5 border transition-all flex items-center justify-between rounded-xs group ${
                    isActive
                      ? "bg-navy-900 text-white border-navy-900 shadow-md"
                      : "bg-white text-navy-900 border-border-grey hover:border-gold-600 hover:bg-gray-50"
                  }`}
                >
                  <div className="pr-4">
                    <span className={`micro-caps text-[9px] block mb-1.5 ${
                      isActive ? "text-gold-400" : "text-gold-600"
                    }`}>
                      {service.category}
                    </span>
                    <h3 className="serif-heading text-sm md:text-base font-semibold leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isActive
                        ? "text-gold-400 translate-x-1"
                        : "text-navy-900/40 group-hover:text-gold-600 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Master Detail View Panel (7 Cols on Large) */}
          <div className="lg:col-span-7 bg-soft-grey border border-border-grey p-8 md:p-12 shadow-sm rounded-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Header Info */}
                <div>
                  <span className="micro-caps text-gold-600 border border-gold-300 bg-gold-100/30 px-3 py-1 mb-3 rounded-xs inline-block">
                    {activeService.category}
                  </span>
                  <h2 className="serif-heading text-2xl md:text-3xl lg:text-4xl font-light text-navy-900 leading-tight">
                    {activeService.title}
                  </h2>
                  <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed font-sans">
                    {activeService.description}
                  </p>
                </div>

                {/* Grid of Challenges vs Approach */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border-grey">
                  {/* Challenges Column */}
                  <div>
                    <h4 className="flex items-center gap-2 serif-heading text-base font-semibold text-navy-900 mb-4 border-b border-border-grey pb-2">
                      <AlertCircle size={16} className="text-red-500" />
                      <span>Client Challenges</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeService.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed font-sans">
                          <span className="h-1.5 w-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach Column */}
                  <div>
                    <h4 className="flex items-center gap-2 serif-heading text-base font-semibold text-navy-900 mb-4 border-b border-border-grey pb-2">
                      <TrendingUp size={16} className="text-navy-900" />
                      <span>Our Approach</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeService.approach.map((approach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed font-sans">
                          <span className="h-1.5 w-1.5 bg-gold-600 rounded-full mt-1.5 shrink-0" />
                          <span>{approach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Grid of Deliverables vs Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border-grey">
                  {/* Deliverables Column */}
                  <div>
                    <h4 className="flex items-center gap-2 serif-heading text-base font-semibold text-navy-900 mb-4 border-b border-border-grey pb-2">
                      <Sparkles size={16} className="text-gold-600" />
                      <span>Key Deliverables</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeService.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-navy-900 font-sans font-semibold">
                          <CheckCircle2 size={13} className="text-gold-600 mt-0.5 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Column */}
                  <div>
                    <h4 className="flex items-center gap-2 serif-heading text-base font-semibold text-navy-900 mb-4 border-b border-border-grey pb-2">
                      <Award size={16} className="text-gold-600" />
                      <span>Client Benefits</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed font-sans">
                          <span className="text-gold-600 mt-0.5 shrink-0">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Industries Served Column */}
                <div className="pt-6 border-t border-border-grey">
                  <h4 className="serif-heading text-sm font-semibold text-navy-900 mb-3 uppercase tracking-wider">
                    Core Industries Served
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeService.industriesServed.map((ind, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-navy-900 border border-border-grey px-3 py-1.5 text-[10px] md:text-xs font-sans tracking-wide font-medium"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
