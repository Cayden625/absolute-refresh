import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// World Championship date - April 29, 2026
const WORLD_CHAMPIONSHIP_DATE = new Date('2026-04-29T00:00:00');

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = WORLD_CHAMPIONSHIP_DATE.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-strong rounded-2xl p-6 md:p-8 max-w-xl mx-auto"
    >
      <h3 className="text-center text-lg font-display font-semibold text-muted-foreground mb-4">
        WORLD CHAMPIONSHIP
      </h3>
      <div className="flex justify-center gap-3 md:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="glass rounded-xl p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <span className="countdown-number">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground mt-2 font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
