import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, Sun, Moon, Sparkles } from 'lucide-react';
import Sidebar from './Sidebar';
import NotificationsPopover from './NotificationsPopover';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex bg-slate-50 dark:bg-[#0F111A] text-slate-900 dark:text-slate-100 ${darkMode ? 'dark' : ''}`}>
      
      {/* Sidebar Desktop */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Sidebar Mobile (Drawer) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative z-50 w-64 h-full bg-[#0F111A] border-r border-white/10 shadow-2xl">
            <Sidebar onItemClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-slate-200 dark:border-white/5 flex items-center justify-between px-4 bg-white/50 dark:bg-[#0F111A]/50 backdrop-blur-md sticky top-0 z-40">
          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg">
            <Menu size={24} />
          </button>

          <div className="flex-1 md:hidden ml-4 font-bold text-lg text-primary-500">Encontro D'Água</div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-primary hover:bg-primary/10 rounded-full" title="Flow AI">
              <Sparkles size={20} />
            </button>
            <NotificationsPopover />
            <button onClick={toggleDarkMode} className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
