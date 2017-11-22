import readlineSync from 'readline-sync';

let userName = '';
export const gameRounds = 3;

// welcome, additionalText, getUserName;
export const welcome = (text) => {
  console.log('Welcome to the Brain Games!');
  console.log(text);
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const main = (pairs) => {
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
