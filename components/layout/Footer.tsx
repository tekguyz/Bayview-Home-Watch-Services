import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: "problems", label: "Why Us" },
    { id: "services", label: "Our Services" },
    { id: "trust", label: "Our Standard" },
    { id: "contact", label: "Get in Touch" },
  ];

  return (
    <footer className="w-full bg-brand-navy text-brand-sand/90 border-t-2 border-brand-teal/20 relative overflow-hidden">
      {/* Subtle decorative background glow in footer */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-brand-sand/10 pb-16">
          
          {/* Column 1: Brand & Modern Guardian Logo */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2.5 group self-start">
              <div className="h-10 w-10 shrink-0 transform transition-transform group-hover:scale-105 duration-300">
                <svg className="h-full w-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Elegant protective watchful arch */}
                  <path 
                    d="M 8 44 C 8 20, 56 20, 56 44" 
                    stroke="currentColor" 
                    className="stroke-brand-teal" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Minimalist modern luxury sloped-roof house profile */}
                  {/* Roof slab */}
                  <path 
                    d="M 14 34 L 38 22 L 48 30" 
                    stroke="currentColor" 
                    className="stroke-brand-sand" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  {/* Main house frame */}
                  <path 
                    d="M 18 32 V 46 H 44 V 32.5" 
                    stroke="currentColor" 
                    className="stroke-brand-sand" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  {/* Modern vertical glass window pane */}
                  <rect 
                    x="24" 
                    y="36" 
                    width="6" 
                    height="10" 
                    stroke="currentColor" 
                    className="stroke-brand-sand" 
                    strokeWidth="1.5" 
                    rx="1" 
                  />
                  <line 
                    x1="34" 
                    y1="36" 
                    x2="38" 
                    y2="36" 
                    stroke="currentColor" 
                    className="stroke-brand-teal" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                  />

                  {/* Stylized palm tree silhouette */}
                  <path 
                    d="M 49 46 Q 52 38 49 28" 
                    stroke="currentColor" 
                    className="stroke-brand-sand" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 49 28 Q 43 25 39 30 M 49 28 Q 46 20 44 14 M 49 28 Q 53 21 58 24 M 49 28 Q 55 28 58 35" 
                    stroke="currentColor" 
                    className="stroke-brand-teal" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                  />

                  {/* Golden warm coastal sun accent */}
                  <circle cx="32" cy="14" r="3" className="fill-brand-gold stroke-brand-gold" strokeWidth="1" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-widest text-brand-sand leading-none transition-colors duration-300 group-hover:text-brand-teal uppercase">
                  Bayview
                </span>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-teal leading-none mt-1 whitespace-nowrap">
                  Home Watch Services
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-brand-sand/70 max-w-xs">
              Providing professional, detail-obsessed seasonal home watch inspections and trusted concierge services to protect your piece of South Florida paradise while you are away.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold">Quick Navigation</h3>
            <ul className="flex flex-col gap-3 text-sm font-medium text-brand-sand/70">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="hover:text-brand-teal transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Coverage */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold">Service Area</h3>
            <p className="text-sm leading-relaxed text-brand-sand/70">
              Proudly monitoring residential real estate, custom estate lines, and vacation properties from the beach to the bay across <strong className="text-brand-sand font-semibold">{SITE_CONFIG.serviceArea}</strong>.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-brand-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
              <span className="font-bold tracking-wide uppercase">Local Broward County Operators</span>
            </div>
          </div>

          {/* Column 4: Direct Channels */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-brand-teal font-extrabold">Direct Channels</h3>
            <ul className="flex flex-col gap-3 text-sm text-brand-sand/70">
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-sand/40">Secure Call Center</span>
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`} className="hover:text-brand-teal text-brand-sand transition-colors font-extrabold text-base">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-sand/40">Encrypted Email</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-brand-teal text-brand-sand transition-colors break-all font-medium text-xs sm:text-sm">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href={SITE_CONFIG.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-sand/5 px-3 py-1.5 border border-brand-sand/10 text-brand-teal hover:bg-brand-sand/15 transition-all font-medium text-xs"
                >
                  <span>Connect on Facebook</span>
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic bottom details subpanel */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-sand/40 font-bold uppercase tracking-wider">
          <p>© {currentYear} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <svg className="h-4 w-4 text-brand-teal fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.9c0-.496.29-.95.74-1.153l6.5-2.92a1 1 0 01.815 0l6.5 2.92a1.002 1.002 0 011.164 1.153v5.6c0 4.144-2.85 7.82-6.735 9.07a1 1 0 01-.63 0C5.55 18.22 2.7 14.544 2.7 10.4V4.9h-.534z" clipRule="evenodd" />
            </svg>
            <span>Licensed, Bonded & Insured Home Watch Professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
