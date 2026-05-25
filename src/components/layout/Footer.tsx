import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#6c63ff]/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#ff6584] flex items-center justify-center">
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-bold text-white">
            dev<span className="text-[#6c63ff]">.</span>portfolio
          </span>
        </div>

        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          © {year} Alex Chen. Made with
          <Heart size={12} className="text-[#ff6584] fill-[#ff6584]" />
          and lots of coffee.
        </p>

        <div className="flex gap-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                const id = item.toLowerCase();
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-slate-500 hover:text-[#6c63ff] text-sm transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
