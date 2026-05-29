import HeroSection from '../components/home/HeroSection';
import EmotionCard from '../components/home/EmotionCard';
import LearningPath from '../components/home/LearningPath';
import FearFAQ from '../components/home/FearFAQ';

interface HomeProps {
  completedCount: number;
}

export default function Home({ completedCount }: HomeProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <HeroSection />

      {/* 情感化卡片 */}
      <section className="px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <EmotionCard
          emoji="😰"
          question="我是小白，能学会吗？"
          answer="只要会打字就能学会。不需要任何编程基础——这门课就是为你设计的。"
        />
        <EmotionCard
          emoji="🧑‍🏫"
          question="怎么学？"
          answer="理解概念 → 安装工具 → 第一次对话 → 完成小项目。四步走，每步不超过20分钟。"
        />
        <EmotionCard
          emoji="🎁"
          question="学完能干嘛？"
          answer={`自己搭建网页、处理文件、自动操作表格、创建小工具——你会发现自己“突然会编程了”。`}
        />
      </section>

      {/* 学习路径进度条 */}
      <LearningPath completedCount={completedCount} />

      {/* 破除恐惧 FAQ */}
      <FearFAQ />

      <div className="h-8" />
    </div>
  );
}
