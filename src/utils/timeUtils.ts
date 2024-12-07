import { format, parse, isAfter, addDays } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { DRAW_SCHEDULES } from './constants';

export const getPhilippineTime = (): Date => {
  const now = new Date();
  return utcToZonedTime(now, 'Asia/Manila');
};

export const getNextDrawTime = (targetTime: string): Date => {
  const phTime = getPhilippineTime();
  const today = format(phTime, 'yyyy-MM-dd');
  const targetDateTime = parse(`${today} ${targetTime}`, 'yyyy-MM-dd HH:mm', new Date());
  
  if (isAfter(phTime, targetDateTime)) {
    return addDays(targetDateTime, 1);
  }
  
  return targetDateTime;
};

export const getAvailableDrawTimes = () => {
  const phTime = getPhilippineTime();
  const currentTimeStr = format(phTime, 'HH:mm');
  
  return DRAW_SCHEDULES.filter(schedule => {
    const drawTime = parse(schedule.time, 'HH:mm', new Date());
    return format(drawTime, 'HH:mm') > currentTimeStr;
  });
};

export const hasAvailableDraws = (): boolean => {
  return getAvailableDrawTimes().length > 0;
};

export const formatDrawTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  
  return format(date, 'h:mm a');
};

export const isDrawTimeAvailable = (drawTime: string): boolean => {
  const phTime = getPhilippineTime();
  const [hours, minutes] = drawTime.split(':');
  const drawDate = new Date(phTime);
  drawDate.setHours(parseInt(hours, 10));
  drawDate.setMinutes(parseInt(minutes, 10));
  
  return isAfter(drawDate, phTime);
};