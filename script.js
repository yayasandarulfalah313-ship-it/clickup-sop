// 1. DATABASE TEMPLATE SOP - DENGAN 10 LANGKAH PROSEDUR
const sopDatabase = {
    "kbm": {
        judul: "Kegiatan Belajar Mengajar (KBM)",
        nomor: "SOP-KUR-001",
        tujuan: "Memastikan proses kegiatan belajar mengajar di kelas berlangsung secara efektif, efisien, tertib, dan sesuai dengan kurikulum pesantren yang berlaku.",
        ruangLingkup: "SOP ini berlaku untuk seluruh Ustadz/Ustadzah, santri, dan tenaga kependidikan di lingkungan Pondok Pesantren DDI Mattoanging dalam pelaksanaan KBM.",
        definisi: "1. Ustadz/Ustadzah: Pendidik profesional yang bertugas merencanakan dan melaksanakan pembelajaran.\n2. Santri: Peserta didik yang menimba ilmu di pondok pesantren.\n3. Jurnal Kelas: Catatan harian aktivitas pembelajaran.",
        dasarHukum: "1. UU No. 20 Tahun 2003 tentang Sisdiknas.\n2. Peraturan Yayasan Darul Falah tentang Standar Pendidikan Pesantren.\n3. Kurikulum Nasional dan Kurikulum Khas Pesantren.",
        prosedur: [
            { no: 1, uraian: "Ustadz/Ustadzah mempersiapkan perangkat pembelajaran (Modul Ajar/RPP, media, alat peraga) minimal 1 hari sebelumnya.", pelaksana: "Ustadz/Ustadzah", waktu: "H-1", output: "Perangkat Pembelajaran Siap" },
            { no: 2, uraian: "Ustadz memasuki kelas 5 menit sebelum bel berbunyi dan mempersiapkan kondisi kelas.", pelaksana: "Ustadz", waktu: "5 mnt sblm KBM", output: "Kelas Kondusif" },
            { no: 3, uraian: "Ketua kelas memimpin doa pembuka dan menyanyikan lagu Indonesia Raya/mars pesantren.", pelaksana: "Ketua Kelas", waktu: "2 menit", output: "Suasana Khidmat" },
            { no: 4, uraian: "Ustadz melakukan presensi kehadiran santri dan mencatat yang tidak hadir.", pelaksana: "Ustadz", waktu: "3 menit", output: "Daftar Hadir" },
            { no: 5, uraian: "Ustadz menyampaikan tujuan pembelajaran dan melakukan apersepsi untuk memotivasi santri.", pelaksana: "Ustadz", waktu: "5 menit", output: "Santri Siap Belajar" },
            { no: 6, uraian: "Melaksanakan kegiatan inti pembelajaran sesuai skenario dalam Modul Ajar/RPP.", pelaksana: "Ustadz & Santri", waktu: "Sesuai JP", output: "Kegiatan Inti Terlaksana" },
            { no: 7, uraian: "Santri mengerjakan tugas/latihan/LKPD yang diberikan oleh Ustadz.", pelaksana: "Santri", waktu: "15-20 menit", output: "LKPD Terisi" },
            { no: 8, uraian: "Ustadz melakukan refleksi pembelajaran dan memberikan penguatan materi.", pelaksana: "Ustadz", waktu: "5 menit", output: "Pemahaman Santri" },
            { no: 9, uraian: "Ustadz mengisi Jurnal Kelas dengan mencatat aktivitas dan kendala selama pembelajaran.", pelaksana: "Ustadz", waktu: "3 menit", output: "Jurnal Kelas Terisi" },
            { no: 10, uraian: "Kegiatan ditutup dengan doa penutup dan salam oleh Ustadz.", pelaksana: "Ustadz & Santri", waktu: "2 menit", output: "KBM Selesai" }
        ],
        dokumen: "1. Modul Ajar / RPP\n2. Daftar Hadir Santri\n3. Jurnal Kelas\n4. LKPD / Tugas Santri"
    },
    "perpustakaan": {
        judul: "Pelayanan Peminjaman Buku Perpustakaan",
        nomor: "SOP-SAR-002",
        tujuan: "Mengatur tata cara peminjaman dan pengembalian buku agar tertib, terdata, dan buku terjaga keawetannya.",
        ruangLingkup: "Berlaku untuk seluruh santri, dewan guru, dan staf yang menggunakan fasilitas Perpustakaan Pondok.",
        definisi: "1. Pustakawan: Petugas yang mengelola perpustakaan.\n2. Kartu Anggota: Identitas peminjam.\n3. Denda: Sanksi finansial untuk keterlambatan pengembalian.",
        dasarHukum: "1. Peraturan Tata Tertib Perpustakaan Pondok Pesantren DDI Mattoanging.",
        prosedur: [
            { no: 1, uraian: "Pemustaka datang ke perpustakaan pada jam operasional dan mengisi buku tamu.", pelaksana: "Pemustaka", waktu: "Jam Operasional", output: "Buku Tamu Terisi" },
            { no: 2, uraian: "Pemustaka menyerahkan kartu anggota kepada pustakawan untuk verifikasi.", pelaksana: "Pemustaka", waktu: "1 menit", output: "Kartu Anggota" },
            { no: 3, uraian: "Pustakawan mengecek status kartu anggota (aktif/tidak, ada denda/tidak).", pelaksana: "Pustakawan", waktu: "2 menit", output: "Status Valid" },
            { no: 4, uraian: "Pemustaka memilih buku dari rak sesuai kategori yang diinginkan.", pelaksana: "Pemustaka", waktu: "5-10 menit", output: "Buku Terpilih" },
            { no: 5, uraian: "Pemustaka menyerahkan buku yang dipilih kepada pustakawan di meja sirkulasi.", pelaksana: "Pemustaka", waktu: "1 menit", output: "Buku di Meja Sirkulasi" },
            { no: 6, uraian: "Pustakawan memindai (scan) barcode buku dan kartu anggota ke sistem.", pelaksana: "Pustakawan", waktu: "2 menit", output: "Data Terinput" },
            { no: 7, uraian: "Pustakawan mencatat tanggal peminjaman dan batas waktu pengembalian.", pelaksana: "Pustakawan", waktu: "1 menit", output: "Tanggal Pinjam & Kembali" },
            { no: 8, uraian: "Pustakawan menyerahkan buku yang sudah diproses kepada pemustaka.", pelaksana: "Pustakawan", waktu: "1 menit", output: "Buku Terpinjam" },
            { no: 9, uraian: "Pemustaka memeriksa kondisi buku sebelum meninggalkan perpustakaan.", pelaksana: "Pemustaka", waktu: "1 menit", output: "Buku dalam Kondisi Baik" },
            { no: 10, uraian: "Pustakawan mengarsipkan kartu peminjaman dan merapikan kembali meja sirkulasi.", pelaksana: "Pustakawan", waktu: "1 menit", output: "Data Terarsip" }
        ],
        dokumen: "1. Buku Tamu Perpustakaan\n2. Kartu Peminjaman\n3. Sistem Informasi Perpustakaan\n4. Formulir Denda (jika ada)"
    },
    "disiplin": {
        judul: "Penanganan Pelanggaran Disiplin Santri",
        nomor: "SOP-KES-003",
        tujuan: "Memberikan pembinaan dan sanksi edukatif yang terukur terhadap santri yang melanggar tata tertib pondok.",
        ruangLingkup: "Berlaku untuk seluruh santri dan pengurus kesiswaan/keasramaan.",
        definisi: "1. Pelanggaran: Tindakan yang bertentangan dengan tata tertib pondok.\n2. Sanksi Edukatif: Hukuman yang bersifat mendidik (misal: menghafal, membersihkan area).\n3. Poin Pelanggaran: Akumulasi nilai pelanggaran yang menentukan tingkat sanksi.",
        dasarHukum: "1. Kitab Tata Tertib Santri Pondok Pesantren DDI Mattoanging.",
        prosedur: [
            { no: 1, uraian: "Pengurus asrama/piket menemukan dan mencatat pelanggaran santri di Buku Jurnal Harian.", pelaksana: "Piket Asrama", waktu: "Saat kejadian", output: "Catatan Jurnal" },
            { no: 2, uraian: "Pengurus memanggil santri yang melanggar untuk dikonfirmasi dan dimintai keterangan.", pelaksana: "Pengurus Asrama", waktu: "1x24 jam", output: "Konfirmasi Pelanggaran" },
            { no: 3, uraian: "Pengurus melakukan musyawarah internal untuk menentukan jenis sanksi edukatif yang sesuai.", pelaksana: "Pengurus Asrama", waktu: "Malam hari", output: "Keputusan Sanksi" },
            { no: 4, uraian: "Pengurus memberitahukan sanksi yang akan dijalankan kepada santri dengan penjelasan edukatif.", pelaksana: "Pengurus Asrama", waktu: "Pagi hari", output: "Santri Paham Sanksi" },
            { no: 5, uraian: "Santri melaksanakan sanksi edukatif di bawah pengawasan pengurus (misal: menghafal Al-Quran, membersihkan masjid).", pelaksana: "Santri & Pengurus", waktu: "Sesuai sanksi", output: "Sanksi Dilaksanakan" },
            { no: 6, uraian: "Pengurus memverifikasi penyelesaian sanksi dan memberikan penilaian sikap santri.", pelaksana: "Pengurus Asrama", waktu: "Setelah sanksi", output: "Verifikasi Selesai" },
            { no: 7, uraian: "Sekretaris kesiswaan mencatat poin pelanggaran ke dalam sistem data kedisiplinan.", pelaksana: "Sekretaris Kesiswaan", waktu: "Akhir pekan", output: "Poin Tercatat" },
            { no: 8, uraian: "Jika poin mencapai threshold tertentu, Wali Kelas/Musyrif memanggil orang tua/wali santri.", pelaksana: "Wali Kelas/Musyrif", waktu: "Sesuai threshold", output: "Surat Panggilan Ortu" },
            { no: 9, uraian: "Pelaksanaan konseling bersama santri, orang tua, dan pihak pondok untuk membuat surat perjanjian.", pelaksana: "Guru BK, Ortu, Pondok", waktu: "Sesuai jadwal", output: "Surat Perjanjian" },
            { no: 10, uraian: "Penerbitan Surat Peringatan (SP 1/2/3) atau sanksi pengembalian santri kepada orang tua jika diperlukan.", pelaksana: "Kepala Pondok", waktu: "Setelah konseling", output: "Surat Peringatan" }
        ],
        dokumen: "1. Buku Jurnal Pelanggaran\n2. Formulir Sanksi Edukatif\n3. Sistem Data Kedisiplinan\n4. Surat Peringatan (SP)"
    },
    "piket": {
        judul: "Piket Harian Dewan Guru dan Karyawan",
        nomor: "SOP-UMM-004",
        tujuan: "Memastikan kelancaran, keamanan, dan ketertiban kegiatan pondok pesantren setiap hari.",
        ruangLingkup: "Berlaku untuk guru dan karyawan yang mendapat jadwal piket harian.",
        definisi: "1. Guru Piket: Guru yang ditugaskan mengawasi jalannya kegiatan pondok pada hari tertentu.\n2. Buku Jurnal Piket: Catatan harian aktivitas dan kejadian selama piket.",
        dasarHukum: "1. SK Kepala Pondok tentang Jadwal Piket Harian.",
        prosedur: [
            { no: 1, uraian: "Guru piket datang 30 menit sebelum kegiatan pagi dimulai (05:00 WITA) dan membuka gerbang utama.", pelaksana: "Guru Piket", waktu: "05:00 WITA", output: "Pondok Terbuka" },
            { no: 2, uraian: "Guru piket mengawasi pelaksanaan shalat Subuh berjamaah dan kegiatan pagi santri.", pelaksana: "Guru Piket", waktu: "05:30 - 06:30", output: "Kegiatan Tertib" },
            { no: 3, uraian: "Guru piket memastikan semua santri mengikuti kegiatan olahraga/pembiasaan pagi.", pelaksana: "Guru Piket", waktu: "06:30 - 07:00", output: "Santri Aktif" },
            { no: 4, uraian: "Guru piket mengawasi pelaksanaan sarapan pagi dan memastikan santri makan dengan tertib.", pelaksana: "Guru Piket", waktu: "07:00 - 07:30", output: "Santri Sarapan" },
            { no: 5, uraian: "Guru piket memantau kelancaran kegiatan belajar mengajar di kelas (sweeping kelas).", pelaksana: "Guru Piket", waktu: "08:00 - 12:00", output: "KBM Berjalan" },
            { no: 6, uraian: "Guru piket mengawasi pelaksanaan shalat Dzuhur berjamaah dan makan siang.", pelaksana: "Guru Piket", waktu: "12:00 - 13:30", output: "Shalat & Makan Tertib" },
            { no: 7, uraian: "Guru piket melakukan razia kedisiplinan di asrama dan area pondok secara acak.", pelaksana: "Guru Piket", waktu: "15:00 - 16:00", output: "Laporan Razia" },
            { no: 8, uraian: "Guru piket mengawasi pelaksanaan shalat Ashar, Maghrib, dan Isya berjamaah.", pelaksana: "Guru Piket", waktu: "15:30 - 20:00", output: "Shalat Berjamaah" },
            { no: 9, uraian: "Guru piket memastikan semua santri masuk asrama dan gerbang pondok ditutup setelah Isya.", pelaksana: "Guru Piket", waktu: "20:30 WITA", output: "Pondok Tertutup" },
            { no: 10, uraian: "Guru piket mengisi Buku Jurnal Piket dengan mencatat seluruh aktivitas dan kejadian penting hari itu.", pelaksana: "Guru Piket", waktu: "21:00 WITA", output: "Jurnal Piket Terisi" }
        ],
        dokumen: "1. Buku Jurnal Piket\n2. Formulir Laporan Harian\n3. Formulir Razia Kedisiplinan"
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
        definisi: `1. Pelaksana: Pihak yang bertanggung jawab atas kegiatan ${capitalizedName}.\n2. Pengawas: Pihak yang mengawasi jalannya kegiatan.\n3. Beneficiary: Pihak yang menerima manfaat dari kegiatan.`,
        dasarHukum: "1. Peraturan Yayasan Darul Falah.\n2. Kebijakan Internal Pondok Pesantren DDI Mattoanging.",
        prosedur: [
            { no: 1, uraian: "Pembentukan panitia/pelaksana kegiatan dan pembagian tugas.", pelaksana: "Kepala Pondok", waktu: "H-7", output: "SK Panitia" },
            { no: 2, uraian: "Penyusunan rencana kerja dan jadwal pelaksanaan kegiatan.", pelaksana: "Ketua Pelaksana", waktu: "H-5", output: "Rencana Kerja" },
            { no: 3, uraian: "Persiapan sarana, prasarana, dan anggaran yang dibutuhkan.", pelaksana: "Panitia", waktu: "H-3", output: "Sarana Siap" },
            { no: 4, uraian: "Sosialisasi kegiatan kepada seluruh pihak yang terlibat.", pelaksana: "Sekretaris", waktu: "H-2", output: "Surat Edaran" },
            { no: 5, uraian: "Gladi bersih/persiapan akhir sebelum pelaksanaan kegiatan.", pelaksana: "Seluruh Panitia", waktu: "H-1", output: "Kesiapan 100%" },
            { no: 6, uraian: "Pelaksanaan kegiatan inti sesuai rencana yang telah disusun.", pelaksana: "Seluruh Pihak", waktu: "Hari H", output: "Kegiatan Terlaksana" },
            { no: 7, uraian: "Monitoring dan evaluasi jalannya kegiatan oleh pengawas.", pelaksana: "Pengawas", waktu: "Saat kegiatan", output: "Catatan Monitoring" },
            { no: 8, uraian: "Pendokumentasian kegiatan (foto, video, catatan).", pelaksana: "Seksi Dokumentasi", waktu: "Saat kegiatan", output: "Dokumentasi Lengkap" },
            { no: 9, uraian: "Penyusunan laporan pertanggungjawaban kegiatan.", pelaksana: "Ketua Pelaksana", waktu: "H+3", output: "Draft Laporan" },
            { no: 10, uraian: "Evaluasi akhir dan pelaporan hasil kegiatan kepada Kepala Pondok.", pelaksana: "Panitia", waktu: "H+7", output: "Laporan Final" }
        ],
        dokumen: "1. SK Panitia\n2. Rencana Kerja\n3. Laporan Pelaksanaan\n4. Dokumentasi Kegiatan"
    };
}

// 3. FUNGSI RENDER KE HTML
function renderSOP(data) {
    // Set Tanggal (Konteks: 25 November 2026)
    document.getElementById('tanggalHariIni').innerText = "25 November 2026";

    // Render Tabel Identitas
    document.getElementById('identityTable').innerHTML = `
        <tr><td>Judul SOP</td><td>${data.judul}</td></tr>
        <tr><td>Nomor Dokumen</td><td>${data.nomor}</td></tr>
        <tr><td>Tanggal Terbit</td><td>25 November 2026</td></tr>
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
