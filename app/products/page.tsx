import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export default function Products() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="hero-mesh absolute inset-0 opacity-30" />
        <div className="container-v relative">
          <span className="eyebrow text-cyan">What We Build</span>
          <h1 className="max-w-4xl text-5xl font-black tracking-[-.04em] sm:text-6xl">Products engineered for demanding missions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Boards, systems and rugged platforms — organised by capability so your team can quickly find the right hardware.</p>
        </div>
      </section>

      <section className="container-v py-20">
        <Reveal><SectionHeading eyebrow="Product Portfolio" title="Built to Perform. Built to Last." description="Purpose-built products delivering reliability, ruggedness and performance in demanding operating environments." /></Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => <span key={c} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600">{c}</span>)}
        </div>

        {categories.map((category) => (
          <div key={category} className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-black uppercase tracking-[.2em] text-cyan">{category}</div>
                <h2 className="mt-2 text-2xl font-black text-navy sm:text-3xl">Mission-ready {category.toLowerCase()}</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.filter((p) => p.category === category).map((product, i) => (
                <Reveal key={product.slug} delay={i * .03}><ProductCard product={product} /></Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
