import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/rehash.cation1q@icloud.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formValues)
      });

      if (response.ok) {
        setStatus('success');
        event.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Contact Us</h1>
      <p className="text-sm text-gray-500 mb-6">Drop a line, and we will get back to you as soon as possible.</p>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <input type="text" name="_honey" style={{ display: 'none' }} />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" name="name" required className="w-full border border-gray-300 p-2 rounded text-gray-900" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" name="email" required className="w-full border border-gray-300 p-2 rounded text-gray-900" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea name="message" required rows={4} className="w-full border border-gray-300 p-2 rounded text-gray-900" placeholder="Type your message here..."></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-sm mt-3 font-medium p-2 rounded text-center bg-green-50 text-green-700">
            Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm mt-3 font-medium p-2 rounded text-center bg-red-50 text-red-700">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
