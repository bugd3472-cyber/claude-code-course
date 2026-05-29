import { useState, useMemo } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import { troubleshootingData } from '../data/troubleshooting';
import Collapsible from '../components/common/Collapsible';

export default function Troubleshooting() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return troubleshootingData;
    const q = query.toLowerCase();
    return troubleshootingData.filter(
      item =>
        item.symptom.toLowerCase().includes(q) ||
        item.cause.toLowerCase().includes(q) ||
        item.solution.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 pb-20">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-warm-700 dark:text-warm-200 mb-2">
          🩺 遇到问题怎么办
        </h1>
        <p className="text-warm-400 dark:text-warm-500">
          别慌！几乎所有问题都有人遇到过。搜索一下你的症状——
        </p>
      </div>

      {/* 搜索框 */}
      <div className="relative mb-8">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-300 dark:text-warm-600" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={`搜索问题... 比如“命令找不到”“权限不足”`}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 text-warm-700 dark:text-warm-300 font-semibold placeholder:text-warm-300 dark:placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors"
        />
      </div>

      {/* 万能模板卡片 */}
      <div className="mb-8 p-6 rounded-2xl border-2 border-warm-300 dark:border-warm-600 bg-gradient-to-br from-warm-100 to-soft-blue-100 dark:from-warm-800/50 dark:to-soft-blue-900/30">
        <h3 className="font-bold text-warm-700 dark:text-warm-300 mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-warm-400" />
          向 AI 提问的万能模板
        </h3>
        <div className="p-4 rounded-xl bg-white dark:bg-warm-900 text-sm text-warm-600 dark:text-warm-400 leading-relaxed space-y-2">
          <p><strong className="text-warm-700 dark:text-warm-300">我要做什么：</strong>[明确的目标，比如"创建一个网页"]</p>
          <p><strong className="text-warm-700 dark:text-warm-300">用在什么场景：</strong>[背景信息，比如"这是我的个人名片，要分享给朋友"]</p>
          <p><strong className="text-warm-700 dark:text-warm-300">期望的样式/格式：</strong>[约束条件，比如"简洁大方、圆角、暖色调"]</p>
          <p><strong className="text-warm-700 dark:text-warm-300">注意事项：</strong>[特别要求，比如"我是新手，请一步一步来"]</p>
        </div>
      </div>

      {/* AI 不听话专题 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-warm-700 dark:text-warm-300 mb-4">🤖 "AI 不听话"怎么办？</h2>
        <div className="space-y-2">
          <Collapsible title="AI 理解错了我的意思">
            <p>试试重新表述你的需求。比如不要说"做个好看的页面"，而是说"做个背景是浅蓝色、文字居中、带卡片阴影的页面"。越具体，AI 越不会跑偏。你也可以说"刚才那个不对，我要的是……"——AI 不会不耐烦，尽情调整。</p>
          </Collapsible>
          <Collapsible title="AI 一次做了太多事情，我看不懂">
            <p>对 AI 说"请一步一步来，每次只做一件事"或"先给我一个简单的版本，我们慢慢完善"。你也可以在指令里限制范围："只修改标题的颜色，其他地方不要动"。</p>
          </Collapsible>
          <Collapsible title="AI 做的东西不是我想要的">
            <p>直接说"不满意，请改成XXX"。给出具体的方向最有效——不是"不好看"而是"颜色太亮了，调暗一点"；不是"不对"而是"我要的是两栏布局，不是一栏"。</p>
          </Collapsible>
          <Collapsible title="想让 AI 解释一下它做了什么">
            <p>对 AI 说"请解释你刚才的操作，用通俗的语言，我是一个新手"。AI 看到"新手"关键词会自动调整解释的详细程度和语言难度。</p>
          </Collapsible>
        </div>
      </div>

      {/* 搜索结果显示 */}
      <div>
        <h2 className="text-xl font-bold text-warm-700 dark:text-warm-300 mb-4">
          常见问题库 ({filtered.length}个)
        </h2>
        {filtered.length === 0 && (
          <p className="text-center text-warm-400 py-8">没有找到匹配的问题。试试换一个关键词？</p>
        )}
        <div className="space-y-2">
          {filtered.map(item => (
            <Collapsible key={item.id} title={item.symptom}>
              <div className="space-y-3">
                <div>
                  <span className="font-bold text-warm-500 dark:text-warm-400 text-xs uppercase tracking-wider">原因</span>
                  <p className="text-sm text-warm-600 dark:text-warm-400 mt-1">{item.cause}</p>
                </div>
                <div>
                  <span className="font-bold text-green-600 dark:text-green-400 text-xs uppercase tracking-wider">解决方法</span>
                  <p className="text-sm text-warm-600 dark:text-warm-400 mt-1" style={{ whiteSpace: 'pre-line' }}>{item.solution}</p>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-warm-100 dark:bg-warm-800 text-warm-500 dark:text-warm-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
}
