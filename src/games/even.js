import { welcome, gameRounds, main } from '..';

const text = 'Answer "yes" if number even otherwise answer "no".\n';

export const greeting = () => welcome(text);

const pairs = [];

// constructor for pairs
const consPairs = () => {
  for (let i = 0; i !== gameRounds; i += 1) {
    const result = {};
    result.question = Math.floor((Math.random() * 99) - 1);
    result.answer = (result.question % 2 === 0) ? 'yes' : 'no';
    pairs.push(result);
  }
};

consPairs(); // make pairs of questions and answers

export const game = () => main(pairs);
