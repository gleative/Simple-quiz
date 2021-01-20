import { INCREMENT_SCORE_ACTION, SET_ANSWER_ACTION } from '../../app/actions';
import { CLEAR_ANSWER, INCREMENT_SCORE, SET_ANSWER } from '../../app/actionTypes';

export interface QuizState {
  score: number;
  answer: string;
}

const initialState = {
  score: 0,
  answer: '',
};

export const quizReducer = (state: QuizState = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT_SCORE: {
      return { ...state, score: action.payload };
    }
    case SET_ANSWER: {
      return { ...state, answer: action.payload };
    }
    case CLEAR_ANSWER: {
      return { ...state, answer: '' };
    }
    // Return non mutated state if noe case matches
    default: {
      return state;
    }
  }
};
