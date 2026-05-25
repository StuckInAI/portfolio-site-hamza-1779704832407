import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import clsx from 'clsx';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver(0.1);
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async send
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={clsx(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info */}
          <div
            className={clsx(
              'md:col-span-2 space-y-8 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@alexchen.dev' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/10 border border-[#6c63ff]/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#6c63ff]" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-[#6c63ff] hover:border-[#6c63ff]/40 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={clsx(
              'md:col-span-3 transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#6c63ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#6c63ff] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#6c63ff] transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#6c63ff] transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className={clsx(
                  'w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200',
                  status === 'sending'
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white hover:opacity-90 hover:scale-[1.02]'
                )}
              >
                <Send size={18} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
