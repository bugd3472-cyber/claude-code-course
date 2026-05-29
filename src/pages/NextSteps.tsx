import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Terminal, Globe, Code, Users } from 'lucide-react';

const steps = [
  {
    icon: <Terminal size={24} />,
    title: '学习10个基础命令',
    description: 'cd, ls/dir, mkdir, touch, rm, cp, mv, cat, pwd, clear——掌握这些命令，你在终端里就能行动自如。',
    tip: '让 Claude Code 教你："请教我如何使用 ls 命令，用生活化的例子"。',
  },
  {
    icon: <BookOpen size={24} />,
    title: '理解文件路径',
    description: '绝对路径、相对路径、.. 和 . 的含义——这就像学会了看地图，再也不怕"迷路"。',
    tip: '小练习：用 cd 在电脑里到处走走，每次用 pwd 确认你在哪。',
  },
  {
    icon: <Code size={24} />,
    title: '尝试用 Claude Code 操作文件',
    description: '让它帮你整理文件夹、批量重命名、查找文件——这些日常任务用命令行比手动快10倍。',
    tip: '从安全的任务开始："帮我统计这个文件夹里有多少个 .jpg 文件"。',
  },
  {
    icon: <Globe size={24} />,
    title: '搭建多页面网站',
    description: '在单页名片的基础上，做一个有多个页面的个人网站——首页、关于我、作品集。',
    tip: '对 AI 说："帮我把名片扩展成一个3页的个人网站"。',
  },
];

export default function NextSteps() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-20">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-warm-700 dark:text-warm-200 mb-2">
          🚀 下一步学什么？
        </h1>
        <p className="text-warm-400 dark:text-warm-500">
          完成4节基础课后，你已经具备了"AI协作思维"。接下来可以往这些方向发展——
        </p>
      </div>

      {/* 进阶路线图 */}
      <div className="space-y-4 mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 p-5 rounded-2xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-warm-100 dark:bg-warm-800 flex items-center justify-center text-warm-500 shrink-0">
              {step.icon}
            </div>
            <div>
              <h3 className="font-bold text-warm-700 dark:text-warm-300 mb-1">{step.title}</h3>
              <p className="text-sm text-warm-500 dark:text-warm-400 mb-2">{step.description}</p>
              <p className="text-xs text-warm-400 dark:text-warm-500 bg-warm-50 dark:bg-warm-800/50 px-2 py-1 rounded-lg inline-block">
                💡 {step.tip}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 资源推荐 */}
      <div className="mb-10 p-6 rounded-2xl border border-warm-200 dark:border-warm-700 bg-warm-50 dark:bg-warm-800/30">
        <h2 className="text-xl font-bold text-warm-700 dark:text-warm-300 mb-4">📚 推荐资源</h2>
        <div className="space-y-2">
          <a href="#" className="block p-3 rounded-xl hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors">
            <span className="font-semibold text-warm-600 dark:text-warm-300">Anthropic 官方文档</span>
            <span className="text-xs text-warm-400 ml-2">（Claude Code 官方使用指南）</span>
          </a>
          <a href="#" className="block p-3 rounded-xl hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors">
            <span className="font-semibold text-warm-600 dark:text-warm-300">MDN Web 文档</span>
            <span className="text-xs text-warm-400 ml-2">（最好的前端开发参考，适合查阅）</span>
          </a>
          <a href="#" className="block p-3 rounded-xl hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors">
            <span className="font-semibold text-warm-600 dark:text-warm-300">freeCodeCamp</span>
            <span className="text-xs text-warm-400 ml-2">（免费、交互式的编程学习平台）</span>
          </a>
        </div>
      </div>

      {/* 社区鼓励 */}
      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-warm-100 to-soft-blue-100 dark:from-warm-800/30 dark:to-soft-blue-900/20 border border-warm-200 dark:border-warm-700">
        <Users size={32} className="mx-auto text-warm-400 mb-3" />
        <h2 className="text-xl font-bold text-warm-700 dark:text-warm-300 mb-2">加入社区，一起成长</h2>
        <p className="text-sm text-warm-500 dark:text-warm-400 mb-4 max-w-md mx-auto">
          Claude Code 有一个活跃的开发者社区。你可以在这里提问、分享作品、找到灵感。每个人都是从零开始的。
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-warm-400 hover:bg-warm-500 text-white font-bold transition-all hover:shadow-lg"
        >
          前往社区 <ArrowRight size={18} />
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="text-warm-400 hover:text-warm-600 dark:hover:text-warm-300 font-semibold text-sm">
          ← 回到首页复习
        </Link>
      </div>
    </div>
  );
}
