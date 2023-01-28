const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim());

const [N, M] = input[0].split(' ').map(v => +v);
const list = input.slice(1, 1 + N);
const query = input.slice(1 + N);

const str_num = {};
const num_str = {};

for (let i = 0; i < N; i++) {
  const str = list[i];

  str_num[str] = i + 1;
  num_str[i + 1] = str;
}

for (let value of query) {
  let result = '';
  if (isFinite(value)) {
    result = num_str[value];
  } else {
    result = str_num[value];
  }
  console.log(result);
}