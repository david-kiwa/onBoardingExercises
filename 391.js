// ob-391------------------------------------------------------------
function mostFrequentOB391(newArr) {
  const finalObject = {};
  let maxVal = 0;
  let mostReps;

  for (let i of newArr) {
    finalObject[i] ? finalObject[i]++ : (finalObject[i] = 1);
    if (maxVal < finalObject[i]) {
      maxVal = finalObject[i];
      mostReps = i;
    }
  }
  return mostReps;
}
console.log(mostFrequentOB391([4, 2, 7, 4, 2, 4, 9, 2]));
