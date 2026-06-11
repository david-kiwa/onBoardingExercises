// ob-394------------------------------------------------------------
function mergeOverlapOB394(newArr) {
  let finalArr = [];
  let startArr = [...newArr[0]];

  for (let arr of newArr) {
    if (arr[0] <= startArr[1]) {
      startArr[1] = arr[1];
    } else {
      finalArr.push(startArr);
      startArr = arr;
    }
  }
  finalArr.push(startArr);
  return finalArr;
}
console.log(
  mergeOverlapOB394([
    [1, 3],
    [2, 6],
    [4, 8],
    [10, 12],
    [11, 16],
    [13, 20],
  ]),
);
