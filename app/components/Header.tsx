"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { navLinks } from "@/constants";
import Button from "./ui/Button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // To track the active link

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleSetActiveLink = (name: string) => {
    setActiveLink(name);
  };

  return (
    <header className="sticky w-full top-0 border-b border-white/10 flex items-center justify-between py-3 px-4 bg-black/90 lg:justify-between backdrop-blur-lg z-50">
      {/* Logo Section */}
      <div className="relative w-full">
        <Link href="/" aria-label="Homepage">
          <div className="relative w-[39px] h-[38px]">
            <Image src="/logo.svg" alt="Logo" width={39} height={38} priority />
            <div className="rounded-full h-[15px] w-[15px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 animate-pulse blur-[4px]" />
          </div>
        </Link>
      </div>

      {/* Navigation Links - Desktop */}
      <nav className="hidden lg:flex w-full max-w-3xl justify-center border border-white/15 rounded-full py-[12px] px-[12px]">
        <ul className="flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => handleSetActiveLink(link.name)}
                className={`${
                  activeLink === link.name
                    ? "text-purple-500 font-semibold"
                    : "text-gray-300"
                } flex items-center hover:text-purple-500 transition-all duration-300 ease-in-out text-sm font-medium`}
              >
                {link.name}
                {link.hasDropdown && <HiChevronDown className="ml-1" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Join Waitlist Button - Desktop */}
      <div className="hidden w-full lg:flex lg:justify-end">
        <Button path="/waitlist">Join waitlist</Button>
      </div>

      {/* Mobile Menu Button & Join Button */}
      <div className="flex items-center gap-4 lg:hidden">
        <Button className="w-full" path="/waitlist">
          Join waitlist
        </Button>
        <button
          className="text-2xl text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg shadow-lg z-40 lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => handleSetActiveLink(link.name)}
                  className={`${
                    activeLink === link.name
                      ? "text-purple-500 font-semibold"
                      : "text-gray-300"
                  } hover:text-purple-500 transition-all duration-300 ease-in-out text-sm font-medium`}
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
