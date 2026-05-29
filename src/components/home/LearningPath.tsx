import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons';

interface LearningPathProps {
  completedCount: number;
}

const stages = [
  { id: 1, label: '认识', emoji: '👋', route: '/lesson/what-is-claude-code' },
  { id: 2, label: '安装', emoji: '🔧', route: '/lesson/preparation' },
  { id: 3, label: '初次使用', emoji: '💬', route: '/lesson/first-conversation' },
  { id: 4, label: '实战', emoji: '🎯', route: '/lesson/first-project' },
];

export default function LearningPath({ completedCount }: LearningPathProps) {
  return (
    <section className="px-4 py-8">
      <h2 className="text-xl md:text-2xl font-bold text-center text-warm-700 dark:text-warm-300 mb-8">
        学习路径
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          {stages.map((stage, i) => {
            const completed = i < completedCount;
            const current = i === completedCount;
            return (
              <div key={stage.id} className="flex items-center flex-1">
                <Link
                  to={stage.route}
                  className={`flex flex-col items-center gap-1 group ${
                    completed ? 'text-green-500' : current ? 'text-warm-400' : 'text-warm-300 dark:text-warm-600'
                  }`}
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl transition-all ${
                    completed
                      ? 'bg-green-100 dark:bg-green-900/30 ring-2 ring-green-400'
                      : current
                      ? 'bg-warm-100 dark:bg-warm-800 ring-2 ring-warm-400 animate-pulse'
                      : 'bg-warm-100 dark:bg-warm-800'
                  }`}>
                    {stage.emoji}
                  </div>
                  <span className="text-xs font-semibold">{stage.label}</span>
                </Link>
                {i < stages.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mt-[-20px] ${
                    i < completedCount ? 'bg-green-400' : 'bg-warm-200 dark:bg-warm-700'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-warm-400 dark:text-warm-500 mt-4">
          已完成 {completedCount}/{lessons.length} 课
        </p>
      </div>
    </section>
  );
}
