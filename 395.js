// ob-395------------------------------------------------------------
function firstSingleCharOB395(newString) {
  const arr1 = [...newString.toLowerCase().replace(/\s/g, "")];

  let obj1 = arr1.reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});

  for (const [key, value] of Object.entries(obj1)) {
    if (value === 1) {
      return key;
    }
  }
  return null;
}
console.log(firstSingleCharOB395("Swiss"));
console.log(firstSingleCharOB395("aabbcc"));
