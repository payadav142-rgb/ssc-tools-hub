"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname =
    usePathname();

  const links = [

    {
      name: "Dashboard",
      href: "/dashboard",
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

    <div className="w-72 min-h-screen bg-white/5 border-r border-white/10 p-6 hidden lg:block">

      <h1 className="text-3xl font-bold mb-10">

        SSC Hub 🚀

      </h1>

      <div className="space-y-3">

        {links.map((link) => {

          const isActive =
            pathname === link.href;

          return (

            <Link
              key={link.name}
              href={link.href}
              className={`block px-5 py-4 rounded-2xl transition font-medium ${
                isActive
                  ? "bg-white text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >

              {link.name}

            </Link>

          );

        })}

      </div>

    </div>

  );

}