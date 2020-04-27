let kor = prompt("국어 입력 : ");
let math = prompt("수학 입력 : ");
let eng = prompt("영어 입력 : ");
let sum = kor + math + eng;

console.log("출력 : " + Math.floor(sum / 3));
//이렇게하면 문자열로 되어버림!! 안돼!!

const score = prompt("세 과목 입력 : ").split(" ");
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(score[i], 10);
}
console.log(Math.floor(sum / 3));
