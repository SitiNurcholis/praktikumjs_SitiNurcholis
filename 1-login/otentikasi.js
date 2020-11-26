// SITI NURCHOLIS
// 0110120009

function Validasi() {
    var nama = document.getElementById("nama").value;
    var password = document.getElementById("pw").value;
    if (nama == "" && password == "") {
        alert('Harap masukkan username dan password dengan benar !');
        return false;
    } else if (nama == "admin" && password == "admin123") {
        alert('Login Sukses');
        window.open(" newpage.html ");
        return true;
    } else {
        alert('Harap masukkan username dan password dengan benar !');
    }
}