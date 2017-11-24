const getGcd = (str) => {
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

export default getGcd;
