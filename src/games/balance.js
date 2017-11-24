import { main } from '..';
import { getRandNum, getBalNum } from '../helpers';

const text = 'Balance the given number.';

const a = () => getRandNum(1, 9999);

const getQuestion = () => a();

const getAnswer = number => getBalNum(number);

const game = () => main(text, getQuestion, getAnswer);

export default game;
