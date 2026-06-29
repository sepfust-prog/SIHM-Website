import { motion } from 'framer-motion';

export default function RecruiterCarousel({ items, dark = false }) {
  return (
    <div className="overflow-hidden">
      <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-4">
        {items.concat(items).map((item, index) => (
          <div className={`grid h-20 w-44 place-items-center rounded-md px-5 text-center font-heading font-black ${dark ? 'border border-white/10 bg-transparent text-gold' : 'border border-slate-200 bg-white text-ink shadow-sm'}`} key={`${item}-${index}`}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
}
