export interface HomeFAQ {
  question: string;
  answer: string;
}

export const homeFAQs: HomeFAQ[] = [
  {
    question: '我需要会编程吗？',
    answer: '完全不需要！只要你会上网、会打字、会描述你想做什么，就能使用 Claude Code。把它想象成：你不需要会修车也能打车——你只需要告诉司机目的地。',
  },
  {
    question: '我是电脑小白，连"终端"是什么都不知道……',
    answer: '没关系！第2课会用生活化的方式教你认识终端。简单说，终端就是"一个直接跟电脑文字聊天的窗口"——就像你给电脑发短信。我们的课程就是为从零开始的你设计的。',
  },
  {
    question: 'Claude Code 要钱吗？',
    answer: 'Claude Code 是 Anthropic 公司提供的工具，目前有免费额度可以体验。具体价格以官网为准。我们的课程聚焦在"如何使用"上，不涉及付费内容。',
  },
  {
    question: '学完这个课程需要多长时间？',
    answer: '整套课程大约1-2小时就能完成。我们刻意把每节课拆得很短，你可以在通勤、午休甚至排队时学完一节。最重要的是——按你自己的节奏来！',
  },
  {
    question: 'Claude Code 和 ChatGPT 有什么区别？',
    answer: '它们都是 AI 助手，但 Claude Code 专注于编程场景——它可以直接在你的电脑上操作文件、写代码、运行程序，就像一个真正的编程搭档。而 ChatGPT 更偏向通用聊天。简单说：ChatGPT 像百科全书，Claude Code 像你的私人编程助理。',
  },
  {
    question: '学会了能做什么？',
    answer: '太多了！你可以用它：搭建个人网站、批量重命名文件、自动处理 Excel 表格、写小游戏、分析数据……你只需要用大白话描述需求，AI 帮你搞定技术细节。',
  },
];
