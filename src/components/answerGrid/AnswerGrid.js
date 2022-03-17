import React, { useState } from 'react';
import './AnswerGrid.css';
import { MAX_WORD_LENGTH, MAX_ATTEMPTS } from '../../constants/settings';
import GuessedRow from './GuessedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

const AnswerGrid = ({ guesses, currentGuess, isAnimating, markKeyboard }) => {
  let emptyRows = Array.from({ length: MAX_ATTEMPTS - guesses.length - 1 }, (v, i) => i);

  return (
    <div className="answer-grid-container">
      {guesses.map((guess, i) => (
        <GuessedRow key={i} guess={guess} markKeyboard={markKeyboard} />
      ))}

      <CurrentRow currentGuess={currentGuess} isAnimating={isAnimating} />

      {emptyRows.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};

export default AnswerGrid;
