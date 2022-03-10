import React, { useEffect, useState } from 'react';
import AnswerGrid from './answerGrid/AnswerGrid';
import Keyboard from './keyboard/Keyboard';
import { START_DATE } from '../constants/settings';
import { ANSWER_LIST } from '../constants/answerList';
import { TODAY_ANSWER } from '../constants/settings';

const GameController = () => {
  const [gameActive, setGameActive] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [guesses, setGuesses] = useState(['helll', 'ppppz', 'lelos']);
  const [currentGuess, setCurrentGuess] = useState('hem  ');

  // Handles the user clicking on the keyboard with their mouse
  const handleClick = (event) => {
    if (event.target.matches('[data-key]')) {
      console.log(event.target.dataset.key);
      return;
    }
    if (event.target.matches('[data-backspace]')) {
      console.log(event.target.dataset.backspace);
      return;
    }
    if (event.target.matches('[data-enter]')) {
      console.log(event.target.dataset.enter);
      return;
    }
  };

  // Handles keyboard input by the user
  useEffect(() => {
    const handleKeyPress = (event) => {
      //regex to fire function only if a letter key is pressed
      if (event.key.match(/(\b[a-z{1}]\b)/)) {
        console.log(`letter key: ${event.key}`);
        return;
      }
      if (event.key === 'Backspace' || event.key === 'Delete') {
        console.log(`backspace: ${event.key}`);
        return;
      }
      if (event.key === 'Enter') {
        console.log(`enter: ${event.key}`);
        return;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <AnswerGrid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard handleClick={handleClick} />
    </div>
  );
};

export default GameController;
