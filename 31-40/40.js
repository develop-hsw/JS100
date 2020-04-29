let limit = 80;
let people = 10;
let sum = 0;
let count = 0;

for (let i = 0; i < people; i++) {
  let random = Math.floor(Math.random() * 100);
  if (sum < limit) {
    sum += random;
    count++;
  } else {
    console.log(count - 1);
    break;
  }
}
