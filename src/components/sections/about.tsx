"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-start text-jh-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* First 35vh transparent so hero’s solid #1a0930 shows through (no second layer, no line) */}
      <div className="absolute top-[35vh] left-0 right-0 bottom-0 z-[1] pointer-events-none bg-jh-purple-deep">
        <SectionBackground variant="dots" />
      </div>
      <SectionBackground variant="glow-bottom" className="opacity-60 z-[1]" />

      {/* Section Title with Retro Shadow Effect */}
      <motion.div
        className="relative mb-12 sm:mb-16 md:mb-20 text-center z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
          <h2 
            className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 text-4xl sm:text-5xl md:text-7xl font-bold font-jersey text-[#9937FE] opacity-80 select-none whitespace-nowrap"
            aria-hidden="true"
          >
            About United Hacks
          </h2>
          <h2 className="relative text-4xl sm:text-5xl md:text-7xl font-bold font-jersey text-jh-white drop-shadow-[4px_4px_0px_rgba(153,55,254,0.8)] whitespace-nowrap">
            About United Hacks
          </h2>
      </motion.div>

      {/* Arcade/Browser Window Container */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
          <div className="relative rounded-xl overflow-hidden shadow-[8px_8px_0px_#290F3F] border-[4px] border-[#290F3F]">
            {/* Title Bar */}
            <div className="bg-[#3B1C5B] py-3 px-4 border-b-2 border-[#290F3F] flex items-center justify-start gap-2">
              <div className="w-3 h-3 bg-[#FF5F56] rounded-full border border-[rgba(0,0,0,0.2)]"></div>
              <div className="w-3 h-3 bg-[#FFBD2E] rounded-full border border-[rgba(0,0,0,0.2)]"></div>
              <div className="w-3 h-3 bg-[#27C93F] rounded-full border border-[rgba(0,0,0,0.2)]"></div>
            </div>

            {/* Content Area - solid background (no gradient) */}
            <div 
              className="p-6 sm:p-8 md:p-12 min-h-[300px] bg-[#E8C4F0]"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
                {/* Text Content */}
                <div className="w-full md:w-[60%] text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-jersey font-bold text-[#300060] leading-tight mb-4 uppercase">
                    The Global High School Hackathon
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-nunito text-[#300060] leading-relaxed mb-6">
                    Join thousands of students globally for the 7th edition of United Hacks. 
                    Whether you're a beginner or a pro, United Hacks is the perfect place to learn, build, and connect with a global community. 
                    With $50,000+ in prizes, expert mentors, and workshops from industry leaders, you'll have everything you need to bring your wildest ideas to life.
                  </p>
                  
                  {/* Video Link Placeholder */}
                  <div className="mt-4">
                    <a 
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#300060] text-white font-jersey text-2xl rounded-sm hover:bg-[#4C0973] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Watch the Trailer
                    </a>
                  </div>
                </div>

              {/* Image Container */}
              <div className="w-full sm:w-[50%] md:w-[32%] flex-shrink-0">
                <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#300060]/20">
                  <Image
                    src="/logo_main.webp"
                    alt="Hackathon Participants"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;