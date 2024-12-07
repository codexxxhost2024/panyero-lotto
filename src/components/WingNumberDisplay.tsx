import React from 'react';
import { AlertCircle, Wing } from 'lucide-react';
import { WingNumberResult } from '../types/lottery';

interface WingNumberDisplayProps {
  wingResult: WingNumberResult;
}

export function WingNumberDisplay({ wingResult }: WingNumberDisplayProps) {
  if (!wingResult.hasMatches) {
    return (
      <div className="bg-gray-800 rounded-lg p-4 text-gray-300 flex items-center gap-2">
        <AlertCircle className="w-5 h-5 text-yellow-500" />
        <span>No wing numbers found in winning combination</span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg p-6 border border-indigo-500/30">
      <div className="flex items-center gap-2 mb-4">
        <Wing className="w-6 h-6 text-yellow-300" />
        <h3 className="text-lg font-semibold text-white">Wing Numbers Found</h3>
      </div>

      <div className="space-y-4">
        {wingResult.matches.map((match, index) => (
          <div 
            key={index}
            className="bg-white/5 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="text-gray-400">Your Number:</div>
              <div className="font-mono text-xl font-bold text-white">
                {match.number}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-gray-400">Wing Number:</div>
              <div className="font-mono text-xl font-bold text-yellow-300">
                {match.wingNumber}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}