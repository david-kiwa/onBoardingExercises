// ob-396-----------------------------------------------------------
function rotateArrOB396(newArr, k) {
  const arr = [...newArr];

  let remainder = k % arr.length;

  let rotation = k > arr.length ? -remainder : -k;

  let result = arr.splice(rotation, arr.length);

  return [...result, ...arr];
}
console.log(rotateArrOB396([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrOB396([10, 20, 30], 5));
console.log(rotateArrOB396([10, 20, 30, 40, 50, 60, 70, 80], 15));
