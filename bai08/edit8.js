let old = Number(prompt("Nhập tuổi :"));
let ktra = old / parseInt(old);
if (ktra == 1 && old > 0 && old < 120) {
    alert(old + " là tuổi của người !");
} else {
    alert("Không phải tuổi của người !");
}