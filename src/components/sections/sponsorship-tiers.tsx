"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

const SponsorshipTiers = () => {
  return (
    <section
      id="sponsors"
      className="relative flex flex-col items-center justify-center bg-jh-purple-alt text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 overflow-hidden"
    >
      <SectionBackground variant="grid" className="opacity-80" />
      <SectionBackground variant="glow" className="opacity-50" />
      {/* Visual Tiers (Progress Bars with Pixel Stars) */}
      <motion.div
        className="w-full overflow-x-auto pb-4 -mb-4 scrollbar-hide z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-end gap-4 sm:gap-6 min-w-[300px] px-2 sm:px-0 sm:min-w-0 sm:justify-center">
          
          {/* Tier 1 */}
          <div className="flex flex-col items-center">
            <div className="animate-bounce" style={{ animationDuration: '3s' }}>
              <Image 
                alt="Tier 1 Star" 
                width={144} 
                height={144} 
                className="w-[80px] sm:w-[100px] md:w-[144px] h-auto"
                src="/logo_main.webp"
              />
            </div>
            <Image 
              alt="Tier 1 Bar" 
              width={50} 
              height={100} 
              className="mt-2 w-[30px] sm:w-[40px] md:w-[50px] h-auto"
              src="/logo_main.webp"
            />
          </div>

          {/* Tier 2 */}
          <div className="flex flex-col items-center">
            <div className="animate-bounce" style={{ animationDuration: '3.5s' }}>
              <Image 
                alt="Tier 2 Star" 
                width={112} 
                height={112} 
                className="w-[60px] sm:w-[80px] md:w-[112px] h-auto"
                src="/logo_main.webp"
              />
            </div>
            <Image 
              alt="Tier 2 Bar" 
              width={50} 
              height={130} 
              className="mt-2 w-[30px] sm:w-[40px] md:w-[50px] h-auto"
              src="/logo_main.webp"
            />
          </div>

          {/* Tier 3 */}
          <div className="flex flex-col items-center">
            <div className="animate-bounce" style={{ animationDuration: '2.8s' }}>
              <Image 
                alt="Tier 3 Star" 
                width={96} 
                height={96} 
                className="w-[50px] sm:w-[70px] md:w-[96px] h-auto"
                src="/logo_main.webp"
              />
            </div>
            <Image 
              alt="Tier 3 Bar" 
              width={50} 
              height={110} 
              className="mt-2 w-[30px] sm:w-[40px] md:w-[50px] h-auto"
              src="/logo_main.webp"
            />
          </div>

          {/* Tier 4 */}
          <div className="flex flex-col items-center">
            <div className="animate-bounce" style={{ animationDuration: '4s' }}>
              <Image 
                alt="Tier 4 Star" 
                width={64} 
                height={64} 
                className="w-[40px] sm:w-[50px] md:w-[64px] h-auto"
                src="/logo_main.webp"
              />
            </div>
            <Image 
              alt="Tier 4 Bar" 
              width={50} 
              height={80} 
              className="mt-2 w-[30px] sm:w-[40px] md:w-[50px] h-auto"
              src="/logo_main.webp"
            />
          </div>

        </div>
      </motion.div>

      {/* Title with Retro Shadow */}
      <motion.div
        className="relative mt-6 sm:mt-10 mb-4 sm:mb-6 z-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 
          className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 text-[20px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jersey text-[#9937FE] opacity-80 whitespace-nowrap"
          aria-hidden="true"
        >
          Sponsor the next generation
        </h2>
        <h2 className="relative text-[20px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE] whitespace-nowrap">
          Sponsor the next generation
        </h2>
      </motion.div>

        {/* Description */}
        <p className="text-center text-[14px] sm:text-base md:text-[18px] max-w-[90%] sm:max-w-2xl mt-2 font-mono text-jh-white px-2 leading-relaxed z-10">
          Sponsor United Hacks and join the adventure! Connect with our talented hackers, gain high-score exposure in the tech community, and scout out the top players for your team. Be a game-changer and help shape the future of technology!
        </p>

      {/* Hidden Anchor Padding */}
      <div className="h-4 sm:h-8"></div>
    </section>
  );
};

export default SponsorshipTiers;