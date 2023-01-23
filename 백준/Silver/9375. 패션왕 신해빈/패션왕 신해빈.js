const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

let testCase = +input[0];
let idx = 1;

while (testCase--) {
  if (isFinite(input[idx])) {
    let cnt = +input[idx];
    let pairs = [];
    while (cnt--) {
      idx++;
      pairs.push(input[idx].split(' '));
    }
    idx++;
    const result = printResult(pairs);
    console.log(result);
  }
}

function printResult(pairs) {
  let map = new Map();
  for (let [equipment, part] of pairs) {
    if (map.has(part)) {
      let cnt = map.get(part);
      map.set(part, cnt + 1);
    } else {
      map.set(part, 1);
    }
  }
  let resultArray = Array.from(map.values());
  let result =
    resultArray.length === 1
      ? resultArray[0]
      : resultArray.reduce((acc, v) => acc * (v + 1), 1) - 1;
  return result;
}
