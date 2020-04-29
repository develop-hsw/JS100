let input = prompt("입력 : ").slice(" ");
let count = 1;
for (let i = 0; i < input.length; i++) {
  if (input[i] == " ") count++;
}
console.log(count);

//답안
const string = prompt("입력 : ").split(" ");
console.log(string.length);

//split vs slice
/*
    split : string의 메서드. delimeter를 기준으로 잘라서 배열을 만든 후 반환.
    slice : 기존 배열은 변하지 않고, 잘려진 배열을 반환.
*/
