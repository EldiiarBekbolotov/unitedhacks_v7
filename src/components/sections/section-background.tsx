"use client";

import React from "react";

type Variant = "grid" | "dots" | "glow" | "glow-bottom" | "gradient-stripes" | "hero";

interface SectionBackgroundProps {
  variant: Variant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Renders subtle background accents (grid, dots, glows) for section variety.
 * Use as a wrapper or sibling with absolute positioning.
 */
export function SectionBackground({ variant, className = "" }: SectionBackgroundProps) {
  const base = "absolute inset-0 pointer-events-none overflow-hidden";
  const classes = `${base} ${className}`.trim();

  if (variant === "grid") {
    return (
      <div aria-hidden className={classes}>
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div aria-hidden className={classes}>
        <div className="absolute inset-0 bg-dots-pattern" />
      </div>
    );
  }

  if (variant === "glow") {
    return (
      <div aria-hidden className={classes}>
        <div className="absolute inset-0 bg-glow-orb" />
      </div>
    );
  }

  if (variant === "glow-bottom") {
    return (
      <div aria-hidden className={classes}>
        <div className="absolute inset-0 bg-glow-orb-bottom" />
      </div>
    );
  }

  if (variant === "gradient-stripes") {
    return (
      <div aria-hidden className={classes}>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              125deg,
              transparent,
              transparent 40px,
              #E495F9 40px,
              #E495F9 42px
            )`,
          }}
        />
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div aria-hidden className={classes}>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#9937FE]/20 blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#E495F9]/15 blur-[80px] animate-float" />
        <div className="absolute inset-0 bg-scanlines" />
      </div>
    );
  }

  return null;
}
