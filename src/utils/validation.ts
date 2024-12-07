export const isValidNumber = (num: string, gameId: string): boolean => {
  const number = parseInt(num, 10);
  
  // Get valid range based on game type
  const range = getGameRange(gameId);
  
  return !isNaN(number) && number >= range.min && number <= range.max;
};

export const getGameRange = (gameId: string): { min: number; max: number } => {
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
      return { min: 1, max: 99 };
  }
};

export const formatNumber = (num: string): string => {
  const number = parseInt(num, 10);
  return number < 10 ? `0${number}` : `${number}`;
};

export const getCombinationKey = (first: string, second: string): string => {
  return `${formatNumber(first)}-${formatNumber(second)}`;
};

export const isDuplicateNumber = (first: string | null, second: string | null, newNumber: string): boolean => {
  if (first === newNumber || second === newNumber) {
    return true;
  }
  return false;
};