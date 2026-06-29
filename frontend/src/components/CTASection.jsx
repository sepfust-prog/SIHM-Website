import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection({ title = 'Begin Your Hospitality Career at SIHM Dimapur', text = 'Speak with the admissions team, understand eligibility, and choose the right program for your goals.' }) {
  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-16">
      <div className="container-editorial relative grid gap-8 overflow-hidden rounded-md bg-ink p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <img className="absolute inset-0 h-full w-full object-cover opacity-20" src="/campus/optimized/campus-building-wide-md.jpg" alt="" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-ink/74" />
        <div className="relative">
          <p className="lr-eyebrow mb-4 text-gold">Admission Enquiry</p>
          <h2 className="font-editorial text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-white/72">{text}</p>
        </div>
        <Link className="lr-button lr-button-gold relative" to="/admissions">Apply Now <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
