import React from 'react';
import { History, Trophy, Calendar, Clock, ChevronRight } from 'lucide-react';
import { WINNING_HISTORY } from '../utils/constants';
import { formatCurrency } from '../utils/formatters';

export function WinningHistory() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <History className="w-8 h-8 text-yellow-300" />
              <div className="absolute inset-0 animate-pulse bg-yellow-300/30 rounded-full blur-xl"></div>
            </div>
            <h2 className="text-2xl font-bold">Winning History</h2>
          </div>
          <button className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid gap-6">
          {WINNING_HISTORY.map((result) => (
            <div 
              key={result.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-yellow-500/30 transition-colors"
            >
              <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
                      {result.gameType}
                      <Trophy className="w-5 h-5" />
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(result.drawDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {new Date(result.drawDate).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Winning Numbers</div>
                      <div className="font-mono text-lg tracking-wider bg-white/5 rounded-lg px-4 py-2">
                        {result.winningNumbers}
                      </div>
                    </div>
                    <div className="text-center px-6 py-3 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg border border-yellow-500/30">
                      <div className="text-sm text-yellow-300 mb-1">F2-Digit Winner</div>
                      <div className="font-mono text-3xl font-bold text-yellow-400">
                        {result.firstTwoDigits}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {result.prizeTiers.map((tier) => (
                    <div 
                      key={tier.matches}
                      className="bg-white/5 rounded-lg p-4 text-center border border-white/5 hover:border-yellow-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm text-gray-300">
                          {tier.matches} Matches
                        </span>
                      </div>
                      <div className="text-lg font-medium text-yellow-300">
                        {formatCurrency(tier.prize)}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {tier.winners.toLocaleString()} Winner{tier.winners !== 1 ? 's' : ''}
                      </div>
                    </div>
                  ))}
                </div>

                {result.historicalNote && (
                  <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-sm text-yellow-200">{result.historicalNote}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}