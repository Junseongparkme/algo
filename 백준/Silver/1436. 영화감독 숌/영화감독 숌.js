let n = require('fs').readFileSync('dev/stdin').toString().trim();
n = +n;

let cnt = 0;
let num = 665;

while (cnt < n) {
  if (num.toString().includes('666')) {
    cnt++;
  }
  num++;
}

console.log(num - 1);
