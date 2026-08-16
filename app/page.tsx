import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Cpu, Factory, ShieldCheck, Waves, Radar, CircuitBoard, Boxes } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ClientLogos } from "@/components/ClientLogos";
import { CapabilityCard } from "@/components/CapabilityCard";
import { productCategories } from "@/data/site";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="hero-mesh absolute inset-0" />
        <div className="container-v relative grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <span className="eyebrow">Innovating Defence Solutions</span>
            <h1 className="max-w-5xl text-5xl font-black leading-[.95] tracking-[-.05em] text-navy sm:text-6xl lg:text-7xl">
              Engineering hardware that <span className="text-cyan">performs when it matters.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Virtus Defence & Aerospace delivers indigenous design, system engineering, manufacturing and rugged electronics for mission-critical applications.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">Explore Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <Link href="/contact" className="btn-secondary">Start a Conversation</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[.16em] text-slate-500">
              <span>Defence</span><span>Aerospace</span><span>Homeland Security</span><span>Industrial</span>
            </div>
          </Reveal>

          <Reveal delay={.1}>
            <div className="hero-glow scanline relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-[#0c2a46] to-[#123f62]">
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-cyan/20" />
              <div className="absolute inset-[25%] rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl" />
              <div className="absolute left-1/2 top-[18%] h-[64%] w-px bg-gradient-to-b from-transparent via-cyan/50 to-transparent" />
              <div className="absolute left-[18%] top-1/2 h-px w-[64%] bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
              <Image src="/virtus-logo.png" alt="Virtus Defence & Aerospace" width={700} height={700} className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-xl object-contain mix-blend-screen" />
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.2em] text-white/45"><span>Mission Ready</span><span>Make in India</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-6 text-white">
        <div className="container-v grid gap-4 sm:grid-cols-4">
          {[
            ["01", "Indigenous", "Design & Manufacturing"],
            ["02", "End-to-End", "Design to deployment"],
            ["03", "4 Core Sectors", "Defence · Aerospace · Industrial · Home Land Security"],
            ["04", "Mission-Critical", "Rugged electronics & mechanical systems"]
          ].map(([n, a, b]) => (
            <div key={n} className="flex items-center gap-4 border-white/10 py-3 sm:border-r last:border-r-0">
              <span className="text-2xl font-black text-cyan">{n}</span>
              <div><div className="text-sm font-black">{a}</div><div className="mt-1 text-xs text-slate-400">{b}</div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-v py-24">
        <Reveal><SectionHeading eyebrow="Engineering Depth" title="One partner across design, build, integration and validation." description="A connected capability model helps reduce handoffs between engineering, manufacturing and qualification." /></Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <CapabilityCard number="01" title="Design Services" description="PCB, backplane, FPGA, hardware, product, system and rugged mechanical design." />
          <CapabilityCard number="02" title="Manufacturing & Assembly" description="Precision machining, sheet metal fabrication, build-to-print, integration and cable assemblies." />
          <CapabilityCard number="03" title="Testing & Qualification" description="Prototype development, production, thermal/structural analysis and qualification." />
        </div>
      </section>

      <section className="bg-ice py-24">
        <div className="container-v">
          <Reveal><SectionHeading eyebrow="Defence-Ready By Design" title="Built for harsh environments, long lifecycles and dependable execution." /></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [ShieldCheck, "Ruggedisation", "Shock, vibration and temperature resilience."],
              [Cpu, "Embedded Computing", "High-performance boards and compute platforms."],
              [Radar, "Mission Systems", "Processing, networking, displays and consoles."],
              [Factory, "Manufacturing", "Repeatable production and build-to-print capability."]
            ].map(([Icon, title, desc]: any, i) => (
              <Reveal key={title} delay={i*.04}><div className="rounded-3xl bg-white p-7 shadow-sm"><Icon className="h-7 w-7 text-cyan" /><h3 className="mt-6 text-lg font-black text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-v py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured Products" title="A product portfolio you can explore by platform." />
          <Link href="/products" className="btn-secondary">View full portfolio <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug} className="group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
              <div className="product-image-shell relative aspect-[16/10]">
                <Image src={product.image} alt={product.name} fill className="object-contain p-10 transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6"><div className="text-[10px] font-black uppercase tracking-[.2em] text-cyan">{product.category}</div><h3 className="mt-2 text-xl font-black text-navy">{product.name}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-v py-20" id="search-relevant-services"><div className="max-w-4xl"><span className="eyebrow">Defence & Aerospace Engineering</span><h2 className="section-title">Defence electronics, embedded computing, rugged systems and engineering services </h2><p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">Virtus Defence & Aerospace provides PCB and backplane design, FPGA and hardware design, mechanical design, product and system engineering, machining and sheet-metal fabrication, build-to-print assembly, system integration, wire harness and cable assemblies, prototype development, production, thermal and structural analysis, testing and qualification, together with embedded computing, rugged chassis, LRUs, displays, consoles, networking, thermal and IT solutions.</p></div></section><section className="bg-white py-24">
        <div className="container-v">
          <Reveal><SectionHeading eyebrow="Who We Serve" title="Supporting India's strategic and defence ecosystem." description="" /></Reveal>
          <ClientLogos />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy to-[#16456c] py-24 text-white">
        <div className="container-v relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><span className="eyebrow text-cyan">Let's Build What's Next</span><h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">Bring us your next mission-critical requirement.</h2><p className="mt-5 max-w-2xl text-slate-300">From concept to field-ready hardware, let's engineer the next system together.</p></div>
          <Link href="/contact" className="inline-flex items-center rounded-full bg-gold px-7 py-4 font-black text-navy transition hover:-translate-y-1">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </div>
      </section>
    </>
  );
}
