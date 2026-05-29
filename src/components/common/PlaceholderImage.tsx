import { ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  text: string;
}

export default function PlaceholderImage({ text }: PlaceholderImageProps) {
  return (
    <div className="my-4 p-8 border-2 border-dashed border-warm-300 dark:border-warm-600 rounded-2xl bg-warm-100/50 dark:bg-warm-800/30 flex flex-col items-center justify-center gap-3">
      <ImageIcon size={32} className="text-warm-300 dark:text-warm-600" />
      <p className="text-sm text-warm-400 dark:text-warm-500 text-center max-w-xs">{text}</p>
      <span className="text-[10px] text-warm-300 dark:text-warm-600 uppercase tracking-wider">截图占位符</span>
    </div>
  );
}
