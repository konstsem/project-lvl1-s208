import { main } from '..';
import { getRandNum, operations, getResultOper } from '../helpers';

const text = 'What is the result of the expression?';

const a = () => getRandNum(1, 50);
const b = () => getRandNum(1, 10);
const getNumOperation = () => operations[getRandNum(0, 3)];

const getQuestion = () => `${a()} ${getNumOperation()} ${b()}`;
const getAnswer = str => getResultOper(str);

const game = () => main(text, getQuestion, getAnswer);

export default game;
