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
