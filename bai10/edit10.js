let sodien = Number(prompt("Nhập số điện :"));
let giatien;
let hoadon;
if (sodien > 0) {
    if(sodien <= 50) {
    giatien = sodien * 1678;
    hoadon = giatien * 0.1 + giatien;
    alert(hoadon + "vnđ");
} else if (sodien <= 100) {
    giatien = 83900 + (sodien - 50) * 1734;
    hoadon = giatien * 0.1 + giatien;
    alert(hoadon + "vnđ");
} else if (sodien <= 200) {
    giatien = 83900 + 86700 + (sodien - 100) * 2014;
    hoadon = giatien * 0.1 + giatien;
    alert(hoadon + "vnđ");
} else if (sodien <= 300) {
    giatien = 83900 + 86700 + 201400 + (sodien - 200) * 2536;
    hoadon = giatien * 0.1 + giatien;
    alert(hoadon + "vnđ");
} else if (sodien <= 400) {
    giatien = 83900 + 86700 + 201400 + 253600 + (sodien - 300) * 2834;
    hoadon = giatien * 0.1 + giatien;
    alert(hoadon + "vnđ");
} else if (sodien > 400) {
    giatien = 83900 + 86700 + 201400 + 253600 + 283400 + (sodien - 400) * 2927;
    hoadon = giatien * 0.1 + giatien;
    alert(hoadon + "vnđ");
}
} else {
    alert("Nhập số điện > 0");
}