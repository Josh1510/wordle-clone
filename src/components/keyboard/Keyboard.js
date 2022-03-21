import React, { useEffect } from 'react';
import { ReactComponent as BackspaceImg } from '../../backspace.svg';
import './Keyboard.css';

const Keyboard = ({ currentGuess, onKeyPress, onBackspace, onEnter }) => {
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
        <button className="keyboard__key" data-key="Q">
          Q
        </button>
        <button className="keyboard__key" data-key="W">
          W
        </button>
        <button className="keyboard__key" data-key="E">
          E
        </button>
        <button className="keyboard__key" data-key="R">
          R
        </button>
        <button className="keyboard__key" data-key="T">
          T
        </button>
        <button className="keyboard__key" data-key="Y">
          Y
        </button>
        <button className="keyboard__key" data-key="U">
          U
        </button>
        <button className="keyboard__key" data-key="I">
          I
        </button>
        <button className="keyboard__key" data-key="O">
          O
        </button>
        <button className="keyboard__key" data-key="P">
          P
        </button>
        <div className="keyboard__buttonSpace"></div>
        <button className="keyboard__key" data-key="A">
          A
        </button>
        <button className="keyboard__key" data-key="S">
          S
        </button>
        <button className="keyboard__key" data-key="D">
          D
        </button>
        <button className="keyboard__key" data-key="F">
          F
        </button>
        <button className="keyboard__key" data-key="G">
          G
        </button>
        <button className="keyboard__key" data-key="H">
          H
        </button>
        <button className="keyboard__key" data-key="J">
          J
        </button>
        <button className="keyboard__key" data-key="K">
          K
        </button>
        <button className="keyboard__key" data-key="L">
          L
        </button>
        <div className="keyboard__buttonSpace"></div>
        <button className="keyboard__key keyboard__large" data-enter>
          ENTER
        </button>
        <button className="keyboard__key" data-key="Z">
          Z
        </button>
        <button className="keyboard__key" data-key="X">
          X
        </button>
        <button className="keyboard__key" data-key="C">
          C
        </button>
        <button className="keyboard__key" data-key="V">
          V
        </button>
        <button className="keyboard__key" data-key="B">
          B
        </button>
        <button className="keyboard__key" data-key="N">
          N
        </button>
        <button className="keyboard__key" data-key="M">
          M
        </button>
        <button className="keyboard__key keyboard__large" data-backspace="backspace">
          <BackspaceImg className="keyboard__backspace" />
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
