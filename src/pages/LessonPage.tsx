import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { lessons } from '../data/lessons';
import { useTOC } from '../hooks/useTOC';
import Sidebar from '../components/layout/Sidebar';
import BottomNav from '../components/layout/BottomNav';
import CodeBlock from '../components/common/CodeBlock';
import StepTimeline from '../components/common/StepTimeline';
import Quiz from '../components/common/Quiz';
import SimulatedTerminal from '../components/common/SimulatedTerminal';
import TipBubble from '../components/common/TipBubble';
import PlaceholderImage from '../components/common/PlaceholderImage';
import Collapsible from '../components/common/Collapsible';
import { Sparkles } from 'lucide-react';
import type { ContentBlock } from '../types';

interface LessonPageProps {
  markLessonComplete: (slug: string) => void;
  isLessonCompleted: (slug: string) => boolean;
}

export default function LessonPage({ markLessonComplete, isLessonCompleted }: LessonPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const lesson = lessons.find(l => l.slug === slug);
  const tocItems = useTOC(lesson?.sections ?? []);
  const completed = slug ? isLessonCompleted(slug) : false;
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setShowCelebration(false);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (completed) return;
    const onScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageBottom = document.body.offsetHeight - 100;
      if (scrollBottom >= pageBottom && slug && !isLessonCompleted(slug)) {
        markLessonComplete(slug);
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 4000);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug, completed, markLessonComplete, isLessonCompleted]);

  if (!lesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-warm-700 dark:text-warm-300 mb-4">课程未找到</h2>
        <p className="text-warm-500 mb-6">是不是链接错了？检查一下 URL。</p>
        <Link to="/" className="text-warm-400 hover:text-warm-600 font-semibold">← 回到首页</Link>
      </div>
    );
  }

  const renderContentBlock = (block: ContentBlock, _idx: number) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={_idx} className="text-warm-600 dark:text-warm-400 leading-relaxed mb-4">{block.text}</p>;
      case 'tip':
        return <TipBubble key={_idx} type="tip">{block.text}</TipBubble>;
      case 'warning':
        return <TipBubble key={_idx} type="warning">{block.text}</TipBubble>;
      case 'code':
        return <CodeBlock key={_idx} code={block.code ?? ''} language={block.language ?? 'bash'} lineComments={block.lineComments} />;
      case 'image-placeholder':
        return <PlaceholderImage key={_idx} text={block.text ?? ''} />;
      case 'quiz-question':
        return <Quiz key={_idx} question={block.text ?? ''} options={block.options ?? []} />;
      case 'table':
        return (
          <div key={_idx} className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-2xl overflow-hidden border border-warm-200 dark:border-warm-700">
              <thead>
                <tr className="bg-warm-100 dark:bg-warm-800">
                  {block.headers?.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left font-bold text-warm-600 dark:text-warm-300">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows?.map((row, ri) => (
                  <tr key={ri} className="border-t border-warm-100 dark:border-warm-800">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-warm-600 dark:text-warm-400">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'steps':
        return <StepTimeline key={_idx} steps={block.steps ?? []} />;
      case 'terminal':
        return <SimulatedTerminal key={_idx} userInput="帮我创建一个网页..." steps={block.steps} />;
      case 'faq':
        return (
          <div key={_idx} className="my-4 space-y-1">
            {block.items?.map((item, i) => (
              <Collapsible key={i} title={item.question}>
                <p>{item.answer}</p>
              </Collapsible>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex gap-8">
      <Sidebar items={tocItems} lessonTitle={lesson.title} />
      <div className="flex-1 min-w-0 max-w-[720px] pb-20">
        {/* 课程标题 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-warm-400 text-white">第{lesson.order}课</span>
            {completed && <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-400 text-white">已完成</span>}
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-warm-700 dark:text-warm-200">{lesson.title}</h1>
          <p className="text-warm-400 dark:text-warm-500 mt-2">{lesson.subtitle}</p>
        </div>

        {/* 课程内容 */}
        {lesson.sections.map(section => (
          <section key={section.id} id={section.id} className="mb-10">
            <h2 className="text-xl font-bold text-warm-700 dark:text-warm-300 mb-4 pb-2 border-b border-warm-200 dark:border-warm-700">
              {section.heading}
            </h2>
            {section.content.map((block, idx) => renderContentBlock(block, idx))}
          </section>
        ))}

        {/* 完成按钮 */}
        {!completed && (
          <button
            onClick={() => {
              markLessonComplete(slug!);
              setShowCelebration(true);
              setTimeout(() => setShowCelebration(false), 4000);
            }}
            className="w-full py-4 rounded-2xl bg-green-400 hover:bg-green-500 text-white font-bold text-lg transition-all hover:shadow-lg"
          >
            ✅ 标记为已完成
          </button>
        )}

        {completed && (
          <div className="w-full py-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-center">
            <button
              onClick={() => {
                const idx = lessons.findIndex(l => l.slug === slug);
                if (idx < lessons.length - 1) {
                  navigate(`/lesson/${lessons[idx + 1].slug}`);
                } else {
                  navigate('/next-steps');
                }
              }}
              className="text-green-600 dark:text-green-400 font-bold hover:underline"
            >
              进入下一课 →
            </button>
          </div>
        )}
      </div>

      {/* 激励弹窗 */}
      {showCelebration && (
        <div className="fixed top-20 right-4 z-50 animate-bounce">
          <div className="px-5 py-3 rounded-2xl bg-warm-400 text-white font-bold shadow-lg flex items-center gap-2">
            <Sparkles size={20} />
            🎉 太棒了！你完成了第{lesson.order}课！
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
