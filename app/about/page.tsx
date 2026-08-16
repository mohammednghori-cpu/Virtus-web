import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function About() {
  return (
    <div>
      <section className="bg-navy py-24 text-white"><div className="container-v"><span className="eyebrow text-cyan">Company Overview</span><h1 className="text-5xl font-black sm:text-6xl">About Virtus</h1></div></section>
      <section className="container-v py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><div className="rounded-[2rem] bg-ice p-10"><Image src="/virtus-logo.jpg" alt="Virtus Defence & Aerospace" width={700} height={700} className="h-auto w-full rounded-2xl object-contain" /></div></Reveal>
          <Reveal delay={.08}>
            <div>
              <SectionHeading eyebrow="Who We Are" title="Defence Electronics Manufacturer" />
              <p className="mt-6 text-lg leading-9 text-slate-600">Virtus Defence & Aerospace Private Limited is an Indian defence and aerospace technology company specialising in the design, development and manufacturing of rugged, semi-rugged and industrial-grade electronics, embedded and mechanical solutions for mission-critical applications.</p>
              <p className="mt-5 text-lg leading-9 text-slate-600">The company delivers end-to-end engineering, system integration and manufacturing services supporting defence, aerospace, homeland security and industrial sectors with advanced, highly reliable products.</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Indigenous", "Design & Manufacturing"],
            ["02", "End-to-End", "Design to deployment"],
            ["03", "4 Core Sectors", "Defence · Aerospace · Industrial · HLS"]
          ].map(([n, a, b], i) => <Reveal key={n} delay={i*.05}><div className="rounded-3xl border border-slate-200 bg-white p-7"><div className="text-4xl font-black text-slate-200">{n}</div><div className="mt-5 text-xl font-black text-navy">{a}</div><div className="mt-2 text-sm text-slate-500">{b}</div></div></Reveal>)}
        </div>
        <div className="mt-20 rounded-[2rem] bg-ice p-8 sm:p-12">
          <SectionHeading eyebrow="Company Profile" title="Download the detailed profile" description="The uploaded Virtus company profile is included in this starter project for reference and can be linked from the production site." />
          <a href="/company-profile.pdf" target="_blank" rel="noreferrer" className="btn-primary mt-8">Open Company Profile</a>
        </div>
      </section>
    </div>
  );
}