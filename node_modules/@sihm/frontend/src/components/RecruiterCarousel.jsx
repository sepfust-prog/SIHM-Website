import { motion } from 'framer-motion';

export default function RecruiterCarousel({ items }) {
  return (
    <div className="overflow-hidden">
      <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-4">
        {items.concat(items).map((item, index) => (
          <div className="grid h-24 w-44 place-items-center rounded border border-slate-200 bg-white px-5 text-center font-heading font-black text-navy shadow-sm" key={`${item}-${index}`}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
}
