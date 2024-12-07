export const FIXED_BET_AMOUNT = 10;
export const MAX_RISK_PERCENTAGE = 0.7;
export const INITIAL_WALLET_BALANCE = 1000;
export const WINNING_PRIZE = 7000;

export const LOTTERY_GAMES = [
  {
    id: '6-42',
    name: '6/42 Lotto',
    betAmount: 10,
    prize: 7000,
    description: 'First 2 digits from 6/42 draw',
    minNumber: 1,
    maxNumber: 42,
    drawDays: ['Monday', 'Thursday', 'Saturday'],
    jackpot: 5000000,
    nextDrawDate: new Date('2024-12-09T13:00:00+08:00')
  },
  {
    id: '6-45',
    name: '6/45 Mega Lotto',
    betAmount: 10,
    prize: 8000,
    description: 'First 2 digits from 6/45 draw',
    minNumber: 1,
    maxNumber: 45,
    drawDays: ['Wednesday', 'Friday', 'Sunday'],
    jackpot: 8000000,
    nextDrawDate: new Date('2024-12-08T13:00:00+08:00')
  },
  {
    id: '6-49',
    name: '6/49 Super Lotto',
    betAmount: 10,
    prize: 9000,
    description: 'First 2 digits from 6/49 draw',
    minNumber: 1,
    maxNumber: 49,
    drawDays: ['Tuesday', 'Friday', 'Sunday'],
    jackpot: 15000000,
    nextDrawDate: new Date('2024-12-08T13:00:00+08:00')
  },
  {
    id: '6-55',
    name: '6/55 Grand Lotto',
    betAmount: 10,
    prize: 11000,
    description: 'First 2 digits from 6/55 draw',
    minNumber: 1,
    maxNumber: 55,
    drawDays: ['Monday', 'Wednesday', 'Saturday'],
    jackpot: 30000000,
    nextDrawDate: new Date('2024-12-07T13:00:00+08:00')
  },
  {
    id: '6-58',
    name: '6/58 Ultra Lotto',
    betAmount: 10,
    prize: 12000,
    description: 'First 2 digits from 6/58 draw',
    minNumber: 1,
    maxNumber: 58,
    drawDays: ['Tuesday', 'Friday', 'Sunday'],
    jackpot: 50000000,
    nextDrawDate: new Date('2024-12-08T13:00:00+08:00')
  }
];

export const DRAW_SCHEDULES = [
  { id: '11am', time: '11:00', label: 'Morning Draw', value: 1100 },
  { id: '4pm', time: '16:00', label: 'Afternoon Draw', value: 1600 },
  { id: '9pm', time: '21:00', label: 'Evening Draw', value: 2100 }
];

export const LATEST_DRAW_RESULT = {
  id: 'draw-20241207-11am',
  gameType: '6/49 Super Lotto',
  winningNumbers: '09-12-17-23-34-45',
  drawDate: new Date('2024-12-07T11:00:00+08:00'),
  firstTwoDigits: '09',
  prizeTiers: [
    { matches: 6, prize: 15000000, winners: 0 },
    { matches: 5, prize: 50000, winners: 3 },
    { matches: 4, prize: 1500, winners: 250 },
    { matches: 3, prize: 100, winners: 5000 }
  ]
};

export const WINNING_HISTORY = [
  {
    id: 'draw-20241207-11am',
    gameType: '6/49 Super Lotto',
    winningNumbers: '09-12-17-23-34-45',
    drawDate: new Date('2024-12-07T11:00:00+08:00'),
    firstTwoDigits: '09',
    prizeTiers: [
      { matches: 6, prize: 15000000, winners: 0 },
      { matches: 5, prize: 50000, winners: 3 },
      { matches: 4, prize: 1500, winners: 250 },
      { matches: 3, prize: 100, winners: 5000 }
    ]
  },
  {
    id: 'draw-20241206-21pm',
    gameType: '6/42 Lotto',
    winningNumbers: '15-32-41-22-11-07',
    drawDate: new Date('2024-12-06T21:00:00+08:00'),
    firstTwoDigits: '15',
    prizeTiers: [
      { matches: 6, prize: 5000000, winners: 1 },
      { matches: 5, prize: 25000, winners: 5 },
      { matches: 4, prize: 1000, winners: 300 },
      { matches: 3, prize: 50, winners: 6000 }
    ],
    historicalNote: 'First ever jackpot winner in Panyero history! A small store owner from Cebu City claimed the prize, planning to expand their business.'
  },
  {
    id: 'draw-20241206-16pm',
    gameType: '6/55 Grand Lotto',
    winningNumbers: '42-18-55-33-21-05',
    drawDate: new Date('2024-12-06T16:00:00+08:00'),
    firstTwoDigits: '42',
    prizeTiers: [
      { matches: 6, prize: 30000000, winners: 0 },
      { matches: 5, prize: 100000, winners: 2 },
      { matches: 4, prize: 2000, winners: 150 },
      { matches: 3, prize: 200, winners: 4000 }
    ]
  },
  {
    id: 'draw-20241206-11am',
    gameType: '6/45 Mega Lotto',
    winningNumbers: '31-44-12-28-39-15',
    drawDate: new Date('2024-12-06T11:00:00+08:00'),
    firstTwoDigits: '31',
    prizeTiers: [
      { matches: 6, prize: 8000000, winners: 0 },
      { matches: 5, prize: 40000, winners: 4 },
      { matches: 4, prize: 1200, winners: 280 },
      { matches: 3, prize: 80, winners: 5500 }
    ]
  },
  {
    id: 'inaugural-draw-2',
    gameType: '6/49 Super Lotto',
    winningNumbers: '07-13-25-36-42-49',
    drawDate: new Date('2024-12-05T21:00:00+08:00'),
    firstTwoDigits: '07',
    prizeTiers: [
      { matches: 6, prize: 50000000, winners: 0 },
      { matches: 5, prize: 120000, winners: 1 },
      { matches: 4, prize: 2500, winners: 125 },
      { matches: 3, prize: 250, winners: 3800 }
    ],
    historicalNote: 'Second inaugural draw of Panyero, featuring enhanced prize tiers and nationwide participation.'
  },
  {
    id: 'inaugural-draw-1',
    gameType: '6/42 Lotto',
    winningNumbers: '04-16-23-35-38-42',
    drawDate: new Date('2024-12-05T16:00:00+08:00'),
    firstTwoDigits: '04',
    prizeTiers: [
      { matches: 6, prize: 25000000, winners: 0 },
      { matches: 5, prize: 50000, winners: 2 },
      { matches: 4, prize: 1500, winners: 180 },
      { matches: 3, prize: 100, winners: 4200 }
    ],
    historicalNote: 'Historic first draw of Panyero lottery, marking the beginning of a new era in Philippine gaming. The event was celebrated with special ceremonies in Manila.'
  }
];

export const HISTORICAL_MILESTONES = [
  {
    date: '2024-12-05 16:00',
    event: 'First Panyero Draw',
    description: 'The inaugural draw of Panyero lottery took place in Manila, with thousands of hopeful participants across the nation.',
    numbers: '04-16-23-35-38-42',
    firstTwo: '04',
    significance: 'Marked the official launch of the Panyero lottery system, introducing innovative gaming features.'
  },
  {
    date: '2024-12-05 21:00',
    event: 'Enhanced Prize Structure',
    description: 'Second draw introduced higher prize tiers and improved winning odds.',
    numbers: '07-13-25-36-42-49',
    firstTwo: '07',
    significance: 'Set new standards for lottery prizes in the Philippines.'
  },
  {
    date: '2024-12-06 21:00',
    event: 'First Jackpot Winner',
    description: 'A small store owner from Cebu City won the first jackpot prize.',
    numbers: '15-32-41-22-11-07',
    firstTwo: '15',
    significance: 'First major winner inspired nationwide participation and media coverage.'
  }
];