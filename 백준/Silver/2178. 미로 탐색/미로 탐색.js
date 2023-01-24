const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

const [n, m] = input[0].split(' ').map(v => +v);
const board = input.slice(1).map(v => Array.from(v).map(v => +v));
const visited = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let i = 0; i < n; i++) {
  let sub = [];
  for (let j = 0; j < m; j++) {
    sub.push(0);
  }
  visited.push(sub);
}

function bfs(y, x) {
  visited[y][x] = 1;
  let queue = [[y, x]];
  while (queue.length) {
    let [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];
      if (!(0 <= ny && ny < n && 0 <= nx && nx < m)) continue;
      if (visited[ny][nx]) continue;
      if (board[ny][nx] === 0) continue;
      visited[ny][nx] = visited[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
}

bfs(0, 0);
console.log(visited[n - 1][m - 1]);
