import { getRandNum, consPairs, main } from '..';

const text = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => getRandNum(1, 100);
const getAnswer = (x) => {
  if (x % 2 === 0) return 'yes';
  return 'no';
};

const pairs = consPairs(getQuestion, getAnswer); // make pairs of questions and answers

const game = () => main(text, pairs);

export default game;
