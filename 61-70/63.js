//복잡한 세상 편하게 살자
//복세편살
//줄임말 만들기.

let input = "hello world my name is seungwoo"; // -> hwmnis가 되어야 함.
let input2 = "복잡한 세상 편하게 살자";

let s = input2[0];

for (let i = 0; i < input2.length; i++) {
  if (input2.charCodeAt(i) === 32) {
    s += input2[i + 1];
  } else {
    continue;
  }
}

console.log(s);
