import { Lightbulb, AlertTriangle } from 'lucide-react';

interface TipBubbleProps {
  type: 'tip' | 'warning';
  children: React.ReactNode;
}

export default function TipBubble({ type, children }: TipBubbleProps) {
  const isTip = type === 'tip';
  return (
    <div className={`my-3 flex gap-3 p-4 rounded-2xl ${
      isTip
        ? 'bg-soft-blue-50 dark:bg-soft-blue-900/30 border border-soft-blue-200 dark:border-soft-blue-700'
        : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700'
    }`}>
      <div className={`shrink-0 mt-0.5 ${isTip ? 'text-soft-blue-500' : 'text-yellow-600 dark:text-yellow-400'}`}>
        {isTip ? <Lightbulb size={18} /> : <AlertTriangle size={18} />}
      </div>
      <p className="text-sm text-warm-700 dark:text-warm-300 leading-relaxed">{children}</p>
    </div>
  );
}
