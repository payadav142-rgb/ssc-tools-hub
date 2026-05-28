"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

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
      name: "Resources",
      href: "/resources",
    },

    {
      name: "PYQs",
      href: "/pyqs",
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

        {/* Nav */}
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

        {/* Button */}
        <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
          Explore
        </button>

      </div>

    </nav>
  );
}