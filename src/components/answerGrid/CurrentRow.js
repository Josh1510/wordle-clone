import React from 'react';

export default function CurrentRow({ currentGuess }) {
  let rowGuess = Array.from(currentGuess);

  return (
    <div className="answer-grid__row">
      {rowGuess.map((letter, i) => (
        <div className="answer-grid__tile" data-state={letter === ' ' ? 'empty' : 'notConfirmed'} key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
}
