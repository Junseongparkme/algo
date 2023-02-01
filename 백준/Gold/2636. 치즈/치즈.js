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

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let areas = [];

do {
  // 부피 계산
  let area = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) area++;
    }
  }

  if (area === 0) {
    break;
  }
  areas.push(area);

  // 0. 공기 순환 (내부, 외부 공기 나누기 -> 내부를 0 유지, 외부를 -1)

  let visited = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    visited.push(row);
  }
  spreadFreshAir(0, 0, visited);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] === 1) {
        board[i][j] = -1;
      }
    }
  }

  // 겉부분 녹이기

  // 1. 체크배열 생성 (없애야할 부분을 1로 기록할 것)
  let check = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    check.push(row);
  }

  // 2. 주변에 공기가 있는 부위를 체크배열에 기록
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1 && isNextToAir(i, j)) {
        check[i][j] = 1;
      }
    }
  }

  // 3. 체크배열에 기록된 치즈 녹이기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (check[i][j] === 1) {
        board[i][j] = -1;
      }
    }
  }
} while (areas.at(-1) > 0);

function spreadFreshAir(y, x, visited) {
  visited[y][x] = 1;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (!(0 <= ny && ny < n && 0 <= nx && nx < m)) continue;
    if (visited[ny][nx] === 1) continue;
    if (board[ny][nx] === 1) continue;
    spreadFreshAir(ny, nx, visited);
  }
  return;
}

function isNextToAir(y, x) {
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (!(0 <= ny && ny < n && 0 <= nx && nx < m)) continue;
    if (board[ny][nx] === -1) return true;
  }
  return false;
}

console.log(areas.length);
console.log(areas.at(-1));
