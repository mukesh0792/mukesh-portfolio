"use client";

import Image from "next/image";
import { SITE_META } from "@/lib/data";

const EDUCATION = [
  {
    institution: "IHT, Moradabad",
    degree: "Diploma in Computer Hardware & Networking",
    period: "2010",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#222222]">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <span className="section-number">( 01 )</span>
            <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-wider text-[#ffffff]">
              ABOUT ME /
            </h2>
          </div>
          <div className="w-12 h-px bg-[#a67c1e] mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-[#111111] border border-[#222222] overflow-hidden">
              <Image
                src="/images/mukesh.jpg"
                alt={SITE_META.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
            </div>

            {/* Quick Details */}
            <div className="mt-8 space-y-4 text-sm text-[#aaaaaa]">
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-[#666666]">ROLE</span>
                <span>Manager – Sound & Projection</span>
              </div>
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-[#666666]">COMPANY</span>
                <span>PVR INOX Limited</span>
              </div>
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-[#666666]">LOCATION</span>
                <span>India</span>
              </div>
              <div className="flex justify-between border-b border-[#222222] pb-2">
                <span className="text-[#666666]">EXPERIENCE</span>
                <span>14+ Years</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Education */}
          <div className="lg:col-span-7 space-y-16">

            {/* Biography */}
            <div className="space-y-6 text-[#aaaaaa] font-light text-base lg:text-lg leading-relaxed">
              <p>
                Hello! I am Mukesh Kumar, a Senior AV and Cinema Projection Engineer with over 14 years
                of experience managing mission-critical digital cinema operations.
              </p>
              <p>
                Currently serving as <span className="text-[#ffffff]">Manager – Sound & Projection at PVR INOX Limited</span>,
                India&apos;s largest multiplex cinema chain, where I oversee projection and sound operations
                across 80+ screens while maintaining a 99%+ operational uptime.
              </p>
              <p>
                Prior to this, I spent 13+ years at <span className="text-[#ffffff]">Qube Cinema Technologies</span> as a Team Coordinator,
                delivering end-to-end installation, commissioning, and maintenance of digital cinema systems
                across multi-site deployments in India.
              </p>
              <p>
                My expertise spans DCI-compliant projection systems (Barco, Christie, NEC), Laser Light Upgrades (LLU),
                cinema servers (Dolby, Qube, GDC), and networked audio protocols including Dante and Q-SYS.
              </p>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-light uppercase tracking-wider text-[#ffffff] mb-8">
                Education /
              </h3>
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="border-l border-[#222222] pl-6 relative">
                    <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-[#a67c1e]" />
                    <span className="text-xs font-mono text-[#666666]">{edu.period}</span>
                    <h4 className="text-base font-medium text-[#ffffff] mt-1">{edu.degree}</h4>
                    <p className="text-sm text-[#aaaaaa] mt-0.5">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#a67c1e] text-[#0a0a0a] text-sm font-medium uppercase tracking-wider hover:bg-[#d4a037] transition-colors"
              >
                Download Full Resume (PDF)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
