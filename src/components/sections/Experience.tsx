import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { experiences } from '@/lib/data';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-[#1a1a2e]/40"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={clsx(
            'text-center mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">Work History</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            My <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#ff6584] to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={clsx(
                  'relative flex gap-8 md:gap-0 transition-all duration-700',
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                )}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#ff6584] border-2 border-[#0f0f1a] md:-translate-x-1/2 mt-6 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={clsx(
                  'ml-16 md:ml-0 md:w-1/2 glass-card rounded-2xl p-6',
                  i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                )}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/10 border border-[#6c63ff]/20 flex items-center justify-center shrink-0">
                      <Briefcase size={18} className="text-[#6c63ff]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg leading-tight">{exp.role}</h3>
                      <p className="text-[#6c63ff] font-medium text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium mb-4">
                    {exp.period}
                  </span>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="flex gap-2 text-slate-400 text-sm">
                        <CheckCircle2 size={14} className="text-[#6c63ff] mt-0.5 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#6c63ff]/10 text-[#6c63ff] text-xs border border-[#6c63ff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
