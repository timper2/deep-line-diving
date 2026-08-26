import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

const INTERESTS = [
  'Sidemount',
  'Cave Diving',
  'Technical Diving',
  'Rebreather / KISS Sidewinder',
  '1-Day Technical Try-Out',
  'Not sure yet',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      course_interest: interest,
      message: message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again in a moment.');
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');
    setPhone('');
    setInterest('');
    setMessage('');
  };

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent';

  return (
    <div className="animate-fade-in">
      <section className="relative flex min-h-[45vh] items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/73759/sea-ocean-water-light-73759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Diver silhouette in sunlit water"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
        <div className="relative mx-auto w-full max-w-7xl container-px pb-14 pt-32">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Get in touch
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's plan your dive.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you have a specific course in mind or just want to talk through your options,
            send a message and I will get back to you personally.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Fields marked with an asterisk are required.
            </p>

            {status === 'success' ? (
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Message sent</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Thanks for reaching out. I will reply to you by email as soon as I can. In the
                    meantime, feel free to complete the diver medical form.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-semibold text-accent hover:text-accent-soft"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Name *
                    </label>
                    <input
                      className={inputClass}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={inputClass}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Phone</label>
                    <input
                      className={inputClass}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Interested in
                    </label>
                    <select
                      className={inputClass}
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                    >
                      <option value="">Select a course</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">
                    Message *
                  </label>
                  <textarea
                    className={`${inputClass} min-h-[140px] resize-y`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your experience, certifications and what you would like to achieve."
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
              <div className="flex items-center gap-2 text-accent">
                <ClipboardCheck className="h-5 w-5" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest">
                  Diver medical form
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                All students must complete the diver medical questionnaire before getting in the
                water. Please review and fill it out ahead of your session.
              </p>
              <a
                href="/diver-medical-form.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-soft"
              >
                <FileText className="h-4 w-4" />
                Open the medical form
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                Contact details
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:dive@deeplinediving.com" className="hover:text-accent">
                    dive@deeplinediving.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+1 (555) 018-2277</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>High Springs, Florida</span>
                </li>
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-slate-500">
                Training is by appointment. Reach out with your preferred dates and I will confirm
                availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
