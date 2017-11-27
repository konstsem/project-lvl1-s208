import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, operations, getResultOper } from '../helpers';

const text = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const a = getRandNum(1, 50);
  const b = getRandNum(1, 10);
  const operation = operations[getRandNum(0, 3)];
  const question = `${a} ${operation} ${b}`;
  const trueAnswer = getResultOper(a, b, operation);
  return cons(question, trueAnswer);
};
const game = () => main(text, getQuestionAndAnswer);

export default game;
