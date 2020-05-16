students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];
let id = 0;

const numbering = {
  number: id,
  name: "",
};

for (let i = 0; i < students.length; i++) {
  numbering.number++;
  numbering.name = students[i];
  console.log("번호 : " + numbering.number + ",  이름 : " + numbering.name);
}
