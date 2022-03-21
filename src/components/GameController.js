import React, { useState } from 'react';
import AnswerGrid from './answerGrid/AnswerGrid';
import Keyboard from './keyboard/Keyboard';

import { ANSWER_LIST } from '../constants/answerList';
import { TODAY_ANSWER } from '../constants/settings';
import { ALLOWED_GUESSES } from '../constants/allowedGuesses';
import Alert from './alert/Alert';

const GameController = () => {
  const [isGameActive, setGameActive] = useState(true);
  const [isGameWon, setGameWon] = useState(false);

  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);

  const [isAnimating, setIsAnimating] = useState('');

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const applyAnimation = (animation, animationTime) => {
    // apply animation for set duration
    setIsAnimating(animation);
    setTimeout(() => {
      setIsAnimating('');
    }, animationTime);
  };

  // display alerts on screen
  const showAlert = (alert, alertTime) => {
    setAlertMessage(alert);
    setAlertVisible(true);
    if (!isNaN(alertTime)) {
      setTimeout(() => {
        setAlertVisible(false);
        setAlertMessage('');
      }, alertTime);
    }
  };

  // change the keyboard colours depending on guess results
  const markKeyboard = (letter, result) => {
    const keyToFlip = document.querySelector(`[data-keyboard] [data-key=${letter.toUpperCase()}]`);
    if (keyToFlip.dataset.state === 'correct') return;

    keyToFlip.dataset.state = result;
  };

  // set the game to over
  const gameOver = (status) => {
    if (status === 'win') {
      setGameWon(true);
      showAlert(`Winner! Congratulations ${TODAY_ANSWER} was todays word! Come back again tomorrow for a new word!`);
    } else {
      showAlert(`Game Over! Todays word was ${TODAY_ANSWER}. Try again tomorrow!`);
    }
    setGameActive(false);
  };

  // handle key/letter presses
  const onKeyPress = (key) => {
    if (currentGuess.length < 5 && isGameActive) {
      setCurrentGuess((currentGuess) => [...currentGuess, key]);
      return;
    }
    return;
  };

  // handle backspace presses
  const onBackspace = () => {
    if (isGameActive) {
      setCurrentGuess((currentGuess) => [...currentGuess.slice(0, -1)]);
      return;
    }
    return;
  };

  // handle enter presses
  const onEnter = () => {
    if (!isGameActive) return;

    // If guess is allowed but not the correct guess move to next line
    let guess = currentGuess.join('').toLowerCase();

    if (ALLOWED_GUESSES.includes(guess) || ANSWER_LIST.includes(guess)) {
      setGuesses((guesses) => [...guesses, guess]);

      // check if the game is over
      if (guess === TODAY_ANSWER || guesses.length === 5) {
        if (guess === TODAY_ANSWER) {
          gameOver('win');
        } else {
          gameOver();
        }
      }

      setCurrentGuess('');
      return;
    }

    //set the error message depending on the length of the guess
    if (guess.length < 5) {
      showAlert('Not Enough Letters', 1500);
    } else {
      showAlert('Not in word list', 1500);
    }
    applyAnimation('invalid', 400);
  };

  return (
    <>
      {alertVisible && <Alert alertMessage={alertMessage} isGameActive={isGameActive} />}
      <AnswerGrid guesses={guesses} currentGuess={currentGuess} isAnimating={isAnimating} markKeyboard={markKeyboard} />
      <Keyboard currentGuess={currentGuess} onKeyPress={onKeyPress} onBackspace={onBackspace} onEnter={onEnter} />
    </>
  );
};

export default GameController;
