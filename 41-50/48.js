let input = "AAABBcccddd";
let temp = [];
let str = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) {
    temp[i] = input[i].toLowerCase();
    //temp.push(input[i].toLowerCase());
  } else {
    temp[i] = input[i].toUpperCase();
    //temp.push(input[i].toUpperCase());
  }
}

for (let i = 0; i < temp.length; i++) {
  str += temp[i];
}

console.log(str);
console.log(temp.join(""));
