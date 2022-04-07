import React, { useEffect } from 'react';
import { ReactComponent as BackspaceImg } from '../../backspace.svg';
import './Keyboard.css';

const Keyboard = ({ currentGuess, onKeyPress, onBackspace, onEnter }) => {
  const topRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  // Handles the user clicking on the keyboard with their mouse
  const handleClick = (event) => {
    if (event.target.matches('[data-key]')) {
      onKeyPress(event.target.dataset.key);
      return;
    }
    if (event.target.matches('[data-backspace]') && currentGuess.length > 0) {
      onBackspace();
      return;
    }
    if (event.target.matches('[data-enter]')) {
      onEnter();
    }
  };

  // Handles keyboard input by the user
  useEffect(() => {
    const handleKeyPress = (event) => {
      //regex to fire function only if a letter key is pressed
      if (event.key.match(/(\b[a-z{1}]\b)/)) {
        onKeyPress(event.key);
        return;
      }
      if (event.key === 'Backspace' || event.key === 'Delete') {
        onBackspace();
        return;
      }
      if (event.key === 'Enter') {
        onEnter();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onKeyPress, onBackspace, onEnter]);

  return (
    <div className="keyboard-container">
      <div className="keyboard" onClick={handleClick} data-keyboard>
        {topRow.map((letter) => (
          <button className="keyboard__key" data-key={letter}>
            <div className="letter-container">{letter}</div>
          </button>
        ))}

        <div className="keyboard__buttonSpace"></div>
        {middleRow.map((letter) => (
          <button className="keyboard__key" data-key={letter}>
            <div className="letter-container">{letter}</div>
          </button>
        ))}
        <div className="keyboard__buttonSpace"></div>
        <button className="keyboard__key keyboard__large" data-enter>
          ENTER
        </button>
        {bottomRow.map((letter) => (
          <button className="keyboard__key" data-key={letter}>
            <div className="letter-container">{letter}</div>
          </button>
        ))}
        <button className="keyboard__key keyboard__large" data-backspace="backspace">
          <BackspaceImg className="keyboard__backspace" />
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
