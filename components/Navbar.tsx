"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Vision & Mission", "/vision-mission"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Products", "/products"],
  ["About Us", "/about"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-v flex h-20 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
          <Image src="/virtus-logo.png" alt="Virtus Defence & Aerospace" width={270} height={160} className="h-14 w-auto object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-cyan">
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </nav>

        <button
          aria-label="Toggle navigation"
          className="rounded-xl border border-slate-200 p-2 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-v flex flex-col gap-1 py-4">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold hover:bg-ice">
                {label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}