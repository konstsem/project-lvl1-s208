import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, isPrime } from '../helpers';

const text = 'Answer "yes" if number prime otherwise answer "no".';

const getQuestion = () => getRandNum(1, 50);
const getAnswer = (x) => {
  if (isPrime(x)) return 'yes';
  return 'no';
};

const getQuestionAndAnswer = () => {
  const question = getQuestion();
  const trueAnswer = getAnswer(question);
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
