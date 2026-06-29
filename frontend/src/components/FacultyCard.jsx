import { Mail, Linkedin } from 'lucide-react';

export default function FacultyCard({ person }) {
  return (
    <article className="theme-panel overflow-hidden">
      <div className="image-lift h-72">
        <img className="h-full w-full object-cover" src={person.image} alt={person.name} loading="lazy" decoding="async" />
      </div>
      <div className="p-6">
        <h3 className="font-editorial text-3xl font-semibold leading-tight text-ink">{person.name}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-[.18em] text-slate-500">{person.title}</p>
        <p className="mt-2 text-slate-600">{person.subject}</p>
        <div className="mt-5 flex gap-2">
          <button className="grid h-10 w-10 place-items-center rounded-sm border border-black/10 bg-white text-ink" aria-label="Email"><Mail size={17} /></button>
          <button className="grid h-10 w-10 place-items-center rounded-sm border border-black/10 bg-white text-ink" aria-label="LinkedIn"><Linkedin size={17} /></button>
        </div>
      </div>
    </article>
  );
}
