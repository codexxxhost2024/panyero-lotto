import React, { useMemo } from 'react';
import { Trophy, Timer, DollarSign } from 'lucide-react';
import { LATEST_DRAW_RESULT, LOTTERY_GAMES } from '../utils/constants';
import { formatCurrency } from '../utils/formatters';
import { useCountdown } from '../hooks/useCountdown';
import { getWinningF2Digits } from '../utils/lotteryUtils';

export function TopBanner() {
  const game = useMemo(() => LOTTERY_GAMES.find(g => g.id === '6-49'), []);
  const countdown = useCountdown(game?.nextDrawDate || new Date());
  const winningDigits = useMemo(() => getWinningF2Digits(), []);
  
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand and Title */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Trophy className="w-12 h-12 text-yellow-300" />
              <div className="absolute inset-0 animate-pulse bg-yellow-300/30 rounded-full blur-xl"></div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight">Panyero F2-Digits</h1>
              <p className="text-sm text-gray-200">
                Reference of Philippine Charity Sweepstakes
              </p>
            </div>
          </div>

          {/* Latest Draw Results */}
          <div className="flex-1 max-w-2xl w-full">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/10">
              <div className="text-center space-y-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-yellow-300">
                    {LATEST_DRAW_RESULT.gameType}
                  </h2>
                  <p className="text-base text-gray-300">
                    {new Date(LATEST_DRAW_RESULT.drawDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} {new Date(LATEST_DRAW_RESULT.drawDate).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full">
                    <div className="text-sm text-gray-300 mb-2">Winning Numbers:</div>
                    <div className="font-mono text-2xl tracking-[0.5em] font-bold bg-white/10 rounded-lg py-3 px-6">
                      {LATEST_DRAW_RESULT.winningNumbers}
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-20 blur-xl"></div>
                      <div className="relative bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg p-6">
                        <div className="text-sm text-yellow-200 mb-2">F2-Digit Winning #:</div>
                        <div className="font-mono text-4xl font-bold text-yellow-300 tracking-[0.25em] flex items-center justify-center">
                          <span className="bg-yellow-300/10 rounded-lg px-4 py-2">{winningDigits.first}</span>
                          <span className="mx-4 text-yellow-300/50">-</span>
                          <span className="bg-yellow-300/10 rounded-lg px-4 py-2">{winningDigits.second}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Draw Info */}
          <div className="text-right space-y-4">
            <div className="bg-white/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 justify-end">
                <Timer className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">Next Draw In:</span>
              </div>
              <div className="font-mono text-xl font-bold text-yellow-300">
                {countdown.days}d {countdown.hours}h {countdown.minutes}m
              </div>
              <div className="flex items-center gap-2 justify-end pt-2 border-t border-white/10">
                <DollarSign className="w-5 h-5 text-green-300" />
                <span className="text-sm">
                  Est. Jackpot: {formatCurrency(game?.jackpot || 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prize Tiers */}
      <div className="bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {LATEST_DRAW_RESULT.prizeTiers.map((tier) => (
              <div key={tier.matches} className="text-center bg-white/5 rounded-lg p-3">
                <div className="text-sm text-gray-300">{tier.matches} Matches</div>
                <div className="font-medium text-yellow-300 text-lg">{formatCurrency(tier.prize)}</div>
                <div className="text-xs text-gray-300">{tier.winners} Winners</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}