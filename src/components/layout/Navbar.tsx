import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { lessons } from '../../data/lessons';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  completedCount: number;
}

export default function Navbar({ theme, toggleTheme, completedCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-warm-50/95 dark:bg-warm-950/95 backdrop-blur border-b border-warm-200 dark:border-warm-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-warm-700 dark:text-warm-300 hover:text-warm-500 transition-colors">
          <span className="text-2xl">🦦</span>
          <span className="hidden sm:inline">Claude Code 小白入门</span>
          <span className="sm:hidden">CC 入门</span>
        </Link>

        <div className="flex items-center gap-3">
          {/* 课程下拉菜单 */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold text-warm-700 dark:text-warm-300 hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors"
            >
              课程目录 <ChevronDown size={16} className={`transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
            </button>
            {coursesOpen && (
              <div className="absolute top-full mt-1 right-0 w-56 bg-white dark:bg-warm-900 rounded-2xl shadow-lg border border-warm-200 dark:border-warm-700 overflow-hidden">
                {lessons.map(l => (
                  <Link
                    key={l.slug}
                    to={`/lesson/${l.slug}`}
                    onClick={() => setCoursesOpen(false)}
                    className={`block px-4 py-3 text-sm hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors ${
                      location.pathname.includes(l.slug) ? 'bg-warm-100 dark:bg-warm-800 font-bold text-warm-600' : 'text-warm-700 dark:text-warm-300'
                    }`}
                  >
                    第{l.order}课：{l.title.replace(/^第\d课：/, '')}
                  </Link>
                ))}
                <Link
                  to="/troubleshooting"
                  onClick={() => setCoursesOpen(false)}
                  className={`block px-4 py-3 text-sm hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors border-t border-warm-200 dark:border-warm-700 ${
                    location.pathname === '/troubleshooting' ? 'bg-warm-100 dark:bg-warm-800 font-bold text-warm-600' : 'text-warm-700 dark:text-warm-300'
                  }`}
                >
                  遇到问题怎么办
                </Link>
                <Link
                  to="/next-steps"
                  onClick={() => setCoursesOpen(false)}
                  className={`block px-4 py-3 text-sm hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors border-t border-warm-200 dark:border-warm-700 ${
                    location.pathname === '/next-steps' ? 'bg-warm-100 dark:bg-warm-800 font-bold text-warm-600' : 'text-warm-700 dark:text-warm-300'
                  }`}
                >
                  下一步学什么
                </Link>
              </div>
            )}
          </div>

          {/* 进度 */}
          <div className="hidden sm:flex items-center gap-1 text-xs text-warm-500 dark:text-warm-400 bg-warm-100 dark:bg-warm-800 px-3 py-1.5 rounded-full">
            <span className="font-bold">{completedCount}</span>/<span>4</span> 课完成
          </div>

          {/* 主题切换 */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors text-warm-600 dark:text-warm-400"
            aria-label="切换暗色模式"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors text-warm-600 dark:text-warm-400"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="md:hidden border-t border-warm-200 dark:border-warm-700 bg-warm-50 dark:bg-warm-950 px-4 py-3 space-y-1">
          {lessons.map(l => (
            <Link
              key={l.slug}
              to={`/lesson/${l.slug}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm ${
                location.pathname.includes(l.slug) ? 'bg-warm-100 dark:bg-warm-800 font-bold text-warm-600' : 'text-warm-700 dark:text-warm-300'
              }`}
            >
              第{l.order}课：{l.title.replace(/^第\d课：/, '')}
            </Link>
          ))}
          <Link to="/troubleshooting" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-xl text-sm text-warm-700 dark:text-warm-300">遇到问题怎么办</Link>
          <Link to="/next-steps" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-xl text-sm text-warm-700 dark:text-warm-300">下一步学什么</Link>
        </div>
      )}
    </nav>
  );
}
