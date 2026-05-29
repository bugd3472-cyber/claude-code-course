import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { lessons } from '../../data/lessons';

export default function BottomNav() {
  const location = useLocation();
  const slugs = lessons.map(l => l.slug);
  const currentIdx = slugs.findIndex(s => location.pathname.includes(s));

  if (currentIdx === -1) return null;

  const prevLesson = currentIdx > 0 ? lessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-warm-50/95 dark:bg-warm-950/95 backdrop-blur border-t border-warm-200 dark:border-warm-800 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {prevLesson ? (
          <Link
            to={`/lesson/${prevLesson.slug}`}
            className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold text-warm-600 dark:text-warm-400 hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors"
          >
            <ChevronLeft size={18} /> 上一课
          </Link>
        ) : <div />}

        <span className="text-xs text-warm-400 dark:text-warm-500 font-semibold">
          {currentIdx + 1} / {lessons.length}
        </span>

        {nextLesson ? (
          <Link
            to={`/lesson/${nextLesson.slug}`}
            className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold bg-warm-400 hover:bg-warm-500 text-white transition-colors"
          >
            下一课 <ChevronRight size={18} />
          </Link>
        ) : (
          <Link
            to="/next-steps"
            className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold bg-warm-400 hover:bg-warm-500 text-white transition-colors"
          >
            下一步 <ChevronRight size={18} />
          </Link>
        )}
      </div>
    </div>
  );
}
