import { welcome, consPairs, main } from '..';

const text = 'Find the greatest common divisor of given numbers.\n';

const a = () => Math.floor((Math.random() * 49) + 1);
const b = () => Math.floor((Math.random() * 49) + 1);

const question = () => `${a()} ${b()}`;

const answer = (str) => {
  const split = str.split(' ');
  const x = +split[0];
  const y = +split[1];

  const func = (n, m) => {
    if (m <= 0) {
      return n;
    }
    if (n > m) {
      return func(m, n - m);
    }
    return func(n, m - n);
  };
  const result = func(x, y);
  return String(result);
};


const pairs = consPairs(question, answer); // make pairs of questions and answers

const game = () => {
  welcome(text);
  main(pairs);
};

export default game;
