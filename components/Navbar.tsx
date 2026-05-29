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
      href: "/ssc-cgl-syllabus",
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

    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight"
        >

          SSC Tools Hub

        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">

          {navLinks.map((link) => {

            const isActive =
              pathname === link.href;

            return (

              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-2xl transition ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
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
            className="md:hidden text-3xl"
          >

            ☰

          </button>

          {/* Auth */}
          {!isSignedIn ? (

            <SignInButton mode="modal">

              <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">

                Sign In

              </button>

            </SignInButton>

          ) : (

            <UserButton />

          )}

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden border-t border-white/10 bg-black px-6 py-6 flex flex-col gap-4">

          {navLinks.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-white/70 hover:text-white text-lg"
            >

              {link.name}

            </Link>

          ))}

        </div>

      )}

    </nav>

  );

}