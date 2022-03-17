import React, { useEffect, useState } from 'react';
import AnswerGrid from './answerGrid/AnswerGrid';
import Keyboard from './keyboard/Keyboard';
import { START_DATE } from '../constants/settings';
import { ANSWER_LIST } from '../constants/answerList';
import { TODAY_ANSWER } from '../constants/settings';
import { ALLOWED_GUESSES } from '../constants/allowedGuesses';
import Alert from './answerGrid/alert/Alert';

const GameController = () => {
  const [gameActive, setGameActive] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);

  const [isAnimating, setIsAnimating] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  console.log(TODAY_ANSWER);

  const applyInvalidGuessAnimation = () => {
    // apply animation and show alert modal
    setIsAnimating('invalid');
    setAlertVisible(true);
    setTimeout(() => {
      setIsAnimating('');
      setAlertVisible(false);
      setAlertMessage('');
    }, 1500);
  };

  const markKeyboard = (letter, result) => {
    const keyToFlip = document.querySelector(`[data-keyboard] [data-key=${letter.toUpperCase()}]`);
    if (keyToFlip.dataset.state === 'correct') return;

    keyToFlip.dataset.state = result;
  };

  const onKeyPress = (key) => {
    if (currentGuess.length < 5) {
      setCurrentGuess((currentGuess) => [...currentGuess, key]);
      return;
    }
    return;
  };

  const onBackspace = () => {
    setCurrentGuess((currentGuess) => [...currentGuess.slice(0, -1)]);
  };

  const onEnter = () => {
    // If guess is allowed but not the correct guess move to next line
    let guess = currentGuess.join('').toLowerCase();
    if (ALLOWED_GUESSES.includes(guess) || ANSWER_LIST.includes(guess)) {
      setGuesses((guesses) => [...guesses, guess]);
      setCurrentGuess('');
      return;
    }

    //set the error message depending on the length of the guess
    if (guess.length < 5) {
      setAlertMessage('Not Enough Letters');
    } else {
      setAlertMessage('Not in word list');
    }
    applyInvalidGuessAnimation();
  };

  return (
    <div>
      {isAnimating && <Alert alertMessage={alertMessage} />}
      <AnswerGrid guesses={guesses} currentGuess={currentGuess} isAnimating={isAnimating} markKeyboard={markKeyboard} />
      <Keyboard currentGuess={currentGuess} onKeyPress={onKeyPress} onBackspace={onBackspace} onEnter={onEnter} />
    </div>
  );
};

export default GameController;
