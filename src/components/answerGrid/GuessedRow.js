import React from 'react';
import { TODAY_ANSWER } from '../../constants/settings';

export default function GuessedRow({ guess }) {
  // convert the guess and answer into an array so they can be mapped
  let rowGuess = Array.from(guess);
  let answer = Array.from(TODAY_ANSWER);

  // return the first index of matching letter
  const findIndex = (letter) => {
    return answer.indexOf(letter);
  };

  // checks if the letter is in the answer, returns data-state 'correct' if it's
  // in the correct position, 'incorrect-position' if it's in the word but wrong spot,
  // 'incorrect' if it's not in the word
  const checkGuess = (letter, i) => {
    if (TODAY_ANSWER[i] === letter) {
      answer.splice(findIndex(letter), 1);
      return 'correct';
    }
    if (answer.includes(letter)) {
      answer.splice(findIndex(letter), 1);
      return 'incorrect-position';
    }
    return 'incorrect';
  };

  return (
    <div className="answer-grid__row">
      {rowGuess.map((letter, i) => (
        <div className="answer-grid__tile" data-state={checkGuess(letter, i)} key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
}
