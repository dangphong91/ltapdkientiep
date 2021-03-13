let a = Number(prompt("Nhập gía trị 1 cạnh hình chữ nhật :"));
let b = Number(prompt("Nhập gía trị cạnh còn lại của hình chữ nhật :"));
if (a > 0 && b > 0) {
    let dt = a * b;
    alert("Hình chữ nhật có 2 cạnh " + a + " và " + b + " có diện tích là : " + dt);
} else {
    alert("Hãy nhập 2 giá trị > 0")
}