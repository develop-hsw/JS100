//set 자료형 -> 중복 제거
//set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다.

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

let result = new Set();

for (let key in people) {
  result.add(people[key]);
}

console.log(result);
console.log(result.size); //size는 set 객체 내 값의 수를 반환.
