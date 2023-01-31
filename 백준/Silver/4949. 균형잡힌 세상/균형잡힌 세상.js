const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(0, -1)
  .map(v => v.trim());

for (let sentence of input) {
  let stack = [];

  for (let char of sentence) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.at(-1) === '(') {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (char === ']') {
      if (stack.at(-1) === '[') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  if (stack.length === 0) {
    console.log('yes');
  } else {
    console.log('no');
  }
}
