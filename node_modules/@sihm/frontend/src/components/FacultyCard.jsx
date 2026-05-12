import { Mail, Linkedin } from 'lucide-react';

export default function FacultyCard({ person }) {
  return (
    <article className="overflow-hidden rounded bg-white shadow-premium">
      <img className="h-72 w-full object-cover" src={person.image} alt={person.name} />
      <div className="p-6">
        <h3 className="font-heading text-xl font-black text-navy">{person.name}</h3>
        <p className="mt-1 font-bold text-gold">{person.title}</p>
        <p className="mt-2 text-slate-600">{person.subject}</p>
        <div className="mt-5 flex gap-2">
          <button className="grid h-10 w-10 place-items-center rounded bg-mist text-navy" aria-label="Email"><Mail size={17} /></button>
          <button className="grid h-10 w-10 place-items-center rounded bg-mist text-navy" aria-label="LinkedIn"><Linkedin size={17} /></button>
        </div>
      </div>
    </article>
  );
}
