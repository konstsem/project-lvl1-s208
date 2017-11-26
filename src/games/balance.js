import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, getBalNum } from '../helpers';

const text = 'Balance the given number.';

const a = () => getRandNum(1, 9999);

const getQuestion = () => a();

const getAnswer = number => getBalNum(number);

const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const trueAnswer = getAnswer(question);
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
