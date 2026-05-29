import { useState } from 'react';
import { Check, X } from 'lucide-react';
import type { QuizOption } from '../../types';

interface QuizProps {
  question: string;
  options: QuizOption[];
}

export default function Quiz({ question, options }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setShowExplanation(true);
  };

  return (
    <div className="my-4 p-5 rounded-2xl border-2 border-warm-300 dark:border-warm-600 bg-warm-100/50 dark:bg-warm-800/30">
      <h5 className="font-bold text-warm-700 dark:text-warm-300 mb-3 flex items-center gap-2">
        <span className="text-lg">📝</span> {question}
      </h5>
      <div className="space-y-2">
        {options.map((opt, idx) => {
          const isSelected = selected === idx;
          const isCorrect = opt.correct;
          let borderClass = 'border-warm-200 dark:border-warm-700 hover:border-warm-400';
          if (isSelected && showExplanation) {
            borderClass = isCorrect
              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
              : 'border-red-400 bg-red-50 dark:bg-red-900/20';
          }

          return (
            <div key={idx}>
              <button
                onClick={() => handleSelect(idx)}
                disabled={showExplanation}
                className={`w-full text-left p-3 rounded-xl border-2 transition-colors ${borderClass} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  {isSelected && showExplanation && (
                    isCorrect ? <Check size={18} className="text-green-600 shrink-0" /> : <X size={18} className="text-red-500 shrink-0" />
                  )}
                  {!isSelected && <span className="w-5 h-5 rounded-full border-2 border-warm-300 shrink-0" />}
                  <span className="text-sm text-warm-700 dark:text-warm-300">{opt.text}</span>
                </div>
              </button>
              {isSelected && showExplanation && (
                <div className={`mt-1 ml-10 text-xs p-2 rounded-lg ${isCorrect ? 'text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/10' : 'text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-900/10'}`}>
                  {isCorrect ? '✅ 正确！' : '❌ 不对哦'} {opt.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
