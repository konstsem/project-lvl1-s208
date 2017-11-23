import { welcome, consPairs, main } from '..';

const text = 'What is the result of the expression?\n';

const operations = ['+', '-', '*'];
const actions =
  {
    '+': function plus(a, b) {
      return a + b;
    },
    '-': function minus(a, b) {
      return a - b;
    },
    '*': function mul(a, b) {
      return a * b;
    },
  };

const a = () => Math.floor((Math.random() * 49) + 1);
const b = () => Math.floor((Math.random() * 9) + 1);
const r = () => Math.floor(Math.random() * 3);

const question = () => `${a()} ${operations[r()]} ${b()}`;
const answer = (str) => {
  const split = str.split(' ');
  const x = +split[0];
  const op = split[1];
  const y = +split[2];
  return String(actions[op](x, y));
};

const pairs = consPairs(question, answer); // make pairs of questions and answers

const game = () => {
  welcome(text);
  main(pairs);
};

export default game;
