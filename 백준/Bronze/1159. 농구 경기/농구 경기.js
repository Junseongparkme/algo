const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const players = input.slice(1);
const counter = {};

for (let i = 0; i < 26; i++) {
  const key = String.fromCharCode(i + 97);
  counter[key] = 0;
}

for (let player of players) {
  const key = player[0];
  counter[key]++;
}

const resultArray = Object.entries(counter).filter(
  ([key, value]) => value >= 5
);

const result =
  resultArray.length > 0
    ? resultArray.reduce((acc, [key, value]) => acc + key, '')
    : 'PREDAJA';

console.log(result);
