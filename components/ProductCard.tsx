import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden border border-[#d9dcda] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(7,20,32,.12)]">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="product-image-shell relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 product-placeholder opacity-50" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-contain p-9 transition duration-500 group-hover:scale-105"
          />
          <span className="absolute left-5 top-5 text-[9px] font-bold uppercase tracking-[.2em] text-white/60">{product.category}</span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-[#101d29]">{product.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
            </div>
            <span className="shrink-0 border border-[#d8d9d5] p-2 text-[#9d7e50] transition group-hover:border-[#c9a56a] group-hover:bg-[#c9a56a] group-hover:text-[#081522]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.specs.map((spec) => <span key={spec} className="border border-[#e3e5e2] bg-[#f4f5f2] px-3 py-1 text-[10px] font-semibold text-slate-600">{spec}</span>)}
          </div>
        </div>
      </Link>
    </article>
  );
}
