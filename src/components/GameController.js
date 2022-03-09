import React, { useEffect, useState } from 'react';
import AnswerGrid from './answerGrid/AnswerGrid';
import Keyboard from './keyboard/Keyboard';

const GameController = () => {
  const [gameActive, setGameActive] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

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

  // const letterPressed = (key) => {
  //     document.querySelector
  // }

  return (
    <div>
      <AnswerGrid />
      <Keyboard handleClick={handleClick} />
    </div>
  );
};

export default GameController;
