import React, { useEffect, useState } from 'react';
import AnswerGrid from './answerGrid/AnswerGrid';
import Keyboard from './keyboard/Keyboard';
import { START_DATE } from '../constants/settings';
import { ANSWER_LIST } from '../constants/answerList';
import { TODAY_ANSWER } from '../constants/settings';
import Alert from './answerGrid/alert/Alert';

const GameController = () => {
  const [gameActive, setGameActive] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [guesses, setGuesses] = useState(['wahht', 'aaavz', 'aahht']);
  const [currentGuess, setCurrentGuess] = useState(['h', 'e', 'm']);

  const [notEnoughLetters, setNotEnoughLetters] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  console.log(TODAY_ANSWER);

  return (
    <div>
      {alertVisible && <Alert errorMessage={errorMessage} />}
      <AnswerGrid
        guesses={guesses}
        currentGuess={currentGuess}
        notEnoughLetters={notEnoughLetters}
        setAlertVisible={setAlertVisible}
        setErrorMessage={setErrorMessage}
      />
      <Keyboard
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        guesses={guesses}
        setGuesses={setGuesses}
        setNotEnoughLetters={setNotEnoughLetters}
        setAlertVisible={setAlertVisible}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default GameController;
