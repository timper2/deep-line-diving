import { useState } from 'react';

export default function Contact() {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Contact Us</h1>
      <p className="text-sm text-gray-500 mb-6">Drop a line, and we will get back to you as soon as possible.</p>
      
      <form 
        action="https://formsubmit.co/rehash.cation1q@icloud.com" 
        method="POST" 
        className="space-y-4"
      >
        {/* Anti-spam honeypot field (hidden from real users) */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        
        {/* Tells FormSubmit NOT to show their popup page, but to redirect back to your clean URL instead */}
        <input type="hidden" name="_next" value="https://deep-line-diving.vercel.app/#/contact" />

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
          className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
