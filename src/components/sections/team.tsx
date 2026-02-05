"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBackground } from "./section-background";

const teamData = [
  {
    category: "Hack United Leadership",
    members: [
      { name: "Organizing Team", role: "Hack United", image: "/logo_main.webp" },
      { name: "Global Community", role: "Hack United", image: "/logo_main.webp" },
    ]
  },
  {
    category: "Technical Mentors",
    members: [
      { name: "Tech Mentors", role: "Global Experts", image: "/logo_main.webp" },
      { name: "Industry Leaders", role: "Mentorship", image: "/logo_main.webp" },
    ],
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative flex flex-col items-center justify-center bg-jh-purple-deep text-jh-white py-16 px-4 overflow-hidden">
      <SectionBackground variant="grid" className="opacity-60" />
      <SectionBackground variant="glow" className="opacity-30" />

      {/* Section Title */}
      <motion.div
        className="relative whitespace-nowrap mb-12 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="absolute top-0.5 sm:top-1 left-0.5 sm:left-1 text-2xl sm:text-5xl md:text-7xl font-bold font-jersey text-[#9937FE] opacity-80">
          Meet the Team
        </h2>
        <h2 className="text-2xl sm:text-5xl md:text-7xl font-bold font-jersey text-jh-white drop-shadow-[2px_2px_0px_#9937FE]">
          Meet the Team
        </h2>
      </motion.div>

      <motion.div
        className="w-full max-w-7xl space-y-16 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {teamData.map((team, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Category Heading */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-jersey text-[#FCEDFF] mb-8 text-center">
              {team.category}
            </h3>

            {/* Members Grid */}
            <div className={`grid gap-8 justify-items-center w-full px-4 ${
              team.members.length === 2 ? 'grid-cols-2 max-w-sm' : 
              team.members.length === 5 ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : 
              'grid-cols-2 sm:grid-cols-4'
            }`}>
              {team.members.map((member, mIndex) => (
                <div key={mIndex} className="flex flex-col items-center text-center group">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4">
                    <div className="absolute inset-0 rounded-full border-2 border-[#9937FE] transition-all group-hover:scale-105 group-hover:border-[#E495F9]"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100px, 128px"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-jersey text-[#FCEDFF] leading-tight mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base font-nunito text-[#E495F9]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;