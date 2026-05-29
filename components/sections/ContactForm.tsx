"use client";

import { useState, FormEvent } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, ShieldCheck, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
    departureWindow: "",
    specialRequirements: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate direct secure portfolio request with visual grace
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      zipCode: "",
      departureWindow: "",
      specialRequirements: "",
    });
    setStatus("idle");
  };

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-28 bg-brand-sand border-b border-brand-navy/10 relative overflow-hidden text-left"
    >
      {/* Decorative luxury overlay accents */}
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/6 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic header text layout */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20">
            Intake and Security Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mt-6 leading-tight">
            Let&apos;s Keep Your Piece of Paradise Protected
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 font-medium leading-relaxed max-w-2xl mx-auto">
            Tell us a little about your property schedules, and we&apos;ll coordinate a customized checklist tailored precisely to your estate&apos;s needs.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
          
          {/* Left Column: High-trust info panel (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-brand-navy text-brand-sand p-8 rounded-3xl border border-brand-sand/10 shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl" />
              
              <h3 className="text-xl font-bold tracking-tight text-brand-teal mb-4">
                Bayview Direct Line
              </h3>
              
              <p className="text-sm font-light text-brand-sand/80 leading-relaxed mb-8">
                Your keys remain locked in physical security vaults. We are always on call for Broward County seasonal owners needing immediate physical visual auditing.
              </p>

              <div className="flex flex-col gap-5">
                
                {/* Phone Link */}
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center border border-brand-teal/20 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-teal block">Call Us Directly</span>
                    <a 
                      href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                      className="text-sm sm:text-base font-extrabold text-brand-sand hover:text-brand-teal transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                {/* Email Link */}
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center border border-brand-teal/20 group-hover:bg-brand-teal group-hover:text-brand-navy transition-all shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-teal block">Secure Vault Email</span>
                    <a 
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-xs sm:text-sm lg:text-base font-extrabold text-brand-sand hover:text-brand-teal transition-colors break-all block max-w-full leading-tight"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Guarantees overview */}
              <div className="mt-10 pt-6 border-t border-brand-sand/10 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-teal shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide text-brand-teal">
                  Licensed, Bonded & Insured Watchkeepers
                </span>
              </div>
            </div>

            {/* Micro FAQ Trust Card */}
            <div className="bg-brand-navy/[0.03] border border-brand-navy/10 p-6 rounded-2xl">
              <h4 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                What happens next?
              </h4>
              <p className="text-xs text-brand-navy/70 leading-relaxed font-medium">
                Within 12 hours of receiving your property timetable, we will call you to establish your personalized visual checklist points and schedule key transfer protocols securely.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Intake form (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-navy/10 shadow-xl relative min-h-[500px] flex flex-col justify-center">
              
              {status === "success" ? (
                /* Submission Success Reassuring Screen */
                <div className="text-center py-10 max-w-lg mx-auto flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center border-2 border-brand-teal/20 mb-6 shrink-0 animate-bounce">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
                    Security Footprint Received
                  </h3>
                  <p className="text-base text-brand-navy/80 leading-relaxed mt-4 font-medium">
                    Thank you! We have received your security footprint and will call you within 12 hours to finalize your customized seasonal protection portfolio.
                  </p>
                  
                  <button
                    onClick={handleReset}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-brand-sand px-6 py-3 text-sm font-bold text-brand-navy hover:bg-brand-navy/5 transition-all"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* The Active Form Engine */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Form Intro */}
                  <div className="mb-4">
                    <h3 className="text-lg font-extrabold text-brand-navy tracking-tight">
                      Custom Protection Blueprint Form
                    </h3>
                    <p className="text-xs text-brand-navy/60 font-semibold uppercase tracking-wider mt-1">
                      Fill out your property metrics safely
                    </p>
                  </div>

                  {/* Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Owner's Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-extrabold text-brand-navy uppercase tracking-wider">
                        Owner&apos;s Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="border border-brand-navy/15 bg-brand-sand/30 text-brand-navy text-sm font-medium rounded-xl p-4 transition-all duration-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Secure Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-extrabold text-brand-navy uppercase tracking-wider flex items-center gap-2">
                        <span>Secure Contact Phone</span>
                        <span className="text-[10px] text-brand-navy/40 font-bold lowercase italic">(tel link)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(954) 555-0199"
                        className="border border-brand-navy/15 bg-brand-sand/30 text-brand-navy text-sm font-medium rounded-xl p-4 transition-all duration-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Direct Email Address */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-extrabold text-brand-navy uppercase tracking-wider">
                        Direct Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="border border-brand-navy/15 bg-brand-sand/30 text-brand-navy text-sm font-medium rounded-xl p-4 transition-all duration-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Property Zip Code */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="zipCode" className="text-xs font-extrabold text-brand-navy uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-brand-teal" />
                        <span>Florida Property Zip Code</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        placeholder="33301"
                        className="border border-brand-navy/15 bg-brand-sand/30 text-brand-navy text-sm font-medium rounded-xl p-4 transition-all duration-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Estimated Departure / Seasonal Timeline */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="departureWindow" className="text-xs font-extrabold text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-brand-teal" />
                        <span>Estimated Departure Window & Timeline</span>
                      </label>
                      <input
                        type="text"
                        id="departureWindow"
                        required
                        value={formData.departureWindow}
                        onChange={(e) => setFormData({ ...formData, departureWindow: e.target.value })}
                        placeholder="April to October (Seasonal migration window)"
                        className="border border-brand-navy/15 bg-brand-sand/30 text-brand-navy text-sm font-medium rounded-xl p-4 transition-all duration-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Special System Requirements */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="specialRequirements" className="text-xs font-extrabold text-brand-navy uppercase tracking-wider">
                        Special System Requirements
                      </label>
                      <textarea
                        id="specialRequirements"
                        rows={4}
                        value={formData.specialRequirements}
                        onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                        placeholder="Mention critical variables (e.g., custom pool pumps, indoor ferns/palms, vehicle battery tenders, specific solar arrays, strict HOA policies)"
                        className="border border-brand-navy/15 bg-brand-sand/30 text-brand-navy text-sm font-medium rounded-xl p-4 transition-all duration-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:bg-white focus:outline-none resize-none"
                      />
                    </div>

                  </div>

                  {/* Dynamic submission status handling */}
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold">
                      An error occurred securely processing your footprint request. Please call us directly!
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-brand-navy py-4 text-center text-sm font-black text-brand-sand tracking-wide shadow-md transition-all duration-300 hover:bg-brand-teal hover:text-brand-navy hover:-translate-y-0.5 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                  >
                    <span>
                      {status === "submitting" ? "Encrypting Connection..." : "Request Seasonal Protection Portfolio"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Fine Print Secure disclaimer */}
                  <p className="text-center text-[10px] text-brand-navy/40 font-bold uppercase tracking-wider">
                    🔒 No data is ever shared. Fully encrypted property intake coordinates.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
