import React from 'react';
import { useGameProfile } from './GameProfileContext';

const GameProfile = () => {
  const { profile, updateProfile } = useGameProfile();

  return (
    <div>
      <h2>Ігровий профіль</h2>
      <p>Ім'я: {profile.name}</p>
      <p>Рівень: {profile.level}</p>
      <p>Очки: {profile.points}</p>
      <button onClick={() => updateProfile({ points: profile.points + 10 })}>
        Додати 10 очок
      </button>
    </div>
  );
};

export default GameProfile;
