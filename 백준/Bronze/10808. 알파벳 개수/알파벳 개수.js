const input = require('fs').readFileSync('dev/stdin').toString().trim();

const count = {};

for (let i = 0; i < 26; i++) {
  const key = String.fromCharCode(i + 97);
  count[key] = 0;
}

for (let char of input) {
  count[char]++;
}

const countArray = Object.values(count);

console.log(countArray.join(' '));
