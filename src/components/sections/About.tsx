import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { User, MapPin, Coffee, Award } from 'lucide-react';
import clsx from 'clsx';

const stats = [
  { label: 'Years Experience', value: '6+', icon: Award },
  { label: 'Projects Completed', value: '50+', icon: Coffee },
  { label: 'Happy Clients', value: '30+', icon: User },
  { label: 'Countries', value: '12', icon: MapPin },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={clsx(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Avatar side */}
          <div
            className={clsx(
              'flex justify-center transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#6c63ff]/30 to-[#ff6584]/30 animate-pulse-slow" />
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-[#6c63ff]/40">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Open to work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={clsx(
              'transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Full-Stack Developer based in{' '}
              <span className="text-[#6c63ff]">San Francisco</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a passionate developer with 6+ years of experience building scalable web applications.
              I specialize in creating exceptional digital experiences that combine beautiful design
              with robust engineering.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring hiking trails, experimenting with new
              cooking recipes, or contributing to open-source projects. I believe in writing clean,
              maintainable code that stands the test of time.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['React', 'TypeScript', 'Node.js', 'AWS', 'Python', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#6c63ff]/10 border border-[#6c63ff]/20 text-[#6c63ff] text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={clsx(
            'grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="glass-card rounded-2xl p-6 text-center hover:border-[#6c63ff]/40 transition-colors"
            >
              <Icon size={24} className="text-[#6c63ff] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
