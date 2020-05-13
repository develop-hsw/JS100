function mergeSort(arr) {
  if (arr.length <= 1) {
    //정렬이 되어 있는 상태.
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); //slice로 0부터 중간값까지 구현.
  const right = arr.slice(mid); //slice로 중간값부터 마지막까지 구현.

  return merge(mergeSort(left), mergeSort(right)); //재귀
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    //길이가 있는 동안.
    if (left[0] < right[0]) {
      //좌, 우로 나누어진 부분의 [0]을 비교.
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

//const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
const array = [1, 3, 5, 4, 2, 7, 8, 6];
console.log(mergeSort(array));
