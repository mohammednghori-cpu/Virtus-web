import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-v grid gap-12 py-16 md:grid-cols-[1.2fr_.7fr_1fr]">
        <div>
          <Image src="/virtus-logo.jpg" alt="Virtus Defence & Aerospace" width={220} height={110} className="mb-6 h-16 w-auto rounded object-contain" />
          <p className="max-w-sm text-sm leading-7 text-white/60">Indigenous engineering and manufacturing for mission-critical defence, aerospace, homeland security and industrial applications.</p>
          <Link href="/contact" className="footer-cta mt-7">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div>
          <p className="footer-kicker">Navigate</p>
          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 text-sm text-white/65">
            <Link href="/services">Services</Link><Link href="/solutions">Solutions</Link>
            <Link href="/products">Products</Link><Link href="/about">About us</Link>
            <Link href="/vision-mission">Vision & Mission</Link><Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="footer-kicker">Bengaluru · India</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-white/65">
            <div className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" /><span>3013/7, 3rd Floor, Simha Arcade,<br/>MKK Road, Gayathri Nagar, Rajajinagar,<br/>Bengaluru, Karnataka - 560021</span></div>
            <div className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-gold" /><div><a href="tel:+917019926676">+91 7019926676</a><br/><a href="tel:+919380586656">+91 9380586656</a></div></div>
            <div className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-gold" /><a href="mailto:sales@virtusda.com">sales@virtusda.com</a></div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5"><div className="container-v flex flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Virtus Defence & Aerospace Pvt. Ltd.</span><span>Engineering confidence for critical missions.</span></div></div>
    </footer>
  );
}
