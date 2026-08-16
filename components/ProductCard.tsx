import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ImagePlus } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(7,24,46,.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(7,24,46,.12)]">
      <div className="product-image-shell relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0 product-placeholder opacity-50" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-8 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end p-5">
          <div className="rounded-full border border-white/15 bg-navy/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur">
            {product.category}
          </div>
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur">
          <ImagePlus className="h-4 w-4" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-navy">{product.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
          </div>
          <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`} className="shrink-0 rounded-full border border-slate-200 p-2 text-cyan transition hover:border-cyan">
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <span key={spec} className="rounded-full bg-ice px-3 py-1 text-[11px] font-bold text-navy">{spec}</span>
          ))}
        </div>
      </div>
    </article>
  );
}