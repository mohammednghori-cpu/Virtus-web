import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { solutions } from "@/data/site";
import { Boxes, Cpu, ServerCog } from "lucide-react";

const icons = [Boxes, Cpu, ServerCog];

export default function Solutions() {
  return (
    <div>
      <section className="bg-navy py-24 text-white"><div className="container-v"><span className="eyebrow text-cyan">Integrated Capability</span><h1 className="text-5xl font-black sm:text-6xl">Solutions</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Solutions designed to bridge sourcing, engineering, integration and mission deployment.</p></div></section>
      <section className="container-v py-20">
        <Reveal><SectionHeading eyebrow="Our Offerings" title="Purpose-built solutions around real mission requirements." /></Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {solutions.map((s, i) => { const Icon = icons[i]; return <Reveal key={s.title} delay={i*.07}><article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ice text-cyan"><Icon /></div><h2 className="mt-8 text-2xl font-black text-navy">{s.title}</h2><p className="mt-4 text-sm leading-8 text-slate-600">{s.description}</p></article></Reveal>})}
        </div>
      </section>
    </div>
  );
}