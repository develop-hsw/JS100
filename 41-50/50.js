//버블정렬 구현하기.
let input = "5 4 3 2 1 10 9 8 7 6";
let temp = 0;

input = input.split(" ").map((n) => {
  return parseInt(n, 10);
});

function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      //과정을 거칠때마다 비교할 원소의 갯수가 줄어든다 === -i를 해야한다.
      if (result[j] > result[j + 1]) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

console.log(bubble(input));
