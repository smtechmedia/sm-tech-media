"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-900/40 bg-[#173652]/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 sm:gap-3"
        >
          <img
            src="/logo.png"
            alt="SM Tech Media"
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
          />

          <div>
            <h1 className="text-base font-bold leading-tight text-white sm:text-xl">
              SM Tech Media
            </h1>

            <p className="text-[10px] font-medium text-[#4DA3FF] sm:text-xs">
              Digital Marketing Agency
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-7 font-medium md:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white transition-colors duration-300 hover:text-[#4DA3FF]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Get Quote */}
        <a
          href="https://wa.me/919908540952"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#173652] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#4DA3FF] hover:text-white md:inline-flex"
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-xl text-white md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#173652] px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:text-[#4DA3FF]"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/919908540952"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#173652]"
            >
              Get Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}