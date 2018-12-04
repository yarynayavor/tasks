describe('task1', () => {
  
    const replaceFirstLastN = (n) => {
        let num = n;
        let k = 1;
        const lastNumber = num % 10;
        while (num > 10) {
          num /= 10;
          k *= 10;
        }
        const remainderOne = num % 1;
        const remainderK = n % k;
        const firstNumber = num - remainderOne;
        const mainSum = lastNumber * k + remainderK;
        const remainderMainSum = (lastNumber * k + remainderK) % 10;
      
        const result = mainSum - remainderMainSum + firstNumber;
        return result;
      };
    it('check task1 first time', function () {
      expect(replaceFirstLastN(245)).toEqual(542);
    });
    it('check task1 second time', function () {
      
      expect(replaceFirstLastN(54)).toEqual(45);
    });
  });
  