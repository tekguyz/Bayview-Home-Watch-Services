"use client";

import { motion } from "motion/react";
import { Droplets, ThermometerSun, Trees, Bug, HelpCircle, ShieldAlert } from "lucide-react";

export default function ProblemSolver() {
  const risks = [
    {
      icon: Droplets,
      title: "Plumbing Failures",
      description: "A minor seal failure under a kitchen sink can escalate into catastrophic flooding, destroying custom wood flooring and structural drywall within days.",
      badge: "High Risk",
      badgeColor: "text-red-500 bg-red-500/10 border-red-500/20"
    },
    {
      icon: ThermometerSun,
      title: "HVAC & Humidity Spikes",
      description: "In South Florida's intense heat, an air conditioning compressor block breeds dangerous humidity levels, inviting toxic mold to take root across porous finishes.",
      badge: "Mold Hazard",
      badgeColor: "text-brand-gold bg-brand-gold/10 border-brand-gold/20"
    },
    {
      icon: Trees,
      title: "Landscaping Overgrowth",
      description: "Rapid tropical growth can block drainage systems, damage visual structural components, and signal to intruders that the homeowners are away.",
      badge: "HOA Compliance",
      badgeColor: "text-brand-teal bg-brand-teal/10 border-brand-teal/20"
    },
    {
      icon: Bug,
      title: "Pest & Intruder Entry",
      description: "Without daily human activity, secondary pests settle in quickly, while unnoticed structural cracks or minor roof damages allow water to seep in.",
      badge: "Structural Decay",
      badgeColor: "text-orange-500 bg-orange-500/10 border-orange-500/20"
    }
  ];

  return (
    <section id="problems" className="py-20 lg:py-28 bg-brand-sand border-b border-brand-navy/10 relative overflow-hidden">
      {/* Decorative vertical lines mimicking precision drafting grids */}
      <div className="absolute inset-y-0 left-10 w-[1px] bg-brand-navy/3 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-10 w-[1px] bg-brand-navy/3 pointer-events-none hidden lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20">
            Real Risks. Professional Protection.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight mt-6 leading-tight">
            Heading North shouldn&apos;t mean crossing your fingers.
          </h2>
          
          <div className="mt-6 flex items-center justify-center gap-2 max-w-2xl mx-auto">
            <span className="h-[1px] w-12 bg-brand-teal shrink-0" />
            <p className="text-base sm:text-lg text-brand-navy/70 font-medium">
              Because a nosy neighbor is well-meaning... but they aren&apos;t structural experts.
            </p>
            <span className="h-[1px] w-12 bg-brand-teal shrink-0" />
          </div>
        </div>

        {/* Dynamic Risk & Mitigation Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
          
          {/* Comparison Side Box */}
          <div className="lg:col-span-4 bg-brand-navy text-brand-sand rounded-2xl p-8 shadow-xl border border-brand-sand/10 relative self-stretch flex flex-col justify-between">
            <div className="absolute top-4 right-4 text-brand-teal/10 scale-150">
              <HelpCircle className="h-24 w-24 shrink-0" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal block mb-2">The Critical Contrast</span>
              <h3 className="text-2xl font-black text-brand-sand leading-tight">Neighbor Favors vs. Professional Vigilance</h3>
              <p className="text-sm font-light text-brand-sand/70 mt-4 leading-relaxed">
                Relying on a casual friend or neighbor to look after a multi-million dollar asset often leads to delayed responses. A quick walk-through can overlook hidden plumbing pressure changes, humidity drift, or early pest infestations.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-brand-sand/15 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 border border-brand-teal/20">
                <ShieldAlert className="h-5 w-5 text-brand-teal" />
              </div>
              <p className="text-xs text-brand-teal font-semibold">
                Bayview provides rigorous, systemized visual property auditing on every single visit.
              </p>
            </div>
          </div>

          {/* Core Risk Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {risks.map((risk, index) => {
                const IconComponent = risk.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-brand-sand rounded-xl p-6 border border-brand-navy/5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-teal/40 hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* Tiny background glow */}
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-brand-teal/2 blur-2xl group-hover:bg-brand-teal/5 transition-all duration-300" />
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-12 w-12 rounded-xl bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-sand group-hover:border-transparent transition-all duration-350">
                        <IconComponent className="h-5 w-5 shrink-0" />
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full border ${risk.badgeColor}`}>
                        {risk.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-brand-navy group-hover:text-brand-teal transition-colors duration-300">
                      {risk.title}
                    </h4>
                    
                    <p className="text-sm font-medium text-brand-navy/70 leading-relaxed mt-2">
                      {risk.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom trust-reinforcing action bar */}
        <div className="text-center">
          <p className="text-xs font-semibold text-brand-navy/60 uppercase tracking-widest">
            Don&apos;t wait for a crisis to find out your home is in danger.
          </p>
        </div>

      </div>
    </section>
  );
}
