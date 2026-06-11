// ob-390------------------------------------------------------------
function counterOB390(newString) {
  const finalObject = {};

  for (let i of newString) {
    if (!finalObject[i]) {
      finalObject[i] = 1;
    } else {
      finalObject[i]++;
    }
  }
  return finalObject;
}
console.log(counterOB390("wananananananana"));
