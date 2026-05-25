import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import clsx from 'clsx';
import { navItems } from '@/lib/data';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navItems.map((n) => n.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-[#6c63ff]/10 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#ff6584] flex items-center justify-center">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl text-white">
            dev<span className="text-[#6c63ff]">.</span>portfolio
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            return (
              <li key={item.label}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={clsx(
                    'nav-link text-sm font-medium transition-colors duration-200',
                    activeSection === id
                      ? 'text-[#6c63ff]'
                      : 'text-slate-400 hover:text-white'
                  )}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-[#0f0f1a]/95 backdrop-blur-lg border-t border-[#6c63ff]/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="text-left text-slate-300 hover:text-[#6c63ff] font-medium transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#ff6584] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
