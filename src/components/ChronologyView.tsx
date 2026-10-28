/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AUSTEN_BOOKS } from '../data/austenData';
import { VintageBookCover } from './VintageBookCover';
import { RegencyCaricature, WaxSealBadge, QuillWritingIcon } from './RegencyCaricatures';
import { useApp } from '../context/AppContext';

export const ChronologyView: React.FC = () => {
  const { setSelectedBook } = useApp();

  // Sort books strictly by publication year
  const chronologicalBooks = [...AUSTEN_BOOKS].sort((a, b) => a.publicationYear - b.publicationYear);
  const [selectedBookId, setSelectedBookId] = useState<string>(chronologicalBooks[0].id);

  const activeBook = chronologicalBooks.find(b => b.id === selectedBookId) || chronologicalBooks[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-24">
      
      {/* Editorial Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#468B62] font-sans font-bold">
          <QuillWritingIcon className="w-4 h-4 text-[#D4AF37]" />
          <span>1811 – 1818 Kronolojisi</span>
          <span>·</span>
          <span>Yayın Serüveni & Gizli Müsveddeler</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Kitapların Doğuş Hikayeleri
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-[#9AB0C4] text-balance">
          Çekmecelerde 15 yıl bekleyen başyapıtlar, açılmadan geri çevrilen mektuplar, 10 sterline satılıp rehin kalan romanlar ve ölüm döşeğinde tamamlanan son satırlar...
        </p>
      </div>

      {/* Interactive Horizontal Timeline Bar */}
      <div className="relative py-6 px-4 rounded-3xl bg-[#181F25] border border-[#2C3440] shadow-md overflow-x-auto">
        <div className="min-w-[620px] flex items-center justify-between relative px-6">
          
          {/* Timeline track line */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-1 bg-[#2C3440] z-0" />

          {chronologicalBooks.map((book, idx) => {
            const isSelected = book.id === selectedBookId;
            return (
              <div key={book.id} className="relative z-10 flex flex-col items-center">
                <button
                  onClick={() => setSelectedBookId(book.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer font-serif font-bold text-sm ${
                    isSelected
                      ? 'bg-[#245840] text-white ring-4 ring-[#245840]/30 scale-110 shadow-lg border border-[#357754]'
                      : 'bg-[#1C2228] text-[#CCD6E0] border-2 border-[#2C3440] hover:border-[#468B62]'
                  }`}
                  title={`${book.title} (${book.publicationYear})`}
                >
                  {book.publicationYear}
                </button>
                <span className={`text-[11px] font-serif font-semibold mt-2 max-w-[90px] text-center leading-tight truncate ${
                  isSelected ? 'text-[#468B62]' : 'text-stone-400'
                }`}>
                  {book.title}
                </span>
                <span className="text-[9px] text-stone-500 font-sans">
                  {idx + 1}. Eser
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Book Behind-The-Scenes Deep Dive */}
      <motion.div
        key={activeBook.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="parchment-card rounded-3xl p-6 sm:p-10 border border-[#2C3440] space-y-8 bg-[#1C2228]"
      >
        {/* Banner with Regency Typography */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[#2C3440] pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#468B62] font-sans font-bold">
              <span>Yayın Yılı: {activeBook.publicationYear}</span>
              <span>·</span>
              <span>Yazılış: {activeBook.writtenYears}</span>
              <span>·</span>
              <span>İlk Baskı: {activeBook.initialCopies}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
              {activeBook.title}
            </h2>
            <p className="text-sm sm:text-base font-serif italic text-[#C4A265]">
              Türkçe Adı: {activeBook.turkishTitle} — Mahlas: "{activeBook.authorBylines}"
            </p>
          </div>

          <div className="flex items-center gap-3">
            <WaxSealBadge letter="JA" size="md" />
          </div>
        </div>

        {/* 2-Column Split: Book Cover & Historical Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Book Cover with Historical Details */}
          <div className="md:col-span-4 flex flex-col items-center space-y-4">
            <div 
              onClick={() => setSelectedBook(activeBook)}
              className="cursor-pointer"
            >
              <VintageBookCover book={activeBook} size="md" />
            </div>
            <div className="w-full p-4 rounded-2xl bg-[#181F25] border border-[#2C3440] text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-400 font-sans">Yayıncı:</span>
                <span className="font-serif font-semibold text-white">{activeBook.originalPublisher}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400 font-sans">Sayfa:</span>
                <span className="font-serif font-semibold text-white">{activeBook.pageCount} Sayfa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400 font-sans">Format:</span>
                <span className="font-serif font-semibold text-white">3 Cilt (Three Volumes)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Behind-The-Scenes */}
          <div className="md:col-span-8 space-y-6">
            
            {/* The Untold Backstory */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Perde Arkasındaki Hikaye</span>
              </h3>
              <p className="font-prose text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                {activeBook.historicalBackstory}
              </p>
            </div>

            {/* Publishing Curiosities & Anecdotes */}
            <div className="p-5 rounded-2xl bg-[#14181C] border border-[#2C3440] space-y-3">
              <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#468B62]">
                Tarihsel Anekdotlar & Gerçekler
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-prose text-[#A6B7C7]">
                {activeBook.publishingTrivia.map((trivia, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#468B62] font-bold mt-0.5">•</span>
                    <span>{trivia}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote of the Novel */}
            <blockquote className="p-4 rounded-2xl bg-[#181F25] border-l-3 border-[#D4AF37] space-y-2 font-serif italic text-sm text-[#E2E8F0]">
              <p>"{activeBook.famousQuote}"</p>
              <footer className="not-italic text-xs font-sans text-stone-400 font-semibold">
                — {activeBook.quoteSpeaker}, {activeBook.title}
              </footer>
            </blockquote>

          </div>

        </div>

      </motion.div>

      {/* Full 6-Book Chronological Overview Table / Cards */}
      <div className="space-y-6 pt-6">
        <div className="text-center space-y-1">
          <h3 className="font-serif text-2xl font-bold text-white">
            Kronolojik Yayın Tablosu (1811 – 1818)
          </h3>
          <p className="text-xs font-sans text-stone-400 uppercase tracking-widest">
            Bütün Başyapıtların Zaman Çizelgesi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {chronologicalBooks.map((book, index) => (
            <div
              key={book.id}
              onClick={() => setSelectedBookId(book.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                book.id === selectedBookId
                  ? 'bg-[#202932] border-[#3E8060] shadow-md ring-1 ring-[#3E8060]/30'
                  : 'bg-[#1C2228] border-[#2C3440] hover:border-[#3D4C5A]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#468B62] uppercase tracking-wider block">
                    {index + 1}. Sıra · {book.publicationYear}
                  </span>
                  <h4 className="font-serif font-bold text-base text-white">
                    {book.title}
                  </h4>
                  <p className="text-xs font-serif italic text-[#9AB0C4]">
                    {book.turkishTitle}
                  </p>
                </div>
                <RegencyCaricature id={book.caricatureId} size="sm" />
              </div>

              <p className="text-xs font-prose text-[#A6B7C7] line-clamp-3 leading-snug">
                {book.historicalBackstory}
              </p>

              <div className="pt-2 border-t border-[#2C3440] flex items-center justify-between text-[11px] text-[#468B62] font-serif font-semibold">
                <span>Hikayeyi Oku</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
