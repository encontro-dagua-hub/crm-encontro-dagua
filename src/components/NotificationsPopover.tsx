import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const NotificationsPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-full relative transition-colors"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Abrir notificações"
      >
        <Bell size={20} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-dark-card"></span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50">
            <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-300">
              Sem novas notificações por enquanto.
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationsPopover;
