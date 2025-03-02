let number = +prompt("nhập số từ 0 - 999");
let num1 = Math.floor(number / 100);
let num2_test = number % 100;
let num2 = Math.floor(num2_test / 10);
let num3 = num2_test % 10;
let num = "";
switch (num1) {
  case 1:
    num = "Một trăm";
    break;
  case 2:
    num = "Hai trăm";
    break;
  case 3:
    num = "Ba trăm";
    break;
  case 4:
    num = "Bốn trăm";
    break;
  case 5:
    num = "Năm trăm";
    break;
  case 6:
    num = "Sáu trăm";
    break;
  case 7:
    num = "Bảy trăm";
    break;
  case 8:
    num = "Tám trăm";
    break;
  case 9:
    num = "Chín trăm";
    break;
  default:
    break;
}
switch (num2) {
  case 1:
    num = num + " mười";
    break;
  case 2:
    num = num + " hai mươi";
    break;
  case 3:
    num = num + " ba mươi";
    break;
  case 4:
    num = num + " bốn mươi";
    break;
  case 5:
    num = num + " năm mươi";
    break;
  case 6:
    num = num + " sáu mươi";
    break;
  case 7:
    num = num + " bảy mươi";
    break;
  case 8:
    num = num + " tám mươi";
    break;
  case 9:
    num = num + " chín mươi";
    break;
  default:
    num = num + " linh";
    break;
}
switch (num3) {
  case 1:
    num = num + " mốt";
    break;
  case 2:
    num = num + " hai";
    break;
  case 3:
    num = num + " ba";
    break;
  case 4:
    num = num + " bốn";
    break;
  case 5:
    num = num + " năm";
    break;
  case 6:
    num = num + " sáu";
    break;
  case 7:
    num = num + " bảy";
    break;
  case 8:
    num = num + " tám";
    break;
  case 9:
    num = num + " chín";
    break;
  default:
    break;
}
alert(num);
