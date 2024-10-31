import {
  BarChartIcon,
  BellIcon,
  ListBulletIcon,
  LockClosedIcon,
  MagicWandIcon,
  RocketIcon,
  SymbolIcon,
  TargetIcon,
} from "@radix-ui/react-icons";

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

interface ClientList {
  client: string;
  logo: string;
  width: number;
  height: number;
}

export const navLinks: NavLink[] = [
  { name: "Features", href: "/features", hasDropdown: true },
  { name: "Developers", href: "/developers" },
  { name: "Company", href: "/company", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Changelog", href: "/changelog" },
  { name: "Waitlist", href: "/waitlist" },
];

export const clients: ClientList[] = [
  {
    client: "Acme",
    logo: "/acme-1.png",
    width: 155,
    height: 34,
  },
  {
    client: "Apex",
    logo: "/apexw 1.png",
    width: 95,
    height: 30,
  },
  {
    client: "Celestial",
    logo: "/celestial 1.png",
    width: 118,
    height: 30,
  },
  {
    client: "Echo",
    logo: "/echo-vw 1.png",
    width: 163,
    height: 30,
  },
  {
    client: "Twice",
    logo: "/twice.png",
    width: 155,
    height: 34,
  },
  {
    client: "Pulse",
    logo: "/pulsew 1.png",
    width: 113,
    height: 30,
  },
  {
    client: "Quantrum",
    logo: "/quantrumw 1.png",
    width: 118,
    height: 30,
  },
  {
    client: "Outside",
    logo: "/outside.png",
    width: 155,
    height: 24,
  },
];

export const integrations = [
  {
    icon: SymbolIcon, // Icon component for the integration
    title: "User-friendly dashboard", // Title of the integration
    subtitle:
      "Perform complex SEO audits and optimizations with a single click.", // Description of the integration
  },
  {
    icon: ListBulletIcon,
    title: "Content evaluation",
    subtitle: "Simple corrections for immediate improvements.",
  },
  {
    icon: MagicWandIcon,
    title: "Link Optimization Wizard",
    subtitle: "Guides you through the process of creating and managing links.",
  },
  {
    icon: BarChartIcon,
    title: "Visual reports",
    subtitle: "Visual insights into your site's performance.",
  },
  {
    icon: TargetIcon,
    title: "SEO goal setting",
    subtitle: "Helps you set and achieve SEO goals with guided assistance.",
  },
  {
    icon: RocketIcon,
    title: "One-click optimization",
    subtitle:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: MagicWandIcon,
    title: "Smart Keyword Generator",
    subtitle: "Automatic suggestions and the best keywords to target.",
  },
  {
    icon: BellIcon,
    title: "Automated alerts",
    subtitle:
      "Automatic notifications about your SEO health, including quick fixes.",
  },
  {
    icon: LockClosedIcon,
    title: "Competitor reports",
    subtitle:
      "Provides insights into competitors' keyword strategies and ranking.",
  },
];
