let inputs = prompt("입력 : ").split(" ");

let count = 0;

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] < inputs[i + 1]) {
    count++;
  }
}
if (count === inputs.length - 1) {
  console.log("YES");
} else {
  console.log("NO");
}

//답안
/*
    const unsorted = prompt("입력 : ");
    let sorted = "";

    sorted = unsorted.split(" ").sort(function(a, b){
        return a-b;
    }).join(" ");

    if(unsorted === sorted){
        console.log("YES");
    }else{
        console.log("NO");
    }
*/
