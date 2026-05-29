import { Link, useLocation } from 'react-router-dom';
import type { TOCItem } from '../../hooks/useTOC';

interface SidebarProps {
  items: TOCItem[];
  lessonTitle: string;
}

export default function Sidebar({ items, lessonTitle }: SidebarProps) {
  const location = useLocation();

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 space-y-1">
        <h4 className="text-xs font-bold text-warm-400 dark:text-warm-500 uppercase tracking-wider mb-3 px-3">
          {lessonTitle}
        </h4>
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`block w-full text-left px-3 py-2 rounded-xl text-sm transition-colors hover:bg-warm-100 dark:hover:bg-warm-800 ${
              location.hash === `#${item.id}` ? 'bg-warm-100 dark:bg-warm-800 font-bold text-warm-600' : 'text-warm-600 dark:text-warm-400'
            }`}
          >
            {item.heading}
          </button>
        ))}
        <div className="pt-3 mt-3 border-t border-warm-200 dark:border-warm-700 px-3">
          <Link to="/" className="text-xs text-warm-400 hover:text-warm-600 dark:hover:text-warm-300 transition-colors">
            ← 回到首页
          </Link>
        </div>
      </div>
    </aside>
  );
}
