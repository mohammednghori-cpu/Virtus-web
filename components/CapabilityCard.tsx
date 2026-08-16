import { ArrowUpRight } from "lucide-react";

export function CapabilityCard({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card group relative overflow-hidden rounded-3xl p-7">
      <div className="mb-10 flex items-center justify-between">
        <span className="text-4xl font-black text-slate-200">{number}</span>
        <ArrowUpRight className="h-5 w-5 text-cyan transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <h3 className="text-xl font-black text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
    </div>
  );
}