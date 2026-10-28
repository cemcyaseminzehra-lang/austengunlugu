/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Book } from '../types';

interface VintageBookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const VintageBookCover: React.FC<VintageBookCoverProps> = ({
  book,
  size = 'md',
  className = '',
  onClick
}) => {
  const dimensions = {
    sm: 'w-32 h-48',
    md: 'w-44 h-64 sm:w-48 sm:h-72',
    lg: 'w-56 h-80 sm:w-64 sm:h-96'
  }[size];

  // Specific bespoke motif per book inspired by historical editions
  const renderBookMotif = () => {
    switch (book.id) {
      case 'pride-and-prejudice':
        // The legendary 1894 Hugh Thomson Peacock Motif
        return (
          <div className="flex flex-col items-center justify-center my-1 text-center">
            <svg viewBox="0 0 100 80" className="w-16 h-12 text-[#D4AF37]" fill="currentColor">
              {/* Peacock fan feathers */}
              <path d="M50 15 C 30 15, 10 35, 10 65 C 25 60, 45 60, 50 65 C 55 60, 75 60, 90 65 C 90 35, 70 15, 50 15 Z" fillOpacity="0.25" stroke="#D4AF37" strokeWidth="1.2" />
              {/* Feather eyes */}
              <circle cx="30" cy="35" r="3.5" fill="#D4AF37" />
              <circle cx="50" cy="25" r="4" fill="#D4AF37" />
              <circle cx="70" cy="35" r="3.5" fill="#D4AF37" />
              <circle cx="20" cy="50" r="3" fill="#D4AF37" />
              <circle cx="80" cy="50" r="3" fill="#D4AF37" />
              {/* Peacock body */}
              <path d="M48 68 C 46 55, 48 45, 52 40 C 54 38, 56 40, 55 45 C 57 55, 54 65, 52 68 Z" fill="#D4AF37" />
              <circle cx="53" cy="38" r="2.5" fill="#D4AF37" />
              {/* Crown crest */}
              <path d="M53 36 L 51 32 M53 36 L 53 31 M53 36 L 55 32" stroke="#D4AF37" strokeWidth="1.2" />
            </svg>
            <span className="text-[9px] uppercase tracking-widest text-[#B8860B] font-serif font-bold mt-0.5">
              Peacock Edition
            </span>
          </div>
        );

      case 'sense-and-sensibility':
        // Intertwined twin hearts & botanical olive branch (Sense vs Sensibility)
        return (
          <div className="flex flex-col items-center justify-center my-1">
            <svg viewBox="0 0 80 50" className="w-14 h-9 text-[#A88242]" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M28 20 C 20 10, 10 20, 20 32 L 28 40 L 36 32 C 46 20, 36 10, 28 20 Z" fill="#A88242" fillOpacity="0.2" />
              <path d="M52 20 C 44 10, 34 20, 44 32 L 52 40 L 60 32 C 70 20, 60 10, 52 20 Z" fill="#A88242" fillOpacity="0.2" />
              <path d="M8 44 Q 40 48 72 44" strokeLinecap="round" />
            </svg>
            <span className="text-[8px] uppercase tracking-widest text-[#2B4333] font-serif mt-0.5">
              Elinor & Marianne
            </span>
          </div>
        );

      case 'mansfield-park':
        // Georgian manor facade & oak garland
        return (
          <div className="flex flex-col items-center justify-center my-1">
            <svg viewBox="0 0 80 50" className="w-14 h-9 text-[#C2934D]" fill="none" stroke="currentColor" strokeWidth="1.2">
              {/* Classical Georgian pediment */}
              <polygon points="40,10 15,22 65,22" fill="#C2934D" fillOpacity="0.25" />
              <line x1="20" y1="22" x2="20" y2="40" />
              <line x1="33" y1="22" x2="33" y2="40" />
              <line x1="47" y1="22" x2="47" y2="40" />
              <line x1="60" y1="22" x2="60" y2="40" />
              <line x1="12" y1="40" x2="68" y2="40" strokeWidth="1.5" />
            </svg>
            <span className="text-[8px] uppercase tracking-widest text-[#5C3D22] font-serif mt-0.5">
              Bertram Estate
            </span>
          </div>
        );

      case 'emma':
        // Regency parasol, ribbon bow & English roses
        return (
          <div className="flex flex-col items-center justify-center my-1">
            <svg viewBox="0 0 80 50" className="w-14 h-9 text-[#C96880]" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M15 28 Q 40 8 65 28 L 60 30 Q 40 18 20 30 Z" fill="#C96880" fillOpacity="0.25" />
              <line x1="40" y1="12" x2="40" y2="44" strokeLinecap="round" />
              <path d="M40 44 Q 44 46 44 48" strokeLinecap="round" />
            </svg>
            <span className="text-[8px] uppercase tracking-widest text-[#7E3A4D] font-serif mt-0.5">
              Highbury Court
            </span>
          </div>
        );

      case 'northanger-abbey':
        // Gothic arched cathedral window & bat/quill flourish
        return (
          <div className="flex flex-col items-center justify-center my-1">
            <svg viewBox="0 0 80 50" className="w-14 h-9 text-[#8E44AD]" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M26 42 L 26 22 C 26 12, 40 6, 40 6 C 40 6, 54 12, 54 22 L 54 42 Z" fill="#8E44AD" fillOpacity="0.2" />
              <line x1="40" y1="6" x2="40" y2="42" />
              <path d="M26 26 Q 40 20 54 26" />
            </svg>
            <span className="text-[8px] uppercase tracking-widest text-[#4A3B63] font-serif mt-0.5">
              Gothic Parody
            </span>
          </div>
        );

      case 'persuasion':
      default:
        // Royal Navy anchor & laurel wreath (Wentworth's love letter)
        return (
          <div className="flex flex-col items-center justify-center my-1">
            <svg viewBox="0 0 80 50" className="w-14 h-9 text-[#24534F]" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="40" cy="14" r="4" />
              <line x1="40" y1="18" x2="40" y2="40" strokeWidth="1.5" />
              <line x1="30" y1="24" x2="50" y2="24" strokeWidth="1.5" />
              <path d="M24 32 Q 40 46 56 32" strokeWidth="1.5" fill="none" />
              <polygon points="22,30 26,34 26,30" fill="#24534F" />
              <polygon points="58,30 54,34 54,30" fill="#24534F" />
            </svg>
            <span className="text-[8px] uppercase tracking-widest text-[#24534F] font-serif mt-0.5">
              Captain's Letter
            </span>
          </div>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer select-none rounded-r-md rounded-l-[3px] transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 book-shadow overflow-hidden flex-shrink-0 ${dimensions} ${className}`}
      style={{
        backgroundColor: book.coverColor.bg,
        borderColor: book.coverColor.border,
      }}
    >
      {/* Book Spine Simulation (Left Edge Crease & Highlight) */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-3.5 sm:w-4.5 z-20 flex flex-col justify-between py-3 border-r border-black/15"
        style={{
          background: `linear-gradient(to right, ${book.coverColor.spine} 0%, rgba(0,0,0,0.2) 60%, rgba(255,255,255,0.2) 90%, transparent 100%)`
        }}
      >
        {/* Spine ribbed bands */}
        <div className="w-full h-0.5 bg-yellow-600/40" />
        <div className="w-full h-0.5 bg-yellow-600/40" />
        <div className="w-full h-0.5 bg-yellow-600/40" />
        <div className="w-full h-0.5 bg-yellow-600/40" />
      </div>

      {/* Book Page Edge / Thickness Indicator on Right */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-[#EDE4D5] to-transparent opacity-80" />

      {/* Main Cover Area */}
      <div className="absolute inset-0 pl-4 sm:pl-5 pr-2.5 sm:pr-3 py-3 sm:py-4 flex flex-col justify-between">
        
        {/* Ornate Embossed Filigree Border */}
        <div 
          className="absolute inset-y-2 left-4 sm:left-5 right-2 sm:right-2.5 rounded-[2px] pointer-events-none border border-dashed opacity-60"
          style={{ borderColor: book.coverColor.foil }}
        >
          {/* Inner hairline */}
          <div 
            className="absolute inset-1 rounded-[1px] border pointer-events-none opacity-40"
            style={{ borderColor: book.coverColor.accent }}
          />
        </div>

        {/* Top Header: Byline & Original Regency Tag */}
        <div className="relative z-10 text-center pt-1">
          <span 
            className="block text-[8px] sm:text-[9px] uppercase tracking-widest font-sans font-medium"
            style={{ color: book.coverColor.accent }}
          >
            {book.authorBylines}
          </span>
          <span 
            className="inline-block text-[9px] sm:text-[10px] font-serif italic text-stone-500"
          >
            A Novel in Three Volumes
          </span>
        </div>

        {/* Center: Book Title in Classic Serif & Vintage Gold Shimmer */}
        <div className="relative z-10 text-center my-auto px-1">
          <h3 
            className="font-serif font-bold tracking-tight text-sm sm:text-base leading-tight drop-shadow-sm uppercase"
            style={{ color: book.coverColor.text }}
          >
            {book.title}
          </h3>
          <p 
            className="text-[10px] sm:text-[11px] font-serif italic mt-0.5"
            style={{ color: book.coverColor.accent }}
          >
            {book.turkishTitle}
          </p>

          {/* Bespoke Motif */}
          {renderBookMotif()}
        </div>

        {/* Bottom: Publication Year & London Seal */}
        <div className="relative z-10 text-center pb-1">
          <div className="flex items-center justify-center gap-1.5">
            <span className="w-3 h-px bg-stone-400 opacity-60" />
            <span 
              className="font-serif font-semibold text-[10px] sm:text-xs tracking-wider"
              style={{ color: book.coverColor.text }}
            >
              {book.publicationYear}
            </span>
            <span className="w-3 h-px bg-stone-400 opacity-60" />
          </div>
          <span 
            className="block text-[7px] sm:text-[8px] uppercase tracking-widest font-sans text-stone-500 mt-0.5 truncate"
          >
            London · Egerton / Murray
          </span>
        </div>
      </div>

      {/* Tactile Texture Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/15 pointer-events-none" />
    </div>
  );
};
