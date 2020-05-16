let input = "helloworld";
let input2 = "thisisoddnumber";
let s = "";
let length = 50;
let consoleLength = Math.floor((length - input2.length) / 2);
console.log(input.length);

function putTogether(number) {
  for (let i = 0; i < number; i++) {
    s += "=";
    if (i === consoleLength - 1) {
      s += input2;
      continue;
    }
    if (s.length === 50) break;
  }
  return s;
}

console.log(putTogether(50));

//답안
/*
const n = 25+parseInt((str.length/2), 10);

//왼쪽부터 채우기
const a = str.padStart(n, '='); 

//오른쪽까지 채워서 출력
console.log(a.padEnd(50,'='));

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
*/
