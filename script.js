// mengambil elemen dari HTML
const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");

// interaktif 
document.getElementById("nama").addEventListener("input", function () {
    console.log("User sedang mengetik");
});

// event submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // ambil input 
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const nohp = document.getElementById("nohp").value;
    const kategori = document.getElementById("kategori").value;
    const pesan = document.getElementById("pesan").value;

    // validasi form
    if (nama === "" || email === "" || nohp === "" || kategori === "") {
        alert("Semua wajib diisi!");
        return;
    }

    // validasi nama
    if (nama.length < 3) {
        alert("Nama minimal 3 karakter!");
        return;
    }

    // validasi email
    if (!email.includes("@")) {
        alert("Email tidak valid!");
        return;
    }

    // tampilkan hasil
    hasil.innerHTML = `
    <div style="margin-top:25px; padding:15px; background:#f1f5f9; border-radius:10px;">
        <h3>Data Berhasil Dikirim✔</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No Hp:</strong> ${nohp}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    </div>
    `;

    // notifikasi
    alert("Data berhasil dikirim!");

    //reset form
    form.reset();
});
