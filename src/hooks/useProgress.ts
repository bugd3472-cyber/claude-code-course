import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'claude-course-progress';
const TOTAL_LESSONS = 4;

interface Progress {
  completedLessons: string[];
  currentLesson: number;
}

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { completedLessons: [], currentLesson: 1 };
}

function saveProgress(p: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markLessonComplete = useCallback((slug: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(slug)) return prev;
      const nextOrder = prev.currentLesson < TOTAL_LESSONS ? prev.currentLesson + 1 : prev.currentLesson;
      return {
        completedLessons: [...prev.completedLessons, slug],
        currentLesson: nextOrder,
      };
    });
  }, []);

  const isLessonCompleted = useCallback(
    (slug: string) => progress.completedLessons.includes(slug),
    [progress.completedLessons],
  );

  return {
    currentLesson: progress.currentLesson,
    completedCount: progress.completedLessons.length,
    totalLessons: TOTAL_LESSONS,
    markLessonComplete,
    isLessonCompleted,
  };
}
