let a = Number(prompt("Nhập giá trị a của phương trình :"));
let b = Number(prompt("Nhập giá trị b của phương trình :"));
let c = Number(prompt("Nhập giá trị c của phương trình :"));
if (Number.isInteger(a + b + c)) {
    if (a == 0 ) {
        alert("Phương trình có 1 nghiệm : x = " + (-1 * c / b));
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            alert("Phương trình vô ngiệm .");    
        } else if (delta = 0) {
            alert("Phương trình có 1 nghiệm : x = " + (-1 * b / 2 * a));
        } else {
            alert("Phương trình có 2 nghiệm : x1 = " +
            ((-1 * b + Math.sqrt(delta)) / (2 * a)) +
            "x2 = " + ((-1 * b - Math.sqrt(delta)) / (2 * a)));
        }
    }
} else {
    alert("Hãy nhập 2 số thực !!!");
}