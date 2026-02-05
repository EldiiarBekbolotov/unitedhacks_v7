"use client";

import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#300060] text-[#FCEDFF] py-4 px-4 text-center relative border-b-2 border-[#E495F9] overflow-hidden">
      {/* Pulse effect layer */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E495F9]/10 to-transparent animate-pulse"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10">
          <p className="text-xl md:text-2xl font-display tracking-wide m-0 p-0 leading-8">
            United Hacks V7 • July 10-12, 2026 • Registration Opening Soon!
          </p>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;