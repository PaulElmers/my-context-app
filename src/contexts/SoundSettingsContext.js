import React, { createContext, useState, useContext } from 'react';

const SoundSettingsContext = createContext();

export const SoundSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({ volume: 50, muted: false });

  const updateVolume = (volume) => setSettings((prev) => ({ ...prev, volume }));
  const toggleMute = () => setSettings((prev) => ({ ...prev, muted: !prev.muted }));

  return (
    <SoundSettingsContext.Provider value={{ settings, updateVolume, toggleMute }}>
      {children}
    </SoundSettingsContext.Provider>
  );
};

export const useSoundSettings = () => useContext(SoundSettingsContext);
