const danhSachVXL = [
    {
        ten: "Core i3 7100",
        hang: "Intel",
        ngay: "20/11/2011",
        gia: 3450000
    },
    {
        ten: "Core i5 4430",
        hang: "Intel",
        ngay: "21/08/2012",
        gia: 4530000
    }
];

const bang = document.getElementById("bangDuLieu");

function hienThiBang() {
    bang.innerHTML = "";

    danhSachVXL.forEach(function(vxl, index) {
        const dong = document.createElement("tr");

        const duLieu = [
            index + 1,
            vxl.ten,
            vxl.hang,
            vxl.ngay,
            vxl.gia.toLocaleString("vi-VN")
        ];

        duLieu.forEach(function(noiDung) {
            const o = document.createElement("td");
            o.textContent = noiDung;
            dong.appendChild(o);
        });

        bang.appendChild(dong);
    });
}

function kiemTraNgay(ngay) {
    const mau = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const kq = ngay.match(mau);

    if (!kq) return null;

    const d = Number(kq[1]);
    const m = Number(kq[2]);
    const y = Number(kq[3]);

    const date = new Date(y, m - 1, d);

    if (
        date.getDate() !== d ||
        date.getMonth() !== m - 1 ||
        date.getFullYear() !== y
    ) {
        return null;
    }

    date.setHours(0, 0, 0, 0);
    return date;
}

document.getElementById("btnThem").onclick = function() {
    const ten = document.getElementById("txtTenVXL").value.trim();
    const hang = document.getElementById("txtHang").value.trim();
    const ngay = document.getElementById("txtNgayramat").value.trim();
    const giaNhap = document.getElementById("txtGia").value;

    if (!ten || !hang || !ngay || giaNhap === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const ngayRaMat = kiemTraNgay(ngay);

    if (!ngayRaMat) {
        alert("Ngày không hợp lệ! Nhập dd/mm/yyyy.");
        return;
    }

    const homNay = new Date();
    homNay.setHours(0, 0, 0, 0);

    if (ngayRaMat > homNay) {
        alert("Ngày ra mắt không thể lớn hơn ngày hiện tại!");
        return;
    }

    const gia = Number(giaNhap);

    if (!Number.isFinite(gia) || gia < 0) {
        alert("Giá phải là số không âm!");
        return;
    }

    danhSachVXL.push({
        ten: ten,
        hang: hang,
        ngay: ngay,
        gia: gia
    });

    hienThiBang();
    xoaForm();
};

function xoaForm() {
    document.getElementById("txtTenVXL").value = "";
    document.getElementById("txtHang").value = "";
    document.getElementById("txtNgayramat").value = "";
    document.getElementById("txtGia").value = "";
}

document.getElementById("btnHuy").onclick = xoaForm;

hienThiBang();