import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-4xl`}
    >
      {eyebrow && <p className={`lr-eyebrow mb-3 text-[10px] sm:mb-5 sm:text-[11px] ${light ? 'text-white/62' : 'text-slate-500'}`}>{eyebrow}</p>}
      <h2 className={`font-editorial text-2xl font-semibold leading-[1.1] sm:text-3xl md:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-4 text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 md:text-lg ${light ? 'text-white/72' : 'text-slate-600'}`}>{text}</p>}
    </motion.div>
  );
}
