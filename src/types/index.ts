/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Review {
  id: string;
  bookId: string;
  userName: string;
  userAvatar: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
  likes: number;
  isUserReview?: boolean;
}

export interface Book {
  id: string;
  title: string;
  originalTitle?: string;
  turkishTitle: string;
  publicationYear: number;
  writtenYears: string;
  coverColor: {
    bg: string;
    border: string;
    accent: string;
    spine: string;
    text: string;
    badge: string;
    foil: string;
  };
  synopsis: string;
  historicalBackstory: string;
  publishingTrivia: string[];
  famousQuote: string;
  quoteSpeaker: string;
  keyCharacters: string[];
  themes: string[];
  pageCount: number;
  initialCopies: string;
  originalPublisher: string;
  authorBylines: string; // e.g. "By a Lady"
  adaptationNote: string;
  caricatureId: string;
}

export interface UserProfile {
  name: string;
  avatarId: string;
  bio?: string;
  joinedDate?: string;
}

export interface UserBookState {
  rating: number; // 0 means unrated
  isFavorite: boolean;
  isRead: boolean;
  wantToRead: boolean;
}

export type ActivePage = 'biography' | 'books' | 'chronology' | 'ranking';
