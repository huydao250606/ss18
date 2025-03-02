let hour = +prompt("nhập giờ(0-23)");
let minus = +prompt("nhập phút(0-59)");
let giay = +prompt("nhập giây(0-59)");
let time = "";
if (hour < 12 && minus <= 59 && giay <= 59) {
  alert(hour + ":" + minus + ":" + giay + " AM");
} else if (hour <= 23 && minus <= 59 && giay <= 59) {
  time = hour - 12;
  alert(time + ":" + minus + ":" + giay + " PM");
} else {
  alert("Nhập lại đê bạn eiii");
}
