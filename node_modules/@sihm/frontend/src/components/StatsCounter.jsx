import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => spring.on('change', (latest) => setDisplay(Math.round(latest))), [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatsCounter({ items }) {
  return (
    <section className="container-premium py-16">
      <div className="grid gap-4 rounded bg-white p-4 shadow-premium md:grid-cols-4">
        {items.map((item) => (
          <motion.div whileHover={{ y: -6 }} className="rounded bg-mist p-7 text-center" key={item.label}>
            <p className="font-heading text-4xl font-black text-navy"><Counter value={item.value} suffix={item.suffix} /></p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[.16em] text-slate-500">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
