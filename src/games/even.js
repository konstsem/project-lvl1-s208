import { main } from '..';
import getRandNum from '../lib/helpers';

const text = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => getRandNum(1, 100);
const getAnswer = (x) => {
  if (x % 2 === 0) return 'yes';
  return 'no';
};

const game = () => main(text, getQuestion, getAnswer);

export default game;
