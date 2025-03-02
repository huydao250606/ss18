alert("nhập độ dài 3 cạnh của tam giác");
let numA = +prompt("Nhập độ dài cạnh A");
let numB = +prompt("Nhập độ dài cạnh B");
let numC = +prompt("Nhập độ dài cạnh C");
if (numA + numB > numC && numC + numB > numA && numA + numC > numB) {
  alert("Đây là 3 cạnh của 1 tam giác");
  if (numA === numB && numB === numC) {
    alert("Đây là tam giác đều");
  } else if (numA === numB || numB === numC) {
    alert("Đây là tam giác cân");
  } else if (
    numA * numA + numB * numB === numC * numC ||
    numC * numC + numB * numB === numA * numA ||
    numA * numA + numC * numC === numB * numB
  ) {
    alert("Đây là tam giacs vuông");
  } else {
    alert("Đây là tam giác thường");
  }
} else {
  alert("Đây không phải 3 cạnh của 1 tam giác");
}
