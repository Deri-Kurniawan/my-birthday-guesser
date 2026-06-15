import { createContext } from "react";

interface GameManagerContextValue {
  isGameStarted: boolean;
  isGameOver: boolean;
  isBgMusicEnabled: boolean;
  isSoundEffectEnabled: boolean;
  score: number;
  totalCards: number;
  cards: number[][];
  currentCardDataIndex: number;
  currentCardData: number[];
  answers: number[];
  language: string;
  startGame: () => void;
  resetGame: () => void;
  playAgain: () => void;
  goToNextCard: () => void;
  submitAnswer: () => void;
  skipcurrentCardData: () => void;
  toggleBgMusic: () => void;
  toggleSoundEffect: () => void;
  setLanguage: (lang: string) => void;
}

export const GameManagerContext = createContext<GameManagerContextValue | null>(null);
