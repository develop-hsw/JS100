var container = {};
var names = prompt("이름 입력 : ").split(" ");
var scores = prompt("점수 입력 : ").split(" ");

for (let i = 0; i < names.length; i++) {
  container[names[i]] = parseInt(scores[i], 10);
}

console.log(container);
