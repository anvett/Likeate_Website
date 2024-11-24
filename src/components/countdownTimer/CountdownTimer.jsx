// CountdownTimer.jsx
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetTime, onExpire, autoRestart = false }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (Object.keys(newTimeLeft).length === 0) {
        if (autoRestart) {
          setTimeLeft(calculateTimeLeft());
        } else {
          clearInterval(timer);
          if (onExpire) onExpire();
        }
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, autoRestart, onExpire]);

  return (
    <div className="countdown-container">
      {Object.keys(timeLeft).length ? (
        <>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-segment">
              <span className="countdown-time">{String(value).padStart(2, '0')}</span>
              <span className="countdown-label">{unit}</span>
            </div>
          ))}
        </>
      ) : (
        <span className="countdown-expired">Oferta terminada</span>
      )}
    </div>
  );
};

export default CountdownTimer;
