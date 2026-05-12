import { ArrowRight } from 'lucide-react';

export default function NewsCard({ item }) {
  return (
    <article className="rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <p className="text-sm font-black uppercase tracking-[.16em] text-gold">{item.category} | {item.date}</p>
      <h3 className="mt-4 font-heading text-xl font-black text-navy">{item.title}</h3>
      <button className="mt-6 inline-flex items-center gap-2 font-bold text-navy">Read More <ArrowRight size={17} /></button>
    </article>
  );
}
