import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { projects } from '@/lib/data';
import { ExternalLink, Github, Star } from 'lucide-react';
import clsx from 'clsx';

type Filter = 'all' | 'featured';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const { ref, isVisible } = useIntersectionObserver(0.05);

  const displayed = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={clsx(
            'text-center mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="text-[#6c63ff] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects I've built — from side experiments to production products.
          </p>
        </div>

        {/* Filter */}
        <div
          className={clsx(
            'flex justify-center gap-3 mb-12 transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {(['all', 'featured'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200',
                filter === f
                  ? 'bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white shadow-lg'
                  : 'border border-slate-700 text-slate-400 hover:border-[#6c63ff]/50 hover:text-white'
              )}
            >
              {f === 'all' ? 'All Projects' : 'Featured'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayed.map((project, i) => (
            <div
              key={project.id}
              className={clsx(
                'project-card glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6c63ff]/20',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/70 to-transparent flex items-end justify-between p-4">
                  <a
                    href={project.githubUrl}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[#6c63ff] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[#ff6584] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6c63ff]/90 text-white text-xs font-medium">
                    <Star size={10} fill="white" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#6c63ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-medium border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
