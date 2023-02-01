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

const [n, m] = input[0];
const board = input.slice(1);
const wallSpots = [];
const virusSpots = [];
let result = -1;

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

// 벽을 세울 수 있는 좌표 구하기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 0) {
      wallSpots.push([i, j]);
    } else if (board[i][j] === 2) {
      virusSpots.push([i, j]);
    }
  }
}

// 벽을 세우지 못할 때 까지 반복
for (let i = 0; i < wallSpots.length; i++) {
  for (let j = i + 1; j < wallSpots.length; j++) {
    for (let k = j + 1; k < wallSpots.length; k++) {
      let copyBoard = JSON.parse(JSON.stringify(board));
      let visited = makeVisitedArray();

      copyBoard[wallSpots[i][0]][wallSpots[i][1]] = 1;
      copyBoard[wallSpots[j][0]][wallSpots[j][1]] = 1;
      copyBoard[wallSpots[k][0]][wallSpots[k][1]] = 1;

      for (let [y, x] of virusSpots) {
        spreadVirus(y, x, visited, copyBoard);
      }

      let safeArea = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (copyBoard[i][j] === 0) safeArea++;
        }
      }
      result = Math.max(result, safeArea);
    }
  }
}

function makeVisitedArray() {
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

function spreadVirus(y, x, visited, copyBoard) {
  visited[y][x] = 1;
  copyBoard[y][x] = 2;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (!(0 <= ny && ny < n && 0 <= nx && nx < m)) continue;
    if (visited[ny][nx]) continue;
    if (copyBoard[ny][nx] === 1) continue;
    spreadVirus(ny, nx, visited, copyBoard);
  }
}

console.log(result);
