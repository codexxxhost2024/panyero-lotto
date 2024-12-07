import { LATEST_DRAW_RESULT } from './constants';

export const getWinningF2Digits = (): { first: string, second: string } => {
  const numbers = LATEST_DRAW_RESULT.winningNumbers.split('-');
  return {
    first: numbers[0].padStart(2, '0'),
    second: numbers[1].padStart(2, '0')
  };
};

export const formatWinningNumbers = (numbers: string): string => {
  return numbers.split('-').map(num => num.padStart(2, '0')).join('-');
};