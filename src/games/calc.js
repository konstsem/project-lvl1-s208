import { getRandNum, operations, getResultOper, consPairs, main } from '..';

const text = 'What is the result of the expression?';

const a = () => getRandNum(1, 50);
const b = () => getRandNum(1, 10);
const getNumOperation = () => operations[getRandNum(0, 3)];

const getQuestion = () => `${a()} ${getNumOperation()} ${b()}`;
const getAnswer = str => getResultOper(str);

const pairs = consPairs(getQuestion, getAnswer); // make pairs of questions and answers

const game = () => main(text, pairs);

export default game;
