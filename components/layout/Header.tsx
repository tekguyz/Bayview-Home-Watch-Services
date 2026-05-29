"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to apply elevated background blur layers
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY === 0) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active page sections using a highly accurate IntersectionObserver
  useEffect(() => {
    const sections = ["home", "problems", "services", "trust", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Triggers active assignment near the upper center of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (window.scrollY === 0) {
        setActiveSection("home");
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "problems", label: "Why Us" },
    { id: "services", label: "Our Services" },
    { id: "trust", label: "Our Standard" },
    { id: "contact", label: "Get in Touch" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled 
          ? "border-brand-navy/10 bg-brand-sand/95 backdrop-blur-md shadow-sm h-14 md:h-16" 
          : "border-transparent bg-brand-sand h-16 md:h-20"
      }`}
    >
      <div className="relative z-50 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          
          <a href="#home" className="flex items-center gap-2.5 group py-1 animate-fade-in">
            <svg 
              className="h-9 w-auto md:h-10 shrink-0 transform transition-transform group-hover:scale-105 duration-300 text-brand-teal" 
              viewBox="7 9 50 39" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
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
                className="stroke-brand-navy" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              {/* Main house frame */}
              <path 
                d="M 18 32 V 46 H 44 V 32.5" 
                stroke="currentColor" 
                className="stroke-brand-navy" 
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
                className="stroke-brand-navy" 
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
                className="stroke-brand-navy" 
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
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-black tracking-widest text-brand-navy leading-none transition-colors duration-300 group-hover:text-brand-teal uppercase">
                Bayview
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-navy/60 leading-none mt-1 whitespace-nowrap">
                Home Watch Services
              </span>
            </div>
          </a>

          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2 ${
                    isActive ? "text-brand-teal" : "text-brand-navy/80 hover:text-brand-teal"
                  }`}
                >
                  {link.label}
                  
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-brand-teal transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`} 
                  />
                </a>
              );
            })}
            
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-brand-sand hover:bg-brand-teal hover:text-brand-navy shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.587 4.587l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
          </nav>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full text-brand-navy md:hidden hover:bg-brand-navy/5 focus:outline-none transition-colors border border-brand-navy/10"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-full h-0.5 bg-current rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      
      <div
        className={`fixed inset-x-0 bottom-0 z-40 w-full bg-brand-sand border-t border-brand-navy/10 md:hidden transition-all duration-300 shadow-2xl ${
          isScrolled ? "top-14 h-[calc(100dvh-3.5rem)]" : "top-16 h-[calc(100dvh-4rem)]"
        } ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2 px-6 pt-6 pb-20 h-full justify-start overflow-y-auto bg-brand-sand">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                onClick={() => setIsOpen(false)}
                href={`#${link.id}`}
                className={`flex items-center justify-between text-xl font-bold p-4 transition-all duration-300 ${
                  isActive 
                    ? "text-brand-teal border-l-4 border-brand-teal pl-6 bg-transparent" 
                    : "text-brand-navy hover:bg-brand-navy/5 hover:text-brand-teal/80 border-l-4 border-transparent pl-4"
                }`}
              >
                <span>{link.label}</span>
                <svg className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            );
          })}
          
          <div className="mt-auto pt-6 border-t border-brand-navy/10">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-teal py-4 text-center font-bold text-brand-navy shadow-md transition-colors hover:bg-brand-teal-dark"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.587 4.587l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call Professional Dispatch</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
