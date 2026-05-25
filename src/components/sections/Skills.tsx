import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { skills } from '@/lib/data';
import clsx from 'clsx';

type Category = 'all' | 'frontend' | 'backend' | 'tools';

const categories: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Tools & DevOps', value: 'tools' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { ref, isVisible } = useIntersectionObserver(0.1);

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-[#1a1a2e]/40"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={clsx(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div
          className={clsx(
            'flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white shadow-lg'
                  : 'border border-slate-700 text-slate-400 hover:border-[#6c63ff]/50 hover:text-white'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={clsx(
                'glass-card rounded-xl p-5 transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-[#6c63ff] font-bold text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#6c63ff] to-[#ff6584] skill-bar"
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
