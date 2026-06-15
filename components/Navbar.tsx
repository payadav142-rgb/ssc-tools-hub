"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {

  const pathname = usePathname();

  const { isSignedIn } = useUser();

  const [menuOpen, setMenuOpen] =
    useState(false);

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

  return (

    <nav className="sticky top-0 z-50 border-b border-orange-500/10 bg-[#0B0F19]/80 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-400/5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight"
        >

          <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">

            SSC

          </span>{" "}

          <span className="text-white">

            Tools Hub

          </span>

        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3">

          {navLinks.map((link) => {

            const isActive =
              pathname === link.href;

            return (

              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2.5 rounded-2xl transition-all duration-300 text-sm font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                    : "text-white/60 hover:text-white hover:bg-orange-500/10 hover:border hover:border-orange-500/20"
                }`}
              >

                {link.name}

              </Link>

            );

          })}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="lg:hidden w-11 h-11 rounded-2xl bg-[#111827] border border-orange-500/10 flex items-center justify-center text-white text-2xl hover:border-orange-500/40 transition"
          >

            ☰

          </button>

          {/* Auth */}
          {!isSignedIn ? (

            <SignInButton mode="modal">

              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-7 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20">

                Sign In

              </button>

            </SignInButton>

          ) : (

            <div className="scale-110">

              <UserButton />

            </div>

          )}

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="lg:hidden border-t border-orange-500/10 bg-[#0B0F19]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4">

          {navLinks.map((link) => {

            const isActive =
              pathname === link.href;

            return (

              <Link
                key={link.name}
                href={link.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className={`px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold"
                    : "text-white/70 hover:text-white hover:bg-orange-500/10"
                }`}
              >

                {link.name}

              </Link>

            );

          })}

        </div>

      )}

    </nav>

  );

}