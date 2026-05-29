import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="text-center px-4 py-12 md:py-20">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-warm-700 dark:text-warm-200 leading-tight max-w-3xl mx-auto">
        嘿，别怕命令行
        <br />
        <span className="bg-gradient-to-r from-warm-400 to-warm-600 bg-clip-text text-transparent">
          让 Claude Code 当你的私人编程助手
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-warm-500 dark:text-warm-400 max-w-xl mx-auto leading-relaxed">
        不用写代码，用说话的方式让 AI 帮你完成编程任务
      </p>
      <Link
        to="/lesson/what-is-claude-code"
        className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-warm-400 hover:bg-warm-500 text-white font-bold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
      >
        开始冒险 <ArrowRight size={20} />
      </Link>
    </section>
  );
}
