import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const gameRounds = 3;

export const welcome = (text) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${text}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const main = (text, pair) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${text}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i !== gameRounds; i += 1) {
    // const question = getQuestion();
    // const trueAnswer = getAnswer(question);
    const question = car(pair)();
    const trueAnswer = cdr(pair)(question);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== trueAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
