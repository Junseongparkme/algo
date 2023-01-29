const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v =>
    v
      .trim()
      .split(' ')
      .map(v => +v)
  );

let N = input[0][0];
let board = input.slice(1);
let result = -1;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let rain = 0; rain <= 100; rain++) {
  let state = [];
  let visited = [];
  let area = 0;

  for (let i = 0; i < N; i++) {
    let stateRow = [];
    let visitedRow = [];

    for (let j = 0; j < N; j++) {
      stateRow.push(board[i][j] - rain);
      visitedRow.push(false);
    }

    state.push(stateRow);
    visited.push(visitedRow);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (state[i][j] < 0) continue;
      if (visited[i][j]) continue;
      dfs(i, j);
      area++;
    }
  }

  result = Math.max(result, area);

  function dfs(y, x) {
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (!(0 <= ny && ny < N && 0 <= nx && nx < N)) continue;
      if (state[ny][nx] < 0) continue;
      if (visited[ny][nx]) continue;
      dfs(ny, nx);
    }
  }
}

console.log(result);