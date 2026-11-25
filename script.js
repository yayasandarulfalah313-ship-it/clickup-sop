// 1. DATABASE TEMPLATE SOP
// Anda bisa menambahkan lebih banyak template di sini sesuai kebutuhan pesantren
const sopDatabase = {
    "kbm": {
        judul: "Kegiatan Belajar Mengajar (KBM)",
        nomor: "SOP-KUR-001",
        tujuan: "Memastikan proses kegiatan belajar mengajar di kelas berlangsung secara efektif, efisien, tertib, dan sesuai dengan kurikulum pesantren yang berlaku.",
        ruangLingkup: "SOP ini berlaku untuk seluruh Ustadz/Ustadzah, santri, dan tenaga kependidikan di lingkungan Pondok Pesantren DDI Mattoanging dalam pelaksanaan KBM.",
        definisi: "1. Ustadz/Ustadzah: Pendidik profesional yang bertugas merencanakan dan melaksanakan pembelajaran.\n2. Santri: Peserta didik yang menimba ilmu di pondok pesantren.\n3. Jurnal Kelas: Catatan harian aktivitas pembelajaran.",
        dasarHukum: "1. UU No. 20 Tahun 2003 tentang Sisdiknas.\n2. Peraturan Yayasan Darul Falah tentang Standar Pendidikan Pesantren.\n3. Kurikulum Nasional dan Kurikulum Khas Pesantren.",
        prosedur: [
            { no: 1, uraian: "Ustadz memasuki kelas 5 menit sebelum bel berbunyi, mempersiapkan media dan memimpin doa.", pelaksana: "Ustadz", waktu: "5 mnt sblm KBM", output: "Kelas Kondusif" },
            { no: 2, uraian: "Ustadz melakukan presensi kehadiran santri dan menyampaikan tujuan pembelajaran.", pelaksana: "Ustadz", waktu: "5-10 menit", output: "Daftar Hadir" },
            { no: 3, uraian: "Melaksanakan kegiatan inti pembelajaran sesuai Modul Ajar/RPP.", pelaksana: "Ustadz & Santri", waktu: "Sesuai JP", output: "Modul Ajar" },
            { no: 4, uraian: "Mengisi Jurnal Kelas dan menutup pembelajaran dengan refleksi serta doa penutup.", pelaksana: "Ustadz", waktu: "5 mnt akhir", output: "Jurnal Kelas" }
        ],
        dokumen: "1. Modul Ajar / RPP\n2. Daftar Hadir Santri\n3. Jurnal Kelas"
    },
    "perpustakaan": {
        judul: "Pelayanan Peminjaman Buku Perpustakaan",
        nomor: "SOP-SAR-002",
        tujuan: "Mengatur tata cara peminjaman dan pengembalian buku agar tertib, terdata, dan buku terjaga keawetannya.",
        ruangLingkup: "Berlaku untuk seluruh santri, dewan guru, dan staf yang menggunakan fasilitas Perpustakaan Pondok.",
        definisi: "1. Pustakawan: Petugas yang mengelola perpustakaan.\n2. Kartu Anggota: Identitas peminjam.",
        dasarHukum: "1. Peraturan Tata Tertib Perpustakaan Pondok Pesantren DDI Mattoanging.",
        prosedur: [
            { no: 1, uraian: "Santri/Guru datang ke perpustakaan dan menyerahkan kartu anggota.", pelaksana: "Pemustaka", waktu: "Jam Operasional", output: "Kartu Anggota" },
            { no: 2, uraian: "Pustakawan memverifikasi kartu dan mengecek status denda/pinjaman.", pelaksana: "Pustakawan", waktu: "2 menit", output: "Status Valid" },
            { no: 3, uraian: "Pemustaka memilih buku, Pustakawan memindai (scan) barcode buku.", pelaksana: "Pustakawan", waktu: "3 menit", output: "Data Peminjaman" },
            { no: 4, uraian: "Buku diserahkan dan tanggal pengembalian dicatat/diinput ke sistem.", pelaksana: "Pustakawan", waktu: "1 menit", output: "Buku Terpinjam" }
        ],
        dokumen: "1. Buku Tamu Perpustakaan\n2. Kartu Peminjaman\n3. Sistem Informasi Perpustakaan"
    },
    "disiplin": {
        judul: "Penanganan Pelanggaran Disiplin Santri",
        nomor: "SOP-KES-003",
        tujuan: "Memberikan pembinaan dan sanksi edukatif yang terukur terhadap santri yang melanggar tata tertib pondok.",
        ruangLingkup: "Berlaku untuk seluruh santri dan pengurus kesiswaan/keasramaan.",
        definisi: "1. Pelanggaran: Tindakan yang bertentangan dengan tata tertib pondok.\n2. Sanksi Edukatif: Hukuman yang bersifat mendidik (misal: menghafal, membersihkan area).",
        dasarHukum: "1. Kitab Tata Tertib Santri Pondok Pesantren DDI Mattoanging.",
        prosedur: [
            { no: 1, uraian: "Pengurus/Piket mencatat pelanggaran santri di Buku Jurnal Harian.", pelaksana: "Piket Asrama", waktu: "Saat kejadian", output: "Catatan Jurnal" },
            { no: 2, uraian: "Musyawarah pengurus untuk menentukan jenis sanksi edukatif yang sesuai.", pelaksana: "Pengurus Asrama", waktu: "Malam hari", output: "Keputusan Sanksi" },
            { no: 3, uraian: "Santri melaksanakan sanksi edukatif di bawah pengawasan pengurus.", pelaksana: "Santri & Pengurus", waktu: "Sesuai sanksi", output: "Sanksi Selesai" },
            { no: 4, uraian: "Evaluasi dan pencatatan poin pelanggaran di sistem kesiswaan.", pelaksana: "Sekretaris Kesiswaan", waktu: "Akhir pekan", output: "Rekap Poin" }
        ],
        dokumen: "1. Buku Jurnal Pelanggaran\n2. Formulir Sanksi Edukatif"
    },
    "piket": {
        judul: "Piket Harian Dewan Guru dan Karyawan",
        nomor: "SOP-UMM-004",
        tujuan: "Memastikan kelancaran, keamanan, dan ketertiban kegiatan pondok pesantren setiap hari.",
        ruangLingkup: "Berlaku untuk guru dan karyawan yang mendapat jadwal piket harian.",
        definisi: "1. Guru Piket: Guru yang ditugaskan mengawasi jalannya kegiatan pondok pada hari tertentu.",
        dasarHukum: "1. SK Kepala Pondok tentang Jadwal Piket Harian.",
        prosedur: [
            { no: 1, uraian: "Datang 30 menit sebelum kegiatan pagi dimulai dan membuka gerbang utama.", pelaksana: "Guru Piket", waktu: "05:00 WITA", output: "Pondok Terbuka" },
            { no: 2, uraian: "Mengawasi pelaksanaan shalat berjamaah dan kegiatan pagi santri.", pelaksana: "Guru Piket", waktu: "05:30 - 07:00", output: "Kegiatan Tertib" },
            { no: 3, uraian: "Melakukan sweeping/razia kedisiplinan di kelas dan asrama secara acak.", pelaksana: "Guru Piket", waktu: "Siang/Sore", output: "Laporan Razia" },
            { no: 4, uraian: "Menutup gerbang pondok dan memastikan semua santri masuk asrama setelah isya.", pelaksana: "Guru Piket", waktu: "21:30 WITA", output: "Pondok Tertutup" }
        ],
        dokumen: "1. Buku Jurnal Piket\n2. Formulir Laporan Harian"
    }
};

// 2. FUNGSI GENERATE SOP
function generateSOP() {
    const inputName = document.getElementById('sopName').value.trim().toLowerCase();
    
    if (!inputName) {
        alert("Silakan masukkan nama atau judul SOP terlebih dahulu!");
        return;
    }

    let selectedTemplate = null;

    // Cari template yang cocok (fuzzy matching sederhana)
    for (const key in sopDatabase) {
        if (inputName.includes(key) || sopDatabase[key].judul.toLowerCase().includes(inputName)) {
            selectedTemplate = sopDatabase[key];
            break;
        }
    }

    // Jika tidak ada di database, buat template generik
    if (!selectedTemplate) {
        selectedTemplate = generateGenericTemplate(inputName);
    }

    renderSOP(selectedTemplate);
    document.getElementById('previewSection').style.display = 'block';
    document.getElementById('previewSection').scrollIntoView({ behavior: 'smooth' });
}

function generateGenericTemplate(name) {
    const capitalizedName = name.replace(/\b\w/g, l => l.toUpperCase());
    return {
        judul: capitalizedName,
        nomor: "SOP-GEN-" + Math.floor(Math.random() * 900 + 100),
        tujuan: `Menjamin kelancaran, kualitas, dan standarisasi pelaksanaan kegiatan ${capitalizedName} di lingkungan Pondok Pesantren DDI Mattoanging.`,
        ruangLingkup: `SOP ini mencakup seluruh tahapan pelaksanaan ${capitalizedName} yang melibatkan seluruh civitas akademika pondok pesantren.`,
        definisi: `1. Pelaksana: Pihak yang bertanggung jawab atas kegiatan ${capitalizedName}.\n2. Pengawas: Pihak yang mengawasi jalannya kegiatan.`,
        dasarHukum: "1. Peraturan Yayasan Darul Falah.\n2. Kebijakan Internal Pondok Pesantren DDI Mattoanging.",
        prosedur: [
            { no: 1, uraian: "Persiapan sarana dan prasarana untuk kegiatan.", pelaksana: "Panitia/Pelaksana", waktu: "H-1", output: "Sarana Siap" },
            { no: 2, uraian: "Pelaksanaan kegiatan inti sesuai rencana.", pelaksana: "Seluruh Pihak", waktu: "Hari H", output: "Kegiatan Terlaksana" },
            { no: 3, uraian: "Evaluasi dan pelaporan hasil kegiatan.", pelaksana: "Ketua Pelaksana", waktu: "H+1", output: "Laporan Kegiatan" }
        ],
        dokumen: "1. Formulir Persiapan\n2. Laporan Pelaksanaan"
    };
}

// 3. FUNGSI RENDER KE HTML
function renderSOP(data) {
    // Set Tanggal (Konteks: 24 November 2026)
    document.getElementById('tanggalHariIni').innerText = "24 November 2026";

    // Render Tabel Identitas
    document.getElementById('identityTable').innerHTML = `
        <tr><td>Judul SOP</td><td>${data.judul}</td></tr>
        <tr><td>Nomor Dokumen</td><td>${data.nomor}</td></tr>
        <tr><td>Tanggal Terbit</td><td>24 November 2026</td></tr>
        <tr><td>Disusun Oleh</td><td>Tim Penjaminan Mutu Pondok</td></tr>
        <tr><td>Disahkan Oleh</td><td>Ketua Yayasan Darul Falah</td></tr>
    `;

    // Render Komponen Text
    document.getElementById('tujuan').innerText = data.tujuan;
    document.getElementById('ruangLingkup').innerText = data.ruangLingkup;
    document.getElementById('definisi').innerText = data.definisi;
    document.getElementById('dasarHukum').innerText = data.dasarHukum;
    document.getElementById('dokumenTerkait').innerText = data.dokumen;

    // Render Tabel Prosedur
    let procedureHTML = "";
    data.prosedur.forEach(p => {
        procedureHTML += `
            <tr>
                <td style="text-align:center;">${p.no}</td>
                <td contenteditable="true">${p.uraian}</td>
                <td contenteditable="true">${p.pelaksana}</td>
                <td contenteditable="true">${p.waktu}</td>
                <td contenteditable="true">${p.output}</td>
            </tr>
        `;
    });
    document.getElementById('procedureBody').innerHTML = procedureHTML;
}

// 4. FUNGSI EXPORT PDF
function exportPDF() {
    const element = document.getElementById('sop-preview');
    const sopName = document.querySelector('.doc-title').nextElementSibling ? "SOP" : "Dokumen"; // fallback
    
    // Konfigurasi html2pdf
    const opt = {
        margin:       [10, 10, 10, 10],
        filename:     `SOP_Yayasan_Darul_Falah_${new Date().getTime()}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Hilangkan border editable saat print
    document.querySelectorAll('.editable').forEach(el => el.style.border = 'none');
    document.querySelectorAll('[contenteditable]').forEach(el => el.style.border = 'none');

    html2pdf().set(opt).from(element).save().then(() => {
        // Kembalikan border setelah export
        document.querySelectorAll('.editable').forEach(el => el.style.border = '1px dashed transparent');
    });
}

// 5. FUNGSI EXPORT WORD (Menggunakan trik HTML-to-Word Blob)
function exportWord() {
    const source = document.getElementById('sop-preview').innerHTML;
    
    // Template HTML khusus untuk MS Word agar format tabel dan font terbaca
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export to Word</title></head><body>";
    const footer = "</body></html>";
    
    // Bersihkan atribut contenteditable agar tidak error di Word
    let cleanSource = source.replace(/contenteditable="true"/g, "");
    
    const sourceHTML = header + cleanSource + footer;
    
    const blob = new Blob(['\ufeff', sourceHTML], {
        type: 'application/msword'
    });
    
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `SOP_Yayasan_Darul_Falah_${new Date().getTime()}.doc`;
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
