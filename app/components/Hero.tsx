"use client";

import { SITE_META } from "@/lib/data";

const SPECIALIZATIONS = [
  "AV ENGINEER",
  "CINEMA PROJECTION",
  "LASER SYSTEMS",
  "CINEMA SOUND",
  "MULTI-SITE OPERATIONS",
  "DCI COMPLIANCE",
  "BARCO CERTIFIED",
  "CHRISTIE CERTIFIED",
  "DANTE CERTIFIED",
];

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6 lg:px-12 flex flex-col justify-center bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">

        {/* Status Badge */}
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#a67c1e] border border-[#a67c1e]/30 bg-[#a67c1e]/5">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight mb-12 text-[#ffffff]">
          MUKESH<br />KUMAR
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#aaaaaa] font-light mb-6 max-w-[600px]">
          {SITE_META.title}
        </p>

        {/* Mission Statement */}
        <p className="text-base md:text-lg text-[#666666] font-light leading-relaxed max-w-[700px] mb-16">
          Passionate about engineering high-fidelity visual and acoustic experiences across India&apos;s leading multiplex circuits.
          14+ years building reliable, DCI-compliant cinema operations that deliver uncompromised show quality.
        </p>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#666666] scroll-indicator">
          <div className="w-px h-12 bg-[#333333]" />
          <span>SCROLL</span>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-12 left-0 w-full overflow-hidden border-t border-b border-[#222222] py-4 bg-[#0a0a0a]/50 backdrop-blur-sm">
        <div className="marquee">
          <div className="marquee-content flex gap-12">
            {[...SPECIALIZATIONS, ...SPECIALIZATIONS].map((spec, idx) => (
              <span
                key={idx}
                className="text-sm font-medium uppercase tracking-[0.2em] text-[#666666] whitespace-nowrap"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
