import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, getBalNum } from '../helpers';

const text = 'Balance the given number.';

const a = () => getRandNum(1, 9999);

const getQuestion = () => a();

const getAnswer = number => getBalNum(number);

const pair = cons(getQuestion, getAnswer);

const game = () => main(text, pair);

export default game;
