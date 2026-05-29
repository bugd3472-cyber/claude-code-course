export interface Lesson {
  slug: string;
  title: string;
  subtitle: string;
  order: number;
  sections: LessonSection[];
}

export interface LessonSection {
  id: string;
  heading: string;
  contentType: 'text' | 'code' | 'quiz' | 'terminal' | 'steps' | 'comparison-table' | 'faq' | 'text-with-faq';
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'paragraph' | 'code' | 'tip' | 'warning' | 'image-placeholder' | 'quiz-question' | 'table' | 'steps' | 'terminal' | 'faq';
  text?: string;
  code?: string;
  language?: string;
  lineComments?: LineComment[];
  options?: QuizOption[];
  headers?: string[];
  rows?: string[][];
  steps?: StepItem[];
  items?: FAQItem[];
}

export interface LineComment {
  line: number;
  comment: string;
}

export interface QuizOption {
  text: string;
  correct: boolean;
  explanation: string;
}

export interface StepItem {
  title: string;
  description: string;
  code?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TroubleshootingItem {
  id: string;
  symptom: string;
  cause: string;
  solution: string;
  tags: string[];
}

export interface LearningStage {
  id: number;
  label: string;
  route: string;
  description: string;
}
