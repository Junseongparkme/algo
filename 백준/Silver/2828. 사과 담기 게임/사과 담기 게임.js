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

const [n, m] = input[0];
const [j] = input[1];
const list = input.slice(2).map(v => v[0]);

let result = 0;
let [left, right] = [1, m];

for (let position of list) {
  if (position < left) {
    let diff = left - position;
    left -= diff;
    right -= diff;
    result += diff;
  } else if (right < position) {
    let diff = position - right;
    left += diff;
    right += diff;
    result += diff;
  }
}

console.log(result);
