import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, isPrime } from '../helpers';

const text = 'Answer "yes" if number prime otherwise answer "no".';

const getQuestion = () => getRandNum(1, 50);
const getAnswer = x => isPrime(x);

const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const trueAnswer = getAnswer(question);
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
