let input = 18234;
let sum = 0;
while (input !== 0) {
  sum += input % 10;
  input = Math.floor(input / 10);
}

console.log(sum);
