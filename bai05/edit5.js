let a = Number(prompt("Nhập gía trị cạnh kề tam giác vuông :"));
let b = Number(prompt("Nhập gía trị cạnh kề còn lại của tam giác vuông :"));
if (a > 0 && b > 0) {
    let dt = a * b / 2;
    alert("Tam giác vuông có 2 cạnh kề " + a + " và " + b + " có diện tích là : " + dt);
} else {
    alert("Hãy nhập 2 giá trị > 0")
}