import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Collapsible({ title, children, defaultOpen = false }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-warm-200 dark:border-warm-700 rounded-2xl overflow-hidden my-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-warm-100/50 dark:hover:bg-warm-800/50 transition-colors"
      >
        <span className="font-semibold text-sm text-warm-700 dark:text-warm-300">{title}</span>
        {open ? <ChevronUp size={18} className="text-warm-400 shrink-0" /> : <ChevronDown size={18} className="text-warm-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-warm-600 dark:text-warm-400 leading-relaxed border-t border-warm-100 dark:border-warm-800">
          {children}
        </div>
      )}
    </div>
  );
}
