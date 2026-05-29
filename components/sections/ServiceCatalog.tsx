"use client";

import { useState } from "react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";

type ServiceItem = {
  title: string;
  description: string;
};

export default function ServiceCatalog() {
  const categories = [
    {
      id: "visualInspections" as const,
      label: "Visual Inspections",
      subtitle: "Periodic Walkthroughs",
      icon: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          <circle cx="12" cy="13" r="2.5" />
          <line x1="13.8" y1="14.8" x2="16.5" y2="17.5" strokeLinecap="round" />
        </svg>
      ),
      items: SERVICES.visualInspections,
      accentText: "5-Point visual checks covering interior, exterior, systems, water, and structural security bounds."
    },
    {
      id: "convenienceUpkeep" as const,
      label: "Convenience & Upkeep",
      subtitle: "Active Residence Presence",
      icon: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="8" cy="12" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 12h8M15 12v3M18 12v3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
        </svg>
      ),
      items: SERVICES.convenienceUpkeep,
      accentText: "Active upkeep chores designed to prevent visual exterior neglect and give your vacant property a lived-in look."
    },
    {
      id: "stormEmergency" as const,
      label: "Storm & Emergency",
      subtitle: "Severe Weather Defenses",
      icon: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l-3.5 4.5h4L10 16.5" />
        </svg>
      ),
      items: SERVICES.stormEmergency,
      accentText: "Dedicated heavy storm preparation, emergency lock-downs, and rapid post-event physical damage scanning with logs."
    },
    {
      id: "conciergeVendor" as const,
      label: "Concierge & Vendors",
      subtitle: "On-Demand Orchestration",
      icon: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l2 2 4-4" />
        </svg>
      ),
      items: SERVICES.conciergeVendor,
      accentText: "Local proxy keyholding, vendor oversight, soft openings, and lockdown protocols so you walk back into a fresh home."
    }
  ];

  const [activeTab, setActiveTab] = useState<typeof categories[number]["id"]>("visualInspections");
  const currentCategoryObj = categories.find((cat) => cat.id === activeTab)!;

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-brand-sand border-b border-brand-navy/10 relative"
    >
      {/* Background aesthetics */}
      <div className="absolute top-[30%] right-[5%] w-[45%] h-[40%] rounded-full bg-brand-teal/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] rounded-full bg-brand-gold/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20">
            Showroom of Protective Oversight
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight mt-6 leading-tight">
            Comprehensive Care Shielding Your Investment
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Choose from visual hazard tracking, everyday convenience upkeep, storm readiness protocols, or vendor orchestration tailored strictly to elite homes in {SITE_CONFIG.serviceArea}.
          </p>
        </div>

        {/* Tab Selection Frame */}
        <div className="flex flex-col gap-10">
          
          {/* Custom Navigation Slider */}
          <div className="w-full flex justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="inline-flex gap-2 p-1.5 rounded-2xl bg-brand-navy/5 border border-brand-navy/15 max-w-full shrink-0">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 relative focus:outline-none shrink-0 ${
                      isActive 
                        ? "text-brand-sand shadow-md" 
                        : "text-brand-navy/70 hover:text-brand-teal"
                    }`}
                  >
                    {isActive && (
                      <motion.span 
                        layoutId="activeServiceTabPill"
                        className="absolute inset-0 bg-brand-navy rounded-xl z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-brand-teal" : ""}`}>
                      {cat.icon}
                    </span>
                    <div className="relative z-10 flex flex-col items-start leading-none text-left">
                      <span className="text-xs sm:text-sm font-extrabold">{cat.label}</span>
                      <span className={`text-[9px] uppercase tracking-wider mt-0.5 font-medium ${isActive ? "text-brand-sand/60" : "text-brand-navy/40"}`}>
                        {cat.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Core Cards Display */}
          <div className="w-full">
            
            {/* Category context intro bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl bg-brand-navy/[0.03] border border-brand-navy/5 mb-8 text-left">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center border border-brand-teal/20 shrink-0">
                  {currentCategoryObj.icon}
                </span>
                <div>
                  <h3 className="text-base font-black text-brand-navy uppercase tracking-wider">{currentCategoryObj.label} Vector</h3>
                  <p className="text-[11px] font-bold text-brand-teal uppercase tracking-widest mt-0.5">Vigilance Guarantee Level 100%</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-brand-navy/70 max-w-md leading-relaxed">
                {currentCategoryObj.accentText}
              </p>
            </div>

            {/* Structured responsive cards layout with standard key layout tracking */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentCategoryObj.items.map((service: ServiceItem, index: number) => (
                  <div
                    key={index}
                    className="group bg-brand-sand rounded-xl p-6 border border-brand-navy/10 shadow-sm hover:shadow-lg hover:border-brand-teal/40 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between text-left"
                  >
                    <div>
                      {/* Accent design highlights */}
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-2 py-0.5 rounded">
                          0{index + 1}
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-navy/20 group-hover:bg-brand-teal transition-colors" />
                      </div>
                      
                      <h4 className="text-lg font-extrabold text-brand-navy tracking-tight leading-tight group-hover:text-brand-teal transition-colors duration-300">
                        {service.title}
                      </h4>
                      
                      <p className="text-sm text-brand-navy/80 hover:text-brand-navy leading-relaxed mt-3 font-medium">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Unified Elegant Trust Banner */}
            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-brand-navy/60 uppercase">
                All services fully licensed, bonded, and insured for your complete protection.
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic CTA box at footer of catalog */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-navy text-brand-sand overflow-hidden relative border border-brand-sand/15 text-left flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div className="absolute top-0 right-0 w-[30%] h-full bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-black text-brand-sand leading-tight">Need a custom tracking plan?</h3>
            <p className="text-sm font-medium text-brand-sand/70 mt-2 leading-relaxed">
              We coordinate bespoke schedules covering multiple walk-throughs per week, special storm parameters, or specific package delivery locks based entirely on your estate&apos;s custom layout constraints.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-6 py-3.5 text-sm font-bold text-brand-navy shadow-md hover:shadow-lg hover:bg-brand-teal/90 transition-all duration-300"
            >
              Configure Custom Checklist
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
