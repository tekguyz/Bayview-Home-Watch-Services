"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SITE_CONFIG } from "@/lib/constants";
import { ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center py-16 lg:py-24 overflow-hidden bg-brand-sand border-b border-brand-navy/10"
    >
      {/* Subtle ambient luxury background highlights */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start rounded-full bg-brand-navy/5 px-4 py-2 border border-brand-navy/10 mb-6"
            >
              <ShieldCheck className="h-4 w-4 text-brand-teal shrink-0" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-navy">
                Certified Home Watch Professionals
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-brand-navy"
            >
              Heading Back <br />
              <span className="text-brand-teal">North</span> for the Season?
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-brand-navy/80 leading-relaxed max-w-2xl font-light"
            >
              While you escape the South Florida heat, we keep a precise, protective eye on your property. No surprises, no stress—just complete peace of mind from anywhere.
            </motion.p>

            {/* Micro value badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 grid grid-cols-2 gap-4 max-w-sm pb-8 border-b border-brand-navy/10"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-teal" />
                <span className="text-xs font-bold text-brand-navy/70 uppercase tracking-wider">Broward County Local</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-gold" />
                <span className="text-xs font-bold text-brand-navy/70 uppercase tracking-wider">Licensed & Insured</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-8 py-4 text-base font-bold text-brand-navy shadow-md hover:shadow-xl hover:bg-brand-teal/90 transition-all duration-300 hover:-translate-y-0.5 group"
                id="cta-secure-home"
              >
                <span>Secure My Home</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/20 bg-transparent px-8 py-4 text-base font-bold text-brand-navy hover:bg-brand-navy/5 transition-all duration-300 hover:-translate-y-0.5"
                id="cta-explore-services"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Direct Line Mini Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-6 flex items-center gap-3 text-sm font-semibold text-brand-navy/65"
            >
              <PhoneCall className="h-4 w-4 text-brand-teal shrink-0 animate-pulse" />
              <span>Or call us directly:</span>
              <a 
                href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                className="text-brand-navy hover:text-brand-teal transition-colors font-extrabold underline decoration-brand-teal/40 hover:decoration-brand-teal"
              >
                {SITE_CONFIG.phone}
              </a>
            </motion.div>

          </div>

          {/* Right Column: Premium Structural Visual Frame */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
            
            {/* Background design accents to ground the image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 border border-brand-navy/5 rounded-3xl bg-brand-navy/2 pointer-events-none"
            />

            {/* Outer offset teal ring decorative element */}
            <div className="absolute -top-4 -right-4 w-40 h-40 border-t-2 border-r-2 border-brand-teal/30 rounded-tr-[40px] pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 border-b-2 border-l-2 border-brand-gold/30 rounded-bl-[40px] pointer-events-none hidden sm:block" />

            {/* Primary Framed Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-sand"
            >
              <Image 
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1170"
                alt="Beautiful high-end South Florida family luxury estate with clean coastal lines, palm trees, and bright blue skies"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Compact Floating Protective Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[280px] p-4 rounded-xl bg-brand-navy/90 backdrop-blur-md border border-brand-sand/10 text-brand-sand shadow-xl flex flex-col gap-1 transition-all duration-300 hover:bg-brand-navy/95">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-teal">Patrol Status</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-teal"></span>
                  </span>
                </div>
                <p className="text-sm font-extrabold tracking-tight">Seasonal Monitoring Active</p>
                <p className="text-[10px] text-brand-sand/70 leading-normal">
                  Meticulous interior/exterior inspections & instant digital walkthrough reports.
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
