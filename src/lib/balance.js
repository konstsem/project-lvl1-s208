const getBalNum = (number) => {
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

export default getBalNum;
