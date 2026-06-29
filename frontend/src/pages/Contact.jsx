import { Mail, MapPin, Phone } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { contact } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Contact() {
  return (
    <>
      <SEO seo={pageSeo('Contact Us', 'Contact SIHM Dimapur admissions, campus, head office, phone, email, and enquiry form.', '/contact-us')} />
      <PageHero
        eyebrow="Contact Us"
        title="We would love to hear from you"
        text="Reach the admissions team for courses, eligibility, hostels, placements, or campus visits."
        image="/campus/optimized/campus-building-lg.jpg"
      />
      <section className="container-editorial grid min-w-0 gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)]">
        <div className="min-w-0">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="scroll-reveal editorial-card p-7"><MapPin className="text-logoOrange" /><h3 className="mt-4 font-editorial text-2xl font-semibold text-ink">Head Office</h3><p className="mt-2 text-slate-600">{contact.headOffice}</p></article>
            <article className="scroll-reveal editorial-card p-7"><MapPin className="text-logoBlue" /><h3 className="mt-4 font-editorial text-2xl font-semibold text-ink">Campus</h3><p className="mt-2 text-slate-600">{contact.campus}</p></article>
            <article className="scroll-reveal editorial-card p-7"><Phone className="text-logoGreen" /><h3 className="mt-4 font-editorial text-2xl font-semibold text-ink">Phone</h3><p className="mt-2 text-slate-600">{contact.phone}, {contact.alternatePhone}</p></article>
            <article className="scroll-reveal editorial-card p-7"><Mail className="text-logoRed" /><h3 className="mt-4 font-editorial text-2xl font-semibold text-ink">E-mail</h3><p className="mt-2 text-slate-600">{contact.email}</p></article>
          </div>
          <iframe className="mt-8 h-96 w-full border-0 shadow-premium" title="SIHM Dimapur map" loading="lazy" src="https://www.google.com/maps?q=Purana%20Bazar%20Dimapur%20Nagaland&output=embed" />
        </div>
        <div className="min-w-0 lg:sticky lg:top-28">
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
