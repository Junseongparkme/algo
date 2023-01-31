const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map(v => v.trim());

let list = input.slice(1);

let result = [];

for (let word of list) {
  let value = '';

  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) {
      if (isFinite(word[i])) {
        if (value.length && value[0] === '0') {
          value = '';
        }
        value += word[i];
      }
      if (value) {
        result.push(value);
      }
    } else if (isFinite(word[i])) {
      if (value.length && value[0] === '0') {
        value = '';
      }
      value += word[i];
    } else {
      if (value.length) {
        if (value) {
          result.push(value);
        }
        value = '';
      }
    }
  }
}

result.sort((a, b) => a - b);

for (let res of result) {
  console.log(res);
}
