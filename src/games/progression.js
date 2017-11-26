import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getProgression, getProgAnswer } from '../helpers';

const text = 'What number is missing in this progression?';

const getQuestion = () => getProgression();
const getAnswer = str => getProgAnswer(str);

const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const trueAnswer = getAnswer(question);
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
