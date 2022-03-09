import React, { useState } from 'react';
import './AnswerGrid.css';
import { MAX_WORD_LENGTH, MAX_ATTEMPTS } from '../../constants/settings';
import EmptyRow from './EmptyRow';

const AnswerGrid = () => {
  let guesses = [];

  let emptyRows = Array.from({ length: MAX_ATTEMPTS - guesses.length }, (v, i) => i);

  console.log(emptyRows);
  return (
    <div className="answer-grid-container">
      {emptyRows.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};

export default AnswerGrid;
