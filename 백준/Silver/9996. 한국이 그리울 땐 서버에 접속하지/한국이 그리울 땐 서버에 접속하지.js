const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .slice(1)
  .split('\n')
  .map(v => v.trim())
  .slice(1);

const [pattern, ...strArray] = input;

function solution(str) {
  let p = pattern.split('*');

  if (str.startsWith(p[0])) {
    let tail = str.slice(p[0].length);
    if (tail.endsWith(p[1])) {
      console.log('DA');
    } else {
      console.log('NE');
    }
  } else {
    console.log('NE');
  }
}

for (let s of strArray) {
  solution(s);
}
