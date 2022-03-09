import React, { useEffect } from 'react';
import AnswerGrid from './AnswerGrid';
import Keyboard from './Keyboard';

const GameController = () => {
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
      <AnswerGrid />
      <Keyboard handleClick={handleClick} />
    </div>
  );
};

export default GameController;
