import React from 'react';
import { MAX_WORD_LENGTH } from '../../constants/settings';

export default function CurrentRow({ currentGuess, isAnimating }) {
  // create an array to fill out the empty cells
  const roundGuess = Array.from(currentGuess);
  const emptyTiles = Array.from({ length: MAX_WORD_LENGTH - roundGuess.length }, (v, i) => i);

  return (
    <div className={`answer-grid__row ${isAnimating === 'invalid' ? 'invalid' : ''}`}>
      {roundGuess.map((letter, i) => (
        <div className="answer-grid__tile" data-state="notConfirmed" key={i}>
          {letter}
        </div>
      ))}
      {emptyTiles.map((i) => (
        <div className="answer-grid__tile" data-state="empty" key={i}></div>
      ))}
    </div>
  );
}
