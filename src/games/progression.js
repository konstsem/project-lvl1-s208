import { cons } from 'hexlet-pairs';
import { main } from '..';
import { getProgression, getProgAnswer } from '../helpers';

const text = 'What number is missing in this progression?';

const getQuestion = () => getProgression();
const getAnswer = str => getProgAnswer(str);

const pair = cons(getQuestion, getAnswer);

const game = () => main(text, pair);

export default game;
