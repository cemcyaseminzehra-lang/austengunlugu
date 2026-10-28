/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CaricatureProps {
  id: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const RegencyCaricature: React.FC<CaricatureProps> = ({ id, size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-13 h-13 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl'
  };

  const currentSize = sizeMap[size];

  // Realistic Regency Literary Portrait Avatars
  switch (id) {
    case 'elizabeth_darcy':
    case 'elizabeth':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#FAF4ED] border border-[#D5C2A5] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Elizabeth Bennet">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="ebSkin" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF9F5" />
                <stop offset="60%" stopColor="#FDEEE3" />
                <stop offset="100%" stopColor="#F2D7C2" />
              </linearGradient>
              <linearGradient id="ebHair" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A2612" />
                <stop offset="60%" stopColor="#31170A" />
                <stop offset="100%" stopColor="#1B0C05" />
              </linearGradient>
              <linearGradient id="ebDress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F5E6E8" />
                <stop offset="100%" stopColor="#DEB8BE" />
              </linearGradient>
            </defs>

            {/* Background cameo aura */}
            <circle cx="60" cy="60" r="56" fill="#FDF8F3" stroke="#E5D6C1" strokeWidth="1.5" />

            {/* Empire Gown & Decollete */}
            <path d="M22 120 C 26 92, 44 80, 60 80 C 76 80, 94 92, 98 120 Z" fill="url(#ebDress)" stroke="#B87D8E" strokeWidth="1" />
            <path d="M38 88 Q 60 96 82 88" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="2 2" />
            <path d="M48 88 L 60 100 L 72 88" stroke="#B87D8E" strokeWidth="1" fill="none" />

            {/* Neck & Chest */}
            <path d="M50 64 C 50 78, 48 85, 46 89 C 52 92, 68 92, 74 89 C 72 85, 70 78, 70 64 Z" fill="url(#ebSkin)" />
            {/* Neck shadow */}
            <path d="M48 68 Q 60 74 72 68 Q 60 70 48 68" fill="#D3A78A" opacity="0.6" />

            {/* Dark Chestnut Hair Mass */}
            <ellipse cx="60" cy="50" rx="26" ry="28" fill="url(#ebHair)" />

            {/* Face Oval */}
            <path d="M42 50 C 38 68, 44 78, 60 80 C 76 78, 82 68, 78 50 C 76 38, 44 38, 42 50 Z" fill="url(#ebSkin)" />
            {/* Cheeks natural blush */}
            <ellipse cx="49" cy="62" rx="4.5" ry="2.5" fill="#FFA5A5" opacity="0.4" />
            <ellipse cx="71" cy="62" rx="4.5" ry="2.5" fill="#FFA5A5" opacity="0.4" />

            {/* Realistic Ringlet Curls (Cassandra / Brock style) */}
            <g fill="url(#ebHair)">
              <circle cx="40" cy="46" r="3.5" />
              <circle cx="39" cy="53" r="3" />
              <circle cx="41" cy="60" r="2.8" />
              <circle cx="80" cy="46" r="3.5" />
              <circle cx="81" cy="53" r="3" />
              <circle cx="79" cy="60" r="2.8" />
              {/* Forehead wisps */}
              <path d="M47 43 Q 54 46 51 41 Z" />
              <path d="M73 43 Q 66 46 69 41 Z" />
            </g>

            {/* Regency Bonnet with ribbons */}
            <path d="M34 44 C 32 20, 88 20, 86 44 C 76 36, 44 36, 34 44 Z" fill="#F0DFC2" stroke="#B89B6C" strokeWidth="1.5" />
            {/* Rose silk ribbon */}
            <path d="M38 42 Q 60 36 82 42" stroke="#C95470" strokeWidth="2.5" fill="none" />
            <circle cx="60" cy="38" r="3" fill="#A82845" />
            {/* Bonnet ribbon ties */}
            <path d="M38 43 Q 34 65 42 80" stroke="#C95470" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M82 43 Q 86 65 78 80" stroke="#C95470" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            {/* Eyebrows: Natural, expressive arches */}
            <path d="M47 50 Q 52 47 57 49" stroke="#3D1D0D" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M73 50 Q 68 47 63 49" stroke="#3D1D0D" strokeWidth="1.4" strokeLinecap="round" />

            {/* Elizabeth's Famous "Fine Dark Eyes" */}
            <g>
              <ellipse cx="52" cy="54" rx="3.5" ry="2.4" fill="#FFFFFF" stroke="#875338" strokeWidth="0.5" />
              <circle cx="52" cy="54" r="2" fill="#291206" />
              <circle cx="52.8" cy="53.3" r="0.7" fill="#FFFFFF" />
              <path d="M48.5 53.5 Q 52 51.5 55.5 53.5" stroke="#1B0C05" strokeWidth="1.2" strokeLinecap="round" />

              <ellipse cx="68" cy="54" rx="3.5" ry="2.4" fill="#FFFFFF" stroke="#875338" strokeWidth="0.5" />
              <circle cx="68" cy="54" r="2" fill="#291206" />
              <circle cx="68.8" cy="53.3" r="0.7" fill="#FFFFFF" />
              <path d="M64.5 53.5 Q 68 51.5 71.5 53.5" stroke="#1B0C05" strokeWidth="1.2" strokeLinecap="round" />
            </g>

            {/* Nose: Delicate English Profile */}
            <path d="M60 52 L 59 61 Q 60 63 62 62" stroke="#9E694D" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Lips: Witty, Intelligent Smile */}
            <path d="M54 69 Q 60 72 66 69" stroke="#9A3848" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M56 69.5 Q 60 73 64 69.5" fill="#C95B6E" opacity="0.8" />
          </svg>
        </div>
      );

    case 'mr_darcy':
    case 'darcy':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#F0F4F8] border border-[#9AB5D1] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Fitzwilliam Darcy">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="darcySkin" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF7F2" />
                <stop offset="60%" stopColor="#F9E9DE" />
                <stop offset="100%" stopColor="#EBCDBA" />
              </linearGradient>
              <linearGradient id="darcyCoat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E2A38" />
                <stop offset="100%" stopColor="#0F1722" />
              </linearGradient>
              <linearGradient id="darcyHair" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2D1F17" />
                <stop offset="100%" stopColor="#120A05" />
              </linearGradient>
            </defs>

            <circle cx="60" cy="60" r="56" fill="#F4F7FA" stroke="#C5D3E0" strokeWidth="1.5" />

            {/* Aristocratic Dark Coat & High Regency Collar */}
            <path d="M20 120 C 24 90, 44 80, 60 80 C 76 80, 96 90, 100 120 Z" fill="url(#darcyCoat)" />
            {/* White Starched Cravat in Waterfall Fold */}
            <path d="M46 72 L 60 88 L 74 72 L 60 98 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            {/* High Shirt Points framing jaw */}
            <polygon points="44,66 50,75 42,75" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.8" />
            <polygon points="76,66 70,75 78,75" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="0.8" />
            {/* Coat Lapel Lines */}
            <path d="M36 82 L 48 94 L 46 120" stroke="#334155" strokeWidth="1.5" />
            <path d="M84 82 L 72 94 L 74 120" stroke="#334155" strokeWidth="1.5" />
            {/* Brass Button */}
            <circle cx="54" cy="106" r="2" fill="#D4AF37" />

            {/* Neck & Jaw */}
            <path d="M50 58 L 50 74 Q 60 78 70 74 L 70 58 Z" fill="url(#darcySkin)" />
            <path d="M48 64 Q 60 70 72 64" fill="#C9A387" opacity="0.5" />

            {/* Dark Hair with Regency Waves */}
            <ellipse cx="60" cy="46" rx="26" ry="24" fill="url(#darcyHair)" />

            {/* Regency Top Hat (Tall crown & curved brim) */}
            <path d="M42 14 L 78 14 L 76 40 L 44 40 Z" fill="#18202A" stroke="#0B0F14" strokeWidth="1.2" />
            <ellipse cx="60" cy="14" rx="18" ry="3" fill="#24303F" />
            {/* Curved Brim */}
            <path d="M30 40 Q 60 34 90 40 L 88 43 Q 60 37 32 43 Z" fill="#0E141C" />
            <rect x="44" y="36" width="32" height="4" fill="#4B1E2E" />

            {/* Chiseled Aristocratic Face */}
            <path d="M44 48 C 42 62, 46 72, 60 74 C 74 72, 78 62, 76 48 Z" fill="url(#darcySkin)" />

            {/* Sideburns (Fashionable Regency whiskers) */}
            <path d="M42 46 L 43 58 L 46 50 Z" fill="#1B110B" />
            <path d="M78 46 L 77 58 L 74 50 Z" fill="#1B110B" />

            {/* Intense, Resolute Brows */}
            <path d="M48 49 Q 54 47 58 49" stroke="#1E110A" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M72 49 Q 66 47 62 49" stroke="#1E110A" strokeWidth="1.8" strokeLinecap="round" />

            {/* Eyes: Penetrating, Aristocratic Gray-Blue */}
            <g>
              <ellipse cx="53" cy="53" rx="3.2" ry="2" fill="#FFFFFF" stroke="#64748B" strokeWidth="0.5" />
              <circle cx="53" cy="53" r="1.8" fill="#1E293B" />
              <circle cx="53.6" cy="52.4" r="0.6" fill="#FFFFFF" />

              <ellipse cx="67" cy="53" rx="3.2" ry="2" fill="#FFFFFF" stroke="#64748B" strokeWidth="0.5" />
              <circle cx="67" cy="53" r="1.8" fill="#1E293B" />
              <circle cx="67.6" cy="52.4" r="0.6" fill="#FFFFFF" />
            </g>

            {/* Straight Strong Nose */}
            <path d="M60 50 L 59 60 Q 60 62 62 61" stroke="#8E6348" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Firm, Measured Lips */}
            <path d="M55 67 Q 60 68 65 67" stroke="#6B3438" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'emma_woodhouse':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#FDF2F4] border border-[#F4A8B8] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Emma Woodhouse">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <defs>
              <linearGradient id="emmaGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
            </defs>

            <circle cx="60" cy="60" r="56" fill="#FFF8FA" stroke="#F9C6D1" strokeWidth="1.5" />

            {/* Rose Silk Regency Ball Gown with puffed sleeves */}
            <path d="M22 120 C 26 94, 44 82, 60 82 C 76 82, 94 94, 98 120 Z" fill="#F472B6" />
            <path d="M32 90 C 26 84, 18 96, 24 108 Z" fill="#FB7185" />
            <path d="M88 90 C 94 84, 102 96, 96 108 Z" fill="#FB7185" />
            <path d="M42 86 Q 60 92 78 86" stroke="#FFFFFF" strokeWidth="2" />

            {/* Delicate Pearl Necklace */}
            <path d="M46 76 Q 60 86 74 76" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="2 3" />

            {/* Neck */}
            <path d="M52 64 L 50 82 Q 60 86 70 82 L 68 64 Z" fill="#FFF2EB" />

            {/* Honey Golden Curls */}
            <ellipse cx="60" cy="48" rx="26" ry="26" fill="url(#emmaGold)" />
            {/* Tiara / Pearl headband */}
            <path d="M42 42 Q 60 36 78 42" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="60" cy="38" r="2.5" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="0.8" />
            <circle cx="52" cy="40" r="2" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="0.8" />
            <circle cx="68" cy="40" r="2" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="0.8" />

            {/* Face */}
            <path d="M44 48 C 40 64, 46 76, 60 78 C 74 76, 80 64, 76 48 Z" fill="#FFF5ED" />
            {/* Golden tendrils */}
            <circle cx="41" cy="48" r="3.5" fill="#D97706" />
            <circle cx="42" cy="56" r="3" fill="#D97706" />
            <circle cx="79" cy="48" r="3.5" fill="#D97706" />
            <circle cx="78" cy="56" r="3" fill="#D97706" />

            {/* Confident, playful brows */}
            <path d="M48 48 Q 53 45 57 47" stroke="#92400E" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M72 48 Q 67 45 63 47" stroke="#92400E" strokeWidth="1.4" strokeLinecap="round" />

            {/* Bright Hazel Eyes */}
            <ellipse cx="53" cy="52" rx="3.5" ry="2.5" fill="#FFFFFF" />
            <circle cx="53" cy="52" r="2" fill="#2563EB" />
            <circle cx="53.8" cy="51.3" r="0.8" fill="#FFFFFF" />

            <ellipse cx="67" cy="52" rx="3.5" ry="2.5" fill="#FFFFFF" />
            <circle cx="67" cy="52" r="2" fill="#2563EB" />
            <circle cx="67.8" cy="51.3" r="0.8" fill="#FFFFFF" />

            {/* Nose & Rosy Cheeks */}
            <path d="M60 51 L 59 59 Q 60 61 62 60" stroke="#C28464" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <ellipse cx="48" cy="60" rx="4" ry="2" fill="#FDA4AF" opacity="0.6" />
            <ellipse cx="72" cy="60" rx="4" ry="2" fill="#FDA4AF" opacity="0.6" />

            {/* Self-Assured Radiant Smile */}
            <path d="M54 67 Q 60 72 66 67" stroke="#BE123C" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      );

    case 'anne_wentworth':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#EBF5F3] border border-[#9BC2BC] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Anne Elliot">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <circle cx="60" cy="60" r="56" fill="#F4FAF9" stroke="#BFDBD7" strokeWidth="1.5" />

            {/* Seafoam Teal Pelisse Coat with dark velvet lapels */}
            <path d="M22 120 C 26 92, 44 80, 60 80 C 76 80, 94 92, 98 120 Z" fill="#2E5A54" />
            <path d="M44 80 L 60 102 L 76 80" fill="#193733" />
            <path d="M50 78 L 60 92 L 70 78" fill="#FFFFFF" stroke="#D1E7E4" strokeWidth="1" />

            {/* Neck */}
            <path d="M52 64 L 50 82 Q 60 86 70 82 L 68 64 Z" fill="#FFF4EC" />

            {/* Dark, Elegant Chignon & Tortoiseshell Comb */}
            <ellipse cx="60" cy="48" rx="25" ry="26" fill="#241812" />
            <path d="M52 30 Q 60 26 68 30" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />

            {/* Face: Delicate, thoughtful features */}
            <path d="M44 50 C 41 65, 47 76, 60 78 C 73 76, 79 65, 76 50 Z" fill="#FFF5ED" />

            {/* Soft, Mild Dark Eyes */}
            <path d="M48 49 Q 53 47 57 49" stroke="#45271A" strokeWidth="1.3" />
            <path d="M72 49 Q 67 47 63 49" stroke="#45271A" strokeWidth="1.3" />

            <ellipse cx="53" cy="53" rx="3.2" ry="2.2" fill="#FFFFFF" />
            <circle cx="53" cy="53" r="1.8" fill="#382115" />
            <circle cx="53.6" cy="52.4" r="0.6" fill="#FFFFFF" />

            <ellipse cx="67" cy="53" rx="3.2" ry="2.2" fill="#FFFFFF" />
            <circle cx="67" cy="53" r="1.8" fill="#382115" />
            <circle cx="67.6" cy="52.4" r="0.6" fill="#FFFFFF" />

            {/* Nose & Gentle, Poised Lips */}
            <path d="M60 52 L 59 60 Q 60 62 62 61" stroke="#A87A5E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M55 67 Q 60 69 65 67" stroke="#8A444E" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'catherine_tilney':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#F3EEF7] border border-[#B7A8C9] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Catherine Morland">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <circle cx="60" cy="60" r="56" fill="#FAF7FC" stroke="#D7C9E3" strokeWidth="1.5" />

            {/* Lavender Traveling Spencer Jacket */}
            <path d="M22 120 C 26 94, 44 82, 60 82 C 76 82, 94 94, 98 120 Z" fill="#6B4B87" />
            <path d="M46 80 L 60 94 L 74 80" fill="#FFFFFF" stroke="#E9D5FF" strokeWidth="1" />
            {/* Holding small Gothic novel with ribbon */}
            <rect x="48" y="98" width="24" height="22" rx="2" fill="#2E1065" stroke="#D4AF37" strokeWidth="1" />
            <path d="M60 98 L 60 120" stroke="#D4AF37" strokeWidth="1" />

            {/* Face */}
            <path d="M44 50 C 40 66, 46 76, 60 78 C 74 76, 80 66, 76 50 Z" fill="#FFF4EC" />

            {/* Straw Bonnet with deep purple ribbon */}
            <path d="M34 44 C 32 22, 88 22, 86 44 Z" fill="#E8D5B5" stroke="#9A7B4F" strokeWidth="1.5" />
            <path d="M38 42 Q 60 36 82 42" stroke="#581C87" strokeWidth="3" fill="none" />

            {/* Wide, Inquisitive Eyes (Gothic Mystery Wonder) */}
            <ellipse cx="53" cy="53" rx="4" ry="3" fill="#FFFFFF" stroke="#581C87" strokeWidth="0.8" />
            <circle cx="53" cy="53" r="2.2" fill="#3B0764" />
            <circle cx="54" cy="52" r="1" fill="#FFFFFF" />

            <ellipse cx="67" cy="53" rx="4" ry="3" fill="#FFFFFF" stroke="#581C87" strokeWidth="0.8" />
            <circle cx="67" cy="53" r="2.2" fill="#3B0764" />
            <circle cx="68" cy="52" r="1" fill="#FFFFFF" />

            {/* Brows arched in wonder */}
            <path d="M48 46 Q 53 43 57 46" stroke="#4C1D95" strokeWidth="1.3" />
            <path d="M72 46 Q 67 43 63 46" stroke="#4C1D95" strokeWidth="1.3" />

            {/* Nose & Youthful parted lips */}
            <path d="M60 52 L 59 60 Q 60 62 62 61" stroke="#A87A5E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <ellipse cx="60" cy="68" rx="2.5" ry="1.8" fill="#9333EA" />
          </svg>
        </div>
      );

    case 'dashwood_sisters':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#EDF3EF] border border-[#A5B8A8] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Elinor Dashwood">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <circle cx="60" cy="60" r="56" fill="#F6FAF7" stroke="#CAD8CD" strokeWidth="1.5" />

            {/* Sage Green Regency Day Dress */}
            <path d="M22 120 C 26 92, 44 80, 60 80 C 76 80, 94 92, 98 120 Z" fill="#34543D" />
            <path d="M42 86 Q 60 92 78 86" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M48 80 L 60 96 L 72 80" fill="#FFFFFF" />

            {/* Dark Hair braided in classical Greek/Regency chignon */}
            <circle cx="60" cy="30" r="9" fill="#382115" />
            <ellipse cx="60" cy="48" rx="25" ry="25" fill="#382115" />

            {/* Face: Calm, sensible, prudent */}
            <path d="M44 50 C 41 66, 47 76, 60 78 C 73 76, 79 66, 76 50 Z" fill="#FFF7ED" />

            {/* Composed Eyebrows */}
            <path d="M48 49 Q 53 47 57 49" stroke="#29150B" strokeWidth="1.4" />
            <path d="M72 49 Q 67 47 63 49" stroke="#29150B" strokeWidth="1.4" />

            {/* Thoughtful, Intelligent Dark Eyes */}
            <ellipse cx="53" cy="53" rx="3.2" ry="2.2" fill="#FFFFFF" />
            <circle cx="53" cy="53" r="1.8" fill="#26150D" />
            <circle cx="53.6" cy="52.4" r="0.6" fill="#FFFFFF" />

            <ellipse cx="67" cy="53" rx="3.2" ry="2.2" fill="#FFFFFF" />
            <circle cx="67" cy="53" r="1.8" fill="#26150D" />
            <circle cx="67.6" cy="52.4" r="0.6" fill="#FFFFFF" />

            {/* Nose & Composed Serene Lips */}
            <path d="M60 52 L 59 60 Q 60 62 62 61" stroke="#9E694D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M55 67 Q 60 68 65 67" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'mr_collins':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#F7F2E8] border border-[#D1BFA5] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Mr. Collins">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <circle cx="60" cy="60" r="56" fill="#FDFBF7" stroke="#E2D4BE" strokeWidth="1.5" />

            {/* Black Clerical Coat & Bands */}
            <path d="M20 120 C 24 92, 44 82, 60 82 C 76 82, 96 92, 100 120 Z" fill="#18181B" />
            {/* White Clerical Bands hanging from collar */}
            <rect x="54" y="80" width="5" height="18" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
            <rect x="61" y="80" width="5" height="18" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
            <rect x="50" y="76" width="20" height="6" fill="#FFFFFF" />

            {/* Plastered Side-Parted Hair */}
            <ellipse cx="60" cy="46" rx="25" ry="22" fill="#523218" />
            <path d="M38 46 C 42 34, 78 34, 82 46 Z" fill="#6B4120" />

            {/* Heavy-jowled round face */}
            <path d="M42 48 C 38 66, 44 78, 60 80 C 76 78, 82 66, 78 48 Z" fill="#FEF3C7" />

            {/* Obsequious, slightly squinting eyes */}
            <path d="M48 50 Q 53 48 57 51" stroke="#451A03" strokeWidth="1.4" />
            <path d="M72 50 Q 67 48 63 51" stroke="#451A03" strokeWidth="1.4" />

            <ellipse cx="53" cy="54" rx="2.5" ry="1.5" fill="#FFFFFF" />
            <circle cx="53" cy="54" r="1.2" fill="#291206" />

            <ellipse cx="67" cy="54" rx="2.5" ry="1.5" fill="#FFFFFF" />
            <circle cx="67" cy="54" r="1.2" fill="#291206" />

            {/* Slightly reddish nose tip */}
            <circle cx="60" cy="62" r="3" fill="#FCA5A5" opacity="0.6" />
            <path d="M60 52 L 59 61 Q 60 63 62 62" stroke="#92400E" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Pompous, Deferential Smirk (Bowing to Lady Catherine) */}
            <path d="M53 69 Q 60 74 67 69" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'regency_dandy':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#FFFBEB] border border-[#FDE68A] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Regency Dandy">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <circle cx="60" cy="60" r="56" fill="#FFFDF5" stroke="#FDE68A" strokeWidth="1.5" />

            {/* Tailored Burgundy Velvet Riding Coat */}
            <path d="M20 120 C 24 90, 44 80, 60 80 C 76 80, 96 90, 100 120 Z" fill="#7F1D1D" />
            {/* Impossibly High Starched Cravat */}
            <path d="M42 66 L 60 84 L 78 66 L 60 96 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx="60" cy="80" r="2.5" fill="#D4AF37" />

            {/* Elaborate Regency Styled Hair / Quiff */}
            <ellipse cx="60" cy="44" rx="25" ry="24" fill="#92400E" />
            <circle cx="50" cy="28" r="8" fill="#B45309" />
            <circle cx="70" cy="28" r="8" fill="#B45309" />

            {/* Face */}
            <path d="M44 48 C 42 64, 46 74, 60 76 C 74 74, 78 64, 76 48 Z" fill="#FEF3C7" />

            {/* Dapper Groomed Thin Mustache */}
            <path d="M52 64 Q 56 62 60 64 Q 64 62 68 64" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" fill="none" />

            {/* Eyes & Gilded Monocle on right eye */}
            <ellipse cx="52" cy="52" rx="3" ry="2" fill="#FFFFFF" />
            <circle cx="52" cy="52" r="1.5" fill="#3D1D0D" />

            {/* Monocle */}
            <circle cx="68" cy="52" r="6" stroke="#D4AF37" strokeWidth="1.5" fill="#EFF6FF" fillOpacity="0.4" />
            <path d="M74 52 Q 82 65 80 85" stroke="#D4AF37" strokeWidth="1" fill="none" />
          </svg>
        </div>
      );

    case 'regency_cat':
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#FDF4FF] border border-[#F0ABFC] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Düşes Kedi">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <circle cx="60" cy="60" r="56" fill="#FDF7FF" stroke="#E879F9" strokeWidth="1.5" />

            {/* Victorian Anthropomorphic Illustrated Cat with Regency Ruff & Silk Bow */}
            <path d="M24 120 C 28 96, 44 86, 60 86 C 76 86, 92 96, 96 120 Z" fill="#A21CAF" />

            {/* Fluted Elizabethan/Regency Pleated Lace Ruff Collar */}
            <path d="M36 84 Q 44 76 52 84 Q 60 76 68 84 Q 76 76 84 84" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            <circle cx="60" cy="88" r="4" fill="#F43F5E" />

            {/* Cat Ears with pink inner felt */}
            <polygon points="34,48 24,20 54,34" fill="#F5D0FE" stroke="#86198F" strokeWidth="1.5" />
            <polygon points="32,44 28,26 48,34" fill="#F472B6" />

            <polygon points="86,48 96,20 66,34" fill="#F5D0FE" stroke="#86198F" strokeWidth="1.5" />
            <polygon points="88,44 92,26 72,34" fill="#F472B6" />

            {/* Aristocratic White & Silver Cat Face */}
            <circle cx="60" cy="56" r="26" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="1.2" />

            {/* Noble Emerald Green Feline Eyes */}
            <ellipse cx="50" cy="52" rx="4.5" ry="5.5" fill="#10B981" stroke="#065F46" strokeWidth="1" />
            <ellipse cx="50" cy="52" rx="1.5" ry="4.5" fill="#064E3B" />
            <circle cx="51.5" cy="50" r="1.2" fill="#FFFFFF" />

            <ellipse cx="70" cy="52" rx="4.5" ry="5.5" fill="#10B981" stroke="#065F46" strokeWidth="1" />
            <ellipse cx="70" cy="52" rx="1.5" ry="4.5" fill="#064E3B" />
            <circle cx="71.5" cy="50" r="1.2" fill="#FFFFFF" />

            {/* Pink Nose & Fine Whiskers */}
            <polygon points="58,62 62,62 60,65" fill="#FB7185" />
            <path d="M58 65 Q 60 67 62 65" stroke="#701A75" strokeWidth="1" fill="none" />
            {/* Whiskers */}
            <line x1="38" y1="62" x2="22" y2="58" stroke="#C084FC" strokeWidth="1" />
            <line x1="38" y1="66" x2="20" y2="68" stroke="#C084FC" strokeWidth="1" />
            <line x1="82" y1="62" x2="98" y2="58" stroke="#C084FC" strokeWidth="1" />
            <line x1="82" y1="66" x2="100" y2="68" stroke="#C084FC" strokeWidth="1" />
          </svg>
        </div>
      );

    case 'jane_author':
    default:
      return (
        <div className={`relative rounded-full flex items-center justify-center bg-[#FAF7F2] border border-[#D5C2A5] overflow-hidden shadow-sm shrink-0 ${currentSize} ${className}`} title="Jane Austen">
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <circle cx="60" cy="60" r="56" fill="#FDFBF7" stroke="#D1BFA5" strokeWidth="1.5" />

            {/* Empire Gown in warm rosewood */}
            <path d="M22 120 C 26 92, 44 80, 60 80 C 76 80, 94 92, 98 120 Z" fill="#9F7057" stroke="#684532" strokeWidth="1" />
            <path d="M40 86 Q 60 92 80 86" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" />

            {/* White Neck Fichu & Topaz Cross */}
            <path d="M46 76 L 60 92 L 74 76" fill="#FFFFFF" stroke="#E2DACD" strokeWidth="1" />
            <polygon points="60,86 60,94 58,89 62,89" fill="#D4AF37" />

            {/* Neck */}
            <path d="M52 64 L 50 80 Q 60 84 70 80 L 68 64 Z" fill="#FFF7ED" />

            {/* Authentic Mob Cap with blue ribbon */}
            <path d="M34 44 C 30 18, 90 18, 86 44 C 76 36, 44 36, 34 44 Z" fill="#FFFFFF" stroke="#D1C7B7" strokeWidth="1.5" />
            <path d="M38 42 Q 60 36 82 42" stroke="#527D9A" strokeWidth="2.5" fill="none" />
            <circle cx="60" cy="38" r="2.5" fill="#3B5D73" />
            {/* Frilled border */}
            <path d="M36 46 Q 44 42 52 46 Q 60 42 68 46 Q 76 42 84 46" stroke="#D1C7B7" strokeWidth="1.5" fill="none" />

            {/* Face */}
            <path d="M44 50 C 40 66, 46 76, 60 78 C 74 76, 80 66, 76 50 Z" fill="#FFF7ED" />

            {/* Delicate Brunette Curls framing forehead */}
            <circle cx="41" cy="50" r="3" fill="#4A2612" />
            <circle cx="42" cy="58" r="2.5" fill="#4A2612" />
            <circle cx="79" cy="50" r="3" fill="#4A2612" />
            <circle cx="78" cy="58" r="2.5" fill="#4A2612" />

            {/* Intelligent, Knowing Hazel Eyes */}
            <ellipse cx="53" cy="54" rx="3.2" ry="2.2" fill="#FFFFFF" />
            <circle cx="53" cy="54" r="1.8" fill="#3E2723" />
            <circle cx="53.6" cy="53.3" r="0.6" fill="#FFFFFF" />

            <ellipse cx="67" cy="54" rx="3.2" ry="2.2" fill="#FFFFFF" />
            <circle cx="67" cy="54" r="1.8" fill="#3E2723" />
            <circle cx="67.6" cy="53.3" r="0.6" fill="#FFFFFF" />

            {/* Gentle Witty Smile */}
            <path d="M55 68 Q 60 70 65 68" stroke="#78350F" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      );
  }
};

export const QuillWritingIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3 11.5V21h9.5z" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="8" x2="2" y2="22" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="17.5" y1="15" x2="9" y2="15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WaxSealBadge: React.FC<{ letter?: string; size?: 'sm' | 'md' | 'lg' }> = ({ letter = 'JA', size = 'md' }) => {
  const sizeClass = {
    sm: 'w-7 h-7 text-[10px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-14 h-14 text-sm'
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center rounded-full bg-[#8B1A1A] text-[#FFE4E1] font-serif font-bold wax-seal-shadow border border-[#5E1212] select-none shrink-0 ${sizeClass}`} title="Austen Seal">
      <div className="absolute inset-0.5 rounded-full border border-dashed border-[#DE7373]/40" />
      <span className="relative z-10 italic tracking-wider">{letter}</span>
    </div>
  );
};
