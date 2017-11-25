import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getRandNum, isPrime } from '../helpers';

const text = 'Answer "yes" if number prime otherwise answer "no".';

const getQuestion = () => getRandNum(1, 50);
const getAnswer = x => isPrime(x);

const pair = cons(getQuestion, getAnswer);

const game = () => main(text, pair);

export default game;
