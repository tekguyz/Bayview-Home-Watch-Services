"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Check, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function TrustPanel() {
  const guarantees = [
    {
      title: "Regular Home Checks",
      description: "Meticulous structural walkthrough schedules tailored strictly to elite South Florida properties."
    },
    {
      title: "Complete Peace of Mind",
      description: "Immediate WhatsApp check-ins and structured digital logs following every single visual review."
    },
    {
      title: "Local. Reliable. Detail Obsessed.",
      description: "A certified home watch professional tracking air pressure, climate drift, and hidden safety boundaries."
    },
    {
      title: "VIP Property Treatment",
      description: "Because a high-value coastal estate deserves far more than a casual, distant glance over the fence."
    }
  ];

  return (
    <section 
      id="trust" 
      className="py-20 lg:py-28 bg-brand-sand border-b border-brand-navy/10 relative overflow-hidden"
    >
      {/* Dynamic ambient grid background mimics blueprint precision */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,34,49,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,34,49,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Warm sunburst radiant highlight */}
      <div className="absolute top-[20%] left-[80%] w-[450px] h-[450px] rounded-full bg-brand-gold/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-teal/8 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Visual Showcase (Mascot / Chief Relaxation Officer representation) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Playful Floating Thought Bubble */}
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-6 self-end mr-4 lg:mr-10 z-20"
            >
              <div className="bg-brand-sand border-2 border-brand-navy p-4 rounded-3xl shadow-xl max-w-[220px] text-center relative font-sans after:content-[''] after:absolute after:bottom-[-10px] after:right-[30px] after:w-3 after:h-3 after:bg-brand-sand after:border-r-2 after:border-b-2 after:border-brand-navy after:rotate-45">
                <span className="text-sm font-bold text-brand-navy leading-tight block">
                  I take my job very <span className="text-brand-teal font-extrabold underline decoration-brand-teal">paws-on</span>. 🐾
                </span>
              </div>
              <div className="absolute bottom-[-16px] right-[40px] w-2 h-2 rounded-full bg-brand-sand border border-brand-navy" />
              <div className="absolute bottom-[-24px] right-[46px] w-1 h-1 rounded-full bg-brand-sand border border-brand-navy" />
            </motion.div>

            {/* Main Picture Wrapper */}
            <div className="relative w-full aspect-square max-w-[420px] sm:max-w-[460px] md:max-w-[400px] lg:max-w-full">
              
              {/* Decorative offset borders */}
              <div className="absolute -inset-2.5 rounded-[32px] border-2 border-brand-teal/30 pointer-events-none animate-pulse" />
              <div className="absolute inset-2.5 rounded-[22px] border border-brand-gold/40 pointer-events-none" />

              {/* Chief Relaxation Officer Portrayed Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-sand bg-brand-navy/5 group">
                <Image 
                  src="https://images.unsplash.com/photo-1626736637845-53045bb9695b?q=80&w=711"
                  alt="A beautiful Golden Retriever dog relaxing in a coastal resort lounge chair by the water, wearing a tan baseball cap and sunglasses, holding a coffee mug that says 'Home Watch Boss'"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Glassmorphic Tag */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-brand-navy/90 border border-brand-sand/15 text-[10px] font-extrabold uppercase tracking-widest text-brand-gold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
                  <span>Chief Relaxation Officer</span>
                </div>
              </div>

              {/* Rustic wood sign replica */}
              <motion.div 
                initial={{ opacity: 0, rotate: -4, y: 15 }}
                whileInView={{ opacity: 1, rotate: -2, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                className="absolute bottom-[-30px] right-2 sm:right-6 md:right-4 lg:-right-8 bg-brand-navy text-brand-sand border-2 border-brand-gold px-6 py-4 rounded-xl shadow-2xl max-w-[280px]"
              >
                <div className="text-center">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-1">Our Professional Verdict</div>
                  <span className="font-extrabold text-sm sm:text-base text-brand-sand tracking-wide block leading-tight uppercase font-mono">
                    &ldquo;ALL CLEAR. YOU&apos;RE GOOD. <br />
                    <span className="text-brand-gold">GO ENJOY LIFE!&rdquo;</span>
                  </span>
                  <div className="mt-1 flex justify-center text-brand-teal">
                    <Heart className="h-4.5 w-4.5 fill-current" />
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Right Column: High-Trust Copywriting & VIP Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left mt-10 lg:mt-0">
            
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-3.5 py-1.5 border border-brand-teal/20 mb-6 self-start">
              <Sparkles className="h-4 w-4 text-brand-teal" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-navy">
                Meticulous South Florida Local Advocacy
              </span>
            </div>

            {/* Giant catchy, flyer-accurate headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight leading-[1.1] max-w-2xl">
              Someone&apos;s Gotta Make Sure Your <span className="text-brand-teal inline-block transform hover:scale-[1.01] transition-transform origin-left duration-300">Paradise</span> Doesn&apos;t Turn Into a <span className="text-brand-gold">Project!</span>
            </h2>

            <p className="mt-6 text-[15px] sm:text-lg text-brand-navy/85 font-medium leading-relaxed max-w-2xl">
              While you are soaking up sunshine up north or traveling the globe, we are physically walking your Broward County luxury residence. No delayed reports, no casual gloss-overs—just meticulous verification by local professionals who treat your keys like pure gold.
            </p>

            {/* Highly customized premium list block */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-brand-navy/10">
              {guarantees.map((item, index) => (
                <div key={index} className="flex gap-3 items-start group">
                  <div className="h-6 w-6 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors duration-300">
                    <Check className="h-3.5 w-3.5 stroke-[3.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-brand-navy leading-snug group-hover:text-brand-teal transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-brand-navy/70 leading-relaxed mt-1 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badging Details */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full border-2 border-brand-sand bg-brand-navy flex items-center justify-center text-brand-sand text-xs font-black">BW</div>
                <div className="h-10 w-10 rounded-full border-2 border-brand-sand bg-brand-teal flex items-center justify-center text-brand-navy text-xs font-black">FL</div>
                <div className="h-10 w-10 rounded-full border-2 border-brand-sand bg-brand-gold flex items-center justify-center text-brand-navy text-xs font-black">HW</div>
              </div>

              <div>
                <p className="text-xs font-black text-brand-navy tracking-tight uppercase">
                  Fully Bonded & Insured Watchkeepers
                </p>
                <div className="flex items-center gap-1.5 text-brand-navy/60 text-[10px] uppercase font-bold mt-0.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-teal fill-current shrink-0" />
                  <span>Licensed Home Monitoring Service Proxy</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
