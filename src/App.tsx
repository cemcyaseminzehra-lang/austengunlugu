/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { BiographyView } from './components/BiographyView';
import { BooksDirectoryView } from './components/BooksDirectoryView';
import { ChronologyView } from './components/ChronologyView';
import { RankingView } from './components/RankingView';
import { Footer } from './components/Footer';

const MainContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <main className="min-h-screen paper-texture">
      {activePage === 'biography' && <BiographyView />}
      {activePage === 'books' && <BooksDirectoryView />}
      {activePage === 'chronology' && <ChronologyView />}
      {activePage === 'ranking' && <RankingView />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#14181C] text-[#E1E7ED]">
        <Navbar />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}
