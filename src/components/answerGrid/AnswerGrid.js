import React from 'react';
import './AnswerGrid.css';
import { MAX_ATTEMPTS } from '../../constants/settings';
import GuessedRow from './GuessedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

const AnswerGrid = ({ guesses, currentGuess, isAnimating, markKeyboard }) => {
  const emptyRows = guesses.length < MAX_ATTEMPTS - 1 ? Array.from(Array(MAX_ATTEMPTS - 1 - guesses.length)) : [];

  return (
    <div className="answer-grid-container">
      {guesses.map((guess, i) => (
        <GuessedRow key={i} guess={guess} markKeyboard={markKeyboard} />
      ))}

      {guesses.length < MAX_ATTEMPTS && <CurrentRow currentGuess={currentGuess} isAnimating={isAnimating} />}

      {emptyRows.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};

export default AnswerGrid;
