"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Tools",
    href: "/tools",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Syllabus",
    href: "/syllabus",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "PYQs",
    href: "/pyqs",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const { isSignedIn } = useUser();

  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-500/10 bg-[#0B0F19]/80 backdrop-blur-2xl">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-400/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4">

        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="shrink-0 text-2xl sm:text-3xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              SSC
            </span>{" "}
            <span className="text-white">
              Tools Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">

            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2.5
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                        : "text-white/60 hover:text-white hover:bg-orange-500/10"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Desktop Sign In */}
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
                >
                  Sign In
                </button>
              </SignInButton>
            ) : (
              <div className="flex items-center justify-center">
                <UserButton />
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              className="lg:hidden w-11 h-11 rounded-xl bg-[#111827] border border-orange-500/10 flex items-center justify-center text-white hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300"
            >
              <span className="text-xl">
                {menuOpen ? "✕" : "☰"}
              </span>
            </button>

          </div>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-orange-500/10">

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className={`
                      px-5 py-3.5
                      rounded-xl
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                          : "text-white/70 hover:text-white hover:bg-orange-500/10"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Sign In */}
              {!isSignedIn && (
                <SignInButton mode="modal">
                  <button
                    type="button"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="sm:hidden mt-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3.5 rounded-xl font-semibold"
                  >
                    Sign In
                  </button>
                </SignInButton>
              )}

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}