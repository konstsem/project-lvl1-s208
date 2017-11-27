import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, getBalNum } from '../helpers';

const text = 'Balance the given number.';

const getQuestionAndAnswer = () => {
  const question = getRandNum(1, 9999);
  const trueAnswer = getBalNum(question);
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
