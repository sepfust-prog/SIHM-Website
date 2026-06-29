import { ArrowRight } from 'lucide-react';

export default function NewsCard({ item }) {
  return (
    <article className="theme-panel group overflow-hidden p-7 transition duration-300 hover:-translate-y-1">
      <p className="text-xs font-black uppercase tracking-[.18em] text-gold">{item.category} | {item.date}</p>
      <h3 className="mt-4 font-editorial text-3xl font-semibold leading-tight text-ink">{item.title}</h3>
      <button className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs font-black uppercase tracking-[.18em] text-ink">Read More <ArrowRight className="transition group-hover:translate-x-1" size={17} /></button>
    </article>
  );
}
