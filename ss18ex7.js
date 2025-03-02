let numberA = +prompt("Mời bạn nhập vào số a");
let numberB = +prompt("Mời bạn nhập vào số b");
let ans = prompt("mời bạn nhập vào các phép tính (+,-,*,/)");
let operation;
if (ans === "+") {
  operation = numberA + numberB;
  alert(operation);
} else if (ans === "-") {
  operation = numberA - numberB;
  alert(operation);
} else if (ans === "*") {
  operation = numberA * numberB;
  alert(operation);
} else if (ans === "/") {
  operation = numberA / numberB;
  alert(operation);
} else {
  alert("không có phép tính này");
}
