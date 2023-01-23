const input = require('fs').readFileSync('dev/stdin').toString().trim();

let map = new Map();
for (let i = 0; i < 26; i++) {
  let key = String.fromCharCode(i + 65);
  map.set(key, 0);
}

for (let c of input) {
  let cnt = map.get(c);
  map.set(c, cnt + 1);
}

let start = [];
let mid = [];
let end = [];

for (let [key, value] of map) {
  let cnt = 0;
  if (value % 2 === 0) {
    cnt = value / 2;
  } else {
    mid.push(key);
    cnt = (value - 1) / 2;
  }
  while (cnt--) {
    start.push(key);
    end.push(key);
  }
}

end.reverse();

let result =
  mid.length > 1
    ? "I'm Sorry Hansoo"
    : start.join('') + mid.join('') + end.join('');

console.log(result);
