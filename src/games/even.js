import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum } from '../helpers';

const text = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => getRandNum(1, 100);
const getAnswer = (x) => {
  if (x % 2 === 0) return 'yes';
  return 'no';
};
const pair = cons(getQuestion, getAnswer);

const game = () => main(text, pair);

export default game;
