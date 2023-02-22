const s = require('fs').readFileSync('dev/stdin').toString().trim();

let count = [0, 0];
let [prev, current] = [null, null];

for (let i = 0; i < s.length; i++) {
  prev = current;
  current = s[i];
  if ((prev === '1' && current === '0') || (prev === '0' && current === '1')) {
    count[+prev]++;
  }
}

count[current]++;

console.log(Math.min(...count));
