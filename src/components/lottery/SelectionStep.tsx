import React from 'react';
import { LotteryBallGrid } from './LotteryBallGrid';
import { SelectedBall } from './SelectedBall';
import { DrawTimeSelect } from './DrawTimeSelect';
import { BetInput } from '../BetInput';
import { BettingStats, LotteryGame } from '../../types/lottery';
import { hasAvailableDraws } from '../../utils/timeUtils';
import { isDuplicateNumber } from '../../utils/validation';

interface SelectionStepProps {
  firstNumber: string | null;
  secondNumber: string | null;
  selectedTime: string;
  onSelectNumber: (position: 'first' | 'second', number: string) => void;
  onTimeSelect: (time: string) => void;
  onBetSubmit: (amount: number) => void;
  bettingStats: BettingStats;
  walletBalance: number;
  game: LotteryGame;
}

export const SelectionStep: React.FC<SelectionStepProps> = ({
  firstNumber,
  secondNumber,
  selectedTime,
  onSelectNumber,
  onTimeSelect,
  onBetSubmit,
  bettingStats,
  walletBalance,
  game,
}) => {
  const currentPosition = !firstNumber ? 'first' : !secondNumber ? 'second' : null;
  const showBetInput = firstNumber && secondNumber && hasAvailableDraws();
  
  const handleNumberSelect = (position: 'first' | 'second', number: string) => {
    if (isDuplicateNumber(firstNumber, secondNumber, number)) {
      return;
    }
    onSelectNumber(position, number);
  };

  if (!hasAvailableDraws() && !showBetInput) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-700">
          No more draws available for today. Please come back tomorrow.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Game Info */}
      <div className="bg-gray-700 rounded-lg p-4">
        <h2 className="text-white font-semibold mb-2">{game.name}</h2>
        <p className="text-gray-300 text-sm">Prize: ₱{game.prize.toLocaleString()}</p>
        <p className="text-gray-300 text-sm mt-1">
          Choose numbers between {game.minNumber} and {game.maxNumber}
        </p>
      </div>

      {/* Selected Numbers */}
      <div className="space-y-2">
        {firstNumber && (
          <SelectedBall number={firstNumber} position="first" />
        )}
        {secondNumber && (
          <SelectedBall number={secondNumber} position="second" />
        )}
      </div>

      {/* Draw Time Selection */}
      {showBetInput && (
        <DrawTimeSelect
          selectedTime={selectedTime}
          onTimeSelect={onTimeSelect}
        />
      )}

      {/* Bet Input or Ball Selection */}
      {showBetInput ? (
        <BetInput
          onBetSubmit={onBetSubmit}
          minBet={game.betAmount}
          walletBalance={walletBalance}
        />
      ) : currentPosition && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Select {currentPosition === 'first' ? 'First' : 'Second'} Number
          </h3>
          <LotteryBallGrid
            selectedNumbers={[]}
            onNumberSelect={(number) => handleNumberSelect(currentPosition, number)}
            bettingStats={bettingStats}
            position={currentPosition}
            gameId={game.id}
            disabledNumbers={currentPosition === 'second' ? [firstNumber!] : []}
          />
        </div>
      )}
    </div>
  );
};