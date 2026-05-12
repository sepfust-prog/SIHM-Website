import { Mail, MapPin, Phone } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { contact } from '../data/siteData';
import { pageSeo } from '../lib/seo';

export default function Contact() {
  return (
    <>
      <SEO seo={pageSeo('Contact Us', 'Contact SIHM Dimapur admissions, campus, head office, phone, email, and enquiry form.', '/contact-us')} />
      <section className="navy-gradient pb-24 pt-40 text-white"><div className="container-premium"><SectionHeader eyebrow="Contact Us" title="We would love to hear from you" text="Reach the admissions team for courses, eligibility, hostels, placements, or campus visits." light /></div></section>
      <section className="container-premium grid gap-10 py-16 lg:grid-cols-[1fr_440px]">
        <div>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded bg-mist p-7"><MapPin className="text-gold" /><h3 className="mt-4 font-heading text-xl font-black text-navy">Head Office</h3><p className="mt-2 text-slate-600">{contact.headOffice}</p></article>
            <article className="rounded bg-mist p-7"><MapPin className="text-gold" /><h3 className="mt-4 font-heading text-xl font-black text-navy">Campus</h3><p className="mt-2 text-slate-600">{contact.campus}</p></article>
            <article className="rounded bg-mist p-7"><Phone className="text-gold" /><h3 className="mt-4 font-heading text-xl font-black text-navy">Phone</h3><p className="mt-2 text-slate-600">{contact.phone}, {contact.alternatePhone}</p></article>
            <article className="rounded bg-mist p-7"><Mail className="text-gold" /><h3 className="mt-4 font-heading text-xl font-black text-navy">E-mail</h3><p className="mt-2 text-slate-600">{contact.email}</p></article>
          </div>
          <iframe className="mt-8 h-96 w-full rounded border-0 shadow-premium" title="SIHM Dimapur map" loading="lazy" src="https://www.google.com/maps?q=Purana%20Bazar%20Dimapur%20Nagaland&output=embed" />
        </div>
        <InquiryForm compact />
      </section>
    </>
  );
}
