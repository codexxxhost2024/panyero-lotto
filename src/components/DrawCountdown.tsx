import React, { useMemo } from 'react';
import { Timer, DollarSign } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { formatCurrency } from '../utils/formatters';
import { getNextDrawTime } from '../utils/timeUtils';

export function DrawCountdown() {
  const nextDraw = useMemo(() => getNextDrawTime('16:00'), []);
  const countdown = useCountdown(nextDraw);
  const estimatedJackpot = 15000000;

  return (
    <div className="flex justify-center items-center py-6">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 shadow-xl text-white text-center max-w-md w-full">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Timer className="w-6 h-6 text-yellow-300" />
            <h2 className="text-xl font-bold">Next Draw In</h2>
          </div>

          <div className="font-mono text-3xl font-bold text-yellow-300">
            {countdown.days}d {countdown.hours}h {countdown.minutes}m
          </div>

          <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/10">
            <DollarSign className="w-5 h-5 text-green-300" />
            <span className="text-lg font-medium">
              Est. Jackpot: {formatCurrency(estimatedJackpot)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}