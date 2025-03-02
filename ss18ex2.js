let toan = +prompt("Nhập điểm môn toán");
let van = +prompt("Nhập điểm môn Văn");
let Anh = +prompt("nhập điểm môn Anh");
let diemTB = (toan + van + Anh) / 3;
if (diemTB < 5) {
  alert("yếu");
} else if (diemTB <= 6.4) {
  alert("Trung bình");
} else if (diemTB <= 7.9) {
  alert("Khá");
} else {
  alert("Giỏi");
}
