// 세로 H, 가로 W 개
// 구름은 분당 1km씩 동쪽

const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

let [h, w] = input[0].split(' ').map(v => +v);

let result = [];
let current = input.slice(1).map(v => v.split(''));

for (let i = 0; i < h; i++) {
  let row = [];
  for (let j = 0; j < w; j++) {
    let value = -1;
    row.push(value);
  }
  result.push(row);
}

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (current[i][j] === 'c') {
      moveRight(i, j);
    }
  }
}

function moveRight(y, x) {
  result[y][x] = 0;
  for (let i = x + 1; i < w; i++) {
    result[y][i] = result[y][i - 1] + 1;
  }
}

for (let row of result) {
  console.log(row.join(' '));
}
