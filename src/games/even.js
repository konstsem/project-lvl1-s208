import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum } from '../helpers';

const text = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandNum(1, 100);
  const trueAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
