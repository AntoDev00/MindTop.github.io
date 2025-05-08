import { useEffect, useState } from 'react';
import { FaPlay, FaPause, FaStop, FaPlus, FaMinus } from 'react-icons/fa';
import { useMeditation } from '../../context/MeditationContext';
import './Timer.css';

const Timer = () => {
  const {
    duration,
    setDuration,
    remainingTime,
    isActive,
    isPaused,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    formatTime
  } = useMeditation();

  const [progress, setProgress] = useState(100);

  // Aggiorna la percentuale di progresso
  useEffect(() => {
    const totalSeconds = duration * 60;
    const percentage = (remainingTime / totalSeconds) * 100;
    setProgress(percentage);
  }, [remainingTime, duration]);

  // Gestione incremento/decremento della durata
  const increaseDuration = () => {
    if (!isActive && duration < 60) {
      setDuration(prev => prev + 5);
    }
  };

  const decreaseDuration = () => {
    if (!isActive && duration > 5) {
      setDuration(prev => prev - 5);
    }
  };

  // Gestione del timer
  const handleTimerControl = () => {
    if (!isActive) {
      startTimer();
    } else if (isPaused) {
      resumeTimer();
    } else {
      pauseTimer();
    }
  };

  return (
    <div className="timer-container">
      {/* Progress Circle */}
      <div className="timer-circle-container">
        <div className="timer-circle">
          <svg className="timer-progress" viewBox="0 0 100 100">
            <circle
              className="timer-progress-bg"
              cx="50"
              cy="50"
              r="45"
              strokeWidth="5"
              fill="none"
            />
            <circle
              className="timer-progress-fill"
              cx="50"
              cy="50"
              r="45"
              strokeWidth="5"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="timer-display">
            {formatTime(remainingTime)}
          </div>
        </div>
      </div>

      {/* Duration Controls (visibili solo quando il timer è inattivo) */}
      {!isActive && (
        <div className="duration-control">
          <button onClick={decreaseDuration} className="duration-btn" disabled={isActive || duration <= 5}>
            <FaMinus />
          </button>
          <span className="duration-value">{duration} min</span>
          <button onClick={increaseDuration} className="duration-btn" disabled={isActive || duration >= 60}>
            <FaPlus />
          </button>
        </div>
      )}

      {/* Controlli del timer */}
      <div className="timer-controls">
        <button onClick={handleTimerControl} className="timer-btn primary-btn">
          {!isActive ? <FaPlay /> : isPaused ? <FaPlay /> : <FaPause />}
          <span>{!isActive ? 'Inizia' : isPaused ? 'Riprendi' : 'Pausa'}</span>
        </button>
        
        {(isActive || isPaused) && (
          <button onClick={resetTimer} className="timer-btn secondary-btn">
            <FaStop />
            <span>Stop</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
