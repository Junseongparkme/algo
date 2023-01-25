let input = require('fs')
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

let idx = 0;
let T = input[idx++];
while (T--) {
  let result = 0;
  let [M, N, one] = input[idx++];
  let board = [];
  let visited = [];

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  function dfs(y, x) {
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (!(0 <= ny && ny < N && 0 <= nx && nx < M)) continue;
      if (visited[ny][nx]) continue;
      if (board[ny][nx] === 0) continue;
      dfs(ny, nx);
    }
  }

  // 배열 초기화
  for (let i = 0; i < N; i++) {
    let row = [];
    let visitedRow = [];
    for (let j = 0; j < M; j++) {
      row.push(0);
      visitedRow.push(false);
    }
    board.push(row);
    visited.push(visitedRow);
  }

  // 배열에 1 할당
  while (one--) {
    let [x, y] = input[idx++];
    board[y][x] = 1;
  }

  // 탐색
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j]) continue;
      if (board[i][j] === 0) continue;
      dfs(i, j);
      result++;
    }
  }
  console.log(result);
}
