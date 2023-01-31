const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map(v => v.trim());

for (let word of input) {
  let stack = [];
  for (let c of word) {
    if (stack.length === 0) {
      stack.push(c);
    } else if (stack.at(-1) === '(' && c === ')') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  if (stack.length) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
