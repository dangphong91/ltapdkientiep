let a = Number(prompt("Nhập giá trị a của phương trình :"));
let b = Number(prompt("Nhập giá trị b của phương trình :"));
if (Number.isInteger(a + b)) {
    if (a != 0) {
        let x = -b / a;
        alert("Phương trình có nghiệm x = " + x);
    } else if ( b == 0) {
        alert("Phương trình có vô số nghiệm.");
    } else {
        alert("Phương trình vô nghiệm.");
    }
} else {
    alert("Hãy nhập 2 số thực !!!");
}