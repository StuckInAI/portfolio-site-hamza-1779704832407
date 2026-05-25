import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glows */}
      <div
        className="hero-glow"
        style={{
          width: '600px',
          height: '600px',
          background: '#6c63ff',
          top: '-100px',
          left: '-200px',
        }}
      />
      <div
        className="hero-glow"
        style={{
          width: '400px',
          height: '400px',
          background: '#ff6584',
          bottom: '-50px',
          right: '-100px',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[#6c63ff] text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles size={14} />
          Available for new projects
        </div>

        {/* Avatar */}
        <div
          className="flex justify-center mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6c63ff] to-[#ff6584] p-[3px] shadow-lg shadow-[#6c63ff]/40">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0f0f1a]">
                <img
                  src="https://sopprkucealncmlipghn.supabase.co/storage/v1/object/public/prompt-images/build-images/1779705120065-WhatsApp-Image-2026-04-13-at-8.55.33-PM.jpeg"
                  alt="Alex Chen"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0f0f1a] shadow-md" />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">Alex Chen</span>
        </h1>

        {/* Title */}
        <p
          className="text-2xl sm:text-3xl text-slate-300 font-light mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Full-Stack Developer &amp;{' '}
          <span className="text-[#ff6584] font-medium">UI/UX Enthusiast</span>
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          I craft exceptional digital experiences with clean code and thoughtful design.
          Passionate about building products that make a real difference.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-[#6c63ff]/30"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full border border-[#6c63ff]/40 text-white font-semibold text-lg hover:bg-[#6c63ff]/10 hover:border-[#6c63ff] transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#6c63ff] hover:border-[#6c63ff] transition-all duration-200 hover:scale-110"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-[#6c63ff] transition-colors animate-pulse-slow"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
