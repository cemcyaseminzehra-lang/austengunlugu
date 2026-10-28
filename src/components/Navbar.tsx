/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ActivePage } from '../types';
import { RegencyCaricature, WaxSealBadge } from './RegencyCaricatures';
import { ExportModal } from './ExportModal';

export const Navbar: React.FC = () => {
  const { activePage, setActivePage, userProfile } = useApp();
  const [isExportOpen, setIsExportOpen] = useState(false);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'biography', label: 'Biyografi' },
    { id: 'books', label: 'Kitaplar' },
    { id: 'chronology', label: 'Kronoloji' },
    { id: 'ranking', label: 'Sıralamam' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1B2228]/95 backdrop-blur-md border-b border-[#2C3440] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single-Line) */}
        <button
          onClick={() => setActivePage('biography')}
          className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
        >
          <WaxSealBadge letter="JA" size="sm" />
          <span className="font-display font-bold text-2xl tracking-tight text-[#FFFFFF] whitespace-nowrap">
            Austen<span className="text-[#D4AF37] font-serif italic font-medium ml-1 text-xl">Günlüğü</span>
          </span>
        </button>

        {/* Zone 2: 4 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map(item => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`relative py-1 font-serif text-base tracking-wide whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#468B62] font-semibold'
                    : 'text-[#9AB0C4] hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#468B62] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Export/GitHub + User Profile) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsExportOpen(true)}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#18231E] hover:bg-[#203028] border border-[#245840] text-xs font-serif text-[#74C69D] hover:text-[#A7E8BD] transition-all cursor-pointer whitespace-nowrap"
            title="GitHub'a Aktar & Vercel Dağıtım Rehberi"
          >
            <span className="w-2 h-2 rounded-full bg-[#468B62] animate-pulse" />
            <span className="hidden sm:inline font-medium">GitHub / İndir</span>
          </button>

          <button
            onClick={() => setActivePage('ranking')}
            className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-[#242C34] hover:bg-[#2C3742] border border-[#3A4754] text-xs font-serif text-[#E1E7ED] transition-all cursor-pointer whitespace-nowrap"
            title="Okur Profili & Kitap Sıralaması"
          >
            <RegencyCaricature id={userProfile.avatarId || 'elizabeth_darcy'} size="sm" />
            <span className="font-semibold hidden sm:inline max-w-[110px] truncate text-white">
              {userProfile.name || 'Giriş Yap'}
            </span>
            <span className="text-[10px] text-[#468B62] font-mono font-bold px-1.5 py-0.5 rounded bg-[#14181C] border border-[#234533]">
              #Sırala
            </span>
          </button>
        </div>
      </div>

      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />

      {/* Mobile Tab Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-[#2C3440] bg-[#171D22] py-2 px-2 text-xs font-serif">
        {navItems.map(item => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`py-1 px-3 rounded-md transition-colors ${
                isActive ? 'bg-[#242C34] text-[#468B62] font-bold' : 'text-[#8C9DAE]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
