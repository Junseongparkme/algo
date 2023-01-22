const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

const [n, m] = input[0].split(' ').map(v => +v);
const list = input.slice(1, n + 1);
const query = input.slice(n + 1);

let map = new Map();

for (let i = 1; i <= list.length; i++) {
  map.set(list[i - 1], i);
}

for (let value of query) {
  let result = isFinite(value) ? list[value - 1] : map.get(value);
  console.log(result);
}
