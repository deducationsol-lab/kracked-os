export interface Operative {
  id: string;
  codename: string;
  role: 'SHIPPER' | 'BUILDER' | 'ARCHITECT' | 'ALCHEMIST' | 'SENTINEL';
  rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC';
  pwrLevel: number;
  stars: number;
  location: string;
  guild: string;
  shippedCount: number;
  featuredProject: string;
  tags: string[];
  avatarIcon: string;
  accentColor: string;
}

export interface MalaysiaNode {
  id: string;
  name: string;
  state: string;
  region: 'WEST' | 'EAST';
  builders: number;
  shipped: number;
  guilds: number;
  ping: number;
  coords: { x: number; y: number }; // percentage 0-100 on map
  dominantSpecialty: string;
  recentDeployment: string;
  status: 'ONLINE' | 'ACTIVE_SPIKE' | 'OPTIMAL';
}

export interface ShippedProject {
  id: string;
  title: string;
  tagline: string;
  category: 'AI_AGENT' | 'FINTECH' | 'DEVELOPER_TOOLS' | 'WEB3_PROTOCOL' | 'HARDWARE_IOT' | 'LOCAL_UTILITY';
  rarity: 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC';
  builder: string;
  guild: string;
  location: string;
  pwrBoost: number;
  status: 'LIVE' | 'V2_PROD' | 'OPEN_SOURCE';
  techStack: string[];
  bountyXP: number;
  stats: {
    users?: string;
    volume?: string;
    githubStars?: string;
    speed?: string;
  };
  link: string;
  date: string;
}

export interface Guild {
  id: string;
  name: string;
  tag: string;
  focus: string;
  members: number;
  projectsShipped: number;
  level: number;
  color: string;
  lead: string;
  description: string;
}

export const HERO_OPERATIVES: Operative[] = [
  {
    id: 'op-01',
    codename: 'NEXUS_CAPTAIN',
    role: 'SHIPPER',
    rarity: 'RARE',
    pwrLevel: 78,
    stars: 4,
    location: 'Cyberjaya, Selangor',
    guild: 'AI AGENTS GUILD',
    shippedCount: 14,
    featuredProject: 'AgentLah V3',
    tags: ['FAST_DEPLOY', 'LLM_ROUTING'],
    avatarIcon: 'ship',
    accentColor: '#FF2D95',
  },
  {
    id: 'op-02',
    codename: 'SYNTH_FORGER',
    role: 'BUILDER',
    rarity: 'RARE',
    pwrLevel: 65,
    stars: 4,
    location: 'George Town, Penang',
    guild: 'SILICON HARDWARE',
    shippedCount: 9,
    featuredProject: 'Renesas ESP32 Rust Bridge',
    tags: ['FIRMWARE', 'LOW_LATENCY'],
    avatarIcon: 'gear',
    accentColor: '#00FF9F',
  },
  {
    id: 'op-03',
    codename: 'ZERO_KNOWLEDGE',
    role: 'ARCHITECT',
    rarity: 'EPIC',
    pwrLevel: 92,
    stars: 5,
    location: 'Kuala Lumpur, Federal Terr.',
    guild: 'SOLANA HACKERS',
    shippedCount: 21,
    featuredProject: 'RinggitZK Protocol',
    tags: ['SOLANA_PAY', 'ZK_PROOFS'],
    avatarIcon: 'shield',
    accentColor: '#00F0FF',
  }
];

export const MALAYSIA_NODES: MalaysiaNode[] = [
  {
    id: 'kul',
    name: 'Kuala Lumpur / Cyberjaya',
    state: 'Klang Valley & Selangor',
    region: 'WEST',
    builders: 1420,
    shipped: 248,
    guilds: 11,
    ping: 4,
    coords: { x: 28, y: 64 },
    dominantSpecialty: 'Autonomous AI Agents & Fintech APIs',
    recentDeployment: 'RinggitPay Terminal v1.4',
    status: 'ACTIVE_SPIKE',
  },
  {
    id: 'png',
    name: 'Penang Silicon Hub',
    state: 'Pulau Pinang & Butterworth',
    region: 'WEST',
    builders: 680,
    shipped: 114,
    guilds: 5,
    ping: 9,
    coords: { x: 22, y: 32 },
    dominantSpecialty: 'Hardware Hackers, Rust, IoT & Edge AI',
    recentDeployment: 'Chiptest-AI Firmware Rig',
    status: 'OPTIMAL',
  },
  {
    id: 'jhr',
    name: 'Johor Bahru Core',
    state: 'Johor & Iskandar Corridor',
    region: 'WEST',
    builders: 410,
    shipped: 62,
    guilds: 3,
    ping: 8,
    coords: { x: 38, y: 84 },
    dominantSpecialty: 'Cross-Border Infra & High Frequency Quant',
    recentDeployment: 'CausewayFlow Telemetry',
    status: 'ONLINE',
  },
  {
    id: 'kch',
    name: 'Kuching Node',
    state: 'Sarawak Tech Grid',
    region: 'EAST',
    builders: 340,
    shipped: 49,
    guilds: 3,
    ping: 16,
    coords: { x: 62, y: 72 },
    dominantSpecialty: 'Hydropower Green Datacenter Infra & GIS',
    recentDeployment: 'BorneoRain Sentinel v2',
    status: 'OPTIMAL',
  },
  {
    id: 'bki',
    name: 'Kota Kinabalu Hub',
    state: 'Sabah Deep Tech',
    region: 'EAST',
    builders: 290,
    shipped: 38,
    guilds: 2,
    ping: 18,
    coords: { x: 82, y: 28 },
    dominantSpecialty: 'Satellite Uplink & Maritime AI Tracking',
    recentDeployment: 'Sulu Coral Reef Sonar Classifier',
    status: 'ONLINE',
  },
  {
    id: 'prk',
    name: 'Ipoh / Kinta Forge',
    state: 'Perak',
    region: 'WEST',
    builders: 168,
    shipped: 21,
    guilds: 1,
    ping: 11,
    coords: { x: 25, y: 46 },
    dominantSpecialty: 'Local E-Commerce & Logistic Agents',
    recentDeployment: 'KopiFlow POS Engine',
    status: 'ONLINE',
  },
  {
    id: 'mlk',
    name: 'Melaka Gateway',
    state: 'Melaka',
    region: 'WEST',
    builders: 100,
    shipped: 14,
    guilds: 1,
    ping: 7,
    coords: { x: 32, y: 76 },
    dominantSpecialty: 'Tourism AI Guides & Historical Archive NLP',
    recentDeployment: 'HeritageLens AR Agent',
    status: 'ONLINE',
  }
];

export const SHIPPED_PROJECTS: ShippedProject[] = [
  {
    id: 'proj-1',
    title: 'AgentLah',
    tagline: 'Multi-agent orchestration CLI tailored for SEA commerce and WhatsApp bots.',
    category: 'AI_AGENT',
    rarity: 'LEGENDARY',
    builder: '0xHarimau',
    guild: 'AI AGENTS GUILD',
    location: 'Kuala Lumpur',
    pwrBoost: 420,
    status: 'V2_PROD',
    techStack: ['DeepSeek V3', 'TypeScript', 'LangGraph', 'Redis', 'Docker'],
    bountyXP: 8500,
    stats: {
      users: '24.5k requests/day',
      speed: '180ms p95',
      githubStars: '1.2k',
    },
    link: 'https://github.com/krackeddevs',
    date: '3 DAYS AGO',
  },
  {
    id: 'proj-2',
    title: 'RinggitZK',
    tagline: 'Zero-knowledge private settlements & DuitNow QR verification bridge.',
    category: 'WEB3_PROTOCOL',
    rarity: 'MYTHIC',
    builder: 'NasiLemakHacker',
    guild: 'SOLANA HACKERS',
    location: 'Cyberjaya',
    pwrBoost: 680,
    status: 'LIVE',
    techStack: ['Rust', 'Solana Anchor', 'Circom', 'Next.js 16', 'WebAuthn'],
    bountyXP: 14200,
    stats: {
      volume: 'RM 1.8M settled',
      speed: '400ms finality',
    },
    link: 'https://github.com/krackeddevs',
    date: 'YESTERDAY',
  },
  {
    id: 'proj-3',
    title: 'SiliconBatik OS',
    tagline: 'Generative vector shader engine producing authentic Nusantara generative art.',
    category: 'DEVELOPER_TOOLS',
    rarity: 'EPIC',
    builder: 'PixelRengit',
    guild: 'CREATIVE TECH',
    location: 'Penang',
    pwrBoost: 310,
    status: 'OPEN_SOURCE',
    techStack: ['WebGPU', 'WGSL Shaders', 'Three.js', 'React 19'],
    bountyXP: 5200,
    stats: {
      users: '8.4k canvas renders',
      githubStars: '840',
    },
    link: 'https://github.com/krackeddevs',
    date: '5 DAYS AGO',
  },
  {
    id: 'proj-4',
    title: 'Borneo Sentinel AI',
    tagline: 'Acoustic monitoring mesh network protecting rainforest borders via solar ESP32.',
    category: 'HARDWARE_IOT',
    rarity: 'LEGENDARY',
    builder: 'DayakDev',
    guild: 'HARDWARE / IOT',
    location: 'Kuching, Sarawak',
    pwrBoost: 540,
    status: 'V2_PROD',
    techStack: ['TinyML', 'C++', 'ESP32 LoRaWAN', 'FastAPI', 'Mapbox GL'],
    bountyXP: 11000,
    stats: {
      users: '14 nodes active',
      speed: 'Real-time alert < 2s',
    },
    link: 'https://github.com/krackeddevs',
    date: '1 WEEK AGO',
  },
  {
    id: 'proj-5',
    title: 'MyKad OCR & Verify',
    tagline: 'On-device WASM neural network for ultra-fast encrypted identity parsing.',
    category: 'FINTECH',
    rarity: 'RARE',
    builder: 'KlangCrypt',
    guild: 'SECURITY & PROTOCOLS',
    location: 'Klang',
    pwrBoost: 220,
    status: 'LIVE',
    techStack: ['ONNX Runtime WASM', 'Rust', 'Tailwind', 'IndexedDB'],
    bountyXP: 3800,
    stats: {
      users: '100% Client-side zero leakage',
      speed: '48ms inference',
    },
    link: 'https://github.com/krackeddevs',
    date: '2 WEEKS AGO',
  },
  {
    id: 'proj-6',
    title: 'MamakOrder LLM Voice',
    tagline: 'Low-latency Manglish multilingual speech-to-text ordering agent for F&B kiosks.',
    category: 'AI_AGENT',
    rarity: 'EPIC',
    builder: 'TehTarikCoder',
    guild: 'AI AGENTS GUILD',
    location: 'Subang Jaya',
    pwrBoost: 380,
    status: 'LIVE',
    techStack: ['Whisper Finetune', 'Vercel AI SDK', 'WebSockets', 'Next.js'],
    bountyXP: 6400,
    stats: {
      users: '45 restaurant partners',
      speed: '96.2% Manglish accuracy',
    },
    link: 'https://github.com/krackeddevs',
    date: '3 WEEKS AGO',
  }
];

export const GUILDS_DATA: Guild[] = [
  {
    id: 'g-1',
    name: 'AI Agents & Reasoning',
    tag: 'AGENTS_V1',
    focus: 'Autonomous agents, local fine-tunes, tool-calling chains & multi-modal robotics',
    members: 1140,
    projectsShipped: 184,
    level: 24,
    color: '#00F0FF',
    lead: '0xHarimau',
    description: 'Specialists in turning raw LLM APIs into production tools that solve SEA everyday workflows.',
  },
  {
    id: 'g-2',
    name: 'Solana & Web3 Hackers',
    tag: 'SOL_NATION',
    focus: 'High-throughput smart contracts, Solana Pay integrations & zero-knowledge proofs',
    members: 820,
    projectsShipped: 142,
    level: 19,
    color: '#00FF9F',
    lead: 'KryptoKelantan',
    description: 'Building censorship-resistant payment rails and micro-treasuries for decentralized cooperatives.',
  },
  {
    id: 'g-3',
    name: 'Silicon & Hardware Rig',
    tag: 'CHIP_FORGE',
    focus: 'ESP32, STM32, LoRa mesh networks, edge camera inference & custom PCB fab',
    members: 490,
    projectsShipped: 76,
    level: 15,
    color: '#FF2D95',
    lead: 'PenangSiliconLead',
    description: 'Hardware builders tapping into Penang semiconductor manufacturing supply lines.',
  },
  {
    id: 'g-4',
    name: 'Fintech & Local Infrastructure',
    tag: 'PAY_CORE',
    focus: 'DuitNow integrations, FPX reverse engineering, accounting engines & payroll bots',
    members: 580,
    projectsShipped: 98,
    level: 18,
    color: '#00F0FF',
    lead: 'BangsarFintech',
    description: 'Unlocking modern banking and frictionless commerce tooling for Malaysian SMEs.',
  },
  {
    id: 'g-5',
    name: 'Creative Tech & WebGPU',
    tag: 'SHADERS_LAB',
    focus: 'Interactive 3D, WebGPU computing, creative shaders & spatial audio engines',
    members: 378,
    projectsShipped: 46,
    level: 12,
    color: '#00FF9F',
    lead: 'PixelRengit',
    description: 'Pushing browser graphics to native desktop performance with high visual octane.',
  }
];
