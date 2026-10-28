/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WaxSealBadge } from './RegencyCaricatures';
import { ExportModal } from './ExportModal';

export const Footer: React.FC = () => {
  const { setActivePage } = useApp();
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <footer className="bg-[#101418] border-t border-[#232B34] py-12 text-[#8F9DAA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <WaxSealBadge letter="JA" size="md" />
            <div>
              <span className="font-display font-bold text-xl text-white block">
                Austen<span className="text-[#D4AF37] font-serif italic ml-1">Günlüğü</span>
              </span>
              <span className="text-xs text-stone-400 font-serif">
                Jane Austen Edebiyat & Kitap Günlüğü
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-serif">
            <button
              onClick={() => { setActivePage('biography'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-[#468B62] transition-colors cursor-pointer text-[#CCD6E0]"
            >
              Biyografi
            </button>
            <button
              onClick={() => { setActivePage('books'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-[#468B62] transition-colors cursor-pointer text-[#CCD6E0]"
            >
              Kitapları & Puanlama
            </button>
            <button
              onClick={() => { setActivePage('chronology'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-[#468B62] transition-colors cursor-pointer text-[#CCD6E0]"
            >
              Yayın Kronolojisi
            </button>
            <button
              onClick={() => { setActivePage('ranking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-[#468B62] transition-colors cursor-pointer text-[#CCD6E0]"
            >
              Kişisel Sıralamam
            </button>
            <button
              onClick={() => setIsExportOpen(true)}
              className="text-[#468B62] hover:text-[#58b07d] font-semibold transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>GitHub'a Aktar & İndir</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1C232A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-sans">
          <p>
            Yapay Zeka Araçları Kullanımı Dersi Vize Ödevi için hazırlanmıştır. Vercel üzerinde üretime hazır modüler React mimarisi.
          </p>
          <p className="font-serif italic text-stone-400">
            "It is a truth universally acknowledged..." — Jane Austen (1775–1817)
          </p>
        </div>

      </div>
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
    </footer>
  );
};
