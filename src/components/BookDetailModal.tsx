/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book } from '../types';
import { useApp } from '../context/AppContext';
import { VintageBookCover } from './VintageBookCover';
import { RegencyCaricature, WaxSealBadge, QuillWritingIcon } from './RegencyCaricatures';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  const {
    bookStates,
    setRating,
    toggleFavorite,
    toggleRead,
    toggleWantToRead,
    reviews,
    addReview,
    deleteReview,
    likeReview,
    userProfile,
    getBookStats
  } = useApp();

  const [commentText, setCommentText] = useState('');
  const [userScore, setUserScore] = useState(5);
  const [activeTab, setActiveTab] = useState<'reviews' | 'backstory' | 'characters'>('reviews');

  if (!book) return null;

  const userState = bookStates[book.id] || { rating: 0, isFavorite: false, isRead: false, wantToRead: false };
  const stats = getBookStats(book.id);
  const bookReviews = reviews.filter(r => r.bookId === book.id);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addReview(book.id, userScore, commentText);
    setCommentText('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1C2228] rounded-3xl border border-[#2C3440] shadow-2xl p-6 sm:p-8 z-10 space-y-6 text-[#E1E7ED]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#242C34] hover:bg-[#2F3A46] flex items-center justify-center text-[#9AB0C4] hover:text-white transition-colors cursor-pointer text-lg font-bold"
            title="Kapat"
          >
            ✕
          </button>

          {/* Top Header: Book Info & Vintage Cover */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
            <div className="shrink-0 mx-auto md:mx-0">
              <VintageBookCover book={book} size="md" />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#468B62] font-sans font-bold">
                  <span>{book.publicationYear}</span>
                  <span>·</span>
                  <span>{book.authorBylines}</span>
                  <span>·</span>
                  <span>{book.pageCount} Sayfa</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {book.title}
                </h2>
                <p className="text-base font-serif italic text-[#C4A265]">
                  Türkçe: {book.turkishTitle}
                </p>
              </div>

              {/* Interactive Action Bar */}
              <div className="p-4 rounded-2xl bg-[#181F25] border border-[#2C3440] flex flex-wrap items-center justify-between gap-4">
                
                {/* 5-Star Rating Picker */}
                <div className="space-y-1">
                  <span className="block text-[11px] font-sans uppercase tracking-wider text-[#8F9DAA] font-semibold">
                    Puanınız
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(book.id, star)}
                        className={`text-xl transition-transform hover:scale-125 cursor-pointer ${
                          star <= userState.rating ? 'text-amber-400' : 'text-stone-600'
                        }`}
                        title={`${star} Yıldız Ver`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="text-xs font-mono font-semibold ml-1.5 text-stone-300">
                      {userState.rating > 0 ? `${userState.rating}/5` : 'Puanla'}
                    </span>
                  </div>
                </div>

                {/* Favorite & Read Status Badges */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleFavorite(book.id)}
                    className={`py-2 px-3.5 rounded-xl border text-xs font-serif font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      userState.isFavorite
                        ? 'bg-[#FF4565] text-white border-[#FF4565] shadow-sm'
                        : 'bg-[#242C34] hover:bg-[#2E3844] text-[#9AB0C4] border-[#2C3440]'
                    }`}
                  >
                    <span>{userState.isFavorite ? '♥' : '♡'}</span>
                    <span>Favori</span>
                  </button>

                  <button
                    onClick={() => toggleRead(book.id)}
                    className={`py-2 px-3.5 rounded-xl border text-xs font-serif font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      userState.isRead
                        ? 'bg-[#245840] text-white border-[#357754] font-medium'
                        : 'bg-[#242C34] hover:bg-[#2E3844] text-[#9AB0C4] border-[#2C3440]'
                    }`}
                  >
                    <span>✓</span>
                    <span>Okudum</span>
                  </button>

                  <button
                    onClick={() => toggleWantToRead(book.id)}
                    className={`py-2 px-3.5 rounded-xl border text-xs font-serif font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      userState.wantToRead
                        ? 'bg-[#40B5FF] text-[#0A1A26] border-[#40B5FF] font-bold'
                        : 'bg-[#242C34] hover:bg-[#2E3844] text-[#9AB0C4] border-[#2C3440]'
                    }`}
                  >
                    <span>⏱</span>
                    <span>Okunacak</span>
                  </button>
                </div>

              </div>

              {/* Community Stats Ribbon */}
              <div className="flex items-center gap-6 text-xs text-[#9AB0C4] font-serif border-b border-[#2C3440] pb-3">
                <div>
                  <span className="font-mono font-bold text-amber-400 text-sm mr-1">★ {stats.avgRating}</span>
                  <span className="text-stone-400">ortalama</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-white mr-1">{stats.totalReviews}</span>
                  <span className="text-stone-400">inceleme</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-[#FF4565] mr-1">♥ {stats.totalFavorites}</span>
                  <span className="text-stone-400">favori</span>
                </div>
              </div>

              {/* Famous Quote */}
              <blockquote className="p-3.5 rounded-xl bg-[#14181C] border-l-2 border-[#D4AF37] font-serif italic text-xs sm:text-sm text-[#CCD6E0]">
                "{book.famousQuote}"
                <span className="block not-italic text-[11px] font-sans text-stone-400 font-semibold mt-1">
                  — {book.quoteSpeaker}
                </span>
              </blockquote>

            </div>
          </div>

          {/* Modal Tab Controls: İncelemeler / Arka Plan / Karakterler */}
          <div className="flex items-center gap-2 border-b border-[#2C3440] pt-2">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2.5 px-3 font-serif text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-[#468B62] text-[#468B62]'
                  : 'text-[#8F9DAA] hover:text-white'
              }`}
            >
              Okur İncelemeleri ({bookReviews.length})
            </button>
            <button
              onClick={() => setActiveTab('backstory')}
              className={`pb-2.5 px-3 font-serif text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'backstory'
                  ? 'border-b-2 border-[#468B62] text-[#468B62]'
                  : 'text-[#8F9DAA] hover:text-white'
              }`}
            >
              Yazılış Serüveni & Arka Plan
            </button>
            <button
              onClick={() => setActiveTab('characters')}
              className={`pb-2.5 px-3 font-serif text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'characters'
                  ? 'border-b-2 border-[#468B62] text-[#468B62]'
                  : 'text-[#8F9DAA] hover:text-white'
              }`}
            >
              Karakterler & Temalar
            </button>
          </div>

          {/* Tab 1: Reviews & Write Form */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              
              {/* Write Review Box (Editable) */}
              <form onSubmit={handleSubmitReview} className="p-4 sm:p-5 rounded-2xl bg-[#181F25] border border-[#2C3440] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RegencyCaricature id={userProfile.avatarId || 'elizabeth_darcy'} size="sm" />
                    <span className="font-serif font-semibold text-xs text-white">
                      {userProfile.name} olarak inceleme yaz
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-sans text-stone-400 mr-1">Puan:</span>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setUserScore(s)}
                        className={`text-base cursor-pointer ${s <= userScore ? 'text-amber-400' : 'text-stone-600'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Bu Jane Austen eseri hakkında ne düşünüyorsunuz? En sevdiğiniz karakter kimdi, hangi sahne sizi etkiledi?..."
                  className="w-full p-3 rounded-xl bg-[#14181C] border border-[#2C3440] font-prose text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#468B62] placeholder:text-stone-500"
                />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-stone-400 font-serif italic">
                    ✍ İncelemeniz anında kaydedilir ve düzenlenebilir.
                  </span>
                  <button
                    type="submit"
                    disabled={!commentText.trim()}
                    className="py-2 px-5 rounded-xl bg-[#245840] hover:bg-[#1D4834] disabled:opacity-40 text-white font-serif text-xs font-semibold transition-all cursor-pointer shadow-sm border border-[#357754]"
                  >
                    İncelemeyi Yayınla
                  </button>
                </div>
              </form>

              {/* Review List */}
              <div className="space-y-4">
                {bookReviews.length === 0 ? (
                  <p className="text-center py-8 text-stone-500 font-serif italic text-sm">
                    Henüz bir inceleme yazılmamış. İlk yorumu siz yapın!
                  </p>
                ) : (
                  bookReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[#181F25] border border-[#2C3440] space-y-2 hover:border-[#3D4C5A] transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <RegencyCaricature id={rev.userAvatar} size="sm" />
                          <div>
                            <span className="font-serif font-semibold text-xs sm:text-sm text-white block">
                              {rev.userName}
                            </span>
                            <span className="text-[10px] text-stone-500 font-sans">
                              {rev.date}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 text-xs font-mono font-bold">
                            {'★'.repeat(Math.floor(rev.rating))}
                            {rev.rating % 1 !== 0 && '½'}
                          </span>
                          {rev.isUserReview && (
                            <button
                              onClick={() => deleteReview(rev.id)}
                              className="text-[11px] text-rose-400 hover:text-rose-300 font-sans ml-2 cursor-pointer"
                              title="İncelememi Sil"
                            >
                              Sil
                            </button>
                          )}
                        </div>
                      </div>

                      <p className="font-prose text-xs sm:text-sm text-[#CCD6E0] leading-relaxed">
                        {rev.comment}
                      </p>

                      <div className="flex items-center justify-end pt-1">
                        <button
                          onClick={() => likeReview(rev.id)}
                          className="text-[11px] text-stone-400 hover:text-[#FF4565] flex items-center gap-1 font-serif cursor-pointer transition-colors"
                        >
                          <span>♥</span>
                          <span>{rev.likes} Beğeni</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          )}

          {/* Tab 2: Historical Backstory & Publishing Trivia */}
          {activeTab === 'backstory' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#181F25] border border-[#2C3440] space-y-2">
                <h4 className="font-serif font-bold text-sm text-white flex items-center gap-2">
                  <QuillWritingIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>Yayın Serüveni ve Tarihsel Arka Plan</span>
                </h4>
                <p className="font-prose text-xs sm:text-sm text-[#CCD6E0] leading-relaxed">
                  {book.historicalBackstory}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#14181C] border border-[#2C3440] space-y-2">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-[#468B62]">
                  Yayıncılık Ayrıntıları & Trivia
                </h4>
                <ul className="space-y-1.5 text-xs font-prose text-[#A6B7C7]">
                  {book.publishingTrivia.map((triv, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#468B62] font-bold">•</span>
                      <span>{triv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-[#181F25] border border-[#2C3440]">
                  <span className="text-stone-400 block text-[10px] uppercase font-sans">İlk Baskı Tirajı</span>
                  <span className="font-serif font-semibold text-white">{book.initialCopies}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181F25] border border-[#2C3440]">
                  <span className="text-stone-400 block text-[10px] uppercase font-sans">Orijinal Yayıncı</span>
                  <span className="font-serif font-semibold text-white">{book.originalPublisher}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#181F25] border border-[#2C3440] col-span-2 sm:col-span-1">
                  <span className="text-stone-400 block text-[10px] uppercase font-sans">Yazıldığı Yıllar</span>
                  <span className="font-serif font-semibold text-white">{book.writtenYears}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Characters & Themes */}
          {activeTab === 'characters' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm text-white">
                  Önemli Karakterler
                </h4>
                <div className="flex flex-wrap gap-2">
                  {book.keyCharacters.map((char, i) => (
                    <span
                      key={i}
                      className="py-1.5 px-3 rounded-lg bg-[#181F25] border border-[#2C3440] text-xs font-serif text-[#CCD6E0]"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-serif font-bold text-sm text-white">
                  Ana Tematik İzlekler
                </h4>
                <div className="flex flex-wrap gap-2">
                  {book.themes.map((theme, i) => (
                    <span
                      key={i}
                      className="py-1.5 px-3 rounded-lg bg-[#242C34] text-[#82CDFF] text-xs font-sans font-medium"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#181F25] border border-[#2C3440] space-y-1">
                <span className="text-[10px] uppercase font-sans font-bold text-[#D4AF37] tracking-wider block">
                  Sinema & Televizyon Uyarlamaları
                </span>
                <p className="text-xs font-prose text-[#CCD6E0]">
                  {book.adaptationNote}
                </p>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
