export default function FacultyCard({ person }) {
  return (
    <article className="theme-panel group overflow-hidden outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f3eb]" tabIndex={0}>
      <div className="image-lift relative h-80 overflow-hidden">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-focus:scale-105"
          src={person.image}
          alt={person.name}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 group-focus:opacity-100">
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-gold/90">About</p>
            <p className="mt-3 text-sm leading-7 text-white/85">{person.about || person.subject || person.designation}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-editorial text-3xl font-semibold leading-tight text-ink">{person.name}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-[.18em] text-slate-500">{person.designation || person.title}</p>
      </div>
    </article>
  );
}
