const addOneToTheStartAndToTheEnd = (n) => {
  const arr = [];
  let num = n;
  while (num) {
    arr.push(num % 10);
    num = parseInt(num / 10, 10);
  }
  const arrReverse = arr.reverse();
  const finalArr = [1, ...arrReverse, 1];
  return finalArr.reduce((a, b) => a + b, '');
};
module.exports.addOneToTheStartAndToTheEnd = addOneToTheStartAndToTheEnd;
