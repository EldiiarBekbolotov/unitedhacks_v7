"use client";

import HeroSection from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import TrailerSection from "@/components/sections/trailer";
import AboutSection from "@/components/sections/about";
import InfoSection from "@/components/sections/info";
import SponsorsGrid from "@/components/sections/sponsors-grid";
import RegisterCTA from "@/components/sections/register-cta";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-jh-purple-deep">
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection />
        <TrailerSection />
        <AboutSection />
        <InfoSection />
        <SponsorsGrid />
        <RegisterCTA />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
