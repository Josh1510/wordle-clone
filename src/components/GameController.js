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

  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);

  const [isAnimating, setIsAnimating] = useState(false);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  console.log(TODAY_ANSWER);

  return (
    <div>
      {isAnimating && <Alert alertMessage={alertMessage} />}
      <AnswerGrid guesses={guesses} currentGuess={currentGuess} isAnimating={isAnimating} />
      <Keyboard
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        guesses={guesses}
        setGuesses={setGuesses}
        setIsAnimating={setIsAnimating}
        setAlertVisible={setAlertVisible}
        setAlertMessage={setAlertMessage}
      />
    </div>
  );
};

export default GameController;
