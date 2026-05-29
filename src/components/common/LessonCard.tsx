import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface LessonCardProps {
  order: number;
  title: string;
  subtitle: string;
  slug: string;
  completed: boolean;
  current: boolean;
}

export default function LessonCard({ order, title, subtitle, slug, completed, current }: LessonCardProps) {
  return (
    <Link
      to={`/lesson/${slug}`}
      className={`block p-5 rounded-2xl border-2 transition-all hover:shadow-md ${
        completed
          ? 'border-green-300 dark:border-green-700 bg-green-50/50 dark:bg-green-900/10'
          : current
          ? 'border-warm-400 dark:border-warm-500 bg-warm-100/50 dark:bg-warm-800/30 shadow-md'
          : 'border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 hover:border-warm-400'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
            completed
              ? 'bg-green-400 text-white'
              : current
              ? 'bg-warm-400 text-white'
              : 'bg-warm-100 dark:bg-warm-800 text-warm-600 dark:text-warm-400'
          }`}>
            {completed ? <CheckCircle size={20} /> : order}
          </div>
          <div>
            <h4 className="font-bold text-warm-700 dark:text-warm-300">{title}</h4>
            <p className="text-xs text-warm-400 dark:text-warm-500 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <ArrowRight size={18} className={`shrink-0 ${current ? 'text-warm-400' : 'text-warm-300 dark:text-warm-600'}`} />
      </div>
    </Link>
  );
}
