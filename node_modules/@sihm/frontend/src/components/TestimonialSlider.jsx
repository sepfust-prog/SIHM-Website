import { Quote } from 'lucide-react';

export default function TestimonialSlider({ items }) {
  return (
    <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-2">
      {items.map((item) => (
        <article className="min-w-[300px] snap-start rounded bg-white p-7 shadow-premium md:min-w-[380px]" key={item.name}>
          <Quote className="text-gold" />
          <p className="mt-5 text-lg leading-8 text-slate-700">“{item.quote}”</p>
          <h3 className="mt-6 font-heading text-xl font-black text-navy">{item.name}</h3>
          <p className="text-sm font-semibold text-slate-500">{item.role}</p>
        </article>
      ))}
    </div>
  );
}
