import { createStore } from 'redux';
import { quizReducer } from '../components/quiz/quizReducer';

export const store = createStore(quizReducer);
