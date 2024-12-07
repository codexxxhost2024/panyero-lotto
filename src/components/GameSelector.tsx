import React from 'react';
import { Ticket } from 'lucide-react';
import { LOTTERY_GAMES } from '../utils/constants';
import type { LotteryGame } from '../types/lottery';

interface GameSelectorProps {
  selectedGame: LotteryGame | null;
  onGameSelect: (game: LotteryGame) => void;
}

export function GameSelector({ selectedGame, onGameSelect }: GameSelectorProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center gap-2 text-white mb-4">
        <Ticket className="w-5 h-5" />
        <h2 className="font-medium">Select Game</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {LOTTERY_GAMES.map((game) => (
          <button
            key={game.id}
            onClick={() => onGameSelect(game)}
            className={`
              p-4 rounded-lg text-left transition-all
              ${selectedGame?.id === game.id 
                ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 ring-offset-2 ring-offset-gray-800' 
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }
            `}
          >
            <h3 className="font-semibold mb-1">{game.name}</h3>
            <p className="text-sm opacity-80">{game.description}</p>
            <div className="mt-2 text-sm">
              <span className="opacity-75">Prize: </span>
              <span className="font-medium">₱{game.prize.toLocaleString()}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}