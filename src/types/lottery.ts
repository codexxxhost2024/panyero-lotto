export interface LotteryGame {
  id: string;
  name: string;
  betAmount: number;
  prize: number;
  description: string;
  minNumber: number;
  maxNumber: number;
  drawDays: string[];
  jackpot: number;
  nextDrawDate: Date;
}

export interface BetCombination {
  firstNumber: string;
  secondNumber: string;
}

export interface BetStats {
  totalBets: number;
  isOpen: boolean;
}

export interface DrawSchedule {
  id: string;
  time: string;
  label: string;
  value: number;
  nextDraw: Date;
}

export interface DrawResult {
  id: string;
  gameType: string;
  winningNumbers: string;
  drawDate: Date;
  firstTwoDigits: string;
  prizeTiers: PrizeTier[];
}

export interface PrizeTier {
  matches: number;
  prize: number;
  winners: number;
}

export interface Wallet {
  balance: number;
}

export interface Bet {
  id: string;
  referenceNumber: string;
  combination: string;
  drawTime: string;
  amount: number;
  potentialWin: number;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'completed';
  gameId: string;
  sharerId: string;
  sharerName: string;
}

export interface WingNumberResult {
  matches: Array<{
    number: string;
    wingNumber: string;
  }>;
  hasMatches: boolean;
}

export type BettingStats = Record<string, BetStats>;

export interface DrawCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}