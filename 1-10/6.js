var flag = false;
if ((flag = NaN)) {
  flag = true;
  console.log(flag + 1);
}
if ((flag = 1)) {
  flag = true;
  console.log(flag + 2);
}
if ((flag = "")) {
  flag = true;
  console.log(flag + 3);
}
if ((flag = 0)) {
  flag = true;
  console.log(flag + 4);
}
if ((flag = undefined)) {
  flag = true;
  console.log(flag + 5);
}
