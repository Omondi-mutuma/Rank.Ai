interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export const navLinks: NavLink[] = [
  { name: "Features", href: "/features", hasDropdown: true },
  { name: "Developers", href: "/developers" },
  { name: "Company", href: "/company", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Changelog", href: "/changelog" },
];
