describe('task2', () => {
  
  const addOneToTheStartAndToTheEnd = (n) => {
    const arr = [];
    let num = n;
    while (num) {
      arr.push(num % 10);
      num = parseInt(num / 10, 10);
    }
    const arrReverse = arr.reverse();
    const finalArr = [1, ...arrReverse, 1];
    const result = finalArr.reduce((a, b) => a + b, '');
    return parseInt(result, 10);
  };
    it('check task2 first time', function () {
      expect(addOneToTheStartAndToTheEnd(245)).toEqual(parseInt(12451));
    });
    it('check task2 second time', function () {
      
      expect(addOneToTheStartAndToTheEnd(1000)).toEqual(parseInt(110001));
    });
  });
  