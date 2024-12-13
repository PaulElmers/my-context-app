import React from 'react';
import { useMusicPlayer } from './MusicPlayerContext';

const tracks = [
  { id: 1, title: 'Пісня 1', artist: 'Виконавець A' },
  { id: 2, title: 'Пісня 2', artist: 'Виконавець B' },
];

const MusicPlayer = () => {
  const { currentTrack, isPlaying, playTrack, togglePlay } = useMusicPlayer();

  return (
    <div>
      <h2>Музичний плеєр</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.title} - {track.artist}
            <button onClick={() => playTrack(track)}>Відтворити</button>
          </li>
        ))}
      </ul>
      {currentTrack && (
        <div>
          <h3>Зараз відтворюється: {currentTrack.title}</h3>
          <p>{isPlaying ? 'Відтворення' : 'Пауза'}</p>
          <button onClick={togglePlay}>
            {isPlaying ? 'Пауза' : 'Продовжити'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
