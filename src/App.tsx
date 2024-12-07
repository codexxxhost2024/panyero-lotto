import React, { useState, useCallback } from 'react';
import { BetConfirmation } from './components/BetConfirmation';
import { TopBanner } from './components/TopBanner';
import { WalletBalance } from './components/WalletBalance';
import { BetReceipt } from './components/BetReceipt';
import { BetHistory } from './components/BetHistory';
import { WinningHistory } from './components/WinningHistory';
import { SelectionStep } from './components/lottery/SelectionStep';
import { SuccessPage } from './components/SuccessPage';
import { GameSelector } from './components/GameSelector';
import { INITIAL_WALLET_BALANCE, LOTTERY_GAMES } from './utils/constants';
import type { BettingStats, Bet, LotteryGame } from './types/lottery';

function App() {
  const [bettingStats, setBettingStats] = useState<BettingStats>({});
  const [walletBalance, setWalletBalance] = useState(INITIAL_WALLET_BALANCE);
  const [pendingBet, setPendingBet] = useState<Bet | null>(null);
  const [confirmedBet, setConfirmedBet] = useState<Bet | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [bets, setBets] = useState<Bet[]>([]);
  const [firstNumber, setFirstNumber] = useState<string | null>(null);
  const [secondNumber, setSecondNumber] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState('11am');
  const [selectedGame, setSelectedGame] = useState<LotteryGame | null>(null);

  const handleGameSelect = useCallback((game: LotteryGame) => {
    setSelectedGame(game);
    setFirstNumber(null);
    setSecondNumber(null);
  }, []);

  const handleNumberSelect = useCallback((position: 'first' | 'second', number: string) => {
    if (position === 'first') {
      setFirstNumber(number);
    } else {
      setSecondNumber(number);
    }
  }, []);

  const handleTimeSelect = useCallback((time: string) => {
    setSelectedTime(time);
  }, []);

  const handleBetSubmit = useCallback((amount: number) => {
    if (!firstNumber || !secondNumber || !selectedGame) return;
    
    const combination = `${firstNumber}-${secondNumber}`;
    handleBet(combination, selectedTime, amount, selectedGame);
  }, [firstNumber, secondNumber, selectedTime, selectedGame]);

  const handleBet = useCallback((combination: string, drawTime: string, amount: number, game: LotteryGame) => {
    if (walletBalance < amount) {
      alert('Insufficient wallet balance');
      return;
    }

    const bet: Bet = {
      id: Math.random().toString(36).substr(2, 9),
      referenceNumber: `${game.id}-${Date.now()}`,
      combination,
      drawTime,
      amount,
      potentialWin: amount * (game.prize / game.betAmount),
      timestamp: new Date(),
      status: 'pending',
      gameId: game.id,
      sharerId: 'BTGS0023',
      sharerName: 'Kier Dee'
    };

    setPendingBet(bet);
  }, [walletBalance]);

  const handleConfirmBet = useCallback(() => {
    if (!pendingBet) return;

    setBettingStats((prev) => {
      const currentStats = prev[pendingBet.combination] || { totalBets: 0, isOpen: true };
      const newTotalBets = currentStats.totalBets + 1;
      const game = LOTTERY_GAMES.find(g => g.id === pendingBet.gameId);
      const maxRisk = game ? game.prize * 0.7 : 0;
      const isOpen = (newTotalBets * game!.prize) <= maxRisk;

      return {
        ...prev,
        [pendingBet.combination]: {
          totalBets: newTotalBets,
          isOpen,
        },
      };
    });

    setWalletBalance(prev => prev - pendingBet.amount);
    
    const confirmedBet = { ...pendingBet, status: 'confirmed' as const };
    setBets(prev => [confirmedBet, ...prev]);
    setConfirmedBet(confirmedBet);
    setPendingBet(null);
    setShowSuccess(true);
    
    setFirstNumber(null);
    setSecondNumber(null);
    setSelectedTime('11am');
    setSelectedGame(null);
  }, [pendingBet]);

  const handleSuccessComplete = useCallback(() => {
    setShowSuccess(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <TopBanner />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <WalletBalance balance={walletBalance} />
        
        <div className="mt-6">
          <GameSelector
            selectedGame={selectedGame}
            onGameSelect={handleGameSelect}
          />
        </div>
        
        {selectedGame && (
          <div className="mt-6">
            <SelectionStep
              firstNumber={firstNumber}
              secondNumber={secondNumber}
              selectedTime={selectedTime}
              onSelectNumber={handleNumberSelect}
              onTimeSelect={handleTimeSelect}
              onBetSubmit={handleBetSubmit}
              bettingStats={bettingStats}
              walletBalance={walletBalance}
              game={selectedGame}
            />
          </div>
        )}
        
        <div className="mt-6">
          <BetHistory bets={bets} />
        </div>

        <div className="mt-8">
          <WinningHistory />
        </div>
        
        {pendingBet && (
          <BetConfirmation
            bet={pendingBet}
            onConfirm={handleConfirmBet}
            onCancel={() => {
              setPendingBet(null);
              setFirstNumber(null);
              setSecondNumber(null);
              setSelectedTime('11am');
              setSelectedGame(null);
            }}
          />
        )}
        
        {showSuccess && confirmedBet && (
          <SuccessPage
            bet={confirmedBet}
            onComplete={handleSuccessComplete}
          />
        )}
        
        {confirmedBet && !showSuccess && (
          <BetReceipt
            bet={confirmedBet}
            onClose={() => setConfirmedBet(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;