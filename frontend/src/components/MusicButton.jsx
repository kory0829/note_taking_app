import React, { useState, useEffect } from 'react';
import song1 from '../assets/song1.mp3';
import song2 from '../assets/song2.mp3';
import song3 from '../assets/song3.mp3';

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [audio, setAudio] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const songs = [song1, song2, song3];

  useEffect(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setAudio(new Audio(songs[currentSong]));
  }, [currentSong]);

  const handlePlay = () => {
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleNextSong = () => {
    handlePause();
    setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
    handlePlay();
  };

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', handleNextSong);
      return () => {
        audio.removeEventListener('ended', handleNextSong);
      };
    }
  }, [audio, handleNextSong]);

  return (
    <div className="music-button-container">
      <button
        className={`music-button ${isPlaying ? 'glow' : ''}`}
        onClick={() => setShowTooltip(true)}
      >
        {isPlaying ? '▶' : '🎵'}
      </button>
      {showTooltip && (
        <div className="tooltip">
          <button className="tooltip-button" onClick={handlePlay}>
            ▶
          </button>
          <button className="tooltip-button" onClick={handlePause}>
            ⏸
          </button>
          <button className="tooltip-button" onClick={handleNextSong}>
            ⏭
          </button>
          <span className="tooltip-text">
            playing: Song {currentSong + 1}
          </span>
          <button
            className="tooltip-close"
            onClick={() => setShowTooltip(false)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default MusicButton;

