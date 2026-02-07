"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
      { name: "About", href: "#about" },
      { name: "Info", href: "#info" },
      { name: "Sponsors", href: "#sponsors" },
      { name: "Register", href: "#register" },
      { name: "FAQ", href: "#faq" },
    ];

    return (
      <>
        {/* Main Sticky Navbar - Always Visible */}
        <nav
          className="fixed top-0 left-0 w-full px-4 sm:px-8 py-3 z-[1000000] bg-jh-purple-deep/95 backdrop-blur-md border-b border-jh-purple-accent/30"
          style={{ height: "72px" }}
        >
            <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto">
              <a 
                href="#hero" 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Image
                  src="/logo_main.webp"
                  alt="United Hacks Logo"
                  width={50}
                  height={50}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
                <span className="font-display text-2xl sm:text-3xl md:text-4xl text-jh-white">
                  United Hacks
                </span>
              </a>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 text-4xl font-display text-jh-white">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-jh-yellow transition-colors"
                  style={{ fontSize: "36px" }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-jh-orange text-3xl z-50 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-8 h-8 text-jh-white"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </nav>


      {/* Mobile Drawer */}
      <div
        className={`fixed top-[72px] left-0 w-[40%] h-screen bg-jh-purple-deep z-[50] flex flex-col py-5 px-3 shadow-lg transition-transform duration-300 md:hidden border-r border-jh-purple-accent/30 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-jh-white hover:text-jh-yellow py-2 font-display text-3xl"
              style={{ fontSize: "30px" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;