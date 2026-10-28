/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WaxSealBadge } from './RegencyCaricatures';
import janeAustenPortrait from '../assets/jane_austen_portrait.jpg';
import janeAustenWatercolour from '../assets/jane_austen_watercolour.jpg';

export const JanePortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activePortrait, setActivePortrait] = useState<'victorian' | 'watercolour'>('victorian');

  const currentSrc = activePortrait === 'victorian' ? janeAustenPortrait : janeAustenWatercolour;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative mx-auto max-w-sm sm:max-w-md ${className}`}
    >
      {/* Decorative Regency Cameo Frame in Deep British Forest Green & Antique Brass */}
      <div className="relative p-5 sm:p-7 rounded-[42px] bg-gradient-to-b from-[#18231E] via-[#141C18] to-[#0F1512] border-2 border-[#2D4A3C] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)]">
        
        {/* Victorian corner brass accents */}
        <div className="absolute top-3.5 left-3.5 text-[#C4A265] opacity-80 pointer-events-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M3 3c6 0 10 4 10 10M3 3v12M3 3h12" />
            <circle cx="7" cy="7" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-3.5 right-3.5 text-[#C4A265] opacity-80 transform scale-x-[-1] pointer-events-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M3 3c6 0 10 4 10 10M3 3v12M3 3h12" />
            <circle cx="7" cy="7" r="1.5" fill="currentColor" />
          </svg>
        </div>

        {/* Top Silk Ribbon Bow in Regency Crimson */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center z-20 pointer-events-none">
          <svg width="70" height="34" viewBox="0 0 100 50" fill="none">
            <ellipse cx="50" cy="22" rx="7" ry="6" fill="#8B1A1A" stroke="#5E1212" strokeWidth="1.5" />
            <path d="M44 21 C 22 8, 12 30, 44 24 Z" fill="#9E2222" stroke="#5E1212" strokeWidth="1.5" />
            <path d="M56 21 C 78 8, 88 30, 56 24 Z" fill="#9E2222" stroke="#5E1212" strokeWidth="1.5" />
            <path d="M46 25 Q 36 44 28 48" stroke="#8B1A1A" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M54 25 Q 64 44 72 48" stroke="#8B1A1A" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="50" cy="22" r="2" fill="#DE7373" />
          </svg>
        </div>

        {/* Inner Gilded Oval Cameo Frame */}
        <div className="relative aspect-[3/4] w-full rounded-[130px] overflow-hidden border-4 border-[#C8A97E] shadow-[inset_0_4px_24px_rgba(0,0,0,0.65)] bg-[#1A1815]">
          
          {/* Authentic Real Portrait of Jane Austen */}
          <div className="relative w-full h-full bg-[#EAE2D5] flex items-center justify-center">
            <img
              src={currentSrc}
              alt="Jane Austen (1775-1817) Orijinal Tarihi Portresi"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 hover:scale-105"
            />
            {/* Soft oval museum vignette scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15 pointer-events-none" />
          </div>

          {/* Gilded Antique Engraving Plaque at Bottom of Cameo */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-52 text-center bg-[#101713]/90 backdrop-blur-md text-[#F5E6CC] py-2 px-3 rounded-xl border border-[#C8A97E]/80 shadow-2xl">
            <span className="block font-serif tracking-widest text-xs uppercase font-bold text-[#EAD8BD]">
              Jane Austen
            </span>
            <span className="block text-[10px] text-[#86AB96] font-sans tracking-wider mt-0.5">
              1775 – 1817 · Chawton, Hampshire
            </span>
          </div>

        </div>

        {/* Wax Seal Stamp on Corner */}
        <div className="absolute -bottom-3 -right-3 z-30">
          <WaxSealBadge letter="JA" size="lg" />
        </div>
      </div>
      
      {/* Interactive Switch for Two Authentic Historic Portraits */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActivePortrait('victorian')}
          className={`text-[11px] font-serif py-1 px-2.5 rounded-full border transition-all cursor-pointer ${
            activePortrait === 'victorian'
              ? 'bg-[#214A36] text-[#DCECE2] border-[#387656] shadow-sm'
              : 'bg-[#182026] text-[#8EA2B4] border-[#2C3844] hover:text-white'
          }`}
        >
          Klasik Gravür (1870)
        </button>
        <button
          type="button"
          onClick={() => setActivePortrait('watercolour')}
          className={`text-[11px] font-serif py-1 px-2.5 rounded-full border transition-all cursor-pointer ${
            activePortrait === 'watercolour'
              ? 'bg-[#214A36] text-[#DCECE2] border-[#387656] shadow-sm'
              : 'bg-[#182026] text-[#8EA2B4] border-[#2C3844] hover:text-white'
          }`}
        >
          Cassandra Suluboyası (1810)
        </button>
      </div>

      {/* Caption beneath portrait */}
      <p className="mt-2 text-center text-xs text-[#8F9DAA] italic font-serif">
        "I must keep to my own style and go on in my own way." — Jane Austen
      </p>
    </motion.div>
  );
};
