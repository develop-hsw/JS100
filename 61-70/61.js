let string = "aaabbbbcdddd";
let string2 = "abcdddddeeeeefffffgghhi";

let temp = [];
let s = "";
let count = 0;
let flag = 0;

for (let i = 0; i < string2.length; i++) {
  if (string2.charAt(i) !== string2.charAt(i + 1)) {
    count = i + 1 - flag;
    s += string2.charAt(i) + String(count);
    flag = i + 1;
  }
}

console.log(s);
