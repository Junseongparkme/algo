const s = require('fs').readFileSync('dev/stdin').toString().trimEnd();

let result = '';

for (let c of s) {
  let ascii = c.charCodeAt(0);

  if (65 <= ascii && ascii <= 90) {
    ascii += 13;
    if (ascii > 90) ascii -= 26;
  } else if (97 <= ascii && ascii <= 122) {
    ascii += 13;
    if (ascii > 122) ascii -= 26;
  }

  result += String.fromCharCode(ascii);
}

console.log(result);
