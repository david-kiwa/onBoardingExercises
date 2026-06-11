// ob-393------------------------------------------------------------
// function compressStringOB392(string1) {
//   let finalStrg = "";

//   let obj1 = [...string1].reduce((acc, val) => {
//     acc[val] ? acc[val]++ : (acc[val] = 1);
//     return acc;
//   }, {});

//   for (const [key, value] of Object.entries(obj1)) {
//     finalStrg += key.concat(value);
//   }

//   if (finalStrg.length > string1.length) {
//     return string1;
//   }
//   return finalStrg;
// }
// ob-393------------------------------------------------------------
function compressStringOB392(string1) {
  const strings = new Map();
  let finalStrg = "";

  for (let char of [...string1]) {
    if (!strings.has(char)) {
      strings.set(char, 1);
    } else {
      strings.set(char, strings.get(char) + 1);
    }
  }

  strings.forEach((value, key) => {
    if (value > 1) {
      finalStrg += key.concat(value);
    } else {
      finalStrg += key;
    }
  });

  return finalStrg;
}
console.log(compressStringOB392("aaabbccccd"));
console.log(compressStringOB392("abcd"));
console.log(compressStringOB392("aaab"));
