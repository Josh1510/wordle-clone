import React, { useEffect, useState } from 'react';
import AnswerGrid from './answerGrid/AnswerGrid';
import Keyboard from './keyboard/Keyboard';
import { START_DATE } from '../constants/settings';
import { ANSWER_LIST } from '../constants/answerList';
import { TODAY_ANSWER } from '../constants/settings';

const GameController = () => {
  const [gameActive, setGameActive] = useState(true);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [guesses, setGuesses] = useState(['wahht', 'aaavz', 'aahht']);
  const [currentGuess, setCurrentGuess] = useState(['h', 'e', 'm']);

  console.log(TODAY_ANSWER);

  return (
    <div>
      <AnswerGrid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
    </div>
  );
};

export default GameController;
