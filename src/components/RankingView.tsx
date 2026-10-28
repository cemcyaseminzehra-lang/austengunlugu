/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { AUSTEN_BOOKS, REGENCY_AVATARS } from '../data/austenData';
import { VintageBookCover } from './VintageBookCover';
import { RegencyCaricature, WaxSealBadge } from './RegencyCaricatures';

export const RankingView: React.FC = () => {
  const {
    userProfile,
    updateUserProfile,
    rankedBookIds,
    setRankedBookIds,
    moveBookRank,
    bookStates,
    setRating,
    toggleFavorite,
    setSelectedBook
  } = useApp();

  const [userNameInput, setUserNameInput] = useState(userProfile.name);
  const [userBioInput, setUserBioInput] = useState(userProfile.bio || '');
  const [selectedAvatar, setSelectedAvatar] = useState(userProfile.avatarId);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  // Map IDs to actual Book objects preserving the ranked order
  const rankedBooks = rankedBookIds
    .map(id => AUSTEN_BOOKS.find(b => b.id === id))
    .filter((b): b is typeof AUSTEN_BOOKS[0] => Boolean(b));

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name: userNameInput.trim() || 'Seçkin Okur',
      avatarId: selectedAvatar,
      bio: userBioInput.trim()
    });

    // Fire festive Regency confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2D6A4F', '#D4AF37', '#FF4565', '#40B5FF', '#FFFFFF']
    });

    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  const handleResetDefaultRanking = () => {
    const defaultIds = [
      'pride-and-prejudice',
      'persuasion',
      'emma',
      'sense-and-sensibility',
      'northanger-abbey',
      'mansfield-park'
    ];
    setRankedBookIds(defaultIds);
  };

  const handleCopyRanking = () => {
    const rankingText = `🎩 ${userProfile.name}'in Jane Austen Kitap Sıralaması:\n\n` +
      rankedBooks.map((b, idx) => `${idx + 1}. ${b.title} (${b.turkishTitle} - ${b.publicationYear})`).join('\n') +
      `\n\n📜 Jane Austen Kitap Günlüğü - Yapay Zeka Araçları Dersi Vize Ödevi`;

    navigator.clipboard.writeText(rankingText);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2500);
  };

  // Rank medals in dark mode
  const getRankBadge = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          label: '#1 Başyapıtım',
          bg: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
          crown: '👑'
        };
      case 1:
        return {
          label: '#2 İkinci Tercihim',
          bg: 'bg-stone-700/40 text-stone-200 border-stone-500/50',
          crown: '🥈'
        };
      case 2:
        return {
          label: '#3 Üçüncü Eser',
          bg: 'bg-amber-900/30 text-amber-200 border-amber-700/40',
          crown: '🥉'
        };
      default:
        return {
          label: `#${idx + 1}. Sıra`,
          bg: 'bg-[#181F25] text-stone-400 border-[#2C3440]',
          crown: ''
        };
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 pb-28">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showSavedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-[#1C2228] text-white border border-[#3E8060] shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-serif"
          >
            <WaxSealBadge letter="JA" size="sm" />
            <span>Okur profiliniz ve sıralamanız başarıyla kaydedildi!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Title */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#468B62] font-sans font-bold">
          <span>Kişisel Değerlendirme Köşesi</span>
          <span>·</span>
          <span>İsim Girişi & Karakterler</span>
          <span>·</span>
          <span>Okur Sıralaması</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
          Kişisel Jane Austen Sıralamam
        </h1>
        <p className="font-serif italic text-base text-[#9AB0C4] text-balance">
          İsminizi yazarak giriş yapın, Regency avatarınızı seçin ve 6 klasik romanı en çok sevdiğinizden en az sevdiğinize doğru yeniden sıralayın.
        </p>
      </div>

      {/* Step 1: User Login & Regency Character Avatar Selector */}
      <section className="parchment-card rounded-3xl p-6 sm:p-8 border border-[#2C3440] space-y-6 bg-[#1C2228]">
        <div className="flex items-center gap-3 border-b border-[#2C3440] pb-4">
          <div className="w-8 h-8 rounded-full bg-[#245840] text-white border border-[#357754] flex items-center justify-center font-bold text-xs font-mono">
            1
          </div>
          <div>
            <h2 className="font-serif font-bold text-lg sm:text-xl text-white">
              Okur Girişi & Regency Karakter Seçimi
            </h2>
            <p className="text-xs text-[#8F9DAA] font-sans">
              İncelemelerinizde ve paylaşımlarınızda bu isim ve avatar görünecektir.
            </p>
          </div>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Input Name & Bio (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#9AB0C4] mb-1.5">
                  Adınız / Mahlasınız
                </label>
                <input
                  type="text"
                  required
                  value={userNameInput}
                  onChange={(e) => setUserNameInput(e.target.value)}
                  placeholder="Örn: Zehra Bennet, Kaptan Ahmet..."
                  className="w-full p-3 rounded-xl bg-[#14181C] border border-[#2C3440] font-serif text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#468B62] placeholder:text-stone-500"
                />
              </div>

              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#9AB0C4] mb-1.5">
                  Okur Notunuz (İsteğe Bağlı)
                </label>
                <textarea
                  rows={2}
                  value={userBioInput}
                  onChange={(e) => setUserBioInput(e.target.value)}
                  placeholder="Jane Austen ile nasıl tanıştınız, en sevdiğiniz dönem hangisi?..."
                  className="w-full p-3 rounded-xl bg-[#14181C] border border-[#2C3440] font-prose text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#468B62] placeholder:text-stone-500"
                />
              </div>

              {/* Active Profile Preview Card */}
              <div className="p-4 rounded-2xl bg-[#181F25] border border-[#2C3440] flex items-center gap-3">
                <RegencyCaricature id={selectedAvatar} size="lg" />
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-sans font-bold text-[#468B62] block">
                    Aktif Regency Kimliği
                  </span>
                  <span className="font-serif font-bold text-sm text-white truncate block">
                    {userNameInput || 'İsimsiz Okur'}
                  </span>
                  <span className="text-xs text-[#9AB0C4] font-serif italic truncate block">
                    Avatar: {REGENCY_AVATARS.find(a => a.id === selectedAvatar)?.name}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#245840] hover:bg-[#1D4834] text-white font-serif text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-[#357754]"
              >
                <span>Profili Kaydet & Tasdik Et</span>
                <WaxSealBadge letter="✓" size="sm" />
              </button>
            </div>

            {/* Avatar Picker Grid (7 cols) */}
            <div className="md:col-span-7 space-y-3">
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#9AB0C4]">
                Regency Karakter Avatarınızı Seçin
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
                {REGENCY_AVATARS.map((avatar) => {
                  const isPicked = selectedAvatar === avatar.id;
                  return (
                    <button
                      type="button"
                      key={avatar.id}
                      onClick={() => setSelectedAvatar(avatar.id)}
                      className={`p-2.5 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                        isPicked
                          ? 'bg-[#242C34] border-[#3E8060] shadow-md ring-2 ring-[#3E8060]/30'
                          : 'bg-[#181F25] border-[#2C3440] hover:border-[#3D4C5A]'
                      }`}
                    >
                      <RegencyCaricature id={avatar.id} size="md" />
                      <div className="min-w-0 flex-1">
                        <span className="font-serif font-bold text-xs text-white block truncate">
                          {avatar.name}
                        </span>
                        <span className="text-[10px] text-stone-400 font-sans block truncate">
                          {avatar.role}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </form>
      </section>

      {/* Step 2: Interactive Ranking Room (#1 to #6) */}
      <section className="space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2C3440] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#245840] text-white border border-[#357754] flex items-center justify-center font-bold text-xs font-mono">
              2
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Kitapları Sıralayın (#1 En Sevilen → #6 En Az Sevilen)
              </h2>
              <p className="text-xs text-[#8F9DAA] font-sans">
                Yukarı / Aşağı ok butonlarına basarak eserlerin yerini dilediğiniz gibi değiştirin.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleResetDefaultRanking}
              className="py-1.5 px-3 rounded-lg border border-[#2C3440] bg-[#1C2228] text-xs font-serif text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              Varsayılana Sıfırla
            </button>
            <button
              onClick={handleCopyRanking}
              className="py-1.5 px-3.5 rounded-lg bg-[#242C34] hover:bg-[#2C3742] text-white text-xs font-serif font-semibold transition-colors cursor-pointer flex items-center gap-1.5 border border-[#3A4754]"
            >
              <span>{copiedToClipboard ? '✓ Kopyalandı' : '📋 Sıralamayı Kopyala'}</span>
            </button>
          </div>
        </div>

        {/* 6 Reorderable Ranked Cards */}
        <div className="space-y-4">
          {rankedBooks.map((book, index) => {
            const badge = getRankBadge(index);
            const userState = bookStates[book.id] || { rating: 0, isFavorite: false, isRead: false, wantToRead: false };

            return (
              <motion.div
                key={book.id}
                layout
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="parchment-card rounded-2xl p-4 sm:p-5 border border-[#2C3440] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 hover:border-[#3D4C5A] transition-all relative overflow-hidden bg-[#1C2228]"
              >
                
                {/* Left: Rank Badge & Mini Book Cover */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  
                  {/* Rank Badge with Crown */}
                  <div className={`w-14 sm:w-16 h-14 sm:h-16 rounded-2xl border flex flex-col items-center justify-center shrink-0 font-serif font-bold ${badge.bg}`}>
                    <span className="text-sm sm:text-base leading-none">
                      {badge.crown || `#${index + 1}`}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-sans mt-0.5 font-semibold">
                      {index === 0 ? 'ZİRVE' : `${index + 1}. Sıra`}
                    </span>
                  </div>

                  {/* Book Cover Thumbnail */}
                  <div 
                    onClick={() => setSelectedBook(book)}
                    className="shrink-0 cursor-pointer"
                  >
                    <VintageBookCover book={book} size="sm" className="!w-20 !h-28" />
                  </div>

                  {/* Title & Metadata */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#468B62]">
                      {book.publicationYear} · {book.authorBylines}
                    </span>
                    <h3 
                      onClick={() => setSelectedBook(book)}
                      className="font-serif font-bold text-base sm:text-lg text-white hover:text-[#468B62] cursor-pointer transition-colors truncate"
                    >
                      {book.title}
                    </h3>
                    <p className="text-xs font-serif italic text-[#9AB0C4] truncate">
                      {book.turkishTitle}
                    </p>
                    <p className="text-[11px] font-prose text-stone-400 line-clamp-1 mt-0.5 hidden sm:block">
                      "{book.famousQuote}"
                    </p>
                  </div>

                </div>

                {/* Right: Personal Rating & Up/Down Movement Controls */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#2C3440]">
                  
                  {/* Quick User Rating on the rank card */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        onClick={() => setRating(book.id, s)}
                        className={`text-base cursor-pointer ${s <= userState.rating ? 'text-amber-400' : 'text-stone-600'}`}
                        title={`${s} Yıldız`}
                      >
                        ★
                      </button>
                    ))}
                    <button
                      onClick={() => toggleFavorite(book.id)}
                      className={`ml-1 text-sm cursor-pointer ${userState.isFavorite ? 'text-[#FF4565]' : 'text-stone-600'}`}
                      title="Favori"
                    >
                      ♥
                    </button>
                  </div>

                  {/* Reorder Buttons (Yukarı / Aşağı) */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      disabled={index === 0}
                      onClick={() => moveBookRank(index, 'up')}
                      className="w-9 h-9 rounded-xl bg-[#242C34] border border-[#3A4754] hover:bg-[#2C3742] disabled:opacity-20 disabled:hover:bg-[#242C34] text-white font-bold transition-all cursor-pointer flex items-center justify-center text-sm shadow-xs"
                      title="Yukarı Taşı (#1'e yaklaştır)"
                    >
                      ▲
                    </button>
                    <button
                      disabled={index === rankedBooks.length - 1}
                      onClick={() => moveBookRank(index, 'down')}
                      className="w-9 h-9 rounded-xl bg-[#242C34] border border-[#3A4754] hover:bg-[#2C3742] disabled:opacity-20 disabled:hover:bg-[#242C34] text-white font-bold transition-all cursor-pointer flex items-center justify-center text-sm shadow-xs"
                      title="Aşağı Taşı (#6'ya yaklaştır)"
                    >
                      ▼
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </section>

      {/* Visual Podium & Shareable Reading Certificate */}
      <section className="parchment-card rounded-3xl p-6 sm:p-10 border border-[#2C3440] relative overflow-hidden space-y-8 bg-gradient-to-b from-[#1C2228] via-[#181F25] to-[#12161A] shadow-2xl">
        
        {/* Certificate Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2">
            <WaxSealBadge letter="JA" size="sm" />
            <span className="font-serif italic text-xs uppercase tracking-widest text-[#468B62] font-bold">
              Resmi Okur Karnesi & Kürsüsü
            </span>
            <WaxSealBadge letter="JA" size="sm" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {userProfile.name} Okur Kürsüsü
          </h3>
          <p className="text-xs sm:text-sm font-serif italic text-[#C4A265]">
            "Bütün eserler bir yana, bu üç başyapıt benim edebiyat dünyamın mihenk taşıdır."
          </p>
        </div>

        {/* Visual Top 3 Podium (1st, 2nd, 3rd) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-4">
          
          {/* 2nd Place (Silver) */}
          {rankedBooks[1] && (
            <div className="p-4 rounded-2xl bg-[#181F25] border border-[#2C3440] text-center flex flex-col items-center space-y-2 order-2 sm:order-1 shadow-md">
              <span className="text-2xl">🥈</span>
              <span className="text-xs font-mono font-bold uppercase text-stone-300">2. Başyapıtım</span>
              <VintageBookCover book={rankedBooks[1]} size="sm" className="!w-24 !h-36" />
              <h4 className="font-serif font-bold text-sm text-white truncate w-full">
                {rankedBooks[1].title}
              </h4>
              <span className="text-[10px] text-stone-400 font-sans">{rankedBooks[1].publicationYear}</span>
            </div>
          )}

          {/* 1st Place (Gold Podium - Elevated) */}
          {rankedBooks[0] && (
            <div className="p-5 rounded-3xl bg-gradient-to-b from-[#222B34] to-[#1A2228] border-2 border-[#D4AF37] text-center flex flex-col items-center space-y-2.5 order-1 sm:order-2 shadow-2xl sm:-translate-y-3">
              <div className="flex items-center gap-1 text-amber-400 text-xs font-bold font-sans uppercase tracking-wider">
                <span>👑</span>
                <span>ZİRVE / 1. NUMARA</span>
              </div>
              <VintageBookCover book={rankedBooks[0]} size="sm" className="!w-28 !h-42 ring-2 ring-[#D4AF37]/50" />
              <h4 className="font-serif font-bold text-base sm:text-lg text-white truncate w-full">
                {rankedBooks[0].title}
              </h4>
              <span className="text-xs font-serif italic text-[#468B62]">
                {rankedBooks[0].turkishTitle} ({rankedBooks[0].publicationYear})
              </span>
              <p className="text-[11px] font-prose italic text-stone-300 max-w-xs">
                "{rankedBooks[0].famousQuote}"
              </p>
            </div>
          )}

          {/* 3rd Place (Bronze) */}
          {rankedBooks[2] && (
            <div className="p-4 rounded-2xl bg-[#181F25] border border-[#2C3440] text-center flex flex-col items-center space-y-2 order-3 sm:order-3 shadow-md">
              <span className="text-2xl">🥉</span>
              <span className="text-xs font-mono font-bold uppercase text-amber-200">3. Başyapıtım</span>
              <VintageBookCover book={rankedBooks[2]} size="sm" className="!w-24 !h-36" />
              <h4 className="font-serif font-bold text-sm text-white truncate w-full">
                {rankedBooks[2].title}
              </h4>
              <span className="text-[10px] text-stone-400 font-sans">{rankedBooks[2].publicationYear}</span>
            </div>
          )}

        </div>

        {/* Action Button: Share / Copy */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCopyRanking}
            className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#245840] hover:bg-[#1D4834] text-white font-serif text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 border border-[#357754]"
          >
            <span>{copiedToClipboard ? '✓ Panoya Kopyalandı!' : 'Sıralamamı Metin Olarak Kopyala'}</span>
          </button>
          <button
            onClick={() => {
              confetti({ particleCount: 60, spread: 60, colors: ['#245840', '#D4AF37', '#FF4565'] });
            }}
            className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#242C34] hover:bg-[#2C3742] text-white border border-[#3A4754] font-serif text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            🎉 Kutlama Konfetisi Patlat
          </button>
        </div>

      </section>

    </div>
  );
};
