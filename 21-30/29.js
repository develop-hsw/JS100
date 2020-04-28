let input = prompt("입력");

if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
  console.log("YES");
} else {
  console.log("NO");
}

//답안
//if(input === input.toUpperCase())
//ascii를 안쓰고 이렇게도 가능하구나.
