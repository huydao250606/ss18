let year = +prompt("Nhập số năm");
if (year % 4 === 0 && year % 100 !== 0) {
  alert("Đây là năm nhuận");
} else {
  alert("Đây không phải năm nhuận");
}
