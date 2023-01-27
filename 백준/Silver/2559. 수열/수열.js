const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(v => +v));

const [N, K] = input[0];
const temps = input[1];

temps.unshift(0);
const prefixSum = [0];

for (let i = 1; i <= N; i++) {
  const sum = prefixSum[i - 1] + temps[i];
  prefixSum.push(sum);
}

let maxTemp = -1e9;
for (let i = K; i <= N; i++) {
  const temp = prefixSum[i] - prefixSum[i - K];
  maxTemp = Math.max(maxTemp, temp);
}

console.log(maxTemp);
