import { Quote } from 'lucide-react';

export default function TestimonialSlider({ items }) {
  return (
    <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-2">
      {items.map((item) => (
        <article className="theme-panel min-w-[300px] snap-start p-7 md:min-w-[380px]" key={item.name}>
          <Quote className="text-gold" />
          <p className="mt-5 text-lg leading-8 text-slate-700">"{item.quote}"</p>
          <h3 className="mt-6 font-editorial text-2xl font-semibold text-ink">{item.name}</h3>
          <p className="text-sm font-semibold text-slate-500">{item.role}</p>
        </article>
      ))}
    </div>
  );
}
