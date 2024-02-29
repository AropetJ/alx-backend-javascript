const calculateNumber = (type, a, b) => {
  const an = Math.round(a);
  const bn = Math.round(b);
  let result = 0;
  if (type === 'SUM') {
    result = an + bn;
  } else if (type === 'SUBTRACT') {
    result = an - bn;
  } else if (type === 'DIVIDE') {
    if (bn === 0) {
      return 'Error';
    }
    result = an / bn;
  }
  return result;
};

module.exports = calculateNumber;
