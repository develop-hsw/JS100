let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let months = [
  31, //1월
  29, //2월(윤년)
  31, //3월
  30, //4월
  31, //5월
  30, //6월
  31, //7월
  31, //8월
  30, //9월
  31, //10월
  30, //11월
  31, //12월
];

let a = 5;
let b = 24;
let totdays = 0;
let calcday = 0;

for (let i = 0; i < a; i++) {
  totdays += months[i];
}
totdays += b;

calcday = totdays % 7;

console.log(days[calcday - 1]);

//답안
const month = 5;
const date = 24;
function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const x = new Date("2020-" + a + "-" + b);
  return day[x.getDay()];
}
console.log(solution(month, date));
