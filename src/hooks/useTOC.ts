import { useMemo } from 'react';
import type { LessonSection } from '../types';

export interface TOCItem {
  id: string;
  heading: string;
}

export function useTOC(sections: LessonSection[]): TOCItem[] {
  return useMemo(
    () =>
      sections.map(s => ({
        id: s.id,
        heading: s.heading,
      })),
    [sections],
  );
}
