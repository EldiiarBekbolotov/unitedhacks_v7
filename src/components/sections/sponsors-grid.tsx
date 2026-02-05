"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

const SponsorsGrid = () => {
  const sponsors = {
    tier1: [
      {
        name: "YRI Fellowship",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://yrifellowship.org/",
        padding: "p-12"
      },
      {
        name: "Pega6",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://pega6.com/",
        padding: "p-12"
      },
      {
        name: "CodeCrafters",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://codecrafters.io/",
        padding: "p-12"
      }
    ],
    tier2: [
      {
        name: "FeatherlessAI",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://featherless.ai/",
        padding: "p-4"
      },
      {
        name: "Interview Cake",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://www.interviewcake.com/",
        padding: "p-4"
      },
      {
        name: "Balsamiq",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://balsamiq.com/",
        padding: "p-4"
      },
      {
        name: "CoCalc",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://cocalc.com/",
        padding: "p-4"
      }
    ],
    tier3: [
      {
        name: "AoPS",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://artofproblemsolving.com/",
        padding: "p-2"
      },
      {
        name: "GenXYZ",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://gen.xyz/",
        padding: "p-2"
      },
      {
        name: "HHKB",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://hhkb.io/",
        padding: "p-2"
      },
      {
        name: "Interview Buddy",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://interviewbuddy.in/",
        padding: "p-2"
      },
      {
        name: "LaunchX",
        logo: "https://unitedhacksv6.hackunited.org/yribg.png",
        url: "https://launchx.com/",
        padding: "p-2"
      }
    ]
  };
  

  return (
    <div id="sponsors" className="relative flex flex-col items-center justify-center bg-jh-purple-deep text-jh-white py-16 px-4 overflow-hidden">
      <SectionBackground variant="dots" className="opacity-70" />
      <SectionBackground variant="glow-bottom" className="opacity-40" />

      {/* Title Section */}
      <motion.div
        className="relative whitespace-nowrap mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="absolute top-1 left-1 text-2xl sm:text-5xl md:text-7xl font-bold font-jersey text-[#9937FE] opacity-80">
          Sponsors
        </h2>
        <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE]">
          Sponsors
        </h2>
      </motion.div>

      {/* Sponsors Grid Containers */}
      <div className="w-full max-w-7xl space-y-12 flex flex-col items-center z-10">
        
        {/* Tier 1 Grid */}
        <motion.div
          className="w-[75%] space-y-6 z-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.08 }}
        >
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {sponsors.tier1.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white shadow-lg rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer min-h-[180px] md:min-h-[250px] ${sponsor.padding}`}
              >
                <div className="relative w-full h-full max-w-[500px] max-h-[150px]">
                  <Image
                    alt={sponsor.name}
                    src={sponsor.logo}
                    fill
                    className="object-contain transition-opacity duration-300 hover:opacity-90"
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tier 2 Grid */}
        <motion.div
          className="w-[85%] max-w-5xl z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-jersey text-jh-white/90 mb-6 text-center">
            Silver
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {sponsors.tier2.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white shadow-lg rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer min-h-[120px] md:min-h-[160px] ${sponsor.padding}`}
              >
                <div className="relative w-full h-full max-w-[200px] max-h-[80px]">
                  <Image
                    alt={sponsor.name}
                    src={sponsor.logo}
                    fill
                    className="object-contain transition-opacity duration-300 hover:opacity-90"
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tier 3 Grid */}
        <motion.div
          className="w-[90%] max-w-5xl z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-jersey text-jh-white/90 mb-6 text-center">
            Bronze
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {sponsors.tier3.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white shadow-lg rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl cursor-pointer min-h-[100px] md:min-h-[120px] ${sponsor.padding}`}
              >
                <div className="relative w-full h-full max-w-[140px] max-h-[60px]">
                  <Image
                    alt={sponsor.name}
                    src={sponsor.logo}
                    fill
                    className="object-contain transition-opacity duration-300 hover:opacity-90"
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship CTA */}
        <motion.p
          className="text-center font-nunito text-jh-white/95 text-base sm:text-lg max-w-2xl mt-12 z-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Interested in supporting our event? Email{" "}
          <a
            href="mailto:humans@hackunited.org"
            className="text-jh-pink hover:text-jh-yellow transition-colors underline underline-offset-2"
          >
            humans@hackunited.org
          </a>{" "}
          to view our full sponsorship prospectus and to see how you can get your
          product/service in front of thousands of coders.
        </motion.p>
      </div>
    </div>
  );
};

export default SponsorsGrid;