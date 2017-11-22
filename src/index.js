import readlineSync from 'readline-sync';
import { pairs, gameRounds, text } from './games/even';

// welcome, additionalText, getUserName;
export const welcome = () => console.log('Welcome to the Brain Games!');
export const empty = () => console.log('');
export const addText = () => console.log(text);

let userName = '';

export const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const game = () => {
  // console.log(pairs);
  for (let i = 0; i !== gameRounds; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${pairs[i].question}\nYour answer: `);
    if (userAnswer !== pairs[i].answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${pairs[i].answer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
