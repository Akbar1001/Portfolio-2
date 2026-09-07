import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default fallback: opens default email client pre-populated
    window.location.href = `mailto:${resumeData.contacts.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (${formData.email})`;
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-12 p-8 rounded-2xl bg-surface border border-white/10 shadow-crimson-glow">
      <h3 className="text-xl font-bold text-white mb-2 font-mono">Send a Direct Message</h3>
      <p className="text-gray-400 text-sm mb-6">Inquiries, opportunities, or engineering collaborations.</p>

      {submitted ? (
        <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 font-mono text-sm">
          <CheckCircle2 className="w-5 h-5" />
          <span>Message client launched successfully!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-gray-400 mb-1">NAME</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-[#070A12] border border-white/10 focus:border-primaryCrimson text-white outline-none font-mono text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-400 mb-1">EMAIL</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-[#070A12] border border-white/10 focus:border-primaryCrimson text-white outline-none font-mono text-sm"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-gray-400 mb-1">MESSAGE</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-[#070A12] border border-white/10 focus:border-primaryCrimson text-white outline-none font-mono text-sm resize-none"
              placeholder="Discussing an opportunity or project..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primaryCrimson hover:bg-neonRed text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-crimson-glow flex items-center justify-center gap-2 transition duration-200"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
        </form>
      )}
    </div>
  );
}