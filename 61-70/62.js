console.log("z".charCodeAt());
console.log("f".charCodeAt());
console.log("g".charCodeAt());
console.log("q".charCodeAt());
console.log("m".charCodeAt());

let first = "z".charCodeAt() - "f".charCodeAt();
first = String(first);
let second = "z".charCodeAt() - "g".charCodeAt();
second = String(second);
let third = "z".charCodeAt() - "q".charCodeAt();
third = String(third);
let fourth = "z".charCodeAt() - "m".charCodeAt();
fourth = String(fourth);
let zero = "z".charCodeAt() - "z".charCodeAt();
zero = String(zero);

console.log(first + second + zero + third + fourth);

//답안 <-> 숫자 쓰지 말래서 나는 아스키로 했는데... 답안 뭔데...천재야?
/*
//abcdefgh
//20190923
const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';
console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`);
*/
