let accout = prompt("nhập tên:");
let pass;
if (accout == "ADMIN") {
  pass = prompt("nhập mật khẩu?");
  if (pass == "TheMaster") {
    alert("Welcome");
  } else if (pass == "") {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (accout == "") {
  alert("Cancelled");
} else {
  alert("I DOn't know you");
}
