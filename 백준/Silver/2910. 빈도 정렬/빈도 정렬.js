const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')[1]
  .split(' ')
  .map(v => +v);

let count = {};
let order = new Set();
let result = [];

for (let num of input) {
  if (num in count) {
    count[num]++;
  } else {
    count[num] = 1;
  }
  order.add(num);
}

order = Array.from(order.values());

let entries = Object.entries(count).sort((a, b) => {
  if (a[1] === b[1]) {
    let rankA = order.findIndex(v => +v === +a[0]);
    let rankB = order.findIndex(v => +v === +b[0]);
    return rankA - rankB;
  } else {
    return b[1] - a[1];
  }
});

for (let [key, value] of entries) {
  for (let i = 0; i < value; i++) {
    result.push(key);
  }
}

console.log(result.join(' '));
