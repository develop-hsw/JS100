function one(n) {
  function two(value) {
    let sq = Math.pow(value, n);
    return sq;
  }
  return two;
}

let a = one(2);
let b = one(3);
let c = one(4);

console.log(a);
console.log(b);
console.log(c);

console.log(a(10));
console.log(b(10));
console.log(c(10));
