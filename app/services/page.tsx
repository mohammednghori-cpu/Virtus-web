import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site";

export default function Services() {
  return (
    <div>
      <section className="bg-navy py-24 text-white"><div className="container-v"><span className="eyebrow text-cyan">Our Capability</span><h1 className="text-5xl font-black sm:text-6xl">Services</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Design · Manufacturing · Testing — an end-to-end engineering and manufacturing capability.</p></div></section>
      <section className="container-v py-20">
        {services.map((service, i) => (
          <div key={service.title} className={`${i ? "mt-20 border-t border-slate-200 pt-20" : ""}`}>
            <Reveal><SectionHeading eyebrow={`0${i+1}`} title={service.title} description={service.description} /></Reveal>
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {service.items.map(([title, desc], j) => <Reveal key={title} delay={j*.04}><div className="rounded-3xl border border-slate-200 bg-white p-7"><div className="text-sm font-black text-cyan">{String(j+1).padStart(2,"0")}</div><h3 className="mt-4 text-xl font-black text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p></div></Reveal>)}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}