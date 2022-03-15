import React, { useState } from 'react';
import './AnswerGrid.css';
import { MAX_WORD_LENGTH, MAX_ATTEMPTS } from '../../constants/settings';
import GuessedRow from './GuessedRow';
import CurrentRow from './CurrentRow';
import EmptyRow from './EmptyRow';

const AnswerGrid = ({ guesses, currentGuess, notEnoughLetters, setAlertVisible, setErrorMessage }) => {
  let emptyRows = Array.from({ length: MAX_ATTEMPTS - guesses.length - 1 }, (v, i) => i);

  return (
    <div className="answer-grid-container">
      {guesses.map((guess, i) => (
        <GuessedRow key={i} guess={guess} />
      ))}

      <CurrentRow
        currentGuess={currentGuess}
        notEnoughLetters={notEnoughLetters}
        setAlertVisible={setAlertVisible}
        setErrorMessage={setErrorMessage}
      />

      {emptyRows.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};

export default AnswerGrid;
