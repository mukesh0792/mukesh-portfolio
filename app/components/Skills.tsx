"use client";

const SKILL_GROUPS = [
  {
    title: "PROJECTION & LASER",
    skills: [
      "Barco Series 2 & 4",
      "Christie RealLaser",
      "Christie CineLife",
      "NEC NC1202/1402",
      "Laser Light Upgrade (LLU)",
      "DCI-P3 Color Calibration",
      "Optical Alignment",
      "Luminance Target (14fL)",
      "Lamp Safety & Handling",
      "Optics Maintenance",
    ],
  },
  {
    title: "CINEMA SERVERS & IMB",
    skills: [
      "Dolby IMS3000",
      "Qube Cinema XP",
      "GDC Media Servers",
      "Integrated Media Blocks",
      "DCP Ingestion Pipeline",
      "KDM Key Management",
      "Show Automation & GPIO",
      "RAID Array Diagnostics",
      "Security Certificate Sync",
      "Emergency Failover",
    ],
  },
  {
    title: "AUDIO & ACOUSTICS",
    skills: [
      "Dolby Atmos Processing",
      "Dante Audio over IP",
      "Q-SYS Cinema Core",
      "AES/EBU Multichannel",
      "B-Chain Equalization",
      "Auditorium RTA Tuning",
      "Surround Delay Matrix",
      "Gain Staging",
      "Ground Loop Isolation",
      "Power Sequencing",
    ],
  },
  {
    title: "NETWORKING & AV-IP",
    skills: [
      "Lightware AV-over-IP",
      "IP Multicast & IGMP",
      "PTP Clock Synchronization",
      "VLAN Segregation",
      "QoS Priority Queuing",
      "Matrix Matrixing & EDID",
      "Subnetting & Static IPs",
      "Network Troubleshooting",
      "Fault Diagnostics",
      "Multi-Site Operations",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#222222]">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-2">
            <span className="section-number">( 03 )</span>
            <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-wider text-[#ffffff]">
              SKILLS & PLATFORMS /
            </h2>
          </div>
          <div className="w-12 h-px bg-[#a67c1e] mt-4" />
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="border border-[#222222] p-6 lg:p-8 bg-[#111111]/30 hover:border-[#a67c1e]/40 transition-colors"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#a67c1e] font-mono mb-6">
                {group.title}
              </h3>

              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-[#aaaaaa] font-light hover:text-[#ffffff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#333333] text-xs">▪</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
