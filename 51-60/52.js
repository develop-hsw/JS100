const arr = [1, 3, 5, 4, 2, 7, 8, 6, 10, 9];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //return quickSort(left) + pivot + quickSort(right);
  return quickSort(left).concat(pivot, quickSort(right));
}

//const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
console.log(quickSort(arr));
