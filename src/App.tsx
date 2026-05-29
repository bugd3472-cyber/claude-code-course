import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LessonPage from './pages/LessonPage';
import Troubleshooting from './pages/Troubleshooting';
import NextSteps from './pages/NextSteps';
import { useTheme } from './hooks/useTheme';
import { useProgress } from './hooks/useProgress';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  const { theme, toggleTheme } = useTheme();
  const { completedCount, markLessonComplete, isLessonCompleted } = useProgress();

  return (
    <Layout theme={theme} toggleTheme={toggleTheme} completedCount={completedCount}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home completedCount={completedCount} />} />
        <Route
          path="/lesson/:slug"
          element={
            <LessonPage markLessonComplete={markLessonComplete} isLessonCompleted={isLessonCompleted} />
          }
        />
        <Route path="/troubleshooting" element={<Troubleshooting />} />
        <Route path="/next-steps" element={<NextSteps />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
