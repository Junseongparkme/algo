const s = require('fs').readFileSync('dev/stdin').toString().trim();
const reversed = Array.from(s).reverse();

for (let i = 0; i < s.length; i++) {
  if (s[i] !== reversed[i]) {
    console.log(0);
    process.exit(0);
  }
}

console.log(1);
