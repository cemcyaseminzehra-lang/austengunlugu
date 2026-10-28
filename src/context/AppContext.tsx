/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActivePage, Book, Review, UserBookState, UserProfile } from '../types';
import { AUSTEN_BOOKS, INITIAL_REVIEWS } from '../data/austenData';

interface AppContextType {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  userProfile: UserProfile;
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  bookStates: Record<string, UserBookState>;
  setRating: (bookId: string, rating: number) => void;
  toggleFavorite: (bookId: string) => void;
  toggleRead: (bookId: string) => void;
  toggleWantToRead: (bookId: string) => void;
  reviews: Review[];
  addReview: (bookId: string, rating: number, comment: string) => void;
  deleteReview: (reviewId: string) => void;
  likeReview: (reviewId: string) => void;
  rankedBookIds: string[];
  setRankedBookIds: (ids: string[]) => void;
  moveBookRank: (currentIndex: number, direction: 'up' | 'down') => void;
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
  getBookStats: (bookId: string) => { avgRating: number; totalReviews: number; totalFavorites: number };
}

const STORAGE_KEYS = {
  USER_PROFILE: 'austenboxd_user_profile',
  BOOK_STATES: 'austenboxd_book_states',
  REVIEWS: 'austenboxd_reviews',
  RANKING: 'austenboxd_ranking',
};

const DEFAULT_BOOK_STATES: Record<string, UserBookState> = {
  'pride-and-prejudice': { rating: 5, isFavorite: true, isRead: true, wantToRead: false },
  'persuasion': { rating: 5, isFavorite: true, isRead: true, wantToRead: false },
  'emma': { rating: 4, isFavorite: false, isRead: true, wantToRead: false },
  'sense-and-sensibility': { rating: 4, isFavorite: true, isRead: true, wantToRead: false },
  'northanger-abbey': { rating: 4, isFavorite: false, isRead: false, wantToRead: true },
  'mansfield-park': { rating: 3.5, isFavorite: false, isRead: false, wantToRead: true },
};

const DEFAULT_RANKING = [
  'pride-and-prejudice',
  'persuasion',
  'emma',
  'sense-and-sensibility',
  'northanger-abbey',
  'mansfield-park'
];

const DEFAULT_USER: UserProfile = {
  name: 'Seçkin Okur',
  avatarId: 'elizabeth_darcy',
  bio: 'Jane Austen eserleri ve Regency dönemi edebiyat tutkunu.',
  joinedDate: 'Ekim 2026'
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<ActivePage>('biography');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // User Profile
  const [userProfile, setUserProfileState] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return saved ? JSON.parse(saved) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  // Book States (Ratings, Favorites, Read)
  const [bookStates, setBookStates] = useState<Record<string, UserBookState>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOK_STATES);
      return saved ? JSON.parse(saved) : DEFAULT_BOOK_STATES;
    } catch {
      return DEFAULT_BOOK_STATES;
    }
  });

  // Reviews
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  // Personal Book Ranking
  const [rankedBookIds, setRankedBookIdsState] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RANKING);
      return saved ? JSON.parse(saved) : DEFAULT_RANKING;
    } catch {
      return DEFAULT_RANKING;
    }
  });

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(userProfile));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [userProfile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOK_STATES, JSON.stringify(bookStates));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [bookStates]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [reviews]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RANKING, JSON.stringify(rankedBookIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [rankedBookIds]);

  const updateUserProfile = (patch: Partial<UserProfile>) => {
    setUserProfileState(prev => ({ ...prev, ...patch }));
  };

  const setRating = (bookId: string, rating: number) => {
    setBookStates(prev => ({
      ...prev,
      [bookId]: {
        ...(prev[bookId] || { isFavorite: false, isRead: true, wantToRead: false }),
        rating: prev[bookId]?.rating === rating ? 0 : rating,
        isRead: rating > 0 ? true : prev[bookId]?.isRead || false
      }
    }));
  };

  const toggleFavorite = (bookId: string) => {
    setBookStates(prev => {
      const current = prev[bookId] || { rating: 0, isFavorite: false, isRead: false, wantToRead: false };
      return {
        ...prev,
        [bookId]: {
          ...current,
          isFavorite: !current.isFavorite
        }
      };
    });
  };

  const toggleRead = (bookId: string) => {
    setBookStates(prev => {
      const current = prev[bookId] || { rating: 0, isFavorite: false, isRead: false, wantToRead: false };
      const nextRead = !current.isRead;
      return {
        ...prev,
        [bookId]: {
          ...current,
          isRead: nextRead,
          wantToRead: nextRead ? false : current.wantToRead
        }
      };
    });
  };

  const toggleWantToRead = (bookId: string) => {
    setBookStates(prev => {
      const current = prev[bookId] || { rating: 0, isFavorite: false, isRead: false, wantToRead: false };
      const nextWant = !current.wantToRead;
      return {
        ...prev,
        [bookId]: {
          ...current,
          wantToRead: nextWant,
          isRead: nextWant ? false : current.isRead
        }
      };
    });
  };

  const addReview = (bookId: string, rating: number, comment: string) => {
    if (!comment.trim()) return;

    const newRev: Review = {
      id: `rev-user-${Date.now()}`,
      bookId,
      userName: userProfile.name || 'Misafir Okur',
      userAvatar: userProfile.avatarId || 'elizabeth_darcy',
      rating: rating || 5,
      comment: comment.trim(),
      date: new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()),
      likes: 1,
      isUserReview: true
    };

    setReviews(prev => [newRev, ...prev]);

    // Also update book rating state
    setRating(bookId, rating);
  };

  const deleteReview = (reviewId: string) => {
    setReviews(prev => prev.filter(r => r.id !== reviewId));
  };

  const likeReview = (reviewId: string) => {
    setReviews(prev =>
      prev.map(r => (r.id === reviewId ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const setRankedBookIds = (ids: string[]) => {
    setRankedBookIdsState(ids);
  };

  const moveBookRank = (currentIndex: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= rankedBookIds.length) return;

    const updated = [...rankedBookIds];
    const [moved] = updated.splice(currentIndex, 1);
    updated.splice(targetIndex, 0, moved);
    setRankedBookIdsState(updated);
  };

  const getBookStats = (bookId: string) => {
    const bookReviews = reviews.filter(r => r.bookId === bookId);
    const userState = bookStates[bookId];

    let totalScore = 0;
    let count = 0;

    bookReviews.forEach(r => {
      if (r.rating > 0) {
        totalScore += r.rating;
        count++;
      }
    });

    if (userState?.rating > 0 && !bookReviews.some(r => r.isUserReview)) {
      totalScore += userState.rating;
      count++;
    }

    const avgRating = count > 0 ? Number((totalScore / count).toFixed(1)) : 4.5;
    const totalFavorites = (userState?.isFavorite ? 1 : 0) + (bookId === 'pride-and-prejudice' ? 342 : bookId === 'persuasion' ? 284 : 198);

    return {
      avgRating,
      totalReviews: bookReviews.length,
      totalFavorites
    };
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        userProfile,
        updateUserProfile,
        bookStates,
        setRating,
        toggleFavorite,
        toggleRead,
        toggleWantToRead,
        reviews,
        addReview,
        deleteReview,
        likeReview,
        rankedBookIds,
        setRankedBookIds,
        moveBookRank,
        selectedBook,
        setSelectedBook,
        getBookStats
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
