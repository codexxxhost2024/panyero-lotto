import { LotteryGame } from '../types/lottery';

interface NumberRange {
  min: number;
  max: number;
}

export const getGameNumberRange = (gameId: string): NumberRange => {
  switch (gameId) {
    case '6-42':
      return { min: 1, max: 42 };
    case '6-45':
      return { min: 1, max: 45 };
    case '6-49':
      return { min: 1, max: 49 };
    case '6-55':
      return { min: 1, max: 55 };
    case '6-58':
      return { min: 1, max: 58 };
    default:
      return { min: 1, max: 99 }; // Fallback range
  }
};

export const isNumberValidForGame = (number: string, gameId: string): boolean => {
  const { min, max } = getGameNumberRange(gameId);
  const num = parseInt(number, 10);
  return !isNaN(num) && num >= min && num <= max;
};