import React from 'react';
import { TODAY_ANSWER } from '../../constants/settings';

export default function GuessedRow({ guess, markKeyboard }) {
  // convert the guess and answer into an array so they can be mapped
  let rowGuess = Array.from(guess);
  let answer = Array.from(TODAY_ANSWER);

  let results = ['incorrect', 'incorrect', 'incorrect', 'incorrect', 'incorrect'];

  // return the first index of matching letter
  const findIndex = (letter) => {
    return answer.indexOf(letter);
  };

  // checks if the letter is in the answer, sets the data-state on the
  // row and the keyboard to 'correct', 'incorrect-position', or
  // 'incorrect' depending on result
  const checkGuess = () => {
    for (let i = 0; i < answer.length; i++) {
      if (TODAY_ANSWER[i] === rowGuess[i]) {
        results.splice(i, 1, 'correct');
        answer.splice(i, 1, '');
        markKeyboard(rowGuess[i], 'correct');
      }
      if (!answer.includes(rowGuess[i])) {
        markKeyboard(rowGuess[i], 'incorrect');
      }
      if (answer.includes(rowGuess[i])) {
        results.splice(i, 1, 'incorrect-position');
        answer.splice(findIndex(rowGuess[i]), 1, '');
        markKeyboard(rowGuess[i], 'incorrect-position');
      }
    }
  };

  // check users guess against the answer
  checkGuess();

  return (
    <div className="answer-grid__row">
      {rowGuess.map((letter, i) => (
        <div className="answer-grid__tile result-reveal" data-state={results[i]} key={i}>
          <div className="letter-container">{letter}</div>
        </div>
      ))}
    </div>
  );
}
