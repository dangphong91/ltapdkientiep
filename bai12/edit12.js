let a = Number(prompt("Nhập vào số tiền vay :"));
let thang = 12;
let lai = 0.05;
let tienlai = 0;
if (a > 0) {
    for (i = 1; i <= 12; i++) {
        tienlai += (a + tienlai) * 0.05;
    }
    alert("Số tiền lãi sau 1 năm là :" + parseInt(tienlai));
} else {
    alert("Nhập vào số tiền lớn hơn 0 !");
}