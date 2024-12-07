import { LATEST_DRAW_RESULT } from './constants';

interface WingNumberResult {
  matches: Array<{
    number: string;
    wingNumber: string;
  }>;
  hasMatches: boolean;
}

export const findWingNumbers = (numbers: string[]): WingNumberResult => {
  const winningNumbers = LATEST_DRAW_RESULT.winningNumbers.split('-').map(n => parseInt(n, 10));
  const matches: Array<{ number: string; wingNumber: string }> = [];

  for (const num of numbers) {
    const number = parseInt(num, 10);
    const possibleWings = [number - 1, number + 1];

    for (const wing of possibleWings) {
      if (winningNumbers.includes(wing)) {
        matches.push({
          number: num.padStart(2, '0'),
          wingNumber: wing.toString().padStart(2, '0')
        });
        break;
      }
    }

    if (matches.length >= 2) break;
  }

  return {
    matches,
    hasMatches: matches.length >= 2
  };
};

export const formatWingNumberResult = (result: WingNumberResult): string => {
  if (!result.hasMatches) {
    return 'No wing numbers found';
  }

  const matchDescriptions = result.matches.map(match => 
    `${match.wingNumber} (wing number for ${match.number})`
  );

  return matchDescriptions.join(', ');
};