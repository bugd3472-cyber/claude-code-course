import type { StepItem } from '../../types';

interface StepTimelineProps {
  steps: StepItem[];
}

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="my-6 space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full bg-warm-400 text-white flex items-center justify-center text-sm font-bold">
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-warm-200 dark:bg-warm-700 my-1" />}
          </div>
          <div className={`pb-6 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
            <h5 className="font-bold text-warm-700 dark:text-warm-300">{step.title}</h5>
            <p className="text-sm text-warm-500 dark:text-warm-400 mt-1">{step.description}</p>
            {step.code && (
              <code className="mt-2 inline-block px-3 py-1.5 bg-warm-100 dark:bg-warm-800 rounded-xl text-xs text-warm-600 dark:text-warm-400 font-mono">
                {step.code}
              </code>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
