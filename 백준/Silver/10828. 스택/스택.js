const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim().split(' '))
  .slice(1);

let stack = [];
let result = [];
let Stack = {
  push(value) {
    stack.push(value);
  },
  pop() {
    return stack.length ? stack.pop() : -1;
  },
  size() {
    return stack.length;
  },
  empty() {
    return stack.length ? 0 : 1;
  },
  top() {
    return stack.length ? stack.at(-1) : -1;
  },
};

for (let elem of input) {
  let com = elem[0];

  if (com === 'push') {
    Stack.push(+elem[1]);
  } else if (com === 'pop') {
    result.push(Stack.pop());
  } else if (com === 'size') {
    result.push(Stack.size());
  } else if (com === 'empty') {
    result.push(Stack.empty());
  } else if (com === 'top') {
    result.push(Stack.top());
  }
}

console.log(result.join('\n'));
