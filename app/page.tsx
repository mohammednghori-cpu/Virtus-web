import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Cpu, Factory, ShieldCheck, Radar, Boxes, CircuitBoard, MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ClientLogos } from "@/components/ClientLogos";
import { CapabilityCard } from "@/components/CapabilityCard";
import { products } from "@/data/products";
import { productCategories } from "@/data/site";

const capabilities = [
  { n:"01", title:"Engineering & Design", text:"From electronics and FPGA design to product architecture and rugged mechanical engineering.", icon:CircuitBoard },
  { n:"02", title:"Manufacturing & Integration", text:"Precision fabrication, build-to-print assembly, cable harnesses and system integration.", icon:Factory },
  { n:"03", title:"Testing & Qualification", text:"Prototype development, thermal and structural analysis, testing and qualification support.", icon:ShieldCheck }
];

export default function Home() {
  const featured = products.slice(0, 6);
  return (
    <>
      <section className="hero-visual relative min-h-[690px] overflow-hidden text-white lg:min-h-[760px]">
        <Image src="/products/rugged-chassis.png" alt="Rugged defence electronics platform" fill priority sizes="100vw" className="hero-photo object-cover opacity-50" />
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="container-v relative z-10 flex min-h-[690px] items-end pb-16 pt-28 lg:min-h-[760px] lg:items-center lg:pb-20">
          <div className="max-w-5xl">
            <Reveal>
              <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-[#d8bd91]"><span className="h-px w-10 bg-[#c9a56a]"/>Defence · Aerospace · Mission Systems</div>
              <h1 className="max-w-5xl text-[clamp(3.3rem,8vw,7.7rem)] font-semibold leading-[.91] tracking-[-.065em]">Engineering for<br/><span className="text-[#d6bd95]">the moments</span><br/>that matter.</h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">Indigenous design, engineering and manufacturing for mission-critical electronics, embedded computing and rugged systems.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/products" className="btn-gold">Explore capabilities <ArrowUpRight className="ml-2 h-4 w-4"/></Link>
                <Link href="/contact" className="btn-secondary border-white/45 text-white hover:border-white">Discuss a requirement <ArrowRight className="ml-2 h-4 w-4"/></Link>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-7 right-8 z-10 hidden text-right text-[9px] font-bold uppercase tracking-[.24em] text-white/50 md:block">Virtus Defence & Aerospace<br/>Bengaluru, India</div>
      </section>

      <section className="section-dark">
        <div className="container-v grid gap-0 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01","Indigenous engineering","Design-led product development"],
            ["02","End-to-end capability","Concept through manufacturing"],
            ["03","Mission-critical focus","Defence and aerospace systems"],
            ["04","Integrated execution","Engineering, build and validation"]
          ].map(([n,t,d])=><div key={n} className="index-line flex gap-4 py-5 lg:px-5 first:lg:pl-0"><span className="pt-1 text-xs font-bold text-[#c9a56a]">{n}</span><div><p className="text-sm font-semibold text-white">{t}</p><p className="mt-1 text-xs leading-5 text-white/45">{d}</p></div></div>)}
        </div>
      </section>

      <section className="section-light py-24 lg:py-32">
        <div className="container-v">
          <Reveal><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="eyebrow">What we do</span><h2 className="section-title">From engineering intent to dependable hardware.</h2></div><p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">A connected capability model brings design, manufacturing and validation together — helping customers move complex requirements into integrated, buildable systems.</p></div></Reveal>
          <div className="mt-14 grid gap-px bg-[#d6d8d6] md:grid-cols-3">
            {capabilities.map(({n,title,text,icon:Icon},i)=><Reveal key={n} delay={i*.06}><article className="h-full bg-[#f4f4f1] p-8 lg:p-10"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.2em] text-[#b49361]">{n}</span><Icon className="h-6 w-6 text-[#a98755]"/></div><h3 className="mt-14 text-2xl font-semibold tracking-tight text-[#101d29]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-dark py-24 lg:py-32">
        <div className="container-v">
          <Reveal><div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><span className="eyebrow">Engineered for demanding environments</span><h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">Hardware, systems and solutions shaped around the mission.</h2></div><p className="max-w-xl text-sm leading-8 text-white/55 lg:justify-self-end">Rugged platforms and embedded systems designed for demanding defence, aerospace, homeland security and industrial applications.</p></div></Reveal>
          <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [ShieldCheck,"Rugged systems","Chassis, enclosures and electronics for harsh operating environments."],
              [Cpu,"Embedded computing","SBC, GPGPU, FPGA and high-performance compute platforms."],
              [Radar,"Mission electronics","Processing, networking, displays and operator consoles."],
              [Factory,"Manufacturing","Build-to-print, integration, fabrication and production support."]
            ].map(([Icon,title,desc]:any,i)=><Reveal key={title} delay={i*.05}><div><Icon className="h-7 w-7 text-[#c9a56a]"/><h3 className="mt-6 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-white/50">{desc}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-light py-24 lg:py-32">
        <div className="container-v">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><span className="eyebrow">Product portfolio</span><h2 className="section-title">Purpose-built platforms.<br/>Practical engineering.</h2></div><Link href="/products" className="btn-secondary border-[#1a2a38] text-[#1a2a38]">View all products <MoveUpRight className="ml-2 h-4 w-4"/></Link></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((product,i)=><Reveal key={product.slug} delay={i*.04}><Link href={`/products/${product.slug}`} className="group block border border-[#d9dcda] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(7,20,32,.12)]">
              <div className="product-image-shell relative aspect-[16/10] overflow-hidden"><Image src={product.image} alt={product.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-contain p-9 transition duration-500 group-hover:scale-105"/><span className="absolute left-5 top-5 text-[9px] font-bold uppercase tracking-[.2em] text-white/55">{product.category}</span></div>
              <div className="flex items-start justify-between gap-5 p-6"><div><h3 className="text-lg font-semibold text-[#101d29]">{product.name}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{product.description}</p></div><ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#a98755] transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
            </Link></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e8e9e5] py-24 lg:py-32">
        <div className="container-v grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><span className="eyebrow">Our approach</span><h2 className="section-title">One engineering partner. Multiple points of impact.</h2><p className="mt-6 text-sm leading-7 text-slate-600">Explore the services and solutions that support your programme from early design through production and integration.</p><Link href="/services" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.14em] text-[#8c6e44]">Explore services <ArrowRight className="h-4 w-4"/></Link></div>
          <div className="grid gap-7 sm:grid-cols-2">
            {productCategories.slice(0,4).map((c,i)=><div key={c.title} className="border-t border-[#aeb3b0] pt-5"><span className="text-[10px] font-bold tracking-[.2em] text-[#a98755]">0{i+1}</span><h3 className="mt-3 text-lg font-semibold text-[#122332]">{c.title}</h3><p className="mt-3 text-xs leading-6 text-slate-600">{c.items.join(" · ")}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-light py-20"><div className="container-v"><Reveal><SectionHeading eyebrow="Working within the ecosystem" title="Supporting India's strategic and industrial programmes." description="Virtus engages across the defence, aerospace, research and industrial landscape." /></Reveal><ClientLogos /></div></section>

      <section className="relative overflow-hidden bg-[#0a1b29] py-24 text-white lg:py-32">
        <div className="hero-grid absolute inset-0 opacity-25"/>
        <div className="container-v relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><span className="eyebrow">Start a conversation</span><h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-5xl lg:text-6xl">Have a mission to engineer?</h2><p className="mt-6 max-w-2xl text-base leading-8 text-white/55">Share your requirement with our team. Let’s explore how Virtus can support your next programme.</p></div><Link href="/contact" className="btn-gold w-fit">Get in touch <ArrowRight className="ml-2 h-4 w-4"/></Link></div>
      </section>
    </>
  );
}
