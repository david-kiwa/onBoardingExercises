// // ob-398-----------------------------------------------------------
// function repPatternOB398(newString) {
//   const newArr = [...newString];
//   let counter = 0;
//   let obj = newArr.reduce((acc, val) => {
//     if (acc[val]) {
//       if (counter < Object.keys(acc).length) {
//         counter = Object.keys(acc).length;
//       }
//       delete acc[val];
//       acc[val] = 1;
//     } else {
//       acc[val] = 1;
//       if (counter < Object.keys(acc).length) {
//         counter = Object.keys(acc).length;
//       }
//     }
//     return acc;
//   }, {});

//   return counter;
// }
// console.log(repPatternOB398("abcabcbb"));
// console.log(repPatternOB398("pwwkew"));
// console.log(repPatternOB398("abcdaaabcdef"));
// console.log(repPatternOB398("dvdf"));

// // ob-398-----------------------------------------------------------
// function repPatternOB398(newString) {
//   const arr = [...newString];
//   let newArr = [];
//   let max = 0;
//   for (let item of arr) {
//     while (newArr.includes(item)) {
//       newArr.unshift();
//     }
//     newArr.push(item);
//     if (newArr.length > max) {
//       max = newArr.length;
//     }
//   }
//   return max;
// }
// console.log(repPatternOB398("abcabcbb"));
// console.log(repPatternOB398("pwwkew"));
// console.log(repPatternOB398("abcdaaabcdef"));
// console.log(repPatternOB398("dvdf"));

// ob-398-----------------------------------------------------------
function repPatternOB398(newString) {
  const arr = [...newString];
  const obj = {};
  let max = 0;
  let start = 0;
  let currentLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (obj[current] >= start) {
      // avanca o index do repetido
      start = obj[current] + 1;

      // intervalo atual
      currentLength = i - start;
    }

    obj[current] = i;
    currentLength++;

    if (currentLength > max) {
      max = currentLength;
    }
  }
  return max;
}
console.log(repPatternOB398("abcabcbb"));
console.log(repPatternOB398("pwwkew"));
console.log(repPatternOB398("dvdf"));
