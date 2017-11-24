import { main } from '..';
import { getRandNum, getGcd } from '../helpers';

const text = 'Find the greatest common divisor of given numbers.';

const a = () => getRandNum(1, 50);
const b = () => getRandNum(1, 50);

const getQuestion = () => `${a()} ${b()}`;

const getAnswer = str => getGcd(str);

const game = () => main(text, getQuestion, getAnswer);

export default game;
