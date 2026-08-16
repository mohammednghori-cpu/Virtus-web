export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  details: string[];
  specs: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "backplanes",
    name: "Backplanes",
    category: "Embedded Computing & Boards",
    description: "Rugged VPX/VME backplanes delivering high-speed interconnects and precise timing for extreme conditions.",
    details: [
      "Rugged VPX/VME backplanes.",
      "High-speed interconnects.",
      "Precise timing for demanding environments."
    ],
    specs: ["VPX / VME", "High-speed interconnect", "Precise timing"],
    image: "/products/backplanes.png"
  },
  {
    slug: "motherboards",
    name: "Motherboards",
    category: "Embedded Computing & Boards",
    description: "Hardened motherboard platforms with long lifecycle support and deterministic real-time processing.",
    details: [
      "Hardened motherboard platforms.",
      "Long lifecycle support.",
      "Deterministic real-time processing."
    ],
    specs: ["Hardened platform", "Long lifecycle", "Deterministic processing"],
    image: "/products/motherboards.png"
  },
  {
    slug: "com-express",
    name: "COM Express Modules",
    category: "Embedded Computing & Boards",
    description: "Compact, high-performance COM Express modules built for harsh environments with sealed connectors for reliable operations.",
    details: [
      "Compact, high-performance COM Express modules.",
      "Built for harsh environments.",
      "Sealed connectors for reliable operation."
    ],
    specs: ["COM Express", "Harsh-environment design", "Sealed connectors"],
    image: "/products/com-express.png"
  },
  {
    slug: "fpga-cards",
    name: "FPGA Based Cards (COTS Boards)",
    category: "Embedded Computing & Boards",
    description: "High-performance COTS embedded computing including SBC, GPGPU, SFPDP and FPGA boards.",
    details: [
      "High-performance COTS embedded computing.",
      "Single-board computer (SBC) options.",
      "GPGPU, SFPDP and FPGA boards."
    ],
    specs: ["SBC", "GPGPU", "SFPDP / FPGA"],
    image: "/products/fpga-cards.png"
  },
  {
    slug: "mechanical-enclosures",
    name: "Mechanical Enclosures",
    category: "Enclosures & Power",
    description: "Precision-machined enclosures customised for mounting, cooling and connectivity in demanding environments.",
    details: [
      "Precision-machined enclosures.",
      "Customised for mounting and cooling.",
      "Designed for demanding connectivity requirements."
    ],
    specs: ["Precision machining", "Mounting", "Cooling & connectivity"],
    image: "/products/mechanical-enclosures.png"
  },
  {
    slug: "racks-subracks",
    name: "Racks & Sub-Racks",
    category: "Enclosures & Power",
    description: "High-reliability racks with secure cable management and easy-access maintenance for mission-critical systems.",
    details: [
      "High-reliability racks and sub-racks.",
      "Secure cable management.",
      "Easy-access maintenance for mission-critical systems."
    ],
    specs: ["High reliability", "Cable management", "Service access"],
    image: "/products/racks-subracks.png"
  },
  {
    slug: "pdu-power",
    name: "PDU & Power Distribution Board",
    category: "Enclosures & Power",
    description: "Modular power management and fault isolation with hardened connectors for tactical deployments.",
    details: [
      "Modular power management.",
      "Fault isolation.",
      "Hardened connectors for tactical deployments."
    ],
    specs: ["Power management", "Fault isolation", "Hardened connectors"],
    image: "/products/pdu-power.png"
  },
  {
    slug: "processing-units",
    name: "Processing Units",
    category: "Processing & Networking",
    description: "Rugged signal and radar processing units delivering low-latency, mission-ready performance.",
    details: [
      "Rugged signal processing units.",
      "Radar processing applications.",
      "Low-latency, mission-ready performance."
    ],
    specs: ["Signal processing", "Radar processing", "Low latency"],
    image: "/products/processing-units.png"
  },
  {
    slug: "rugged-chassis",
    name: "Rugged Chassis (VPX, VME & cPCI)",
    category: "Processing & Networking",
    description: "Built-to-spec chassis with flexible module configurations, enhanced cooling and reinforced connectors.",
    details: [
      "Built-to-spec rugged chassis.",
      "VPX, VME and cPCI configurations.",
      "Flexible module configurations, enhanced cooling and reinforced connectors."
    ],
    specs: ["VPX / VME / cPCI", "Flexible configurations", "Enhanced cooling"],
    image: "/products/rugged-chassis.png"
  },
  {
    slug: "lrus",
    name: "Line Replaceable Units (LRUs)",
    category: "Processing & Networking",
    description: "Field-replaceable LRUs with clear health reporting and certified reliability for airborne systems.",
    details: [
      "Field-replaceable line replaceable units.",
      "Clear health reporting.",
      "Certified reliability for airborne systems."
    ],
    specs: ["Field replaceable", "Health reporting", "Airborne systems"],
    image: "/products/lrus.png"
  },
  {
    slug: "ethernet-switch",
    name: "Rugged Ethernet Switch",
    category: "Processing & Networking",
    description: "Hardened switches with fiber and copper options for dependable data delivery in the field.",
    details: [
      "Hardened Ethernet switching.",
      "Fiber and copper options.",
      "Dependable data delivery in field environments."
    ],
    specs: ["Fiber / copper", "Hardened switching", "Field data delivery"],
    image: "/products/ethernet-switch.png"
  },
  {
    slug: "rugged-monitor",
    name: "Rugged Monitor",
    category: "Displays & Consoles",
    description: "Sunlight-readable rugged monitors from 7” to 42”, built for demanding military and industrial use.",
    details: [
      "Sunlight-readable rugged monitors.",
      "7-inch to 42-inch range stated in the profile.",
      "Designed for demanding military and industrial use."
    ],
    specs: ["7–42 inch", "Sunlight readable", "Military / industrial"],
    image: "/products/rugged-monitor.png"
  },
  {
    slug: "rugged-panel-pc",
    name: "Rugged Panel PC",
    category: "Displays & Consoles",
    description: "Fanless, wide-temperature panel PC combining enterprise performance with military-grade protection.",
    details: [
      "Fanless panel PC.",
      "Wide-temperature operation.",
      "Enterprise performance with military-grade protection."
    ],
    specs: ["Fanless", "Wide temperature", "Military-grade protection"],
    image: "/products/rugged-panel-pc.png"
  },
  {
    slug: "operator-consoles",
    name: "Operator Consoles",
    category: "Displays & Consoles",
    description: "Customised consoles integrating displays, computing and controls for continuous operation.",
    details: [
      "Customised operator consoles.",
      "Integrated displays, computing and controls.",
      "Designed for continuous operation."
    ],
    specs: ["Display integration", "Computing & controls", "Continuous operation"],
    image: "/products/operator-consoles.png"
  },
  {
    slug: "rugged-tablet-laptop",
    name: "Rugged Tablet & Laptop",
    category: "Displays & Consoles",
    description: "Drop-resistant, weatherproof tablets and laptops built for long field shifts.",
    details: [
      "Drop-resistant field computing.",
      "Weatherproof tablet and laptop designs.",
      "Built for long field shifts."
    ],
    specs: ["Drop resistant", "Weatherproof", "Field mobility"],
    image: "/products/rugged-tablet-laptop.png"
  },
  {
    slug: "customized-products",
    name: "Customized Products",
    category: "Compute Platforms",
    description: "Tailored electronics engineered to exact specifications for mission-critical use.",
    details: [
      "Tailored electronics.",
      "Engineered to exact specifications.",
      "Designed for mission-critical use."
    ],
    specs: ["Custom engineering", "Exact specifications", "Mission critical"],
    image: "/products/customized-products.png"
  },
  {
    slug: "box-pc",
    name: "BOX PC",
    category: "Compute Platforms",
    description: "Compute-dense box PC engineered for uptime on factory floors and mobile platforms.",
    details: [
      "Compute-dense box PC.",
      "Engineered for uptime.",
      "Designed for factory floors and mobile platforms."
    ],
    specs: ["Compute dense", "High uptime", "Factory / mobile"],
    image: "/products/box-pc.png"
  },
  {
    slug: "rugged-server",
    name: "Rugged Server",
    category: "Compute Platforms",
    description: "Hardened server platforms with redundant subsystems for continuous field operation.",
    details: [
      "Hardened server platforms.",
      "Redundant subsystems.",
      "Continuous field operation."
    ],
    specs: ["Hardened platform", "Redundant subsystems", "Continuous operation"],
    image: "/products/rugged-server.png"
  },
  {
    slug: "workstation",
    name: "Workstation",
    category: "Workstations & Storage",
    description: "High-speed workstations with multi-core processors for demanding simulation and rendering.",
    details: [
      "High-speed workstations.",
      "Multi-core processors.",
      "Designed for demanding simulation and rendering."
    ],
    specs: ["Multi-core processors", "Simulation", "Rendering"],
    image: "/products/workstation.png"
  },
  {
    slug: "panel-pc",
    name: "Panel PC",
    category: "Workstations & Storage",
    description: "Shock and vibration-resistant panel PC for reliable 24/7 operation.",
    details: [
      "Shock-resistant panel PC.",
      "Vibration-resistant design.",
      "Reliable 24/7 operation."
    ],
    specs: ["Shock resistant", "Vibration resistant", "24/7 operation"],
    image: "/products/panel-pc.png"
  },
  {
    slug: "nas",
    name: "Network Attached Storage (NAS)",
    category: "Workstations & Storage",
    description: "Enterprise-grade NAS delivering redundant storage and high-throughput data protection.",
    details: [
      "Enterprise-grade network attached storage.",
      "Redundant storage architecture.",
      "High-throughput data protection."
    ],
    specs: ["Redundant storage", "High throughput", "Data protection"],
    image: "/products/nas.png"
  },
  {
    slug: "industrial-pc",
    name: "Industrial PC",
    category: "Workstations & Storage",
    description: "Enterprise-grade industrial PC engineered for nonstop operation in extreme conditions.",
    details: [
      "Enterprise-grade industrial PC.",
      "Engineered for nonstop operation.",
      "Designed for extreme conditions."
    ],
    specs: ["Industrial computing", "Nonstop operation", "Extreme conditions"],
    image: "/products/industrial-pc.png"
  }
];

export const categories = Array.from(new Set(products.map((p) => p.category)));
