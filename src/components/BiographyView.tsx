/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JANE_AUSTEN_BIO } from '../data/austenData';
import { JanePortrait } from './JanePortrait';
import { RegencyCaricature, WaxSealBadge, QuillWritingIcon } from './RegencyCaricatures';
import { useApp } from '../context/AppContext';

export const BiographyView: React.FC = () => {
  const { setActivePage } = useApp();
  const [activeTab, setActiveTab] = useState<'life' | 'facts' | 'quotes'>('life');

  return (
    <div className="space-y-16 pb-20">
      
      {/* Midterm Project Context Ribbon */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <div className="p-3 bg-[#1C2228] border border-[#2C3440] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9AB0C4]">
          <div className="flex items-center gap-2">
            <span className="font-serif italic font-bold text-[#D4AF37]">🎓 Vize Ödevi Projesi</span>
            <span>·</span>
            <span className="font-medium text-[#CCD6E0]">Yapay Zeka Araçları Kullanımı Dersi</span>
          </div>
          <div className="flex items-center gap-2 text-stone-400">
            <span>Modüler Mimari</span>
            <span>·</span>
            <span>Vercel Uyumlu</span>
            <span>·</span>
            <span className="text-[#468B62] font-semibold">Jane Austen Günlüğü</span>
          </div>
        </div>
      </div>

      {/* Hero Section: Jane Austen Grand Cameo & Introduction */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (5 cols): Jane Austen Cameo Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <JanePortrait />
          </div>

          {/* Right Column (7 cols): Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#468B62] font-sans font-bold">
                <span>1775 – 1817</span>
                <span aria-hidden="true">·</span>
                <span>Regency Dönemi İngilteresi</span>
                <span aria-hidden="true">·</span>
                <span>"By A Lady"</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.08] text-balance">
                Jane Austen
              </h1>
              <p className="text-lg font-serif italic text-[#C4A265]">
                İroninin, incelikli aşkın ve insan ruhunun sessiz gözlemcisi.
              </p>
            </div>

            {/* Curatorial Drop Cap Opening */}
            <div className="relative font-prose text-base sm:text-lg leading-relaxed text-[#CBD5E1] space-y-4">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#D4AF37]">
                {JANE_AUSTEN_BIO.shortSummary}
              </p>
              <p className="text-sm sm:text-base text-[#9AB0C4]">
                Hayatı boyunca hiçbir kitabında gerçek ismi basılmadı. Küçük bir ceviz sehpada, yaklaşan ayak seslerini haber veren gıcırdayan bir oda kapısının ardında kaleme aldığı satırlar; iki yüz yılı aşkın süredir aşka, toplumsal sınıflara ve insan zihninin zaaflarına ayna tutmaya devam ediyor.
              </p>
            </div>

            {/* Quick Metadata Definition List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#2C3440] text-xs">
              <div>
                <dt className="text-stone-400 uppercase tracking-wider font-sans">Doğum</dt>
                <dd className="font-serif font-semibold text-white mt-0.5">{JANE_AUSTEN_BIO.birthDate}</dd>
                <dd className="text-stone-400 text-[11px]">{JANE_AUSTEN_BIO.birthPlace}</dd>
              </div>
              <div>
                <dt className="text-stone-400 uppercase tracking-wider font-sans">Ebedi İstirahatgah</dt>
                <dd className="font-serif font-semibold text-white mt-0.5">{JANE_AUSTEN_BIO.deathDate}</dd>
                <dd className="text-stone-400 text-[11px]">{JANE_AUSTEN_BIO.finalRestingPlace}</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="text-stone-400 uppercase tracking-wider font-sans">Edebi Tür</dt>
                <dd className="font-serif font-semibold text-white mt-0.5">Sosyal Hiciv & Realizm</dd>
                <dd className="text-stone-400 text-[11px]">6 Tamamlanmış Başyapıt</dd>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActivePage('books')}
                className="py-3 px-6 rounded-xl bg-[#245840] hover:bg-[#1D4834] text-white font-serif text-sm font-semibold transition-all cursor-pointer shadow-lg hover:shadow-xl flex items-center gap-2 border border-[#357754]"
              >
                <span>6 Eserini Keşfet & Puanla</span>
                <span>→</span>
              </button>
              <button
                onClick={() => setActivePage('chronology')}
                className="py-3 px-6 rounded-xl bg-[#242C34] hover:bg-[#2C3742] text-white border border-[#3A4754] font-serif text-sm font-semibold transition-colors cursor-pointer"
              >
                Yayın Kronolojisi & Gizli Hikayeler
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-center gap-4 text-stone-600">
        <div className="h-px bg-[#2C3440] flex-1" />
        <span className="font-serif italic text-xs tracking-widest uppercase text-[#D4AF37]">
          ❦ Edebi Miras & Hatırat ❦
        </span>
        <div className="h-px bg-[#2C3440] flex-1" />
      </div>

      {/* Interactive Tabs: Life Stages / Fun Facts / Famous Quotes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Segmented Filter Control */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-[#181F25] rounded-xl border border-[#2C3440]">
            <button
              onClick={() => setActiveTab('life')}
              className={`py-2 px-5 rounded-lg text-xs sm:text-sm font-serif font-semibold transition-all cursor-pointer ${
                activeTab === 'life'
                  ? 'bg-[#242C34] text-white shadow-sm'
                  : 'text-[#8C9DAE] hover:text-white'
              }`}
            >
              Hayatının Dönüm Noktaları
            </button>
            <button
              onClick={() => setActiveTab('facts')}
              className={`py-2 px-5 rounded-lg text-xs sm:text-sm font-serif font-semibold transition-all cursor-pointer ${
                activeTab === 'facts'
                  ? 'bg-[#242C34] text-white shadow-sm'
                  : 'text-[#8C9DAE] hover:text-white'
              }`}
            >
              Bilinmeyen Gerçekler
            </button>
            <button
              onClick={() => setActiveTab('quotes')}
              className={`py-2 px-5 rounded-lg text-xs sm:text-sm font-serif font-semibold transition-all cursor-pointer ${
                activeTab === 'quotes'
                  ? 'bg-[#242C34] text-white shadow-sm'
                  : 'text-[#8C9DAE] hover:text-white'
              }`}
            >
              Ölümsüz Alıntılar
            </button>
          </div>
        </div>

        {/* Tab 1: Life Stages Timeline Cards */}
        {activeTab === 'life' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {JANE_AUSTEN_BIO.lifeMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="parchment-card p-6 sm:p-7 rounded-2xl relative transition-all hover:border-[#3D4C5A]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <span className="font-sans text-xs tracking-wider uppercase font-semibold text-[#468B62]">
                    {milestone.period}
                  </span>
                </div>
                <p className="font-prose text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Whimsical Fun Facts & Caricatures */}
        {activeTab === 'facts' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {JANE_AUSTEN_BIO.funFacts.map((fact, idx) => (
              <div
                key={idx}
                className="parchment-card p-6 rounded-2xl flex items-start gap-4 hover:border-[#3D4C5A] transition-all"
              >
                <div className="shrink-0 mt-1">
                  <RegencyCaricature
                    id={idx % 2 === 0 ? 'regency_cat' : 'regency_dandy'}
                    size="md"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest font-semibold">
                    Kayıt #{idx + 1}
                  </span>
                  <p className="font-prose text-sm text-[#CBD5E1] leading-relaxed">
                    {fact}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Famous Quotes */}
        {activeTab === 'quotes' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {JANE_AUSTEN_BIO.quotes.map((quote, idx) => (
              <blockquote
                key={idx}
                className="parchment-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#3D4C5A] transition-all relative overflow-hidden"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-serif text-[#D4AF37] leading-none block">“</span>
                  <p className="font-serif italic text-base sm:text-lg text-white leading-snug">
                    {quote.text}
                  </p>
                  <p className="text-xs text-[#9AB0C4] font-prose leading-relaxed pt-2 border-t border-[#2C3440]">
                    {quote.tr}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-serif font-bold text-[#468B62] uppercase tracking-wider">
                    — {quote.source}
                  </span>
                  <WaxSealBadge letter="JA" size="sm" />
                </div>
              </blockquote>
            ))}
          </motion.div>
        )}

      </section>

      {/* Regency Atmosphere Banner: Chawton Cottage & Writing Desk */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#1A2229] via-[#202932] to-[#171E24] p-8 sm:p-10 border border-[#2E3A46] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-bold text-[#D4AF37]">
              <QuillWritingIcon className="w-4 h-4 text-[#D4AF37]" />
              <span>Chawton Kır Evi Mektupları</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white">
              "Küçük bir ceviz sehpa ve gıcırdayan bir oda kapısı..."
            </h2>
            <p className="text-sm font-prose text-[#9AB0C4] leading-relaxed">
              Jane Austen, Chawton'da sadece 30 cm çapındaki minik yuvarlak masasında yazıyordu. Evdeki ziyaretçilerden yazdıklarını gizlemek için müsveddelerini daima bir tülbendin altında tutardı. Şimdi onun yarattığı o zengin dünyayı kitapları üzerinden keşfedin.
            </p>
          </div>
          <button
            onClick={() => setActivePage('books')}
            className="shrink-0 py-3.5 px-6 rounded-xl bg-[#245840] hover:bg-[#1D4834] text-white font-serif text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap border border-[#357754]"
          >
            Kitap Kulübüne Katıl →
          </button>
        </div>
      </section>

    </div>
  );
};
