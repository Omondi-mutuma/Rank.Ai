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

interface FeaturesList {
  id: string; // Assuming each feature has a unique ID
  title: string;
  subtitle: string;
  image: string;
  imgWidth: number;
  imgHeight: number;
  hasBackground: boolean;
  className?: string;
  position?: string;
}

export const navLinks: NavLink[] = [
  { name: "Features", href: "/features", hasDropdown: true },
  { name: "Developers", href: "/developers" },
  { name: "Company", href: "/company", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Changelog", href: "/changelog" },
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

export const features: FeaturesList[] = [
  {
    image: "/visual.png",
    title: "SEO goal setting",
    subtitle: "Helps you set and achieve SEO goals with guided assistance.",
    hasBackground: false,
    className: "col-span-1",
    imgHeight: 206,
    imgWidth: 276,
    position: "flex justify-center items-center",
    id: "786",
  },
  {
    image: "/app-desktop.png",
    title: "User-friendly dashboard",
    subtitle:
      "Perform complex SEO audits and optimizations with a single click.",
    hasBackground: true,
    className:
      "col-span-2 bg-gradient-to-b from-bg-background to-custom-purple",

    imgHeight: 652,
    imgWidth: 1098,
    position: "absolute bottom-0 right-0 h-full w-full",
    id: "7967",
  },
  {
    image: "/app-wide-3x1.png",
    title: "SEO goal setting",
    subtitle: "Helps you set and achieve SEO goals with guided assistance.",
    hasBackground: true,
    className: "col-span-2",

    imgHeight: 354,
    imgWidth: 633,
    position: "absolute top-[20px] left-0 h-full w-full",
    id: "869",
  },
  {
    image: "/3d-triangle.png",
    title: "User-friendly dashboard",
    subtitle:
      "Perform complex SEO audits and optimizations with a single click.",
    hasBackground: false,
    className: "col-span-1",

    imgHeight: 244,
    imgWidth: 234,
    position: "flex justify-center items-center",
    id: "858",
  },
];
