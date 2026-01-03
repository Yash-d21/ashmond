
import { Code2, Compass, LineChart, Zap, Globe, Handshake } from 'lucide-react';
import { ServiceItem, PortfolioItem, Founder } from './types';

export const FOUNDERS: Founder[] = [
  {
    name: "Mohd Asvaan Zuhair",
    role: "Managing Partner | CTO TARS Networks",
    bio: "Asvaan leads strategic problem framing and technical decision-making at Ashmond & Co., working closely with founders to clarify direction, evaluate trade-offs, and design execution paths that scale. He brings deep engineering judgment into strategy discussions, ensuring plans are structurally sound, technically feasible, and built for long-term growth. As CTO of TARS Networks, he oversees system architecture and delivery standards, translating complex ideas into reliable, production-ready platforms.",
    linkedIn: "https://www.linkedin.com/in/asvaan-zuhair-29b390336/",
    image: "/My Photo-3 - Blazer.jpg .jpg"
  },
  {
    name: "Yashwanth Devulapally",
    role: "Managing Director | CEO TARS Networks",
    bio: "Yashwanth leads firm-level execution and strategic direction at Ashmond & Co., partnering with founders to set priorities, drive alignment, and turn strategy into action. He focuses on ensuring momentum, clarity, and accountability as decisions move from intent to outcome. As CEO of TARS Networks, he oversees end-to-end product and technology execution, making sure strategic vision becomes shipped systems, scalable products, and sustained operating performance.",
    linkedIn: "https://www.linkedin.com/in/yashwanth-devulapally/",
    image: "/mememememe.jpg"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Strategic Partnership",
    description: "We work with select founders as long term strategic partners, advising on business direction, growth strategy, and critical decision making across key stages of the company.",
    icon: Handshake
  },
  {
    title: "Management Consulting",
    description: "We provide executive level management consulting focused on leadership decision making, organizational clarity, and long term business growth.",
    icon: LineChart
  },
  {
    title: "International Services",
    description: "We support international clients and globally oriented startups with strategic guidance on market entry, positioning, and high level global structuring.",
    icon: Globe
  },
  {
    title: "Execution Support",
    description: "When execution is required, product development and MVP delivery may be supported through our extended ecosystem, including our partners at TARS Networks.",
    icon: Code2
  },
  {
    title: "Strategic Roadmapping",
    description: "We help founders define priorities and sequencing across product and business initiatives so execution remains focused and aligned with long term goals.",
    icon: Compass
  },
  {
    title: "Rapid MVP Support",
    description: "Where early validation is needed, we support fast and disciplined MVP delivery focused on learning, speed, and controlled scope.",
    icon: Zap
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Bolt Abacus",
    category: "EdTech Strategy",
    description: "Bolt Abacus is an EdTech venture focused on modernizing mental arithmetic education for a global audience. We worked closely with the founding team on strategic direction, internal workflow analysis, and decision making around product structure and scale readiness. Our involvement included refining the platform approach, supporting key product changes, and assisting with fundraising preparation as the company moves toward international expansion.",
    stats: "EdTech Scale"
  },
  {
    title: "Girijee",
    category: "Venture Builder",
    description: "Girijee is a multi-vertical franchise ecosystem. We provide ongoing management and strategic consulting, working with the founder on company structure, growth planning, and capital readiness. In parallel, we supported technology decisions to ensure the platform could support multiple franchise verticals without fragmentation, enabling controlled and repeatable expansion.",
    stats: "Ecosystem"
  },
  {
    title: "MehndiSathi",
    category: "Marketplace",
    description: "MehndiSathi is a dual-sided marketplace connecting henna artists with customers. We supported the venture through strategic consulting, product planning, and platform development, while also assisting with their successful selection into the T-Hub Lab2Market program. Our engagement continues across management guidance and product execution as the marketplace scales.",
    stats: "T-Hub Backed"
  },
  {
    title: "Converta2Z",
    category: "SaaS Utility",
    description: "Converta2Z is a global SaaS utility product. We led product development alongside strategic positioning and go-to-market planning. Through disciplined execution and clear product direction, the platform reached over eleven thousand users within three days of launch, validating both demand and scalability.",
    stats: "High Traffic"
  },
  {
    title: "Currexx",
    category: "FinTech",
    description: "Currexx is a digital finance platform. We supported the venture through product development and strategic consulting, advising on positioning, trust signals, and long-term roadmap decisions. Our involvement focused on aligning product execution with regulatory awareness and future scale considerations.",
    stats: "FinTech Security"
  },
  {
    title: "ARK",
    category: "Logistics Tech",
    description: "ARK is a hyperlocal logistics venture backed by the T-Hub Lab2Market program. We worked with the founding team on strategic planning, flow optimization, and platform development, while also supporting their engagement with T-Hub. Our focus was on aligning business strategy, execution discipline, and technology to enable faster delivery and improved cost efficiency.",
    stats: "Supply Chain"
  }
];

export const CLIENT_LOGOS = [
  "Bolt Abacus",
  "Girijee",
  "MehndiSathi",
  "Converta2Z",
  "Currexx",
  "ARK",
  "TARS Networks",
  "T-Hub"
];
