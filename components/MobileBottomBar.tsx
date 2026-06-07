"use client";

import Link from "next/link";

export default function MobileBottomBar() {

  return (

    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur-xl">

      <div className="grid grid-cols-4 text-center">

        <Link
          href="/"
          className="py-4 text-sm text-white/70"
        >

          Home

        </Link>

        <Link
          href="/tools"
          className="py-4 text-sm text-white/70"
        >

          Tools

        </Link>

        <Link
          href="/blog"
          className="py-4 text-sm text-white/70"
        >

          Blog

        </Link>

        <Link
          href="/dashboard"
          className="py-4 text-sm text-white/70"
        >

          Dashboard

        </Link>

      </div>

    </div>

  );

}