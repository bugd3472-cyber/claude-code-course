import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  lineComments?: { line: number; comment: string }[];
}

export default function CodeBlock({ code, language, lineComments }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [expandedLines, setExpandedLines] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const toggleLine = (line: number) => {
    setExpandedLines(prev => {
      const next = new Set(prev);
      if (next.has(line)) next.delete(line);
      else next.add(line);
      return next;
    });
  };

  const commentMap = new Map(lineComments?.map(c => [c.line, c.comment]));

  return (
    <div className="my-4 rounded-2xl border border-warm-200 dark:border-warm-700 overflow-hidden bg-[#faf8f5] dark:bg-[#1e1b18]">
      <div className="px-4 py-2 bg-warm-100 dark:bg-warm-800 text-xs text-warm-500 dark:text-warm-400 font-semibold uppercase tracking-wider">
        {language === 'bash' ? '终端命令' : language === 'html' ? 'HTML 代码' : '代码'}
      </div>
      <div className="overflow-x-auto">
        <pre className="!m-0 !rounded-none !bg-transparent p-4 text-sm leading-relaxed">
          <code ref={codeRef} className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
      {lineComments && lineComments.length > 0 && (
        <div className="border-t border-warm-200 dark:border-warm-700 px-4 py-3">
          <p className="text-xs text-warm-500 dark:text-warm-400 font-semibold mb-2">代码解说</p>
          {code.split('\n').map((_line, i) => {
            const lineNum = i + 1;
            const comment = commentMap.get(lineNum);
            if (!comment) return null;
            const isExpanded = expandedLines.has(lineNum);
            return (
              <div key={lineNum} className="mb-1">
                <button
                  onClick={() => toggleLine(lineNum)}
                  className="flex items-center gap-2 text-xs text-warm-500 dark:text-warm-400 hover:text-warm-700 dark:hover:text-warm-200 transition-colors w-full text-left group"
                >
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  <span className="font-mono text-[11px] text-warm-400">第{lineNum}行</span>
                  <span className="truncate group-hover:text-warm-600 dark:group-hover:text-warm-200">{comment.slice(0, 40)}{comment.length > 40 ? '...' : ''}</span>
                </button>
                {isExpanded && (
                  <div className="ml-6 mt-1 p-2 rounded-lg bg-warm-100/50 dark:bg-warm-800/50 text-xs text-warm-600 dark:text-warm-400 leading-relaxed">
                    {comment}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
