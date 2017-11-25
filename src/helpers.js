// function for getting random numbers
export const getRandNum = (min, max) => Math.floor((Math.random() * (max - min)) + min);
// function for getting gcd
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
// functions for calculator
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
// function for getting balance number
export const getBalNum = (number) => {
  let result = '';
  const numberOfSigns = String(number).length;
  // console.log(`numberOfSigns = ${numberOfSigns}`);

  const signs = String(number).split(/(?=(?:\d{1})+(?!\d))/);
  // console.log(`signs = ${signs}`);

  let sumOfSigns = 0;
  for (let j = 0; j < numberOfSigns; j += 1) {
    sumOfSigns += Number(signs[j]);
  }
  // console.log(`sumOfSigns = ${sumOfSigns}`);

  let remainder = sumOfSigns % numberOfSigns;
  // console.log(`remainder = ${remainder}`);
  const base = (sumOfSigns - remainder) / numberOfSigns;
  // console.log(`base = ${base}`);
  for (let i = 0; i < numberOfSigns; i += 1) {
    // console.log(result);
    if (remainder !== 0) {
      result = (base + 1) + result;
      remainder -= 1;
    } else {
      result = base + result;
    }
  }
  return result;
};

export const getProgression = () => {
  let result = '';
  let begin = getRandNum(1, 9);
  const step = getRandNum(2, 4);
  const missing = getRandNum(1, 9);
  for (let i = 0; i < 9; i += 1) {
    if (i === missing) {
      result += ' ..';
      begin += step;
    } result += ` ${begin}`;
    begin += step;
  }
  return result;
};

export const getProgAnswer = (str) => {
  let result = 0;
  const numbers = str.split(' ');
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === '..') {
      result = (Math.abs(numbers[i + 1]) + Math.abs(numbers[i - 1])) / 2;
    }
  }
  return String(result);
};
