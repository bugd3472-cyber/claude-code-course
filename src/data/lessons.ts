import type { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    slug: 'what-is-claude-code',
    title: '第1课：认识 Claude Code',
    subtitle: '了解这位"AI 编程伙伴"是什么，以及它能帮你做什么',
    order: 1,
    sections: [
      {
        id: 'what-is-it',
        heading: 'Claude Code 是什么？用大白话解释',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: '想象一下，你雇了一个聪明的助手。你不需要自己动手，只需要用日常语言告诉他"帮我把这些文件整理好"、"帮我做一个网页"、"帮我把照片按日期重命名"——然后他就去做了。Claude Code 就是这样一个"数字助手"。',
          },
          {
            type: 'tip',
            text: '换个角度想：不会做饭的人照样可以开餐厅（请厨师）。不会编程的人照样可以做软件（请 Claude Code）。',
          },
          {
            type: 'paragraph',
            text: '更准确地说，Claude Code 是 Anthropic 公司开发的一个 AI 编程工具。它运行在你的电脑终端里（别怕，第2课会详细讲什么是终端），你可以用中文和它对话，告诉它你想做什么，它会帮你写代码、操作文件、运行程序。',
          },
          {
            type: 'paragraph',
            text: '最棒的部分是——它会先给你看它打算做什么，征求你的同意后才执行。就像助手说"老板，我打算这样改，你看行吗？"，你说"行！"（或者"不行，改一下"），然后它才动手。',
          },
        ],
      },
      {
        id: 'what-can-it-do',
        heading: 'Claude Code 能做什么？',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: '来看看你（完全不会编程的你）用 Claude Code 能做什么：',
          },
          {
            type: 'tip',
            text: '创建网页和网站：告诉它"帮我做一个漂亮的个人主页"，几分钟内你就能得到一个真正的网页。本课程第4课会带你亲手体验！',
          },
          {
            type: 'tip',
            text: '处理文件：批量重命名100张照片？把Excel表格转换成其他格式？这些重复劳动交给AI，你只需要一句话。',
          },
          {
            type: 'tip',
            text: '学习编程：你可以让AI解释任何代码的含义，回答你的问题。把它当成"24小时在线的编程家教"。',
          },
          {
            type: 'tip',
            text: '创建小工具和小游戏：想要一个番茄钟？一个备忘录？一个猜数字小游戏？告诉AI你的想法就行。',
          },
          {
            type: 'tip',
            text: '数据分析：有表格数据想让AI帮你总结、画图表？它能搞定。你只需要说"分析这份销售数据，告诉我趋势"。',
          },
        ],
      },
      {
        id: 'comparison',
        heading: '传统方式 vs. Claude Code 方式',
        contentType: 'comparison-table',
        content: [
          {
            type: 'table',
            headers: ['场景', '传统方式', 'Claude Code 方式'],
            rows: [
              ['做网页', '学HTML、CSS、JS，至少几个月', '说"帮我做一个网页"'],
              ['改代码', '看文档、搜Stack Overflow、试错', '说"帮我把背景改成蓝色"'],
              ['处理文件', '手动一个一个操作', '说"把文件夹里所有PDF合并"'],
              ['查错', '看不懂报错，到处搜索', '复制错误信息给AI，它解释+修复'],
              ['学习新技术', '看教程、买书、花数周', '问AI，它手把手教你'],
            ],
          },
        ],
      },
      {
        id: 'how-it-works',
        heading: '它是怎么工作的？30秒动画解说',
        contentType: 'terminal',
        content: [
          {
            type: 'terminal',
            text: '模拟一次对话过程',
          },
          {
            type: 'steps',
            steps: [
              { title: '你说出需求', description: '"帮我做一个网页，显示我的名字"' },
              { title: 'AI 理解并规划', description: '分析需求，确定要创建HTML文件' },
              { title: 'AI 展示方案', description: '给你看它打算创建什么样的代码' },
              { title: '你确认', description: '你觉得OK，回复"可以"或输入Yes' },
              { title: 'AI 执行', description: '创建文件、写入代码，完成！' },
            ],
          },
        ],
      },
      {
        id: 'mini-quiz',
        heading: '小测验：看看你理解了多少',
        contentType: 'quiz',
        content: [
          {
            type: 'quiz-question',
            text: 'Claude Code 最主要的能力是什么？',
            options: [
              { text: '自动帮你写作业，完全不用动脑', correct: false, explanation: '不是哦！Claude Code 是协作工具，需要你给出清晰指令并确认操作。' },
              { text: '用对话的方式帮你在电脑上编程、操作文件', correct: true, explanation: '没错！你用自然语言描述需求，它帮你转化为代码和操作。' },
              { text: '只能在手机上使用的聊天机器人', correct: false, explanation: '不对，Claude Code 运行在电脑终端里，可以操作你电脑上的文件和程序。' },
            ],
          },
          {
            type: 'quiz-question',
            text: '用 Claude Code 前，你需要掌握什么技能？',
            options: [
              { text: '精通至少一门编程语言', correct: false, explanation: '如果已经精通编程，你当然能更好地利用它，但这绝不是必须的。' },
              { text: '会打字、会描述你的需求', correct: true, explanation: '就是这样！你只需要清楚地表达你想做什么，AI 负责技术实现。' },
              { text: '需要计算机专业本科学位', correct: false, explanation: '当然不需要。这门课就是为没有任何技术背景的你设计的！' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'preparation',
    title: '第2课：做好准备工作',
    subtitle: '安装必要的工具，认识终端这位"新朋友"',
    order: 2,
    sections: [
      {
        id: 'what-is-terminal',
        heading: '什么是"终端"？用找房子的比喻帮你理解',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: '我们平时操作电脑，是用鼠标点击图标、窗口、按钮——这叫"图形界面"。而"终端"（也叫"命令行"）是另一种操作方式：用文字指令。',
          },
          {
            type: 'tip',
            text: '生活类比：图形界面就像去餐厅吃饭——你看到菜单图片，指着说"我要这个"。终端就像给厨师发短信——你打文字"一份宫保鸡丁，少辣"。两种方式都能点到菜，但发短信有时候更快、更直接。',
          },
          {
            type: 'paragraph',
            text: '别把终端想得太神秘。它就是一个黑色的文字窗口，你输入命令，电脑输出结果。就像你跟电脑用文字"聊天"。很多程序员喜欢用终端，因为打字比用鼠标翻菜单快得多。',
          },
          {
            type: 'paragraph',
            text: '我们用"找房子"来理解终端里几个最重要的概念：',
          },
          {
            type: 'tip',
            text: '当前目录（你"现在在哪"）= 你现在站在哪个房间。输入 pwd 可以查看当前位置。',
          },
          {
            type: 'tip',
            text: '路径（"地址"）= 房间的门牌号。比如 /Users/你的名字/Desktop 就是桌面的地址。',
          },
          {
            type: 'tip',
            text: '命令（你"想干什么"）= 你发出的指令。cd 是"换房间"，ls 是"看看房间里有什么"，mkdir 是"盖一个新房间"。',
          },
        ],
      },
      {
        id: 'open-terminal',
        heading: '第1步：打开你的终端',
        contentType: 'steps',
        content: [
          {
            type: 'steps',
            steps: [
              { title: 'Mac 用户', description: '按键盘上的 Command + 空格键，在搜索框里输入"Terminal"（或"终端"），然后按回车。一个黑色或白色的窗口出现了——恭喜，这就是终端！', code: '按 Command + 空格 → 输入 Terminal → 回车' },
              { title: 'Windows 用户', description: '按键盘上的 Win 键（开始菜单键），直接输入"cmd"，然后按回车。出现的黑底白字窗口就是命令提示符。如果想要更好的体验，去微软应用商店搜索"Windows Terminal"安装（免费），界面更漂亮。', code: '按 Win 键 → 输入 cmd → 回车' },
            ],
          },
          {
            type: 'image-placeholder',
            text: '你应该看到一个黑色（或白色）的窗口，里面有一行光标在闪烁，等待你输入命令。',
          },
        ],
      },
      {
        id: 'install-node',
        heading: '第2步：安装 Node.js —— 给电脑配一个"翻译官"',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: '你会好奇：为什么需要安装 Node.js？用生活类比解释就是——Claude Code "说"的是一种叫 JavaScript 的语言，而你的电脑本身听不懂这种语言。Node.js 就像一个翻译官，站在 Claude Code 和电脑之间，把 AI 的指令翻译成电脑能执行的代码。',
          },
          {
            type: 'warning',
            text: '有些教程会花大量篇幅解释 Node.js 是什么。作为小白，你只需要知道"它是让 Claude Code 能跑起来的东西"，就够了。先感受，再理解。',
          },
          {
            type: 'paragraph',
            text: '安装步骤（非常详细，一步一步来）：',
          },
          {
            type: 'steps',
            steps: [
              { title: '打开浏览器', description: '用 Chrome、Edge 或 Safari 打开 nodejs.org 官网。' },
              { title: '下载安装包', description: '点击页面中间那个大大的绿色按钮（写着"LTS"的那个——LTS 的意思是"稳定版"，对新手最合适）。' },
              { title: '运行安装程序', description: '下载完成后，双击安装包。Mac 是 .pkg 文件，Windows 是 .msi 文件。' },
              { title: '一路"继续"到底', description: '安装过程中，所有选项保持默认，一直点"继续"（Continue）或"下一步"（Next）就行。不要改任何设置，默认的就是最好的。' },
              { title: '验证安装成功', description: '关闭终端，重新打开一个新终端。输入 node --version，如果看到一串数字（如 v20.x.x），说明安装成功！' },
            ],
          },
          {
            type: 'image-placeholder',
            text: 'Node.js 官网截图：点击页面中间绿色的大按钮下载',
          },
        ],
      },
      {
        id: 'install-claude',
        heading: '第3步：安装 Claude Code 命令行工具',
        contentType: 'steps',
        content: [
          {
            type: 'paragraph',
            text: 'Node.js 装好后，安装 Claude Code 就简单了。打开终端，只需运行一行命令：',
          },
          {
            type: 'code',
            language: 'bash',
            code: 'npm install -g @anthropic-ai/claude-code',
            lineComments: [
              { line: 1, comment: 'npm = Node.js 的包管理器（帮你安装软件的工具）；install -g = 全局安装（整台电脑都能用这个命令）；@anthropic-ai/claude-code = 软件包的名字' },
            ],
          },
          {
            type: 'paragraph',
            text: '这个命令的意思是："嘿，npm（Node.js 的软件管家），帮我在电脑上装好 Claude Code，装完后在任何地方都能用。"',
          },
          {
            type: 'warning',
            text: 'Mac 用户注意：如果提示权限错误（Permission denied），就在命令最前面加上 sudo，即 sudo npm install -g @anthropic-ai/claude-code，然后输入你的开机密码。输入密码时光标不会动（不会显示●●●），这是正常的——大胆盲打，然后回车。',
          },
          {
            type: 'tip',
            text: '安装过程中，终端会刷过很多字符，看起来很吓人，但其实只是在告诉你"正在下载...正在安装...快好了..."。只要最后没有红色的 ERROR 字样，就是成功了。',
          },
          {
            type: 'paragraph',
            text: '安装完成后，关闭终端，重新打开一个新终端，输入 claude 然后回车。如果出现了欢迎画面，恭喜你——准备就绪！',
          },
          {
            type: 'image-placeholder',
            text: '安装成功后的终端效果示意：显示 Claude Code 欢迎界面',
          },
        ],
      },
      {
        id: 'troubleshooting-prep',
        heading: '安装时可能遇到的问题',
        contentType: 'faq',
        content: [
          {
            type: 'faq',
            items: [
              {
                question: '提示"npm 不是内部或外部命令"',
                answer: '说明 Node.js 没有装好。检查：1. 关闭终端再重新打开；2. 如果还不行，重新运行 Node.js 安装程序，确保没有遗漏任何步骤。',
              },
              {
                question: '提示"Permission denied"（权限拒绝）',
                answer: 'Mac/Linux 用户在命令前加 sudo：sudo npm install -g @anthropic-ai/claude-code。Windows 用户用管理员身份重新打开命令提示符。',
              },
              {
                question: '安装过程卡住很久不动',
                answer: '可能是网络问题。试试把 npm 镜像切换为国内源：npm config set registry https://registry.npmmirror.com，然后重新运行安装命令。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'first-conversation',
    title: '第3课：第一次对话',
    subtitle: '打开终端，对 Claude Code 说出你的第一句指令',
    order: 3,
    sections: [
      {
        id: 'navigate-folder',
        heading: '第1小步：进入你想工作的文件夹',
        contentType: 'steps',
        content: [
          {
            type: 'paragraph',
            text: '在启动 Claude Code 之前，你需要先"走进"一个文件夹。就像你要做饭，得先进入厨房，而不是站在客厅里。',
          },
          {
            type: 'tip',
            text: '建议在桌面新建一个文件夹叫"我的项目"：右键桌面 → 新建文件夹 → 命名为"我的项目"。然后我们让终端"进入"这个文件夹。',
          },
          {
            type: 'steps',
            steps: [
              { title: '查看当前位置', description: '在终端输入 pwd（Mac）或 echo %cd%（Win），查看你现在"站在"哪里。', code: 'pwd' },
              { title: '去桌面', description: '输入 cd Desktop（Mac）或 cd Desktop（Win 相同），进入桌面文件夹。', code: 'cd Desktop' },
              { title: '进入你的项目文件夹', description: '输入 cd 我的项目（如果有空格，用引号包起来："cd \'我的项目\'"）。', code: 'cd 我的项目' },
              { title: '确认位置', description: '再输入一次 pwd（Mac）或 echo %cd%（Win），确认你已经在"我的项目"文件夹里了。', code: 'pwd' },
            ],
          },
          {
            type: 'tip',
            text: '小技巧：你可以在文件管理器里把"我的项目"文件夹直接拖到终端窗口里，路径会自动出现！不用手动输入。',
          },
        ],
      },
      {
        id: 'start-claude',
        heading: '第2小步：启动 Claude Code',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: '确认你已经在"我的项目"文件夹里后，输入那个神奇的命令：claude，然后回车。',
          },
          {
            type: 'code',
            language: 'bash',
            code: 'claude',
            lineComments: [
              { line: 1, comment: '就一个单词：claude。输入后回车，Claude Code 就启动了！' },
            ],
          },
          {
            type: 'paragraph',
            text: '第一次启动可能需要几秒钟，终端会显示一些初始化信息。之后你应该看到欢迎界面，并出现一个光标，表示"你可以开始打字了"。',
          },
          {
            type: 'image-placeholder',
            text: 'Claude Code 启动后的欢迎界面效果图',
          },
        ],
      },
      {
        id: 'first-command',
        heading: '第3小步：说出你的第一句指令',
        contentType: 'terminal',
        content: [
          {
            type: 'paragraph',
            text: '好了！最激动人心的时刻到了。在 Claude Code 的对话区里，输入下面这句话（建议原样输入，感受一下整个过程）：',
          },
          {
            type: 'code',
            language: 'bash',
            code: '帮我创建一个名为 hello.html 的网页，背景是浅蓝色，上面用大字写着"你好，世界！"',
            lineComments: [
              { line: 1, comment: '你看，就是一句普通的日常中文！没有代码，没有术语，就跟跟朋友发微信一样。' },
            ],
          },
          {
            type: 'paragraph',
            text: '输入后按回车。Claude Code 会开始"思考"，然后给你展示它打算创建什么文件、文件内容是什么。这个阶段你可以看到完整的代码（别怕，不要求你理解），它还会问你："是否继续执行？"',
          },
          {
            type: 'paragraph',
            text: '这时候你可以：1. 输入 Yes 确认——AI 会创建文件；2. 输入 No 拒绝——AI 会放弃操作；3. 输入更多要求——比如"能不能把字改成红色的？"',
          },
          {
            type: 'tip',
            text: '如果你不确定，先输入 Yes 试试！所有操作都在"我的项目"文件夹里进行，不会影响电脑上的其他文件。而且不满意随时可以让 AI 修改。',
          },
        ],
      },
      {
        id: 'see-result',
        heading: '第4小步：看看你创造的东西',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: 'AI 执行完毕后，打开你的"我的项目"文件夹——里面多了一个 hello.html 文件！双击它，浏览器会自动打开，展示一个浅蓝色背景、写着"你好，世界！"的网页。',
          },
          {
            type: 'paragraph',
            text: '这就是你——一个可能从未写过代码的人——刚刚创造的东西。不是"看"代码，不是"学"代码，而是真正的创造。你指挥了 AI，告诉它你想要什么，它帮你实现了。',
          },
          {
            type: 'tip',
            text: '这就是未来编程的方式。你不是一个人在写代码，你更像一个"导演"，告诉 AI（你的"演员"）该做什么。你不必会演戏，但你可以导演一出好戏。',
          },
          {
            type: 'image-placeholder',
            text: '浏览器中打开的 hello.html 网页效果预览',
          },
        ],
      },
      {
        id: 'first-conversation-quiz',
        heading: '小测验',
        contentType: 'quiz',
        content: [
          {
            type: 'quiz-question',
            text: '启动 Claude Code 的命令是什么？',
            options: [
              { text: 'start claude', correct: false, explanation: '不对哦。Claude Code 的启动命令就是它的名字。' },
              { text: 'claude', correct: true, explanation: '没错！在终端里输入 claude 然后回车就行，就这么简单。' },
              { text: 'run claude-code', correct: false, explanation: '不需要 run 前缀，直接输入 claude 即可。' },
            ],
          },
          {
            type: 'quiz-question',
            text: '当 Claude Code 问"是否继续执行？"时，输入什么会取消操作？',
            options: [
              { text: 'Cancel', correct: false, explanation: 'Claude Code 认的是 Yes 或 No，不需要输入完整的 Cancel。' },
              { text: '直接关掉终端窗口', correct: false, explanation: '虽然也能达到目的，但这不是正确的方式。Ctrl+C 或者输入 No 才是正规操作。' },
              { text: 'No 或者按 Ctrl+C', correct: true, explanation: '正确！输入 No 礼貌地拒绝，或按 Ctrl+C 直接取消。' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'first-project',
    title: '第4课：完成你的第一个小项目',
    subtitle: '制作一张个人名片网页，感受从零到有的成就感',
    order: 4,
    sections: [
      {
        id: 'project-overview',
        heading: '项目目标：一张个人名片网页',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: '这节课我们要做一个真正的个人名片网页！包含你的姓名、爱好、个人简介，外观像一张精致的纸质名片。完成后，你可以把它分享给朋友——"看，这是我自己做的网页！"',
          },
          {
            type: 'tip',
            text: '你不需要知道 HTML 和 CSS 是什么。你只需要描述你想要的效果，AI 会把你的描述变成代码。这就像你对装修师傅说"我想要暖色调、大窗户、木地板"，他帮你画图纸。',
          },
        ],
      },
      {
        id: 'round-1',
        heading: '第1轮：生成基础名片结构',
        contentType: 'terminal',
        content: [
          {
            type: 'paragraph',
            text: '启动 Claude Code（记得先在终端里 cd 到"我的项目"文件夹），然后输入：',
          },
          {
            type: 'code',
            language: 'bash',
            code: '帮我创建一个个人名片网页 card.html，卡片上要有：姓名"小明"、爱好"摄影和旅行"、一句个人简介"用镜头记录世界的美好"。卡片居中显示，文字清晰。',
            lineComments: [
              { line: 1, comment: '告诉AI：1.文件名(card.html)；2.内容(名字、爱好、简介)；3.布局要求(居中、清晰)' },
            ],
          },
          {
            type: 'paragraph',
            text: '检查 AI 展示的代码，确认后输入 Yes。然后在文件夹里找到 card.html，双击打开看看效果。',
          },
          {
            type: 'image-placeholder',
            text: '第一次生成的基础名片效果预览',
          },
        ],
      },
      {
        id: 'round-2',
        heading: '第2轮：让名片变漂亮',
        contentType: 'terminal',
        content: [
          {
            type: 'paragraph',
            text: '基础名片有了，但有点朴素对吧？别退回到上一轮修改，直接在新一轮对话中说：',
          },
          {
            type: 'code',
            language: 'bash',
            code: '让这张名片更漂亮一些：1.背景用柔和的米白色；2.卡片加圆角和阴影，像真的纸质名片；3.文字居中，名字要大号加粗；4.爱好和简介用不同的颜色区分。',
            lineComments: [
              { line: 1, comment: '具体地描述你想要的视觉效果。可以大胆用生活化的形容词："柔和的""像纸质名片""大号加粗"。' },
            ],
          },
          {
            type: 'paragraph',
            text: '执行后刷新浏览器，看看你"设计"的名片！如果不太满意，继续调整——比如"阴影太深了，浅一点"、"文字太小了，加大一些"。',
          },
          {
            type: 'tip',
            text: '这就是和 AI 协作的乐趣：你像设计师一样不断给出反馈，AI 立即帮你实现。不满意就改，改到你满意为止！',
          },
        ],
      },
      {
        id: 'round-3',
        heading: '第3轮：个性化定制',
        contentType: 'terminal',
        content: [
          {
            type: 'paragraph',
            text: '现在名片是你的了。把文字改成你自己的信息：',
          },
          {
            type: 'code',
            language: 'bash',
            code: '帮我把名片改成：姓名"[你的名字]"，爱好"[你的爱好]"，简介"[你想说的话]"。另外试试把背景换成深蓝色，文字换成白色——看看深色主题的效果。',
            lineComments: [
              { line: 1, comment: '替换方括号里的内容为你自己的信息。同时尝试不同的配色方案，看看哪个更合你心意。' },
            ],
          },
          {
            type: 'paragraph',
            text: '试试提出更多个性化要求：加个头像占位符（用灰色圆形代替）、加一些社交图标链接（GitHub、微博等）、加一个二维码占位区域。每一项你只需用一句话描述，AI 帮你实现。',
          },
          {
            type: 'image-placeholder',
            text: '个性化后的最终名片效果预览',
          },
        ],
      },
      {
        id: 'share',
        heading: '如何分享给朋友？',
        contentType: 'text',
        content: [
          {
            type: 'paragraph',
            text: '有几种简单的分享方式：',
          },
          {
            type: 'tip',
            text: '最直接：把 card.html 文件通过微信/QQ/邮件发给朋友，他们双击就能在浏览器里看到。对，HTML文件任何浏览器都能打开，不需要装任何软件。',
          },
          {
            type: 'tip',
            text: '进阶：让 Claude Code 帮你把网页部署到 GitHub Pages（免费的网页托管服务）。只需对 AI 说："帮我把这个网页部署到 GitHub Pages"，它会一步步教你操作。',
          },
          {
            type: 'paragraph',
            text: '不管怎样——恭喜你！你刚才完成了一个真实的编程项目。你没有写一行代码，但你完成了从"想法"到"成品"的完整过程。这就是 Claude Code 的力量，也是你作为"AI 协作师"的新身份。',
          },
        ],
      },
      {
        id: 'first-project-quiz',
        heading: '小测验',
        contentType: 'quiz',
        content: [
          {
            type: 'quiz-question',
            text: '如果你对 AI 生成的名片不太满意，最好的做法是什么？',
            options: [
              { text: '关掉程序，自己从头开始写代码', correct: false, explanation: '没必要！AI 协作的精髓就是快速迭代——直接告诉 AI 哪里不满意，让它改。' },
              { text: '直接告诉 AI 哪里不满意，让它调整', correct: true, explanation: '对！把 AI 当成你的设计师，不断给反馈。你说得越具体，它改得越准确。' },
              { text: '算了，觉得自己学不会编程', correct: false, explanation: '千万别这么想！你不需要"会编程"，你需要的是"会描述"。你已经证明自己可以做到！' },
            ],
          },
          {
            type: 'quiz-question',
            text: '要让朋友看到你的名片网页，最简单的做法是？',
            options: [
              { text: '把 HTML 文件发给他们，他们用浏览器打开', correct: true, explanation: '是的！任何现代浏览器都可以打开 HTML 文件，对方什么都不需要安装。' },
              { text: '需要买一台服务器把网页放上去', correct: false, explanation: '不用！对于静态网页，最简单的分享就是直接传文件。当然如果你想学部署，Claude Code 也能教你。' },
            ],
          },
        ],
      },
    ],
  },
];
