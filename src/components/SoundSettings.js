import React from 'react';
import { useSoundSettings } from './SoundSettingsContext';

const SoundSettings = () => {
  const { settings, updateVolume, toggleMute } = useSoundSettings();

  return (
    <div>
      <h2>Звукові налаштування</h2>
      <p>Гучність: {settings.muted ? 'Вимкнено' : settings.volume}</p>
      <button onClick={toggleMute}>
        {settings.muted ? 'Увімкнути звук' : 'Вимкнути звук'}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={settings.volume}
        onChange={(e) => updateVolume(Number(e.target.value))}
        disabled={settings.muted}
      />
    </div>
  );
};

export default SoundSettings;
