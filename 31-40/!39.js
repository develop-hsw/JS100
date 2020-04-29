let input1 = "querty";
let input2 = "hqllo my namq is hyqwon";

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}
console.log(replaceAll(input2, "q", "e"));
