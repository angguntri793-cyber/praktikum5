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

// ==========================================
// TO DO LIST LOGIC
// ==========================================
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Tambahkan tugas baru
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const li = document.createElement("li");
    
    // Teks tugas
    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";
    
    // Toggle status selesai jika teks diklik
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });
    
    // Tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
    
    // Reset input
    taskInput.value = "";
});

// Menambahkan tugas dengan menekan tombol Enter
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});

// ==========================================
// THEME SWITCHER LOGIC (MULTI THEME)
// ==========================================
const themeButtons = document.querySelectorAll(".theme-circle");

themeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        // Hapus semua tema yang sudah dipasang
        document.body.classList.remove("light-theme", "ocean-theme", "forest-theme", "fiery-theme");
        
        // Ambil nama tema dari atribut data-theme
        const selectedTheme = btn.getAttribute("data-theme");
        
        // Tambahkan tema baru jika bukan tema default (original)
        if (selectedTheme !== "default-theme") {
            document.body.classList.add(selectedTheme);
        }
    });
});
