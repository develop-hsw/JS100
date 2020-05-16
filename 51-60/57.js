let temp = "";
let count = 0;

for (let i = 1; i <= 1000; i++) {
  temp += i;
}

for (let j of temp) {
  if (j == 1) {
    count++;
  }
}

console.log(count);
