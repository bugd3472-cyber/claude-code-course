import { homeFAQs } from '../../data/faq';
import Collapsible from '../common/Collapsible';

export default function FearFAQ() {
  return (
    <section className="px-4 py-8 max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-center text-warm-700 dark:text-warm-300 mb-2">
        你可能在担心的……
      </h2>
      <p className="text-center text-sm text-warm-400 dark:text-warm-500 mb-6">
        每一个新手都有过这些疑问，你不是一个人
      </p>
      <div className="space-y-1">
        {homeFAQs.map((faq, i) => (
          <Collapsible key={i} title={faq.question}>
            <p>{faq.answer}</p>
          </Collapsible>
        ))}
      </div>
    </section>
  );
}
