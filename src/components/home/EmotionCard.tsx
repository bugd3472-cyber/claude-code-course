interface EmotionCardProps {
  emoji: string;
  question: string;
  answer: string;
}

export default function EmotionCard({ emoji, question, answer }: EmotionCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-warm-200 dark:border-warm-700 bg-white dark:bg-warm-900 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-bold text-warm-700 dark:text-warm-300 mb-2">{question}</h3>
      <p className="text-sm text-warm-500 dark:text-warm-400 leading-relaxed">{answer}</p>
    </div>
  );
}
