/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AUSTEN_BOOKS } from '../data/austenData';
import { VintageBookCover } from './VintageBookCover';
import { BookDetailModal } from './BookDetailModal';
import { useApp } from '../context/AppContext';
import { WaxSealBadge } from './RegencyCaricatures';

export const BooksDirectoryView: React.FC = () => {
  const {
    bookStates,
    setRating,
    toggleFavorite,
    toggleRead,
    selectedBook,
    setSelectedBook,
    getBookStats,
    setActivePage
  } = useApp();

  const [activeFilter, setActiveFilter] = useState<'all' | 'favorites' | 'read' | 'want'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate reading stats
  const totalReadCount = Object.values(bookStates).filter(s => s.isRead).length;
  const totalFavoritesCount = Object.values(bookStates).filter(s => s.isFavorite).length;

  // Filtered books
  const filteredBooks = AUSTEN_BOOKS.filter((book) => {
    const state = bookStates[book.id];
    
    // Filter type
    if (activeFilter === 'favorites' && !state?.isFavorite) return false;
    if (activeFilter === 'read' && !state?.isRead) return false;
    if (activeFilter === 'want' && !state?.wantToRead) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = book.title.toLowerCase().includes(q);
      const matchTrTitle = book.turkishTitle.toLowerCase().includes(q);
      const matchChar = book.keyCharacters.some(c => c.toLowerCase().includes(q));
      return matchTitle || matchTrTitle || matchChar;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 pb-24">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C3440] pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#468B62] font-sans font-bold">
            <span>Jane Austen Kanonu</span>
            <span>·</span>
            <span>6 Ana Eser</span>
            <span>·</span>
            <span>Okur Günlüğü & İncelemeler</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Kitapları & İnceleme Kulübü
          </h1>
          <p className="text-sm sm:text-base font-serif italic text-[#9AB0C4] max-w-2xl">
            Tüm romanları puanlayın, favorilerinize ekleyin, kişisel okur yorumunuzu bırakın veya kronolojik olarak sıralayın.
          </p>
        </div>

        {/* Reading Progress Card */}
        <div className="p-4 rounded-2xl bg-[#1C2228] border border-[#2C3440] flex items-center gap-4 shrink-0 shadow-md">
          <WaxSealBadge letter="JA" size="md" />
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-serif font-semibold text-white">
              <span>Okuma Durumu:</span>
              <span className="font-mono text-[#468B62] font-bold">{totalReadCount} / 6 Kitap</span>
            </div>
            <div className="w-36 h-2 bg-[#14181C] rounded-full overflow-hidden border border-[#2C3440]">
              <div 
                className="h-full bg-[#468B62] rounded-full transition-all duration-500"
                style={{ width: `${(totalReadCount / 6) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-stone-400 font-sans block">
              {totalFavoritesCount} Eser Favorilerde
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Segmented Filter Buttons */}
        <div className="inline-flex p-1 bg-[#181F25] rounded-xl border border-[#2C3440] self-start sm:self-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`py-1.5 px-3 rounded-lg text-xs font-serif font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#242C34] text-white shadow-sm'
                : 'text-[#8C9DAE] hover:text-white'
            }`}
          >
            Tüm Eserler (6)
          </button>
          <button
            onClick={() => setActiveFilter('favorites')}
            className={`py-1.5 px-3 rounded-lg text-xs font-serif font-semibold transition-all cursor-pointer ${
              activeFilter === 'favorites'
                ? 'bg-[#242C34] text-[#FF4565] shadow-sm'
                : 'text-[#8C9DAE] hover:text-white'
            }`}
          >
            ♥ Favorilerim ({totalFavoritesCount})
          </button>
          <button
            onClick={() => setActiveFilter('read')}
            className={`py-1.5 px-3 rounded-lg text-xs font-serif font-semibold transition-all cursor-pointer ${
              activeFilter === 'read'
                ? 'bg-[#242C34] text-[#468B62] shadow-sm'
                : 'text-[#8C9DAE] hover:text-white'
            }`}
          >
            ✓ Okuduklarım ({totalReadCount})
          </button>
          <button
            onClick={() => setActiveFilter('want')}
            className={`py-1.5 px-3 rounded-lg text-xs font-serif font-semibold transition-all cursor-pointer ${
              activeFilter === 'want'
                ? 'bg-[#242C34] text-[#40B5FF] shadow-sm'
                : 'text-[#8C9DAE] hover:text-white'
            }`}
          >
            ⏱ Okunacaklar
          </button>
        </div>

        {/* Search input & Ranking Jump */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kitap veya karakter ara..."
              className="py-1.5 pl-8 pr-3 text-xs font-sans rounded-xl bg-[#1C2228] border border-[#2C3440] text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#468B62] w-48 sm:w-56"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs">🔍</span>
          </div>

          <button
            onClick={() => setActivePage('ranking')}
            className="py-1.5 px-3.5 rounded-xl bg-[#242C34] hover:bg-[#2C3742] text-white text-xs font-serif font-semibold transition-colors cursor-pointer shrink-0 border border-[#3A4754]"
          >
            Sıralama Yap (#1'den #6'ya) →
          </button>
        </div>

      </div>

      {/* Grid of 6 Books with Vintage Covers & Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredBooks.map((book) => {
          const userState = bookStates[book.id] || { rating: 0, isFavorite: false, isRead: false, wantToRead: false };
          const stats = getBookStats(book.id);

          return (
            <motion.div
              key={book.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="parchment-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#3D4C5A] transition-all relative group shadow-lg"
            >
              {/* Top Row: Vintage Book Cover & Quick Meta */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div 
                  onClick={() => setSelectedBook(book)}
                  className="shrink-0 transform transition-transform group-hover:scale-103"
                >
                  <VintageBookCover book={book} size="sm" />
                </div>

                <div className="flex-1 space-y-1.5 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#468B62]">
                      {book.publicationYear}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded-md">
                      ★ {stats.avgRating}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setSelectedBook(book)}
                    className="font-serif font-bold text-lg text-white leading-tight hover:text-[#468B62] cursor-pointer transition-colors truncate"
                  >
                    {book.title}
                  </h3>
                  <p className="text-xs font-serif italic text-[#A6B7C7] truncate">
                    {book.turkishTitle}
                  </p>

                  <p className="text-[11px] font-prose text-[#8F9DAA] line-clamp-3 leading-snug pt-1">
                    {book.synopsis}
                  </p>

                  <div className="pt-1 flex items-center gap-3 text-[10px] text-stone-400 font-sans">
                    <span>{stats.totalReviews} İnceleme</span>
                    <span>·</span>
                    <span>{stats.totalFavorites} Favori</span>
                  </div>
                </div>
              </div>

              {/* Action Bar on Card */}
              <div className="pt-3 border-t border-[#2C3440] flex items-center justify-between gap-2">
                
                {/* 5 Stars Rating Component */}
                <div className="flex items-center gap-0.5" title="Hızlı Puan Ver">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={(e) => {
                        e.stopPropagation();
                        setRating(book.id, star);
                      }}
                      className={`text-lg transition-transform hover:scale-125 cursor-pointer leading-none ${
                        star <= userState.rating ? 'text-amber-400' : 'text-stone-600 hover:text-amber-300'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                {/* Favorite, Read, & Details CTA */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(book.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all cursor-pointer ${
                      userState.isFavorite
                        ? 'bg-[#FF4565] text-white shadow-sm'
                        : 'bg-[#181F25] hover:bg-[#242C34] text-stone-500 border border-[#2C3440]'
                    }`}
                    title={userState.isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                  >
                    ♥
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRead(book.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                      userState.isRead
                        ? 'bg-[#245840] text-white border border-[#357754]'
                        : 'bg-[#181F25] hover:bg-[#242C34] text-stone-500 border border-[#2C3440]'
                    }`}
                    title={userState.isRead ? 'Okundu İşaretini Kaldır' : 'Okundu Olarak İşaretle'}
                  >
                    ✓
                  </button>

                  <button
                    onClick={() => setSelectedBook(book)}
                    className="py-1 px-2.5 rounded-lg bg-[#242C34] hover:bg-[#2E3844] border border-[#3A4754] text-[11px] font-serif font-semibold text-white transition-colors cursor-pointer"
                  >
                    İncele
                  </button>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <p className="font-serif italic text-lg text-stone-400">
            Arama kriterinize uygun Jane Austen eseri bulunamadı.
          </p>
          <button
            onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
            className="py-2 px-4 rounded-xl bg-[#242C34] text-white text-xs font-serif font-semibold cursor-pointer border border-[#3A4754]"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}

      {/* Book Detail Modal */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

    </div>
  );
};
