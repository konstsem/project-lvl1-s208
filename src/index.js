import readlineSync from 'readline-sync';

const gameRounds = 3;
/*
const questions = [15, 6, 7];
const rightAnswers = ['no', 'yes', 'no'];
*/

const pairs = [
  {
    question: 15,
    answer: 'no',
  },
  {
    question: 6,
    answer: 'yes',
  },
  {
    question: 7,
    answer: 'no',
  },
];

export const greeting = () => readlineSync.question('May I have your name? ');

export const game = (userName) => {
  for (let i = 0; i !== gameRounds; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${pairs[i].question}\nYour answer: `);
    if (userAnswer !== pairs[i].answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${pairs[i].answer}.\nLet's try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};
