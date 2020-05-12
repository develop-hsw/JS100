let input = "5 4 3 2 1 10 9 8 7 6"; //문자열을

input = input.split(" ").map((n) => {
  //공백을 구분한 문자열 배열로 바꿔주고
  return parseInt(n, 10); //숫자로 바꿔서 다시 input에 넣어준다.
});
input.sort((a, b) => {
  return b - a; ///내림차순 , a-b는 오름차순.
});

console.log(input[0]); //내림차순으로 정렬하면 인덱스 0번이 가장 큰 수임.
