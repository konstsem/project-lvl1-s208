import readlineSync from 'readline-sync';

export const gameRounds = 3;

// function for getting random numbers
export const getRandNum = (min, max) => Math.floor((Math.random() * (max - min)) + min);

// constructor for pairs
export const consPairs = (question, answer) => {
  const array = [];
  for (let i = 0; i !== gameRounds; i += 1) {
    const result = {};
    result.question = question();
    result.answer = answer(result.question);
    array.push(result);
  }
  return array;
};

export const welcome = (text) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${text}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const main = (text, pairs) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${text}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

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

export const operations = ['+', '-', '*'];
export const getResultOper = (str) => {
  const splitStr = str.split(' ');
  const a = +splitStr[0];
  const b = +splitStr[2];
  const operation = splitStr[1];

  let result = 0;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return String(result);
};

export const getGcd = (str) => {
  const splitStr = str.split(' ');
  const x = +splitStr[0];
  const y = +splitStr[1];

  const gcd = (n, m) => {
    if (m <= 0) {
      return n;
    }
    if (n > m) {
      return gcd(m, n - m);
    }
    return gcd(n, m - n);
  };

  return String(gcd(x, y));
};
