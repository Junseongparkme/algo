// 보물두곳? 육지 중 서로 가장 멀리 있는 두곳
// 그 두곳 가는데 걸리는 시간 출력

const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [n, m] = input[0].split(' ').map(v => +v);
let board = input.slice(1).map(v => v.trim());
let mostFarDist = -1;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const result = {
  y: -1,
  x: -1,
  dist: -1,
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 'L') {
      bfs(i, j);
    }
  }
}

function bfs(y, x) {
  let visited = makeVisited();
  visited[y][x] = 1;
  let queue = [[y, x]];
  while (queue.length) {
    let [frontY, frontX] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let ny = frontY + dy[i];
      let nx = frontX + dx[i];
      if (!(0 <= ny && ny < n && 0 <= nx && nx < m)) continue;
      if (visited[ny][nx]) continue;
      if (board[ny][nx] === 'W') continue;
      queue.push([ny, nx]);
      visited[ny][nx] = visited[frontY][frontX] + 1;
      if (result.dist < visited[ny][nx]) {
        result.x = x;
        result.y = y;
        result.dist = visited[ny][nx];
      }
    }
  }
}

function makeVisited() {
  let visited = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    visited.push(row);
  }
  return visited;
}

console.log(result.dist - 1);
