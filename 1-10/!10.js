const input = prompt("숫자 입력");
let tree = "";

for (let i = 0; i < input; i++) {
  let star = "";
  for (let j = 0; j < input - i; j++) {
    star += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    star += "*";
  }
  tree += star + "\n";
}
