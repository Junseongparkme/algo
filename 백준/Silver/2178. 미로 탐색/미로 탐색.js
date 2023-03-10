const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(v => +v);
const board = input.slice(1).map(v => v.split('').map(v => +v));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const visited = [];
for (let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < M; j++) {
    row.push(0);
  }
  visited.push(row);
}

function bfs(y, x) {
  visited[y][x] = 1;
  let queue = [[y, x]];
  while (queue.length) {
    let [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (!(0 <= ny && ny < N && 0 <= nx && nx < M)) continue;
      if (visited[ny][nx]) continue;
      if (board[ny][nx] === 0) continue;
      visited[ny][nx] = visited[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
}

bfs(0, 0);
console.log(visited[N - 1][M - 1]);
