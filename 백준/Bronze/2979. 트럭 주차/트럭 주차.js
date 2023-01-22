const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v =>
    v
      .trim()
      .split(' ')
      .map(v => +v)
  );

const [[a, b, c], ...times] = input;
const timeCheck = [];
let result = 0;

for (let i = 0; i < 101; i++) {
  timeCheck.push(0);
}

for (let [start, end] of times) {
  for (let i = start; i < end; i++) {
    timeCheck[i]++;
  }
}

for (let value of timeCheck) {
  if (value === 1) {
    result += a;
  } else if (value === 2) {
    result += b * 2;
  } else if (value === 3) {
    result += c * 3;
  }
}

console.log(result);
