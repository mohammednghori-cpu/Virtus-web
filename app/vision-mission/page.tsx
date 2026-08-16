import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { vision, mission, focusAreas } from "@/data/site";

export default function VisionMission() {
  return (
    <div>
      <section className="bg-navy py-24 text-white">
        <div className="container-v">
          <Reveal><span className="eyebrow text-cyan">Our Purpose</span><h1 className="text-5xl font-black sm:text-6xl">Vision & Mission</h1></Reveal>
        </div>
      </section>
      <section className="container-v py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal><div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"><div className="text-sm font-bold uppercase tracking-widest text-gold">Our Vision</div><p className="mt-5 text-xl leading-9 text-slate-700">{vision}</p></div></Reveal>
          <Reveal delay={.08}><div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"><div className="text-sm font-bold uppercase tracking-widest text-gold">Our Mission</div><p className="mt-5 text-xl leading-9 text-slate-700">{mission}</p></div></Reveal>
        </div>
        <div className="mt-20"><SectionHeading eyebrow="Focus Areas" title="Where Virtus applies its engineering capability." /></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((x, i) => <Reveal key={x} delay={i*.05}><div className="rounded-2xl bg-ice p-6 font-black text-navy">{x}</div></Reveal>)}
        </div>
      </section>
    </div>
  );
}