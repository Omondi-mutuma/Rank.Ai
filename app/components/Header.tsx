import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { navLinks } from "@/constants";
import Button from "./ui/Button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 border-b border-white border-opacity-15 flex items-center justify-between py-[13px] bg-black lg:justify-center">
      <div className="w-full logo">
        <a href="#">
          <Image src="/logo.svg" alt="Logo" width={39} height={38} />
        </a>
      </div>
      <nav className="w-full border border-white border-opacity-15 rounded-full hidden lg:block">
        <ul className="flex space-x-4 py-2 px-10 gap-[30px] list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-foreground hover:text-purple-900 flex items-center text-[13px] font-normal tracking-[-0.01em] leading-[26px]"
              >
                {link.name}
                {link.hasDropdown && <HiChevronDown className="ml-1" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full hidden lg:flex lg:justify-end">
        <Button>Join waitlist</Button>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <Button className="text-sm" size="small">
          Join waitlist
        </Button>

        <button className="text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background shadow-md lg:hidden">
          <ul className="flex flex-col  items-center py-2 px-10 gap-[30px]">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <Link
                  href={link.href}
                  className="text-foreground hover:text-purple-900 flex items-center text-[13px] font-normal tracking-[-0.01em] leading-[26px]"
                >
                  {link.name}
                  {link.hasDropdown && <HiChevronDown className="ml-1" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
