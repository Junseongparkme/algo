const s = require('fs').readFileSync('dev/stdin').toString().trim();

let cnt = {};

for (let i = 0; i < 26; i++) {
  let key = String.fromCharCode(i + 97);
  cnt[key] = 0;
}

for (let c of s) {
  cnt[c]++;
}

console.log(Object.values(cnt).join(' '));
