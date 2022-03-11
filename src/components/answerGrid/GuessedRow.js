import React from 'react';
import { TODAY_ANSWER } from '../../constants/settings';

export default function GuessedRow({ guess }) {
  // convert the guess and answer into an array so they can be mapped
  let rowGuess = Array.from(guess);
  let answer = Array.from(TODAY_ANSWER);

  let results = ['incorrect', 'incorrect', 'incorrect', 'incorrect', 'incorrect'];

  // return the first index of matching letter
  const findIndex = (letter) => {
    return answer.indexOf(letter);
  };

  // checks if the letter is in the answer, returns data-state 'correct' if it's
  // in the correct position, 'incorrect-position' if it's in the word but wrong spot,
  // 'incorrect' if it's not in the word
  const checkGuess = () => {
    for (let i = 0; i < answer.length; i++) {
      if (TODAY_ANSWER[i] === rowGuess[i]) {
        results.splice(i, 1, 'correct');
        answer.splice(i, 1, '');
      }
    }
    for (let i = 0; i < answer.length; i++) {
      if (answer.includes(rowGuess[i])) {
        results.splice(i, 1, 'incorrect-position');
        answer.splice(findIndex(rowGuess[i]), 1, '');
      }
    }
  };

  checkGuess();

  return (
    <div className="answer-grid__row">
      {rowGuess.map((letter, i) => (
        <div className="answer-grid__tile" data-state={results[i]} key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
}
