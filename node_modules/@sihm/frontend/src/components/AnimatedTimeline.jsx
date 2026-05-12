import { motion } from 'framer-motion';

export default function AnimatedTimeline({ items }) {
  return (
    <div className="relative grid gap-6 border-l-2 border-gold/40 pl-7">
      {items.map((item) => (
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded bg-white p-6 shadow-lg" key={item.title}>
          <span className="absolute -left-[37px] top-7 h-4 w-4 rounded-full border-4 border-white bg-gold shadow" />
          <p className="text-sm font-black uppercase tracking-[.18em] text-gold">{item.year}</p>
          <h3 className="mt-2 font-heading text-xl font-black text-navy">{item.title}</h3>
          <p className="mt-2 text-slate-600">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
