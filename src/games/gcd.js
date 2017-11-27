import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, getGcd } from '../helpers';

const text = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const a = getRandNum(1, 50);
  const b = getRandNum(1, 50);

  const question = `${a} ${b}`;
  const trueAnswer = getGcd(a, b);
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
