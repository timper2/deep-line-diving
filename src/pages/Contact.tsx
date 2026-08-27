import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 px-4 max-w-2xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Drop a line, and we will get back to you as soon as possible.
        </p>
      </div>

      <div className="bg-[#111] border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        <form 
          onSubmit={onSubmit} 
          action={["https:", "", "formsubmit.co", "ajax", "rehash.cation1q@icloud.com"].join("/")}
          method="POST" 
          className="space-y-6"
        >

          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_subject" value="New Website Message Submission" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Name
            </label>
            <input 
              type="text"
              name="name" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
              placeholder="John Doe" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Email Address
            </label>
            <input type="email" name="_replyto" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-200 mb-2">
              Message
            </label>
            <textarea 
              name="message" 
              required 
              rows={5} 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none" 
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 mt-4">
              <p className="text-sm font-medium text-emerald-400 text-center">
                Message sent successfully!
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-4 mt-4">
              <p className="text-sm font-medium text-rose-400 text-center">
                Something went wrong. Please check your connection or try again.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
