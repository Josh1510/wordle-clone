import React, { useEffect, useState } from 'react';
import AnswerGrid from './answerGrid/AnswerGrid';
import Keyboard from './keyboard/Keyboard';

import { ANSWER_LIST } from '../constants/answerList';
import { TODAY_ANSWER } from '../constants/settings';
import { ALLOWED_GUESSES } from '../constants/allowedGuesses';
import Alert from './answerGrid/alert/Alert';

const GameController = () => {
  const [isGameActive, setGameActive] = useState(true);
  const [isGameWon, setGameWon] = useState(false);

  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);

  const [isAnimating, setIsAnimating] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  console.log(TODAY_ANSWER);

  const applyAnimation = (animation, animationTime) => {
    // apply animation and show alert modal
    setIsAnimating(animation);
    setTimeout(() => {
      setIsAnimating('');
    }, animationTime);
  };

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

  const markKeyboard = (letter, result) => {
    const keyToFlip = document.querySelector(`[data-keyboard] [data-key=${letter.toUpperCase()}]`);
    if (keyToFlip.dataset.state === 'correct') return;

    keyToFlip.dataset.state = result;
  };

  const gameOver = (status) => {
    if (status === 'win') {
      setGameWon(true);
      showAlert(`Winner! Congratulations ${TODAY_ANSWER} was todays word! Come back again tomorrow for a new word!`);
    }
    showAlert(`Game Over! Todays word was ${TODAY_ANSWER}. Try again tomorrow!`);

    setGameActive(false);
  };

  const onKeyPress = (key) => {
    if (currentGuess.length < 5 && isGameActive) {
      setCurrentGuess((currentGuess) => [...currentGuess, key]);
      return;
    }
    return;
  };

  const onBackspace = () => {
    if (isGameActive) {
      setCurrentGuess((currentGuess) => [...currentGuess.slice(0, -1)]);
      return;
    }
    return;
  };

  const onEnter = () => {
    if (!isGameActive) return;

    // If guess is allowed but not the correct guess move to next line
    let guess = currentGuess.join('').toLowerCase();

    if (ALLOWED_GUESSES.includes(guess) || ANSWER_LIST.includes(guess)) {
      setGuesses((guesses) => [...guesses, guess]);

      ////////////////
      /// fix this ///
      ////////////////
      if (guess === TODAY_ANSWER || guesses.length === 6) {
        if (guess === TODAY_ANSWER) {
          gameOver('win');
          setCurrentGuess('');
          setGameActive(false);
          return;
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
    <div>
      {alertVisible && <Alert alertMessage={alertMessage} isGameActive={isGameActive} />}
      <AnswerGrid guesses={guesses} currentGuess={currentGuess} isAnimating={isAnimating} markKeyboard={markKeyboard} />
      <Keyboard currentGuess={currentGuess} onKeyPress={onKeyPress} onBackspace={onBackspace} onEnter={onEnter} />
    </div>
  );
};

export default GameController;
