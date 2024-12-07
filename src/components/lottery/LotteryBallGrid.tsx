import React from 'react';
import { LotteryBall } from './LotteryBall';
import { LotteryBallGridProps } from './types';
import { calculateBallUsage } from './utils/usageCalculator';
import { chunk } from './utils/arrayUtils';
import { getGameRange } from '../../utils/validation';

export const LotteryBallGrid: React.FC<LotteryBallGridProps> = ({
  selectedNumbers,
  onNumberSelect,
  bettingStats,
  position,
  gameId,
  disabledNumbers = []
}) => {
  const range = getGameRange(gameId);
  const numbers = Array.from(
    { length: range.max - range.min + 1 },
    (_, i) => String(i + range.min).padStart(2, '0')
  );

  const rows = chunk(numbers, 5);

  return (
    <div className="w-full overflow-hidden bg-gray-800 rounded-xl p-2">
      <div className="space-y-2">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="grid grid-cols-5 gap-2 justify-items-center"
          >
            {row.map((number) => {
              const usage = calculateBallUsage(number, position, bettingStats);
              const isDisabled = usage >= 1 || disabledNumbers.includes(number);
              const isSelected = selectedNumbers.includes(number);
              
              return (
                <div key={number} className="flex justify-center">
                  <LotteryBall
                    number={number}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    usage={usage}
                    onClick={() => onNumberSelect(number)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};