const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let n = +input[0];
let board = input.slice(1);

function dq(startY, startX, size) {
  let target = board[startY][startX];
  let result = '';

  if (size === 1) {
    return target;
  }

  for (let i = startY; i < startY + size; i++) {
    for (let j = startX; j < startX + size; j++) {
      if (board[i][j] !== target) {
        size /= 2;
        result += '(';
        result += dq(startY, startX, size);
        result += dq(startY, startX + size, size);
        result += dq(startY + size, startX, size);
        result += dq(startY + size, startX + size, size);
        result += ')';
        return result;
      }
    }
  }
  return target;
}

let result = dq(0, 0, n);
console.log(result);
