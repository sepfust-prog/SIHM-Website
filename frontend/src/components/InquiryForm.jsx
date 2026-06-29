import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { submitLead } from '../lib/cms';

export default function InquiryForm({ compact = false }) {
  const [submitState, setSubmitState] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      program: 'B.Sc. Hospitality and Hotel Administration'
    }
  });

  const onSubmit = async (data) => {
    setSubmitState('idle');
    setSubmitError('');

    try {
      await submitLead({
        ...data,
        page: window.location.pathname,
        source: 'website'
      });
      setSubmitState('success');
      reset({ program: data.program });
    } catch {
      setSubmitState('error');
      setSubmitError('Could not save the enquiry in CMS. Please check that Strapi is running and try again.');
    }
  };

  const fields = [
    ['firstName', 'First Name', 'text'],
    ['lastName', 'Last Name', 'text'],
    ['phone', 'Phone', 'tel'],
    ['email', 'Email', 'email'],
    ['city', 'City', 'text']
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-full border border-black/10 bg-white p-5 shadow-premium sm:p-6">
      <div className={`grid min-w-0 gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        {fields.map(([field, label, type]) => (
          <label className={`grid min-w-0 gap-2 text-sm font-bold text-slate-700 ${field === 'city' && !compact ? 'sm:col-span-2 lg:col-span-1' : ''}`} key={field}>
            {label}*
            <input
              className="min-h-12 w-full min-w-0 border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              type={type}
              autoComplete={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'on'}
              {...register(field, { required: true })}
            />
            {errors[field] && <span className="text-xs text-red-600">Required</span>}
          </label>
        ))}
        <label className={`grid min-w-0 gap-2 text-sm font-bold text-slate-700 ${compact ? '' : 'sm:col-span-2'}`}>
          Interested Program
          <select className="min-h-12 w-full min-w-0 border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" {...register('program')}>
            <option>B.Sc. Hospitality and Hotel Administration</option>
            <option>Diploma in Food Production</option>
            <option>Diploma in Food & Beverage Service</option>
          </select>
        </label>
      </div>
      <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-5 py-4 font-black text-white transition hover:bg-logoOrange hover:text-ink disabled:cursor-wait disabled:opacity-70" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving Enquiry...' : 'Submit Enquiry'} <Send size={18} />
      </button>
      {submitState === 'success' && <p className="mt-4 bg-green-50 p-3 text-sm font-bold text-green-700">Thank you. Your enquiry has been saved and the admissions team will contact you shortly.</p>}
      {submitState === 'error' && <p className="mt-4 bg-red-50 p-3 text-sm font-bold text-red-700">{submitError}</p>}
    </form>
  );
}
