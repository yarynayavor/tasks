const { replaceFirstLastN } = require('./task1.js');
const { addOneToTheStartAndToTheEnd } = require('./task2.js');
const { findXyzt } = require('./task3.js');

const readline = require('readline');

const n = process.argv[2];
console.log(n);
if (process.argv[2]) {
  const print1 = replaceFirstLastN(n);
  console.log('task1 result: ', print1);

  const print2 = addOneToTheStartAndToTheEnd(n);
  console.log('task2 result: ', print2);

  const print3 = findXyzt(n);
  console.log(print3);
} else {
  const rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt('Please, enter a number: ');
  rl.prompt();
  rl.on('line', (line) => {
    if (!isNaN(line)) {
      const print1 = replaceFirstLastN(line);
      console.log('task1 result: ', print1);

      const print2 = addOneToTheStartAndToTheEnd(line);
      console.log('task2 result: ', print2);

      const print3 = findXyzt(line);
      console.log(print3);
      rl.close();
    }
    rl.prompt();
  }).on('close', () => {
    process.exit(0);
  });
}
