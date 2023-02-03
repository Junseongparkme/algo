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

let [n, m] = input[0];
let city = input.slice(1);

let homes = [];
let chickens = [];

let result = 1e9;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) homes.push([i, j]);
    if (city[i][j] === 2) chickens.push([i, j]);
  }
}

for (let i = 1; i < m + 1; i++) {
  combination(-1, [], i);
}

function combination(start, b, r) {
  if (b.length === r) {
    getChickenDist(b);
    return;
  }
  for (let i = start + 1; i < chickens.length; i++) {
    b.push(i);
    combination(i, b, r);
    b.pop();
  }
  return;
}

function getChickenDist(positions) {
  let afterChickens = chickens.filter((v, i) => positions.includes(i));

  let chickenDists = [];

  for (let [homeY, homeX] of homes) {
    let minDist = 1e9;
    for (let [chickenY, chickenX] of afterChickens) {
      let dist = Math.abs(homeY - chickenY) + Math.abs(homeX - chickenX);
      minDist = Math.min(minDist, dist);
    }
    chickenDists.push(minDist);
  }

  let chickenDistSum = chickenDists.reduce((acc, v) => acc + v, 0);
  result = Math.min(result, chickenDistSum);
}

console.log(result);
