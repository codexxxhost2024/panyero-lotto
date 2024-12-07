import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import type { Bet } from '../types/lottery';
import { playSuccessSound } from '../utils/sound';

interface SuccessPageProps {
  bet: Bet;
  onComplete: () => void;
}

export function SuccessPage({ bet, onComplete }: SuccessPageProps) {
  useEffect(() => {
    playSuccessSound();
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bet Placed Successfully!</h2>
        <p className="text-gray-600 mb-4">
          Your bet for numbers {bet.combination} has been confirmed.
        </p>
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-green-800">
            Your receipt will be displayed shortly...
          </p>
        </div>
      </div>
    </div>
  );
}