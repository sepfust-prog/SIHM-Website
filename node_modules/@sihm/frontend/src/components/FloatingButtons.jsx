import { MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '../data/siteData';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-lg" href={`https://wa.me/${contact.whatsapp}`} aria-label="WhatsApp admissions"><MessageCircle /></a>
      <Link className="grid h-12 w-12 place-items-center rounded-full bg-gold text-navy shadow-lg" to="/admissions" aria-label="Admission enquiry"><Send /></Link>
    </div>
  );
}
