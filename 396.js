// ob-396-----------------------------------------------------------
function rotateArrOB396(newArr, k) {
  const arr = [...newArr];

  let result = arr.splice(k > arr.length ? 1 : -k, arr.length);

  return [...result, ...arr];
}
console.log(rotateArrOB396([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrOB396([10, 20, 30], 5));
