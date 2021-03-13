let a = Number(prompt("Nhập cạnh a :"));
let b = Number(prompt("Nhập cạnh b :"));
let c = Number(prompt("Nhập cạnh c :"));
if ( a,b,c > 0 && a + b > c && b + c > a && a + c > b) {
    alert(a + ", " + b + ", " + c + " là 3 cạnh của tam giác !")
} else {
    alert(a + ", " + b + ", " + c + " không phải là 3 cạnh của tam giác !")
}