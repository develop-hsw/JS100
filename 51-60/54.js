let right = "1 2 3 4 5 6 7";
let wrong = "1 3 5 6 4 2 8";

right = right.split(" ").map((n) => parseInt(n, 10));
wrong = wrong.split(" ").map((n) => parseInt(n, 10));

function isSeries(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return "NO";
    } else {
      return "YES";
    }
  }
}

console.log(isSeries(right));
console.log(isSeries(wrong));
