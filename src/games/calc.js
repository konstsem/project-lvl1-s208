import { welcome, gameRounds, main } from '..';

const text = 'What is the result of the expression?\n';

export const greeting = () => welcome(text);

// object with function for operations
const operations = [
  {
    name: '+',
    op: function plus(a, b) {
      return a + b;
    },
  },
  {
    name: '-',
    op: function minus(a, b) {
      return a - b;
    },
  },
  {
    name: '*',
    op: function mul(a, b) {
      return a * b;
    },
  },
];

const pairs = [];

// constructor for pairs
const consPairs = () => {
  for (let i = 0; i !== gameRounds; i += 1) {
    const result = {};
    const a = Math.floor(Math.random() * 50);
    const b = Math.floor(Math.random() * 10);
    const r = Math.floor(Math.random() * 3);
    result.question = `${a} ${operations[r].name} ${b}`;
    result.answer = String(operations[r].op(a, b));
    pairs.push(result);
  }
};

consPairs(); // make pairs of questions and answers

export const game = () => main(pairs);
