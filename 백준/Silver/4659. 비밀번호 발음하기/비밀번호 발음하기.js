const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.trim())
  .slice(0, -1);

let mom = ['a', 'e', 'i', 'o', 'u'];

for (let word of input) {
  let acceptable = true;
  word = word.split('');

  // 모음 포함 체크
  let hasMom = false;

  for (let i = 0; i < word.length; i++) {
    if (mom.includes(word[i])) {
      hasMom = true;
    }
  }

  if (!hasMom) {
    acceptable = false;
  }

  // 모음이나 자음이 연속3개 체크
  for (let i = 0; i < word.length - 2; i++) {
    if (
      mom.includes(word[i]) &&
      mom.includes(word[i + 1]) &&
      mom.includes(word[i + 2])
    ) {
      acceptable = false;
    } else if (
      !mom.includes(word[i]) &&
      !mom.includes(word[i + 1]) &&
      !mom.includes(word[i + 2])
    ) {
      acceptable = false;
    }
  }

  // 같은글자 연속2개, ee oo 제외 체크
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      if (word[i] === 'e' || word[i] === 'o') {
        continue;
      } else {
        acceptable = false;
      }
    }
  }

  word = word.join('');

  if (acceptable) {
    console.log(`<${word}> is acceptable.`);
  } else {
    console.log(`<${word}> is not acceptable.`);
  }
}
