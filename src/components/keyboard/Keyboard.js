import React, { useEffect } from 'react';
import { ReactComponent as BackspaceImg } from '../../backspace.svg';
import './Keyboard.css';
import { ALLOWED_GUESSES } from '../../constants/allowedGuesses';
import { ANSWER_LIST } from '../../constants/answerList';

const Keyboard = ({ currentGuess, setCurrentGuess, guesses, setGuesses, setIsAnimating, setAlertVisible, setAlertMessage }) => {
  const onKeyPress = (key) => {
    setCurrentGuess((currentGuess) => [...currentGuess, key]);
  };

  const onBackspace = () => {
    setCurrentGuess((currentGuess) => [...currentGuess.slice(0, -1)]);
  };

  const onEnter = (guess) => {
    // If guess is allowed but not the correct guess move to next line
    if (ALLOWED_GUESSES.includes(guess) || ANSWER_LIST.includes(guess)) {
      setGuesses((guesses) => [...guesses, guess]);
      setCurrentGuess('');
      return;
    }

    //set the error message depending on the length of the guess
    guess.length < 5 ? setAlertMessage('Not Enough Letters') : setAlertMessage('Not in word list');

    // apply animation and show alert modal
    setIsAnimating('invalid');
    setAlertVisible(true);
    setTimeout(() => {
      setIsAnimating('');
      setAlertVisible(false);
      setAlertMessage('');
    }, 1500);
  };

  // Handles the user clicking on the keyboard with their mouse
  const handleClick = (event) => {
    if (currentGuess.length < 5 && event.target.matches('[data-key]')) {
      onKeyPress(event.target.dataset.key);
      return;
    }
    if (event.target.matches('[data-backspace]') && currentGuess.length > 0) {
      onBackspace();
      return;
    }
    if (event.target.matches('[data-enter]')) {
      onEnter(currentGuess.join('').toLowerCase());
    }
  };

  // Handles keyboard input by the user
  useEffect(() => {
    const handleKeyPress = (event) => {
      //regex to fire function only if a letter key is pressed
      if (currentGuess.length < 5 && event.key.match(/(\b[a-z{1}]\b)/)) {
        onKeyPress(event.key);
        return;
      }
      if (event.key === 'Backspace' || event.key === 'Delete') {
        onBackspace();
        return;
      }
      if (event.key === 'Enter') {
        onEnter(currentGuess.join('').toLowerCase());
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="keyboard" onClick={handleClick}>
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
  );
};

export default Keyboard;
