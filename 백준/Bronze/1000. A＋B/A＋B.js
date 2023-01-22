console.log(
  require('fs')
    .readFileSync('dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(v => +v)
    .reduce((acc, v) => acc + v, 0)
);
