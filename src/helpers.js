// function for getting random numbers
export const getRandNum = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const isPrime = (number) => {
  const divisor = number - 1;
  const func = (num, div) => {
    if (div === 1) {
      return true;
    } if (num % div) {
      return func(num, div - 1);
    } return false;
  };
  return func(number, divisor);
};

// function for getting gcd
export const getGcd = (x, y) => {
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
export const getResultOper = (a, b, operation) => {
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

export const getProgression = (begin, step, missing, length) => {
  let item = begin;
  let result = '';
  for (let i = 1; i < length; i += 1) {
    if (item === begin + (step * missing)) {
      result += ' ..';
      item += step;
    } result += ` ${item}`;
    item += step;
  }
  return result;
};
