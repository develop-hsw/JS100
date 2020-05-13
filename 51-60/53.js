const arr = "()()()()()";
const arr2 = "))((";
const arr3 = "())(()";
const arr4 = "(()()())";

function math(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count++;
    } else if (arr[i] === ")") {
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }

  let bracket = [];

  for (let i in arr) {
    if (arr[i] === "(") {
      bracket.push("(");
    } else if (arr[i] === ")") {
      if (bracket.length === 0) {
        return false;
      }
      bracket.pop();
    }
  }
  return true;
}
if (math(arr4) === true) {
  console.log("YES");
} else {
  console.log("NO");
}
