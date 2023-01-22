const list = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map(v => v.trim());

let obj = {};
let result = [];

for (let i = 0; i < 26; i++) {
  let key = String.fromCharCode(i + 97);
  obj[key] = 0;
}

for (let name of list) {
  let key = name[0];
  obj[key]++;
}

for (let [name, count] of Object.entries(obj)) {
  if (count >= 5) {
    result.push(name);
  }
}

result = result.length > 0 ? result.sort().join('') : 'PREDAJA';

console.log(result);
