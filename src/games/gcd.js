import { getRandNum, getGcd, consPairs, main } from '..';

const text = 'Find the greatest common divisor of given numbers.';

const a = () => getRandNum(1, 50);
const b = () => getRandNum(1, 50);

const getQuestion = () => `${a()} ${b()}`;

const getAnswer = str => getGcd(str);

const pairs = consPairs(getQuestion, getAnswer); // make pairs of questions and answers

const game = () => main(text, pairs);

export default game;
