"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The navbar appears after scrolling a certain amount (e.g., past the hero or announcement bar)
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navLinks = [
      { name: "About", href: "#about" },
      { name: "Info", href: "#info" },
      { name: "Sponsors", href: "#sponsors" },
      { name: "Register", href: "#register" },
      { name: "FAQ", href: "#faq" },
    ];

    return (
      <>
        {/* Main Sticky Navbar (Hidden by default, slides down on scroll) */}
        <nav
          className={`fixed top-0 left-0 w-full transition-all duration-300 px-8 py-3 z-[1000000] bg-jh-purple-deep/95 backdrop-blur-md border-b border-jh-purple-accent/30 ${
            isScrolled 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          style={{ height: "72px" }}
        >
            <div className="flex justify-between items-center h-full max-w-[1200px] mx-auto">
              <div>
                <a href="#hero" className="font-display text-4xl text-jh-white hover:text-jh-yellow transition-colors" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  United Hacks
                </a>
              </div>

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
        className={`fixed top-16 left-0 w-[40%] h-screen bg-jh-purple-deep z-[50] flex flex-col py-5 px-3 shadow-lg transition-transform duration-300 md:hidden border-r border-jh-purple-accent/30 ${
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