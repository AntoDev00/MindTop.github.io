import { createContext, useContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

// Importiamo i suoni dalla cartella assets/sounds esistente
import natureSounds from '../assets/sounds/NatureSound.mp3';
import rainSounds from '../assets/sounds/RainSound.mp3';
import oceanSounds from '../assets/sounds/SeaSound.mp3';

// Nessun suono iniziale o finale, solo musica ambientale


// Suoni ambientali con descrizione e durata
export const ambientSounds = {
  natura: {
    path: natureSounds,
    description: 'Suoni della natura',
    duration: 300 // 5 minuti
  },
  pioggia: {
    path: rainSounds,
    description: 'Pioggia rilassante',
    duration: 300 // 5 minuti
  },
  oceano: {
    path: oceanSounds,
    description: 'Onde del mare',
    duration: 300 // 5 minuti
  },
  silenzio: null
};

const MeditationContext = createContext();

export const useMeditation = () => useContext(MeditationContext);

export const MeditationProvider = ({ children }) => {
  // Stati per il timer
  const [duration, setDuration] = useState(10); // Durata in minuti (default: 10)
  const [remainingTime, setRemainingTime] = useState(duration * 60); // Tempo rimanente in secondi
  const [isActive, setIsActive] = useState(false); // Timer attivo?
  const [isPaused, setIsPaused] = useState(false); // Timer in pausa?
  const [completedSessions, setCompletedSessions] = useState(0); // Sessioni completate
  const [currentSound, setCurrentSound] = useState('silenzio'); // Suono di sottofondo
  const [soundVolume, setSoundVolume] = useState(0.5); // Volume del suono (0-1)
  const [sound, setSound] = useState(null); // Istanza del suono attuale

  // Riproduzione suoni
  const playSound = (soundObj) => {
    if (sound) {
      sound.stop();
    }
    
    if (!soundObj) return;
    
    const newSound = new Howl({
      src: [soundObj.path],
      loop: true, // Riproduzione in loop se il timer supera la durata del suono
      volume: soundVolume
    });
    
    setSound(newSound);
    newSound.play();
  };

  // Effetto per gestire il cambiamento del suono di sottofondo
  useEffect(() => {
    if (currentSound && ambientSounds[currentSound]) {
      // Passa l'oggetto del suono completo alla funzione playSound
      playSound(ambientSounds[currentSound]);
    } else if (sound) {
      sound.stop();
      setSound(null);
    }
    
    return () => {
      if (sound) {
        sound.stop();
      }
    };
  }, [currentSound]);

  // Effetto per gestire il volume
  useEffect(() => {
    if (sound) {
      sound.volume(soundVolume);
    }
  }, [soundVolume, sound]);

  // Effetto per gestire il timer
  useEffect(() => {
    let interval = null;
    
    if (isActive && !isPaused) {
      // Inizia il conteggio immediatamente
      interval = setInterval(() => {
        setRemainingTime((time) => {
          if (time <= 1) {
            clearInterval(interval);
            handleComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  // Aggiorna remainingTime quando cambia la durata
  useEffect(() => {
    if (!isActive) {
      setRemainingTime(duration * 60);
    }
  }, [duration, isActive]);

  // Gestione completamento sessione
  const handleComplete = () => {
    // Nessun suono finale
    setIsActive(false);
    setIsPaused(false);
    setRemainingTime(duration * 60);
    setCompletedSessions(prev => prev + 1);
  };

  // Avvio del timer
  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  // Pausa del timer
  const pauseTimer = () => {
    setIsPaused(true);
  };

  // Ripresa del timer
  const resumeTimer = () => {
    setIsPaused(false);
  };

  // Reset del timer
  const resetTimer = () => {
    // Ferma il timer
    setIsActive(false);
    setIsPaused(false);
    setRemainingTime(duration * 60);
    
    // Ferma la musica
    if (sound) {
      sound.stop();
    }
    
    // Reset al suono selezionato (nessun suono attivo)
    setSound(null);
  };

  // Formattazione del tempo rimanente
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Valori forniti dal context
  const value = {
    duration,
    setDuration,
    remainingTime,
    isActive,
    isPaused,
    currentSound,
    setCurrentSound,
    soundVolume,
    setSoundVolume,
    completedSessions,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
    formatTime,
    availableSounds: Object.keys(ambientSounds)
  };

  return (
    <MeditationContext.Provider value={value}>
      {children}
    </MeditationContext.Provider>
  );
};
