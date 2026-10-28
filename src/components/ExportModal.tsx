/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, ExternalLink, Copy, Check, Terminal, Github, Sparkles, X, ShieldAlert } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = `git remote add origin https://github.com/KULLANICI_ADIN/austengunlugu.git
git branch -M main
git push -u origin main`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#181F26] border border-[#2D3845] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl text-[#E1E7ED]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#26313C] flex items-center justify-between sticky top-0 bg-[#181F26]/95 backdrop-blur z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#245840]/30 border border-[#468B62]/50 flex items-center justify-center text-[#468B62]">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-white flex items-center gap-2">
                GitHub'a Aktar & Vercel'e Dağıt
              </h2>
              <p className="text-xs text-[#8C9DAE]">
                Yapay Zeka Araçları Kullanımı dersi vize ödevinizi GitHub ve Vercel'e taşıyın
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#252E38] text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm">
          
          {/* Method 1: Chat üzerinden doğrudan aktarma */}
          <div className="p-4 rounded-xl bg-[#141A20] border border-[#2B3744] space-y-3">
            <div className="flex items-center gap-2 text-[#468B62] font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Yöntem 1: Doğrudan Chat Üzerinden Aktaralım (Hızlı)</span>
            </div>
            <p className="text-xs text-[#9EB0C2] leading-relaxed">
              Tüm dosyalar, özgün portreler, README ve git arşivi hazırlandı ve git commit'i yapıldı. 
              GitHub hesabınızdaki boş bir repo adresini (veya GitHub Personal Access Token'ınızı) chat kutusuna ilettiğiniz anda komut satırından sizin adınıza anında push yapabiliriz!
            </p>
          </div>

          {/* Method 2: Tek tıkla Zip İndir & GitHub Web Arayüzünden Yükle */}
          <div className="p-4 rounded-xl bg-[#141A20] border border-[#2B3744] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Download className="w-4 h-4 text-[#468B62]" />
                <span>Yöntem 2: Tek Tıkla Kaynak Kodunu İndir (.ZIP)</span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#245840]/40 text-[#468B62] border border-[#468B62]/30 font-medium">
                En Kolay & Güvenli
              </span>
            </div>
            <p className="text-xs text-[#9EB0C2] leading-relaxed">
              Tüm TypeScript, React bileşenleri, kapak tasarımları ve stil dosyalarını içeren paketi indirin. Ardından GitHub'da yeni bir repo açıp "Upload files" ile doğrudan yükleyebilirsiniz.
            </p>
            <a
              href="/austen-gunlugu.zip"
              download="austen-gunlugu.zip"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#245840] hover:bg-[#2d6d50] text-white font-medium text-xs transition-colors shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              austen-gunlugu.zip İndir (Hazır Paket)
            </a>
          </div>

          {/* Method 3: Terminal Komutları */}
          <div className="p-4 rounded-xl bg-[#141A20] border border-[#2B3744] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Terminal className="w-4 h-4 text-[#D4AF37]" />
                <span>Yöntem 3: Kendi Bilgisayarınızdan Git ile Gönderme</span>
              </div>
              <button
                onClick={() => handleCopy(gitCommands, 1)}
                className="flex items-center gap-1 text-[11px] text-[#468B62] hover:text-[#58b07d] transition-colors cursor-pointer"
              >
                {copiedIndex === 1 ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedIndex === 1 ? 'Kopyalandı!' : 'Komutları Kopyala'}
              </button>
            </div>
            <pre className="p-3 rounded-lg bg-[#0E1216] border border-[#232B34] text-xs font-mono text-[#A3B8CC] overflow-x-auto">
              <code>{gitCommands}</code>
            </pre>
          </div>

          {/* Vercel Step */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#17221E] to-[#141A20] border border-[#245840]/40 space-y-3">
            <h3 className="font-semibold text-white flex items-center gap-2 text-sm">
              ▲ Vercel ile austengunlugu.vercel.app Olarak Yayınlama
            </h3>
            <ol className="text-xs text-[#9EB0C2] space-y-1.5 list-decimal list-inside leading-relaxed">
              <li>GitHub'a yükledikten sonra <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-[#468B62] underline inline-flex items-center gap-1 font-medium">vercel.com/new <ExternalLink className="w-3 h-3" /></a> adresine gidin.</li>
              <li>GitHub reponuzu listeden seçin.</li>
              <li>Domain adı kısmına <strong>austengunlugu</strong> yazıp <strong>Deploy</strong> butonuna tıklayın.</li>
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#26313C] bg-[#141A20] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#242C34] hover:bg-[#2F3944] text-white text-xs font-serif transition-colors cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
