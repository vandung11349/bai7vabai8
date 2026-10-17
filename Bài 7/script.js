const danhSachHang = ["Intel", "AMD", "NVIDIA"];

const ddl = document.getElementById("ddlDanhsachhangsx");
const khuVucThem = document.getElementById("khuVucThem");
const txtHang = document.getElementById("txtHang");
const btnThem = document.getElementById("btnThem");
const btnLuu = document.getElementById("btnLuu");

function hienThiDanhSach() {
    ddl.innerHTML = "";

    danhSachHang.forEach(function(hang) {
        const option = document.createElement("option");
        option.value = hang;
        option.textContent = hang;
        ddl.appendChild(option);
    });
}

btnThem.onclick = function() {
    khuVucThem.classList.remove("hidden");
    btnThem.classList.add("hidden");
    btnLuu.classList.remove("hidden");
    txtHang.value = "";
    txtHang.focus();
};

btnLuu.onclick = function() {
    const hang = txtHang.value.trim();

    if (hang === "") {
        alert("Vui lòng nhập tên hãng sản xuất!");
        txtHang.focus();
        return;
    }

    const daTonTai = danhSachHang.some(function(item) {
        return item.toLowerCase() === hang.toLowerCase();
    });

    if (daTonTai) {
        alert("Hãng sản xuất đã tồn tại!");
        txtHang.focus();
        return;
    }

    danhSachHang.push(hang);
    hienThiDanhSach();
    ddl.value = hang;
    huyThem();
};

function huyThem() {
    khuVucThem.classList.add("hidden");
    btnLuu.classList.add("hidden");
    btnThem.classList.remove("hidden");
    txtHang.value = "";
}

document.getElementById("btnHuy").onclick = huyThem;

hienThiDanhSach();