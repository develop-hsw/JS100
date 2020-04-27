let inputs = prompt("입력").split(" ");

console.log(inputs[0] / inputs[1] + " " + (inputs[0] % inputs[1]));

//답안
const n = prompt("입력 : ").split(" ");
const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
