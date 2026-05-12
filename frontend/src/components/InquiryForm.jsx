import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

export default function InquiryForm({ compact = false }) {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = (data) => console.log('Admission enquiry', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded bg-white p-6 shadow-premium">
      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        {['firstName', 'lastName', 'phone', 'email', 'city'].map((field) => (
          <label className="grid gap-2 text-sm font-bold text-slate-700" key={field}>
            {field.replace(/([A-Z])/g, ' $1').replace(/^./, (m) => m.toUpperCase())}*
            <input className="rounded border border-slate-200 px-4 py-3 outline-none focus:border-gold" {...register(field, { required: true })} />
            {errors[field] && <span className="text-xs text-red-600">Required</span>}
          </label>
        ))}
        <label className="grid gap-2 text-sm font-bold text-slate-700 md:col-span-2">
          Interested Program
          <select className="rounded border border-slate-200 px-4 py-3 outline-none focus:border-gold" {...register('program')}>
            <option>B.Sc. Hospitality and Hotel Administration</option>
            <option>Diploma in Food Production</option>
            <option>Diploma in Food & Beverage Service</option>
          </select>
        </label>
      </div>
      <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-navy px-5 py-4 font-black text-white" type="submit">Submit Enquiry <Send size={18} /></button>
      {isSubmitSuccessful && <p className="mt-4 rounded bg-green-50 p-3 text-sm font-bold text-green-700">Thank you. The admissions team will contact you shortly.</p>}
    </form>
  );
}
