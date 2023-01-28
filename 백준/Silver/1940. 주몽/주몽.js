const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

const [N, M] = input.slice(0, 2).map(v => +v);
const list = input[2].split(' ').map(v => +v);
let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (list[i] + list[j] === M) result++;
  }
}

console.log(result);