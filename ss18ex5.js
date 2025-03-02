let year = +prompt("nhập số năm kinh nghiệm");
if (year < 1) {
  alert("Mới vào nghề");
} else if (year < 3) {
  alert("Nhân viên có kinh nghiệm");
} else if (year < 6) {
  alert("Chuyên viên");
} else {
  alert("Quản lý");
}
