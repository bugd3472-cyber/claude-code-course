import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import type { ReactNode } from 'react';

interface LayoutProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  completedCount: number;
  children?: ReactNode;
}

export default function Layout({ theme, toggleTheme, completedCount, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} toggleTheme={toggleTheme} completedCount={completedCount} />
      <main className="flex-1">
        {children ?? <Outlet />}
      </main>
    </div>
  );
}
