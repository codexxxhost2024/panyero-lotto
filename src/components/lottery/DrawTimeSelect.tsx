import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { getAvailableDrawTimes, formatDrawTime } from '../../utils/timeUtils';

interface DrawTimeSelectProps {
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

export const DrawTimeSelect: React.FC<DrawTimeSelectProps> = ({
  selectedTime,
  onTimeSelect,
}) => {
  const availableDraws = getAvailableDrawTimes();
  
  if (availableDraws.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-2 text-yellow-500">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">No more draws available for today</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="flex items-center gap-2 text-white mb-3">
        <Clock className="w-5 h-5" />
        <span className="font-medium">Today's Draw</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {availableDraws.map((schedule) => (
          <button
            key={schedule.id}
            onClick={() => onTimeSelect(schedule.id)}
            className={`
              py-2 px-4 rounded-lg
              ${selectedTime === schedule.id 
                ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 ring-offset-2 ring-offset-gray-800' 
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              text-sm font-medium
            `}
          >
            {formatDrawTime(schedule.time)}
          </button>
        ))}
      </div>
    </div>
  );
};