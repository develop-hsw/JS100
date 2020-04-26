//concat 사용하기(concat은 문자열이나 배열을 합치는 함수)
var year = "2020";
var month = "04";
var day = "27";
var hour = "11";
var minute = "34";
var second = "27";

var result = year
  .concat("/")
  .concat(month)
  .concat("/")
  .concat(day)
  .concat(" ")
  .concat(hour)
  .concat(":")
  .concat(minute)
  .concat(":")
  .concat(second);

console.log(result);
