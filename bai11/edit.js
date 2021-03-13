let thunhap = Number(prompt("Thu nhập trong 1 tháng :"));
let tienthue;
if (thunhap > 0) {
    if(thunhap <= 5000000) {
    tienthue = thunhap * 0.05;
    alert(tienthue + "vnđ");
} else if (thunhap <= 10000000) {
    tienthue = 250000 + (thunhap - 5000000) * 0.1;
    alert(tienthue + "vnđ");
} else if (thunhap <= 18000000) {
    tienthue = 750000 + (thunhap - 10000000) * 0.15;
    alert(tienthue + "vnđ");
} else if (thunhap <= 32000000) {
    tienthue = 1950000 + (thunhap - 18000000) * 0.2;
    alert(tienthue + "vnđ");
} else if (thunhap <= 52000000) {
    tienthue = 4750000 + (thunhap - 32000000) * 0.25;
    alert(tienthue + "vnđ");
} else if (thunhap <= 80000000) {
    tienthue = 9750000 + (thunhap - 52000000) * 0.3;
    alert(tienthue + "vnđ");
} else if (thunhap > 80000000) {
    tienthue = 18150000 + (thunhap - 80000000) * 0.35;
    alert(tienthue + "vnđ");
}
} else {
    alert("Nhập số điện > 0");
}