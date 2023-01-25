const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

let [N, ...board] = input;
let maxRain = 0;
let result = 0;

N = +N;
board = board.map(v => v.split(' ').map(v => +v));

for (let row of board) {
  for (let value of row) {
    maxRain = Math.max(maxRain, value);
  }
}

for (let rain = 0; rain <= maxRain; rain++) {
  // 침수배열 생성
  let destroy = [];
  let visited = [];

  for (let i = 0; i < N; i++) {
    let row = [];
    let visitedRow = [];
    for (let j = 0; j < N; j++) {
      row.push(false);
      visitedRow.push(false);
    }
    destroy.push(row);
    visited.push(visitedRow);
  }

  // 비가 내렸을때 침수배열 수정
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] <= rain) {
        destroy[i][j] = true;
      }
    }
  }

  // 침수되지 않은 영역 구하기
  let aliveArea = 0;
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  function dfs(y, x) {
    visited[y][x] = true;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (!(0 <= ny && ny < N && 0 <= nx && nx < N)) continue;
      if (visited[ny][nx]) continue;
      if (destroy[ny][nx]) continue;
      dfs(ny, nx);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (destroy[i][j]) continue;
      if (visited[i][j]) continue;
      aliveArea++;
      dfs(i, j);
    }
  }

  // 침수되지 않은 영역이 최댓값인 경우 값으로 반환해야함.
  result = Math.max(result, aliveArea);
}

console.log(result);
