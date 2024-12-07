import { useState, useEffect, useCallback } from 'react';
import { DrawCountdown } from '../types/lottery';

export function useCountdown(targetDate: Date): DrawCountdown {
  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate.getTime() - new Date().getTime();
    const timeLeft = {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60))
    };
    return difference > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [countdown, setCountdown] = useState<DrawCountdown>(calculateTimeLeft);

  useEffect(() => {
    setCountdown(calculateTimeLeft());
    const timer = setInterval(() => setCountdown(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return countdown;
}