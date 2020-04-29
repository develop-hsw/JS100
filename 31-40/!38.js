//let inputs = prompt("입력 : ").split(" ");
let inputs = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
let onetothree = 0;
inputs.sort().reverse();
console.log(inputs);

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] - inputs[i + 1] > 0) {
    onetothree++;
  }
  if (onetothree === 4) {
    console.log(i);
  }
}

/*답안
    const scores = prompt("입력").split(" ").map(function(n){
        return parseInt(n, 10);
    });

    scores.sort((a, b) => {
        return a-b;
    });

    let count = 0;
    let arr = [];

    while(arr.length < 3){
        let n = scores.pop();
        if(!arr.includes(n)){
            arr.push(n);
        }
        count+=1;
    }
    console.log(count);

*/
