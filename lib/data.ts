// ─── Site-wide content data ────────────────────────────────────────────────
// Single source of truth extracted from Mukesh Kumar's CV.
// Do NOT add anything that isn't explicitly supported by the CV.

export const SITE_META = {
  name: "Mukesh Kumar",
  title: "AV Engineer | Cinema Projection Engineer | Sound & Projection Manager",
  tagline: "14+ Years of Digital Cinema & AV Experience",
  description:
    "Senior AV and Cinema Projection Engineer with 14+ years managing digital cinema projection, laser systems, cinema sound, and multi-site AV operations.",
  positioning: "Digital Cinema • Projection • Laser Systems • Cinema Sound • AV Operations",
  contact: {
    email: "mukesh0792@outlook.com",
    phone: "+91 8279717884",
    linkedin: "https://www.linkedin.com/in/mukesh-kumar-1a42bb23",
    location: "India",
  },
} as const;

export const HERO_STATS = [
  { value: "14+", label: "Years Experience", sublabel: "Digital Cinema & AV" },
  { value: "80+", label: "Screens", sublabel: "Projection & Sound" },
  { value: "99%+", label: "Uptime", sublabel: "Across All Sites" },
  { value: "Multi-Site", label: "AV Operations", sublabel: "Team Leadership" },
] as const;

export const NAV_LINKS = [
  { label: "Home",           href: "#home"            },
  { label: "About",          href: "#about"           },
  { label: "Experience",     href: "#experience"      },
  { label: "Expertise",      href: "#expertise"       },
  { label: "Technology",     href: "#technology"      },
  { label: "Certifications", href: "#certifications"  },
  { label: "Achievements",   href: "#achievements"    },
  { label: "Knowledge",      href: "#knowledge"       },
  { label: "Journal",        href: "#journal"         },
  { label: "Profile",        href: "#profile"         },
  { label: "Contact",        href: "#contact"         },
] as const;

export const ABOUT_HIGHLIGHTS = [
  "Digital Cinema Projection",
  "Laser Projection Systems",
  "Cinema Sound Systems",
  "AV Operations",
  "Preventive Maintenance",
  "Fault Diagnostics & Troubleshooting",
  "Multi-site Operations",
  "Team Leadership",
  "Vendor & RMA Coordination",
  "DCI-Compliant Systems",
  "Installation & Commissioning",
  "Color Calibration",
] as const;

export const CAREER = [
  {
    id: "pvr-inox",
    company: "PVR INOX Limited",
    role: "Manager – Sound & Projection",
    period: "Dec 2024 – Present",
    type: "current",
    companyDesc: "India's largest multiplex cinema chain",
    responsibilities: [
      "Managing projection and sound operations across 80+ screens",
      "Overseeing preventive maintenance schedules and fault diagnostics",
      "Leading and coordinating technical projection teams",
      "Ensuring 99%+ uptime across all projection and sound systems",
      "Coordinating with vendors and OEMs for RMA and support",
      "Implementing DCI-compliant setup and commissioning procedures",
      "Managing installation and commissioning of digital cinema equipment",
      "Monitoring audio signal flow, system calibration, and performance",
    ],
    achievements: [
      "Maintained 99%+ uptime across 80+ screens",
      "Structured preventive maintenance reducing unplanned downtime",
      "Multi-site AV operations leadership",
    ],
  },
  {
    id: "qube",
    company: "Qube Cinema Technologies Pvt. Ltd.",
    role: "Team Coordinator",
    period: "Jul 2011 – Nov 2024",
    type: "previous",
    companyDesc: "Leading digital cinema technology company",
    responsibilities: [
      "Coordinated digital cinema projection and sound operations",
      "Delivered installation and commissioning of digital cinema equipment",
      "Performed maintenance and troubleshooting on projectors and cinema servers",
      "Supported multi-site digital cinema deployment across India",
      "Provided technical support for Barco, Christie, and NEC projection systems",
      "Managed cinema server systems including Dolby, Qube, and GDC",
      "Coordinated vendor and RMA processes",
      "Mentored and trained junior technical staff",
    ],
    achievements: [
      "13+ years of hands-on digital cinema experience",
      "Exposure to industry-leading projection platforms",
      "Delivered multi-brand projection installation and service",
    ],
  },
] as const;

export const CORE_EXPERTISE = [
  {
    title: "Digital Cinema Projection",
    description: "End-to-end setup, alignment, calibration, and maintenance of high-end DCI digital cinema projection systems.",
    icon: "Projector",
    tags: ["DCI Compliant", "Optics", "Alignment"],
  },
  {
    title: "Laser Systems",
    description: "Expertise in RGB laser and Laser Light Upgrade (LLU) retrofits, optical alignment, and light source safety.",
    icon: "Zap",
    tags: ["LLU Retrofits", "RealLaser", "Laser Safety"],
  },
  {
    title: "Cinema Sound Systems",
    description: "Configuration, calibration, and signal routing for multichannel cinema sound processors and audio networks.",
    icon: "Volume2",
    tags: ["Audio Flow", "Multichannel", "Calibration"],
  },
  {
    title: "Preventive Maintenance",
    description: "Structured PM routines, optic cleaning, thermal management, filter changes, and projector life-cycle extensions.",
    icon: "Wrench",
    tags: ["Schedules", "Life-cycle", "Reliability"],
  },
  {
    title: "Troubleshooting & Diagnostics",
    description: "Root-cause diagnostics, log analysis, hardware-level fault finding, and rapid recovery under show-critical conditions.",
    icon: "Activity",
    tags: ["Log Analysis", "Fast Recovery", "Hardware"],
  },
  {
    title: "Multi-site Operations",
    description: "Managing technical operations, uptime metrics, and escalation workflows across distributed multi-screen multiplexes.",
    icon: "Layers",
    tags: ["80+ Screens", "Operations", "SLA Control"],
  },
  {
    title: "Team Leadership",
    description: "Supervising projectionists and junior AV technicians, conducting technical training, and defining operational protocols.",
    icon: "Users",
    tags: ["Mentorship", "Training", "Coordination"],
  },
  {
    title: "Vendor Coordination & RMA",
    description: "Managing relationships with global OEMs (Barco, Christie, NEC, Dolby, QSC), warranty claims, and rapid part RMA logistics.",
    icon: "Truck",
    tags: ["OEM Direct", "RMA Tracking", "Warranty"],
  },
  {
    title: "DCI Compliance",
    description: "Ensuring all projection, server, and security certificate parameters strictly adhere to DCI security & quality standards.",
    icon: "ShieldCheck",
    tags: ["Security", "KDM Flow", "Standards"],
  },
  {
    title: "Installation & Commissioning",
    description: "Site survey, projector placement, port glass alignment, sound processor integration, and complete auditorium commissioning.",
    icon: "Cpu",
    tags: ["Site Setup", "Integration", "Commissioning"],
  },
  {
    title: "Color Calibration",
    description: "Precision calibration of color gamut (DCI-P3, Rec. 709), white point, target luminance (14fL/3D targets), and gamma.",
    icon: "Sliders",
    tags: ["DCI-P3", "Luminance", "Target White"],
  },
  {
    title: "Cinema Servers & Ingestion",
    description: "Management of DCP ingestion, storage arrays, KDM management, automation integration, and playback reliability.",
    icon: "Server",
    tags: ["DCP Storage", "KDM", "Automation"],
  },
] as const;

export const TECHNOLOGY_CATEGORIES = [
  {
    brand: "BARCO",
    tagline: "Digital Cinema Projector Platforms",
    badge: "Certified Level 1 & 2",
    items: [
      { name: "Series 2", desc: "Installation, service, optical alignments & lamp-house maintenance" },
      { name: "Series 4", desc: "4K Laser platform installation, diagnostics, Level 2 service" },
      { name: "LLU / Laser Light Upgrade", desc: "Retrofitting legacy Series 2 chassis with laser light source" },
    ],
  },
  {
    brand: "CHRISTIE",
    tagline: "CineLife & RealLaser Systems",
    badge: "Safety & Maintenance Certified",
    items: [
      { name: "Series I & Series II", desc: "Maintenance, lamp alignment, power supply & optical engine care" },
      { name: "RealLaser", desc: "Pure RGB laser illumination safety, alignment & maintenance" },
      { name: "CineLife", desc: "CineLife electronic platform setup, automation & diagnostics" },
    ],
  },
  {
    brand: "NEC",
    tagline: "Laser Projector Systems",
    badge: "Trained Platform",
    items: [
      { name: "NC1202 / NC1402", desc: "Compact laser cinema projectors installation, filter care & operation" },
      { name: "Digital Cinema Laser", desc: "Maintenance routines, lens calibration & laser safety practices" },
    ],
  },
  {
    brand: "AUDIO / AV NETWORKING",
    tagline: "Modern Networked Audio & Control",
    badge: "Networked AV Standards",
    items: [
      { name: "Dante", desc: "Dante Level 1 (3rd Edition) certified digital audio routing & uncompressed IP delivery" },
      { name: "Q-SYS", desc: "QSC Cinema 101 training, core configuration & cinema audio signal flow" },
      { name: "Lightware", desc: "AV-over-IP Basics Level 1 certified video/audio matrix and extension systems" },
    ],
  },
  {
    brand: "CINEMA SERVERS",
    tagline: "DCP Playback & DCI Storage Systems",
    badge: "Hands-on Operational Mastery",
    items: [
      { name: "Dolby", desc: "Dolby cinema playback servers, show playlist configuration & automation interfaces" },
      { name: "Qube Cinema", desc: "Extensive experience across Qube XP and integrated media blocks (IMB)" },
      { name: "GDC Technology", desc: "GDC media server setup, KDM management, automation and emergency playback recovery" },
    ],
  },
] as const;

export const CERTIFICATIONS = [
  {
    id: "dante-1",
    title: "Dante Level 1 | 3rd Edition",
    issuer: "Audinate",
    year: "2026",
    category: "Audio / Network",
    badge: "Certified",
  },
  {
    id: "lightware-1",
    title: "Lightware Visuals INDIA AV-OVER-IP Basics Level 1",
    issuer: "Lightware Visual Engineering",
    year: "2026",
    category: "AV-over-IP",
    badge: "Certified",
  },
  {
    id: "qsys-101",
    title: "Q-SYS QSC Cinema 101 Training",
    issuer: "QSC / Q-SYS",
    year: "2026",
    category: "Cinema Audio",
    badge: "Trained",
  },
  {
    id: "barco-s4-l2",
    title: "Barco Cinema Projection – Advanced Diagnostics and Service Series 4 – Level 2",
    issuer: "Barco University",
    year: "2025",
    category: "Digital Projection",
    badge: "Level 2 Certified",
  },
  {
    id: "christie-maint",
    title: "Christie Cinema Projector Maintenance: Series I & Series II",
    issuer: "Christie Digital Systems",
    year: "2025",
    category: "Digital Projection",
    badge: "Certified",
  },
  {
    id: "christie-safety",
    title: "Christie RealLaser & CineLife Safety",
    issuer: "Christie Digital Systems",
    year: "2025",
    category: "Laser Safety",
    badge: "Certified",
  },
  {
    id: "christie-light",
    title: "Christie RealLaser & CineLife Light Source",
    issuer: "Christie Digital Systems",
    year: "2025",
    category: "Laser Systems",
    badge: "Certified",
  },
  {
    id: "christie-lamp",
    title: "Christie Cinema Projector and Lamp Safety",
    issuer: "Christie Digital Systems",
    year: "2025",
    category: "Safety",
    badge: "Certified",
  },
  {
    id: "nec-laser",
    title: "NEC Digital Cinema Laser Projector Training: NC1202 / NC1402",
    issuer: "NEC / Sharp NEC Display Solutions",
    year: "2024",
    category: "Laser Projection",
    badge: "Trained",
  },
  {
    id: "barco-llu",
    title: "Barco Level 1 Certified: Series 2 Projectors Laser Light Upgrade (LLU) Retrofit",
    issuer: "Barco University",
    year: "2023",
    category: "Laser Retrofit",
    badge: "Level 1 Certified",
  },
  {
    id: "barco-s4-l1",
    title: "Barco Level 1 Certified: Series 4 Projectors Installation, Maintenance, and Service",
    issuer: "Barco University",
    year: "2022",
    category: "Digital Projection",
    badge: "Level 1 Certified",
  },
  {
    id: "diploma-hw",
    title: "Diploma in Computer Hardware & Networking",
    issuer: "IHT, Moradabad",
    year: "2010",
    category: "Foundational Education",
    badge: "Diploma",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    metric: "99%+",
    title: "Fleet Uptime Maintained",
    description: "Sustained industry-leading projection and sound reliability across 80+ active cinema auditoriums.",
    highlight: "Operational Excellence",
  },
  {
    metric: "80+",
    title: "Screens Managed",
    description: "End-to-end technical oversight for high-volume cinema sites, ensuring uncompromised show standards.",
    highlight: "Scale of Responsibility",
  },
  {
    metric: "14+",
    title: "Years in Digital Cinema",
    description: "Hands-on evolution spanning early digital cinema conversions through modern 4K RGB laser systems.",
    highlight: "Deep Industry Experience",
  },
  {
    metric: "Fast RMA",
    title: "Vendor & OEM Coordination",
    description: "Direct liaison with Barco, Christie, NEC, Q-SYS, and server OEMs to streamline parts replacement and minimize screen dark time.",
    highlight: "Proactive Logistics",
  },
] as const;

export const TECHNICAL_KNOWLEDGE = [
  {
    category: "Projection & Visual Systems",
    topics: [
      { name: "Digital Cinema Equipment", desc: "DCI projection engines, DMD light engines, anamorphic/prime lenses & port glass specs" },
      { name: "Laser Light Systems", desc: "RGB pure laser safety zones, chiller cooling, diode temperature control & LLU retrofits" },
      { name: "Color Calibration", desc: "Spectroradiometer measurement, DCI-P3 / BT.709 color space target alignment & white balance" },
      { name: "Video Signal Basics", desc: "Dual 3G-SDI, HDMI 2.0/2.1, HDCP compliance, color subsampling (4:4:4 vs 4:2:2) & bit depth" },
    ],
  },
  {
    category: "Cinema Sound & Acoustics",
    topics: [
      { name: "Audio Signal Flow", desc: "AES/EBU digital multichannel, balanced line transmission, cinema crossover alignment & gain staging" },
      { name: "Cinema Audio Processors", desc: "B-chain equalization, pink noise RTA tuning, surround channel delay matrix & auditorium tuning" },
      { name: "Networked Audio", desc: "Dante uncompressed digital audio transport, clock master synchronization & low-latency routing" },
      { name: "AV System Architecture", desc: "Schematic design, rack topology, power sequencing, ground loop elimination & isolation" },
    ],
  },
  {
    category: "Cinema Servers & Ingestion",
    topics: [
      { name: "Cinema Servers & IMB", desc: "Integrated Media Block (IMB) maintenance, RAID array health monitoring & forensic watermarking" },
      { name: "DCP & KDM Management", desc: "Digital Cinema Package packaging rules, Key Delivery Message ingestion, cert validation & timeline sync" },
      { name: "Show Automation", desc: "GPIO triggering, cues for masking, curtain, lights dimming & projector automation presets" },
    ],
  },
  {
    category: "AV Networking & Protocols",
    topics: [
      { name: "Basic Networking & IP", desc: "Subnetting, VLAN segregation for booth control vs audio traffic, DHCP vs static assignment" },
      { name: "IP Multicast & QoS", desc: "IGMP snooping, PTP clocking (IEEE 1588), DSCP priority queuing for time-critical AV networks" },
      { name: "AV-over-IP", desc: "Lightware AV-over-IP streaming endpoints, uncompressed video matrixing, EDID management" },
      { name: "Signal Routing", desc: "Centralized matrix routing, failover switching & emergency audio override systems" },
    ],
  },
  {
    category: "Operations & Diagnostics",
    topics: [
      { name: "Troubleshooting AV Systems", desc: "Systematic fault tree analysis, signal generator injection & rapid issue isolation" },
      { name: "Installation & Commissioning", desc: "Auditorium acoustic calibration, projector throw distance ratio, lens shift & keystone elimination" },
      { name: "Fault Diagnostics & Log Analysis", desc: "Decoding projector marriage logs, security tamper logs, thermal threshold warnings" },
      { name: "Multi-site Operations", desc: "Standard operating procedures (SOP), centralized PM checklists & engineer rotation rosters" },
    ],
  },
] as const;

export const TECHNICAL_JOURNAL = [
  {
    id: "article-1",
    title: "RGB Laser vs Lamp-House Retrofits: Operational Realities & Thermal Management",
    category: "Laser Systems",
    date: "Draft Article",
    isSample: true,
    summary:
      "A technical examination of retrofit procedures from legacy Series 2 xenon lamp houses to Laser Light Upgrades (LLU), exploring power efficiency, luminance stability, and cooling considerations.",
    readTime: "6 min read",
    tags: ["Laser Systems", "Maintenance", "LLU"],
  },
  {
    id: "article-2",
    title: "Optimizing Multichannel Cinema Audio Over Dante: Clock Sync & Low-Latency Routing",
    category: "AV Networking",
    date: "Draft Article",
    isSample: true,
    summary:
      "Best practices for deploying uncompressed Dante digital audio across multiplex booths, ensuring reliable master clock election (PTP) and zero-jitter performance across auditorium arrays.",
    readTime: "8 min read",
    tags: ["Dante", "Audio Signal Flow", "QoS"],
  },
  {
    id: "article-3",
    title: "Systematic Root-Cause Diagnostics in DCI Projectors: Decoding Marriage & Tamper Logs",
    category: "Troubleshooting",
    date: "Draft Article",
    isSample: true,
    summary:
      "Practical workflows for diagnosing IMB security tamper trips, optical engine interlocks, and power board failures during critical show hours without risking certificate invalidation.",
    readTime: "7 min read",
    tags: ["Diagnostics", "DCI Compliance", "Barco & Christie"],
  },
  {
    id: "article-4",
    title: "Preventive Maintenance Protocols for 80+ Screen Fleets: Maximizing Equipment Life-Cycle",
    category: "Maintenance",
    date: "Draft Article",
    isSample: true,
    summary:
      "A structured approach to weekly, monthly, and annual cinema maintenance checklists that consistently delivers 99%+ uptime across distributed multiplex properties.",
    readTime: "5 min read",
    tags: ["Operations", "Preventive Maintenance", "Multi-Site"],
  },
] as const;
