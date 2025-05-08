import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useMeditation } from '../../context/MeditationContext';
import { ambientSounds } from '../../context/MeditationContext';
import './SoundSelector.css';

const SoundSelector = () => {
  const { 
    currentSound, 
    setCurrentSound, 
    availableSounds,
    soundVolume,
    setSoundVolume
  } = useMeditation();

  const handleSoundChange = (sound) => {
    setCurrentSound(sound);
  };

  const handleVolumeChange = (e) => {
    setSoundVolume(parseFloat(e.target.value));
  };

  return (
    <div className="sound-selector">
      <h3 className="sound-selector-title">Suoni Ambientali</h3>
      
      <div className="sound-options">
        {availableSounds.map((sound) => (
          <button
            key={sound}
            className={`sound-option ${currentSound === sound ? 'active' : ''}`}
            onClick={() => handleSoundChange(sound)}
            title={sound !== 'silenzio' ? ambientSounds[sound].description : 'Nessun suono'}
          >
            {sound.charAt(0).toUpperCase() + sound.slice(1)}
          </button>
        ))}
      </div>
      
      {currentSound !== 'silenzio' && (
        <div className="volume-control">
          <FaVolumeMute />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={soundVolume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
          <FaVolumeUp />
        </div>
      )}
    </div>
  );
};

export default SoundSelector;
