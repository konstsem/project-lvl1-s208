import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getProgression, getRandNum } from '../helpers';

const text = 'What number is missing in this progression?';

const getQuestionAndAnswer = () => {
  const begin = getRandNum(1, 9);
  const step = getRandNum(2, 4);
  const missing = getRandNum(1, 9);
  const length = 10;

  const question = getProgression(begin, step, missing, length);
  const trueAnswer = String(begin + (step * missing));
  return cons(question, trueAnswer);
};

const game = () => main(text, getQuestionAndAnswer);

export default game;
