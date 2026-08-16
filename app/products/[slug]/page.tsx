import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div>
      <section className="relative overflow-hidden bg-navy py-16 text-white">
        <div className="hero-mesh absolute inset-0 opacity-25" />
        <div className="container-v relative">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-bold text-slate-300 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
          <div className="mt-9 text-xs font-black uppercase tracking-[.2em] text-cyan">
            {product.category}
          </div>
          <h1 className="mt-2 max-w-5xl text-4xl font-black tracking-[-.04em] sm:text-6xl">
            {product.name}
          </h1>
        </div>
      </section>

      <section className="container-v grid gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div className="sticky top-28">
          <div className="product-image-shell relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl">
            <div className="product-placeholder absolute inset-0 opacity-40" />
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="relative object-contain p-12"
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-navy/70 px-4 py-2 text-xs font-bold text-white backdrop-blur">
              Product Image
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[.2em] text-cyan">
            Product Overview
          </div>
          <p className="mt-4 text-lg leading-9 text-slate-600">
            {product.description}
          </p>

          <div className="mt-9">
            <h2 className="text-xl font-black text-navy">Basic Details</h2>
            <div className="mt-5 space-y-3">
              {product.details.map((detail) => (
                <div
                  key={detail}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  <span className="text-sm leading-6 text-slate-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9">
            <h2 className="text-xl font-black text-navy">Profile-Supported Highlights</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full bg-ice px-4 py-2 text-xs font-bold text-navy"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-ice p-6">
            <h2 className="text-xl font-black text-navy">Need the product datasheet?</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Contact Virtus with your application, environmental requirements and
              interface needs for the appropriate product information.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Request Product Information
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
