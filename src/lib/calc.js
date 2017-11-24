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
