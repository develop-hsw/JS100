//내 답
let origin = [];
let nigiro = [];

let input = prompt("입력 : ");
origin = input;

for (let i = 0; i < origin.length; i++) {
  nigiro[origin.length - i - 1] = origin[i];
}

console.log("출력 : " + nigiro.join(""));

//답안
const n = prompt("입력");
const reverseString = n.split("").reverse().join("");
/*
 * split() 메서드는 문자열을 배열로 만들어 반환,
 * reverse() 메서드는 배열의 순서를 반전,
 * join() 메서드는 원소를 모두 붙여 문자열로 반환.
 */
console.log(reverseString);
//...천잰가?
