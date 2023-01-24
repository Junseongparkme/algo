const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim())
  .slice(1);

let result = 0;

for (let s of input) {
  if (s.length % 2 === 1) continue;

  let stack = [];
  for (let c of s) {
    if (stack.length === 0 || stack.at(-1) !== c) {
      stack.push(c);
    } else {
      stack.pop();
    }
  }

  if (stack.length === 0) result++;
}

console.log(result);
