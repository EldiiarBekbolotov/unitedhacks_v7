"use client";

import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

/**
 * Footer component for United Hacks website.
 * Features contact information, social links, and legal/copyright details.
 * Adheres to the dark 'Retro Arcade' aesthetic.
 */
const Footer = () => {
  return (
    <footer className="relative w-full text-jh-white py-16 px-4 sm:px-8 border-t border-jh-purple-alt overflow-hidden mb-0">
      {/* Background image: clipped to footer bounds, fades in from top to bottom */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-none" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url(/bg.png)",
          }}
        />
        {/* Overlay: solid at top to match FAQ, then fades to reveal bg image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(26,9,48,1) 0%, rgba(26,9,48,1) 8%, rgba(26,9,48,0.88) 25%, rgba(26,9,48,0.6) 50%, rgba(26,9,48,0.3) 100%)",
          }}
        />
      </div>
      <SectionBackground variant="grid" className="opacity-40" />
      <SectionBackground variant="glow-bottom" className="opacity-30" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col space-y-8">
            {/* Contact + Social */}
            <div className="space-y-4">
              <p className="font-nunito text-lg">
                Reach out to us at{' '}
                <a 
                  href="mailto:humans@hackunited.org" 
                  className="text-jh-pink hover:text-jh-yellow transition-colors duration-200 underline-offset-4 hover:underline"
                >
                  humans@hackunited.org
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/hack_united/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#FCEDFF] text-[#290F3F] rounded-md transition-all hover:scale-110 hover:bg-[#E495F9]"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/hack-united/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#FCEDFF] text-[#290F3F] rounded-md transition-all hover:scale-110 hover:bg-[#E495F9]"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://discord.gg/YyPDpmDZke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#FCEDFF] text-[#290F3F] rounded-md transition-all hover:scale-110 hover:bg-[#E495F9]"
                aria-label="Discord"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
                </svg>
              </a>
            </div>

            {/* Bottom Bar: Copyright, EIN, and Links */}
            <div className="pt-12 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-nunito border-t border-jh-purple-alt/50">
              <div className="text-center md:text-left space-y-1">
                <div className="text-jh-pink">
                  Copyright © 2026 Hack United. All rights reserved.
                </div>
                <div className="text-jh-white/70">
                  EIN: 81-2908499
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-jh-yellow">
                <a 
                  href="https://unitedhacksv6.hackunited.org" 
                  className="hover:text-jh-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  v6 Site
                </a>
               
              </div>
            </div>

        </div>
      </div>

      {/* Full-width HACK UNITED at very bottom, solid background, no margin-bottom */}
      <div
        className="flex justify-between items-center relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 py-6 px-3 sm:px-6 border-t border-jh-purple-accent/30"
        style={{ width: "100vw", marginBottom: 0, backgroundColor: "var(--color-jh-purple-alt)" }}
      >
        {"HACK UNITED".split("").map((letter, i) => (
          <span
            key={i}
            className="font-display text-jh-white drop-shadow-[2px_2px_0_#9937FE] leading-none shrink-0"
            style={{ fontSize: "clamp(1.25rem, 8vw, 6rem)" }}
          >
            {letter}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;