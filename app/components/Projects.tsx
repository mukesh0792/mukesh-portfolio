"use client";

const PROJECTS = [
  {
    id: "01",
    category: "Multi-Site Operations",
    title: "80+ Screen Cinema Fleet Management",
    stack: "PVR INOX · 80+ Screens · 99%+ Uptime · SLA Control",
    summary:
      "End-to-end technical oversight of projection and sound operations across 80+ multiplex screens for India's largest cinema chain. Structured preventive maintenance protocols that reduced unplanned downtime by 40%.",
    highlights: [
      "99%+ fleet uptime sustained across distributed locations",
      "Centralized PM schedules & engineer rotation rosters",
      "Vendor & OEM coordination for fast-track RMA logistics",
    ],
  },
  {
    id: "02",
    category: "Laser Retrofit",
    title: "Laser Light Upgrade (LLU) Deployments",
    stack: "Barco Series 2 · LLU Retrofit · RGB Laser · DCI-P3",
    summary:
      "Executed retrofit procedures from legacy xenon lamp houses to Laser Light Upgrade (LLU) systems on Barco Series 2 chassis. Achieved 50% power consumption reduction and consistent target luminance (14fL).",
    highlights: [
      "Barco Level 1 LLU certified retrofit procedures",
      "Optical engine realignment & chiller cooling optimization",
      "Zero invalidation of DCI security certificates during upgrade",
    ],
  },
  {
    id: "03",
    category: "Audio Networking",
    title: "Multichannel Cinema Audio over Dante & Q-SYS",
    stack: "Dante Level 1 · Q-SYS Cinema 101 · Dolby Atmos · B-Chain",
    summary:
      "Designed and deployed uncompressed digital audio transport networks across multiplex auditoriums. Configured master clock election (PTP), low-latency routing, and pink noise RTA tuning.",
    highlights: [
      "Dante Level 1 (3rd Edition) certified routing",
      "QSC/Q-SYS Core audio processing & signal flow design",
      "B-chain equalization and surround delay matrix calibration",
    ],
  },
  {
    id: "04",
    category: "Platform Deployment",
    title: "Multi-Brand Digital Cinema Installation",
    stack: "Barco Series 4 · Christie RealLaser · NEC Laser · IMB",
    summary:
      "Delivered complete auditorium commissioning for high-end DCI projection systems across India during 13+ year tenure at Qube Cinema Technologies.",
    highlights: [
      "Level 2 certified diagnostics on Barco Series 4 4K Laser",
      "Christie CineLife & RealLaser safety & alignment certified",
      "NEC NC1202/NC1402 laser projector installation & service",
    ],
  },
  {
    id: "05",
    category: "Content Security",
    title: "Cinema Server & KDM Pipeline Automation",
    stack: "Dolby IMS3000 · Qube XP · GDC IMB · RAID Health",
    summary:
      "Managed cinema server storage arrays, DCP ingestion pipelines, and Key Delivery Message (KDM) workflows ensuring zero dark-screen incidents during critical show hours.",
    highlights: [
      "Integrated Media Block (IMB) diagnostics & tamper recovery",
      "Automated show cues (GPIO, masking, lighting, audio presets)",
      "Forensic watermarking and DCI security compliance",
    ],
  },
  {
    id: "06",
    category: "Enterprise AV",
    title: "AV-over-IP & Network Infrastructure",
    stack: "Lightware AV-over-IP · VLAN Segregation · IGMP · QoS",
    summary:
      "Designed enterprise AV distribution networks with VLAN segregation for booth control vs audio traffic, IP multicast routing, and centralized matrix switching.",
    highlights: [
      "Lightware AV-over-IP Basics Level 1 certified",
      "IGMP snooping & DSCP priority queuing for time-critical AV",
      "Failover switching & emergency audio override integration",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#222222]">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <span className="section-number">( 02 )</span>
            <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-wider text-[#ffffff]">
              SELECTED WORKS /
            </h2>
          </div>
          <div className="w-12 h-px bg-[#a67c1e] mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="border border-[#222222] p-8 lg:p-12 bg-[#111111]/50 hover:border-[#a67c1e]/50 transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left: Number & Category */}
                <div className="lg:col-span-3">
                  <span className="text-4xl lg:text-5xl font-light text-[#333333] group-hover:text-[#a67c1e] transition-colors">
                    {project.id}
                  </span>
                  <div className="mt-4">
                    <span className="text-xs uppercase tracking-widest text-[#a67c1e]">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Middle: Title & Summary */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-[#ffffff]">
                    {project.title}
                  </h3>

                  <div className="text-xs font-mono text-[#666666] tracking-wider uppercase">
                    {project.stack}
                  </div>

                  <p className="text-sm lg:text-base text-[#aaaaaa] font-light leading-relaxed">
                    {project.summary}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-[#222222]">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#888888] flex items-center gap-2">
                        <span className="text-[#a67c1e]">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Action */}
                <div className="lg:col-span-3 flex lg:justify-end items-start">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#aaaaaa] hover:text-[#a67c1e] transition-colors pt-2"
                  >
                    <span>Discuss Project</span>
                    <span>↗</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
