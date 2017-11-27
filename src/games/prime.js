import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, isPrime } from '../helpers';

const text = 'Answer "yes" if number prime otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandNum(1, 50);
  const trueAnswer = (isPrime(question)) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
