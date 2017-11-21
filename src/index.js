import readlineSync from 'readline-sync';


const gameRounds = 3;
const questions = [15, 6, 7];
const rightAnswers = ['no', 'yes', 'no'];
let userName;

export const greeting = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n\n');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const game = () => {
  for (let i = 0; i !== gameRounds; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${questions[i]}\nYour answer: `);
    if (userAnswer !== rightAnswers[i]) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswers[i]}.\nLet's try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};
