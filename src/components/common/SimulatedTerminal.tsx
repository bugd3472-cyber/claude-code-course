import { useState, useEffect } from 'react';
import type { StepItem } from '../../types';

interface SimulatedTerminalProps {
  userInput: string;
  steps?: StepItem[];
}

export default function SimulatedTerminal({ userInput, steps }: SimulatedTerminalProps) {
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  useEffect(() => {
    if (!steps) return;
    const timer = setInterval(() => {
      setVisibleSteps(prev => {
        if (prev >= steps.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, [steps]);

  return (
    <div className="my-4 rounded-2xl overflow-hidden border border-warm-300 dark:border-warm-600 bg-[#1e1b18] dark:bg-[#0f0e0c] text-green-400 font-mono text-sm">
      <div className="px-4 py-2 bg-warm-800/50 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-warm-400">终端模拟</span>
      </div>
      <div className="p-4 space-y-2">
        <div>
          <span className="text-blue-300">$ </span>
          <span className="text-white">{userInput}</span>
        </div>
        {steps && steps.map((step, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${
              i < visibleSteps ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            {i < visibleSteps && (
              <div className="text-xs text-warm-400 mt-2">
                <span className="text-yellow-400">[{step.title}]</span>{' '}
                <span className="text-green-300">{step.description}</span>
              </div>
            )}
          </div>
        ))}
        {visibleSteps > 0 && visibleSteps >= (steps?.length ?? 0) && (
          <div className="text-green-500 mt-3 animate-pulse">✨ 完成！</div>
        )}
      </div>
    </div>
  );
}
