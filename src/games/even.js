import { welcome, consPairs, main } from '..';

const text = 'Answer "yes" if number even otherwise answer "no".\n';

const question = () => Math.floor((Math.random() * 99) - 1);
const answer = (x) => {
  if (x % 2 === 0) return 'yes';
  return 'no';
};

const pairs = consPairs(question, answer); // make pairs of questions and answers

const game = () => {
  welcome(text);
  main(pairs);
};

export default game;
