import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}
    >
      {eyebrow && <p className={`mb-3 text-sm font-bold uppercase tracking-[.24em] ${light ? 'text-gold' : 'text-gold'}`}>{eyebrow}</p>}
      <h2 className={`font-heading text-3xl font-black leading-tight md:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-8 md:text-lg ${light ? 'text-white/76' : 'text-slate-600'}`}>{text}</p>}
    </motion.div>
  );
}
