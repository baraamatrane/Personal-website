"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between md:justify-around py-4 px-4 md:px-6">
        {/* Logo - visible on mobile, positioned left */}
        <Link
          href="/"
          className="md:absolute md:left-6 z-10 text-xl font-bold text-zinc-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          BM
        </Link>

        {/* Desktop Navigation - Liquid Glass Container */}
        <div
          className="
            hidden md:flex
            relative items-center gap-1 
            rounded-full px-2 py-2
            bg-gradient-to-b from-white/20 to-white/5
            dark:from-white/10 dark:to-white/[0.02]
            backdrop-blur-xl
            border border-white/20 dark:border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
            before:absolute before:inset-0 before:rounded-full
            before:bg-gradient-to-b before:from-white/30 before:to-transparent
            before:opacity-50 before:pointer-events-none
            after:absolute after:inset-[1px] after:rounded-full
            after:bg-gradient-to-t after:from-black/5 after:to-transparent
            after:dark:from-black/20 after:pointer-events-none
          "
        >
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative z-10 px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300 ease-out
                ${
                  isActive(link.href)
                    ? "bg-white/30 dark:bg-white/15 text-zinc-900 dark:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2px_rgba(0,0,0,0.1)]"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-white/10"
                }
              `}
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="relative z-10 w-px h-6 mx-2 bg-gradient-to-b from-transparent via-zinc-400/30 to-transparent" />

          {/* CTA Button */}
          <Link
            href="/contact"
            className="
              relative z-10 px-5 py-2 rounded-full text-sm font-medium
              bg-gradient-to-b from-zinc-700 to-zinc-900
              dark:from-zinc-700 dark:to-zinc-950
              text-white
              border border-zinc-600/50 dark:border-zinc-600/30
              shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
              hover:from-zinc-600 hover:to-zinc-800
              hover:shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]
              transition-all duration-300 ease-out
              active:scale-[0.98]
            "
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            md:hidden relative z-10 p-2 rounded-full
            bg-gradient-to-b from-white/20 to-white/5
            dark:from-white/10 dark:to-white/[0.02]
            backdrop-blur-xl
            border border-white/20 dark:border-white/10
            transition-all duration-300
          "
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
            <span
              className={`block w-4 h-0.5 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 z-40
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`
          md:hidden fixed top-0 right-0 z-40
          w-[280px] h-full
          bg-gradient-to-b from-white/90 to-white/80
          dark:from-zinc-900/95 dark:to-zinc-900/90
          backdrop-blur-2xl
          border-l border-white/20 dark:border-white/10
          shadow-[-8px_0_32px_rgba(0,0,0,0.15)]
          dark:shadow-[-8px_0_32px_rgba(0,0,0,0.5)]
          transition-transform duration-300 ease-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-3 rounded-2xl text-base font-medium
                  transition-all duration-300 ease-out
                  ${
                    isActive(link.href)
                      ? "bg-white/50 dark:bg-white/10 text-zinc-900 dark:text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/30 dark:hover:bg-white/5"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-300/50 dark:via-zinc-600/30 to-transparent" />

          {/* CTA Button */}
          <Link
            href="/contact"
            className="
              px-5 py-3 rounded-2xl text-base font-medium text-center
              bg-gradient-to-b from-zinc-700 to-zinc-900
              dark:from-zinc-700 dark:to-zinc-950
              text-white
              border border-zinc-600/50 dark:border-zinc-600/30
              shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]
              hover:from-zinc-600 hover:to-zinc-800
              transition-all duration-300 ease-out
              active:scale-[0.98]
            "
          >
            Book a Call
          </Link>

          {/* Footer info */}
          <div className="mt-auto">
            <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
              © 2026 BM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
