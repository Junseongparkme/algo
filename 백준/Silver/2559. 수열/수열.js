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

const [[n, k], temps] = input;
temps.unshift(0);
let result = -1e9;

let prefixSum = [0];

for (let i = 1; i < temps.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + temps[i];
}

for (let i = 0; i < prefixSum.length - k; i++) {
  let unit = prefixSum[k + i] - prefixSum[i];
  result = Math.max(result, unit);
}

console.log(result);
