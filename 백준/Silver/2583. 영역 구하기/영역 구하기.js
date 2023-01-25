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

const [N, M, K] = input[0];
const positions = input.slice(1);
const board = [];
const visited = [];
const result = [];

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let i = 0; i < N; i++) {
  let row = [];
  let sub = [];
  for (let j = 0; j < M; j++) {
    row.push(1);
    sub.push(0);
  }
  board.push(row);
  visited.push(sub);
}

for (let i = 0; i < K; i++) {
  const [leftX, leftY, rightX, rightY] = positions[i];
  for (let i = leftY; i < rightY; i++) {
    for (let j = leftX; j < rightX; j++) {
      board[i][j] = 0;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j]) continue;
    if (board[i][j] === 0) continue;
    let cnt = 0;

    function dfs(y, x) {
      visited[y][x] = 1;
      cnt++;
      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];
        if (!(0 <= ny && ny < N && 0 <= nx && nx < M)) continue;
        if (visited[ny][nx]) continue;
        if (board[ny][nx] === 0) continue;
        dfs(ny, nx);
      }
    }

    dfs(i, j);
    result.push(cnt);
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join(' '));
