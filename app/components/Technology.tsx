"use client";

const TECH_ECOSYSTEM = [
  {
    id: "01",
    title: "PROJECTION",
    brands: ["Christie", "NEC", "Barco"],
    tagline: "DCI Digital Cinema & Laser Illumination",
    description:
      "End-to-end expertise in digital cinema projection, routine PM schedules, hardware-level fault diagnostics, and Laser Light Upgrades (LLU). Ensuring strict DCI compliance, color calibration (DCI-P3), and target luminance standards across multi-screen multiplex circuits.",
    capabilities: [
      "Christie CineLife & RealLaser RGB systems",
      "Barco Series 2 & Series 4 4K laser platforms",
      "Barco LLU laser retrofit integrations",
      "NEC NC1202 / NC1402 digital cinema laser projectors",
      "Optics alignment, anamorphic/prime lenses & port glass calibration",
      "Xenon lamp-house maintenance & diode thermal management",
    ],
  },
  {
    id: "02",
    title: "CINEMA SERVERS",
    brands: ["GDC", "Qube Cinema", "Dolby"],
    tagline: "DCP Ingestion, Storage & Playback Systems",
    description:
      "Extensive operational mastery of Integrated Media Blocks (IMB), cinema playback workflows, RAID storage health, and forensic watermarking. Implementing automated show cues and robust recovery procedures for zero dark time.",
    capabilities: [
      "Integrated Media Block (IMB) maintenance & diagnostics",
      "DCP ingestion, storage management & integrity checks",
      "KDM key management, security certificate validation & timeline sync",
      "Show automation integration (GPIO, masking, lighting, cues)",
      "Dolby and Qube XP media server administration",
      "Emergency playback failover and log analysis",
    ],
  },
  {
    id: "03",
    title: "CINEMA AUDIO",
    brands: ["Dolby", "Dante", "Q-SYS"],
    tagline: "Multichannel Cinema Sound & Audio Networks",
    description:
      "Configuration, tuning, and signal routing for uncompressed digital audio transport. Aligning auditorium B-chain equalizations and surround delay matrixes to deliver pristine acoustic experiences.",
    capabilities: [
      "AES/EBU digital multichannel transmission & gain staging",
      "Auditorium B-chain equalization & pink noise RTA tuning",
      "Dante Level 1 certified uncompressed digital audio routing",
      "QSC / Q-SYS Cinema 101 core configuration & signal flow",
      "Surround channel delay matrix calibration",
      "Ground loop elimination, rack topology & power sequencing",
    ],
  },
  {
    id: "04",
    title: "AV / CONTROL / NETWORKING",
    brands: ["Lightware", "IP Multicast", "AV-over-IP"],
    tagline: "Enterprise AV Infrastructure & Protocol Control",
    description:
      "Designing and managing centralized video routing matrixes, resilient IP multicast networks, and low-latency transport protocols optimized for mission-critical AV operations.",
    capabilities: [
      "Lightware AV-over-IP Basics Level 1 certified matrix extension",
      "VLAN segregation for booth control vs audio traffic",
      "IP multicast routing, IGMP snooping & QoS priority queuing",
      "PTP master clock synchronization (IEEE 1588)",
      "Centralized matrix routing, failover switching & EDID management",
      "Subnetting & static IP architecture across distributed sites",
    ],
  },
];

export const Technology = () => {
  return (
    <section id="technology" className="py-24 lg:py-40 px-6 lg:px-12 bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

        {/* Title side */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#a0a0a0] block mb-3">
              03 / Systems
            </span>
            <h2 className="text-xl font-medium tracking-tight text-[#000000]">
              Cinema Technology
            </h2>
            <p className="text-sm text-[#666666] mt-3 font-light leading-relaxed">
              Core platforms, hardware ecosystems, and infrastructure standards mastered across 14+ years in digital cinema operations.
            </p>
          </div>
        </div>

        {/* Content side */}
        <div className="md:col-span-8 max-w-[800px]">
          <div className="border-t border-[#000000]">
            {TECH_ECOSYSTEM.map((cat, idx) => (
              <div
                key={cat.id}
                className={`py-12 lg:py-16 ${
                  idx !== TECH_ECOSYSTEM.length - 1 ? "border-b border-[#e5e5e5]" : ""
                }`}
              >
                {/* Category Header */}
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-[#a0a0a0]">
                      {cat.id}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-[#000000]">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Brands strip */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {cat.brands.map((brand) => (
                    <span
                      key={brand}
                      className="text-xs uppercase tracking-wider font-mono px-2.5 py-1 bg-[#ffffff] border border-[#e5e5e5] text-[#000000]"
                    >
                      {brand}
                    </span>
                  ))}
                  <span className="text-xs text-[#888888] font-light ml-2">
                    — {cat.tagline}
                  </span>
                </div>

                {/* Narrative Description */}
                <p className="text-sm lg:text-base text-[#555555] font-light leading-relaxed mb-8">
                  {cat.description}
                </p>

                {/* Capabilities list */}
                <div className="border-l border-[#e5e5e5] pl-6 space-y-2.5">
                  {cat.capabilities.map((cap, i) => (
                    <p key={i} className="text-xs lg:text-sm text-[#666666] leading-relaxed">
                      — {cap}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
