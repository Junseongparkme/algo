const input = require('fs').readFileSync('dev/stdin').toString().trim();

function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.at(i) !== s.at(-i - 1)) return 0;
  }
  return 1;
}

const result = solution(input);
console.log(result);
