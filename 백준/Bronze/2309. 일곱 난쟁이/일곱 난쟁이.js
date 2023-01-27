const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);

const total = input.reduce((acc, v) => acc + v, 0);
const target = total - 100;

function solution() {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === target) {
        const idxArray = [i, j];
        return input
          .filter((value, index) => !idxArray.includes(index))
          .sort((a, b) => a - b);
      }
    }
  }
}

const result = solution();

for (let value of result) {
  console.log(value);
}
