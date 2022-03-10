import { ANSWER_LIST } from './answerList';

export const MAX_WORD_LENGTH = 5;
export const MAX_ATTEMPTS = 6;
export const START_DATE = new Date(2021, 5, 19);
export const TODAY_ANSWER = ANSWER_LIST[Math.floor((new Date() - START_DATE) / 1000 / 60 / 60 / 24)];
