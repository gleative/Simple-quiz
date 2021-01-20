import { CLEAR_ANSWER, INCREMENT_SCORE, SET_ANSWER } from './actionTypes';

// Handles creation of all actions!!
export type INCREMENT_SCORE_ACTION = { type: typeof INCREMENT_SCORE; payload: number };

export const incrementScore = (score: number): INCREMENT_SCORE_ACTION => ({
  type: 'INCREMENT_SCORE',
  payload: score,
});

export type SET_ANSWER_ACTION = { type: typeof SET_ANSWER; payload: string };

export const setAnswer = (answer: string): SET_ANSWER_ACTION => ({
  type: SET_ANSWER,
  payload: answer,
});

export type CLEAR_ANSWER_ACTION = { type: typeof CLEAR_ANSWER };

export const clearAnswer = () => ({
  type: CLEAR_ANSWER,
});
