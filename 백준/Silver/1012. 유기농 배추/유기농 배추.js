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

let T = input[0][0];
let idx = 1;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

while (T--) {
  let result = 0;
  let [m, n, k] = input[idx++];
  let board = [];
  let visited = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    let vRow = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
      vRow.push(0);
    }
    board.push(row);
    visited.push(vRow);
  }

  while (k--) {
    let [x, y] = input[idx++];
    board[y][x] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) continue;
      if (visited[i][j]) continue;
      dfs(i, j);
      result++;
    }
  }
  console.log(result);

  function dfs(y, x) {
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (!(0 <= nx && nx < m && 0 <= ny && ny < n)) continue;
      if (visited[ny][nx]) continue;
      if (board[ny][nx] === 0) continue;
      dfs(ny, nx);
    }
  }
}
