"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const links = [
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Products", "/products"],
  ["About", "/about"],
  ["Vision & Mission", "/vision-mission"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="container-v flex h-[82px] items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="brand-lockup" aria-label="Virtus home">
          <Image src="/virtus-logo.png" alt="Virtus Defence & Aerospace" width={500} height={320} className="h-[58px] w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
          <Link href="/contact" className="btn-gold">Discuss a Requirement <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </nav>
        <button aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} className="mobile-menu lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <div className="mobile-panel lg:hidden"><nav className="container-v flex flex-col gap-1 py-4" aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="mobile-link">{label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-3">Discuss a Requirement <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
      </nav></div>}
    </header>
  );
}
