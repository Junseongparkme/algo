const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

const [N, M] = input.slice(0, 2).map(v => +v);
const list = input[2].split(' ').map(v => +v);
let result = 0;

function combination(start, b, r) {
  if (b.length === r) {
    let sum = b.reduce((acc, v) => acc + v, 0);
    if (sum === M) result++;
    return;
  }

  for (let i = start + 1; i < N; i++) {
    b.push(list[i]);
    combination(i, b, r);
    b.pop();
  }
  return;
}

combination(-1, [], 2);
console.log(result);