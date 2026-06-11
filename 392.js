// ob-392------------------------------------------------------------
function anagramOB392(string1, string2) {
  const arr1 = [...string1.toLowerCase().replace(/[\.,?!\s]/g, "")];
  const arr2 = [...string2.toLowerCase().replace(/[\.,?!\s]/g, "")];
  let isAna = false;

  let obj1 = arr1.reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});

  let obj2 = arr2.reduce((acc, val) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {});

  for (const [key, value] of Object.entries(obj1)) {
    if (obj2[key] && obj2[key] === value) {
      isAna = true;
    } else {
      return false;
    }
  }
  return isAna;
}
console.log(anagramOB392("Listen", "Silent"));
console.log(anagramOB392("Dormitory", "Dirty room!"));
console.log(anagramOB392("casa", "sotao"));
