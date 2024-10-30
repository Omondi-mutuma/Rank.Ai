/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const logos = [
  {
    name: "X",
    logoPath: "/x-logo-fill.svg",
    width: 25,
    height: 24,
  },
  {
    name: "instagram",
    logoPath: "/Vector.svg",
    width: 20,
    height: 20,
  },
  {
    name: "youtube",
    logoPath: "/youtube-logo-fill.svg",
    width: 25,
    height: 24,
  },
];

interface FooterLinkCategory {
  title: string;
  links: { name: string; href: string }[];
}

export const footerLinks: FooterLinkCategory[] = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Integration", href: "/integration" },
      { name: "Updates", href: "/updates" },
      { name: "FAQ", href: "/faq" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Manifesto", href: "/manifesto" },
      { name: "Press", href: "/press" },
      { name: "Contract", href: "/contract" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Examples", href: "/examples" },
      { name: "Community", href: "/community" },
      { name: "Guides", href: "/guides" },
      { name: "Docs", href: "/docs" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 p-[45px]">
      <div className="flex flex-col lg:flex-row lg:gap-[30px]">
        {/* Top part */}
        <div className="flex w-full justify-between lg:flex-col ">
          <span className=" flex items-center gap-2 font-medium">
            <Image
              src={"/logo.svg"}
              alt="company logo"
              width={39}
              height={38}
              loading="lazy"
            />
            Rank.AI
          </span>
          {/* Social media LOgos */}
          <div className="flex gap-4 ">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.logoPath}
                width={logo.width}
                height={logo.height}
                alt="social media logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-[20px]">
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h6 className="font-bold mb-4 text-[13px]">{category.title}</h6>
              <ul className="flex flex-col gap-[20px]">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
