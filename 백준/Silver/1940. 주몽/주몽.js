const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

let [n, m, list] = input;
list = list.split(' ').map(v => +v);
[n, m] = [+n, +m];

let result = 0;

function combination(start, b, r) {
  if (b.length === r) {
    if (b.reduce((acc, v) => acc + v, 0) === m) {
      result++;
    }
    return;
  }

  for (let i = start + 1; i < n; i++) {
    b.push(list[i]);
    combination(i, b, r);
    b.pop();
  }
}

combination(-1, [], 2);
console.log(result);
