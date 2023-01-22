const arr = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);

function printResult(arr) {
  for (let value of arr) {
    console.log(value);
  }
}

function combination(start, b, r) {
  if (b.length === r) {
    if (b.reduce((acc, v) => acc + v, 0) === 100) {
      b.sort((x, y) => x - y);
      printResult(b);
      process.exit(0);
    }
    return;
  }

  for (let i = start + 1; i < arr.length; i++) {
    b.push(arr[i]);
    combination(i, b, r);
    b.pop();
  }
}

combination(-1, [], 7);
