// ob-393------------------------------------------------------------
function compressStringOB392(string1) {
  let finalStrg = "";

  let obj1 = [...string1].reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});

  for (const [key, value] of Object.entries(obj1)) {
    finalStrg += key.concat(value);
  }

  if (finalStrg.length > string1.length) {
    return string1;
  }
  return finalStrg;
}
console.log(compressStringOB392("aaabbccccd"));
console.log(compressStringOB392("abcd"));
