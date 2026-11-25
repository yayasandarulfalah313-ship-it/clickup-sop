// 1. DATABASE TEMPLATE SOP - SEMUA MEMILIKI 10 LANGKAH PROSEDUR
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
    },
    "ppdb": {
        judul: "Penerimaan Peserta Didik Baru (PPDB)",
        nomor: "SOP-KES-005",
        tujuan: "Mengatur proses penerimaan santri baru secara transparan, adil, dan sesuai dengan kuota yang ditetapkan.",
        ruangLingkup: "Berlaku untuk panitia PPDB, calon santri, dan orang tua/wali calon santri.",
        definisi: "1. Panitia PPDB: Tim yang ditunjuk untuk mengelola proses penerimaan.\n2. Calon Santri: Peserta yang mendaftar untuk menjadi santri baru.\n3. Tes Masuk: Ujian seleksi untuk menentukan kelayakan calon santri.",
        dasarHukum: "1. SK Yayasan Darul Falah tentang Kuota Penerimaan Santri Baru.\n2. Peraturan Internal Pondok Pesantren DDI Mattoanging.",
        prosedur: [
            { no: 1, uraian: "Pembentukan panitia PPDB dan pembagian tugas oleh Kepala Pondok.", pelaksana: "Kepala Pondok", waktu: "H-30 hari", output: "SK Panitia PPDB" },
            { no: 2, uraian: "Penyusunan brosur, formulir pendaftaran, dan materi promosi.", pelaksana: "Sekretaris Panitia", waktu: "H-25 hari", output: "Materi Promosi Siap" },
            { no: 3, uraian: "Publikasi informasi PPDB melalui media sosial, website, dan sekolah-sekolah.", pelaksana: "Seksi Publikasi", waktu: "H-20 hari", output: "Informasi Tersebar" },
            { no: 4, uraian: "Pembukaan pendaftaran dan penerimaan berkas calon santri.", pelaksana: "Seksi Pendaftaran", waktu: "H-15 s/d H-5 hari", output: "Berkas Terkumpul" },
            { no: 5, uraian: "Verifikasi berkas pendaftaran oleh panitia.", pelaksana: "Seksi Verifikasi", waktu: "H-4 hari", output: "Berkas Diverifikasi" },
            { no: 6, uraian: "Pelaksanaan tes masuk (akademik, wawancara, tes kesehatan).", pelaksana: "Panitia Tes", waktu: "H-3 hari", output: "Hasil Tes" },
            { no: 7, uraian: "Rapat pleno untuk menentukan santri yang diterima berdasarkan hasil tes.", pelaksana: "Seluruh Panitia", waktu: "H-2 hari", output: "Daftar Santri Diterima" },
            { no: 8, uraian: "Pengumuman hasil seleksi melalui website dan papan pengumuman.", pelaksana: "Seksi Publikasi", waktu: "H-1 hari", output: "Pengumuman Resmi" },
            { no: 9, uraian: "Pelaksanaan daftar ulang dan pembayaran biaya masuk oleh santri yang diterima.", pelaksana: "Bendahara", waktu: "Hari H", output: "Bukti Daftar Ulang" },
            { no: 10, uraian: "Orientasi dan pengenalan lingkungan pondok (MPLS) untuk santri baru.", pelaksana: "Panitia MPLS", waktu: "H+1 s/d H+3", output: "Santri Baru Terorientasi" }
        ],
        dokumen: "1. SK Panitia PPDB\n2. Formulir Pendaftaran\n3. Berkas Calon Santri\n4. Daftar Hasil Seleksi"
    },
    "kebersihan": {
        judul: "Penjagaan Kebersihan dan Kesehatan Lingkungan Pondok",
        nomor: "SOP-SAR-006",
        tujuan: "Menjaga kebersihan, kesehatan, dan kenyamanan lingkungan pondok pesantren.",
        ruangLingkup: "Berlaku untuk seluruh santri, guru, dan staf kebersihan pondok.",
        definisi: "1. Staf Kebersihan: Petugas yang bertanggung jawab atas kebersihan area umum.\n2. Piket Kebersihan: Jadwal giliran santri untuk membersihkan area asrama.\n3. PHBS: Perilaku Hidup Bersih dan Sehat.",
        dasarHukum: "1. Peraturan Internal Pondok tentang Kebersihan dan Kesehatan.\n2. Program PHBS Kementerian Kesehatan.",
        prosedur: [
            { no: 1, uraian: "Staf kebersihan datang dan mempersiapkan peralatan cleaning service.", pelaksana: "Staf Kebersihan", waktu: "05:00 WITA", output: "Peralatan Siap" },
            { no: 2, uraian: "Pembersihan area masjid, aula, dan ruang kelas sebelum kegiatan pagi.", pelaksana: "Staf Kebersihan", waktu: "05:00 - 06:30", output: "Area Umum Bersih" },
            { no: 3, uraian: "Santri melaksanakan piket kebersihan asrama (menyapu, mengepel, merapikan tempat tidur).", pelaksana: "Santri Piket", waktu: "06:30 - 07:00", output: "Asrama Rapi" },
            { no: 4, uraian: "Pemeriksaan kebersihan toilet dan kamar mandi oleh staf kebersihan.", pelaksana: "Staf Kebersihan", waktu: "07:00 - 08:00", output: "Toilet Bersih" },
            { no: 5, uraian: "Pengumpulan dan pemilahan sampah dari setiap area pondok.", pelaksana: "Staf Kebersihan & Santri", waktu: "08:00 - 09:00", output: "Sampah Terkumpul" },
            { no: 6, uraian: "Pembuangan sampah ke tempat pembuangan akhir (TPA) atau bank sampah.", pelaksana: "Staf Kebersihan", waktu: "09:00 - 10:00", output: "Sampah Dibuang" },
            { no: 7, uraian: "Pembersihan area dapur dan kantin setelah waktu makan siang.", pelaksana: "Staf Kebersihan", waktu: "13:00 - 14:00", output: "Dapur & Kantin Bersih" },
            { no: 8, uraian: "Penyemprotan disinfektan di area-area vital (minimal 1x seminggu).", pelaksana: "Staf Kebersihan", waktu: "14:00 - 15:00", output: "Area Steril" },
            { no: 9, uraian: "Pemeriksaan kesehatan rutin santri oleh tenaga medis pondok (jika ada).", pelaksana: "Tenaga Medis", waktu: "15:00 - 16:00", output: "Catatan Kesehatan" },
            { no: 10, uraian: "Pelaporan kondisi kebersihan dan kesehatan harian kepada Kepala Pondok.", pelaksana: "Koordinator Kebersihan", waktu: "16:00 WITA", output: "Laporan Harian" }
        ],
        dokumen: "1. Jadwal Piket Kebersihan\n2. Checklist Kebersihan\n3. Laporan Kesehatan Santri"
    },
    "dapur": {
        judul: "Pengelolaan Dapur dan Konsumsi Santri",
        nomor: "SOP-SAR-007",
        tujuan: "Memastikan penyediaan makanan yang higienis, bergizi, dan tepat waktu untuk seluruh santri.",
        ruangLingkup: "Berlaku untuk pengelola dapur, koki, dan seluruh santri.",
        definisi: "1. Pengelola Dapur: Penanggung jawab operasional dapur pondok.\n2. Koki: Tenaga ahli yang memasak makanan santri.\n3. Menu Harian: Daftar makanan yang akan disajikan setiap hari.",
        dasarHukum: "1. Standar Gizi dari Kementerian Kesehatan.\n2. Peraturan Internal Pondok tentang Pengelolaan Dapur.",
        prosedur: [
            { no: 1, uraian: "Penyusunan menu harian/mingguan oleh pengelola dapur berdasarkan standar gizi.", pelaksana: "Pengelola Dapur", waktu: "H-1", output: "Menu Harian" },
            { no: 2, uraian: "Pembelian bahan makanan segar di pasar atau supplier terpercaya.", pelaksana: "Tim Belanja", waktu: "05:00 - 07:00", output: "Bahan Makanan Segar" },
            { no: 3, uraian: "Pemeriksaan kualitas dan kuantitas bahan makanan yang diterima.", pelaksana: "Pengelola Dapur", waktu: "07:00 - 07:30", output: "Bahan Diverifikasi" },
            { no: 4, uraian: "Penyimpanan bahan makanan di tempat yang bersih dan sesuai (dingin/kering).", pelaksana: "Staf Dapur", waktu: "07:30 - 08:00", output: "Bahan Tersimpan" },
            { no: 5, uraian: "Persiapan dan pencucian bahan makanan sebelum dimasak.", pelaksana: "Koki & Staf", waktu: "08:00 - 09:00", output: "Bahan Siap Masak" },
            { no: 6, uraian: "Proses memasak sesuai menu dan standar higienitas.", pelaksana: "Koki", waktu: "09:00 - 11:00", output: "Makanan Matang" },
            { no: 7, uraian: "Pengujian rasa dan kualitas makanan sebelum disajikan.", pelaksana: "Pengelola Dapur", waktu: "11:00 - 11:30", output: "Makanan Layak Saji" },
            { no: 8, uraian: "Penyajian makanan di kantin/dapur umum dengan tata cara yang higienis.", pelaksana: "Staf Dapur", waktu: "11:30 - 12:00", output: "Makanan Tersaji" },
            { no: 9, uraian: "Santri makan dengan tertib dan mengucapkan hamdalah setelah selesai.", pelaksana: "Santri", waktu: "12:00 - 12:30", output: "Santri Kenyang" },
            { no: 10, uraian: "Pembersihan peralatan masak dan area dapur setelah kegiatan makan selesai.", pelaksana: "Staf Dapur & Santri Piket", waktu: "12:30 - 13:30", output: "Dapur Bersih" }
        ],
        dokumen: "1. Menu Harian/Mingguan\n2. Catatan Pembelian Bahan\n3. Checklist Kebersihan Dapur"
    },
    "keuangan": {
        judul: "Pengelolaan Keuangan dan SPP Santri",
        nomor: "SOP-ADM-008",
        tujuan: "Mengatur pengelolaan keuangan pondok secara transparan, akuntabel, dan tertib administrasi.",
        ruangLingkup: "Berlaku untuk bendahara, santri, dan orang tua/wali santri.",
        definisi: "1. Bendahara: Penanggung jawab pengelolaan keuangan pondok.\n2. SPP: Sumbangan Pembinaan Pendidikan yang dibayarkan bulanan.\n3. Kwitansi: Bukti pembayaran resmi.",
        dasarHukum: "1. SK Yayasan tentang Struktur Biaya Pendidikan.\n2. Standar Akuntansi Keuangan Nirlaba.",
        prosedur: [
            { no: 1, uraian: "Penyusunan Rencana Anggaran Pendapatan dan Belanja (RAPB) tahunan.", pelaksana: "Bendahara & Kepala Pondok", waktu: "Awal Tahun", output: "RAPB Disahkan" },
            { no: 2, uraian: "Penerbitan tagihan SPP dan biaya lainnya kepada orang tua/wali santri.", pelaksana: "Bendahara", waktu: "Awal Bulan", output: "Tagihan Terkirim" },
            { no: 3, uraian: "Penerimaan pembayaran SPP melalui transfer bank atau tunai.", pelaksana: "Bendahara", waktu: "Tgl 1-10", output: "Uang Diterima" },
            { no: 4, uraian: "Penerbitan kwitansi resmi untuk setiap pembayaran yang diterima.", pelaksana: "Bendahara", waktu: "Saat pembayaran", output: "Kwitansi Diterbitkan" },
            { no: 5, uraian: "Pencatatan semua transaksi keuangan ke dalam buku kas atau sistem akuntansi.", pelaksana: "Bendahara", waktu: "Harian", output: "Buku Kas Terupdate" },
            { no: 6, uraian: "Rekonsiliasi bank dan pencocokan catatan keuangan.", pelaksana: "Bendahara", waktu: "Akhir Bulan", output: "Rekonsiliasi Selesai" },
            { no: 7, uraian: "Penyusunan laporan keuangan bulanan (neraca, laba rugi, arus kas).", pelaksana: "Bendahara", waktu: "Minggu ke-1 bulan berikutnya", output: "Laporan Bulanan" },
            { no: 8, uraian: "Pemeriksaan dan audit internal oleh tim audit yayasan.", pelaksana: "Tim Audit", waktu: "Triwulan", output: "Laporan Audit" },
            { no: 9, uraian: "Pelaporan keuangan kepada Ketua Yayasan dan pemangku kepentingan.", pelaksana: "Kepala Pondok", waktu: "Semesteran", output: "Laporan Semester" },
            { no: 10, uraian: "Pengarsipan dokumen keuangan (kwitansi, bukti transfer, laporan) dengan rapi.", pelaksana: "Bendahara & TU", waktu: "Berkala", output: "Arsip Lengkap" }
        ],
        dokumen: "1. RAPB Tahunan\n2. Kwitansi Pembayaran\n3. Buku Kas\n4. Laporan Keuangan"
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

    // Jika tidak ada di database, buat template generik dengan 10 langkah
    if (!selectedTemplate) {
        selectedTemplate = generateGenericTemplate(inputName);
    }

    renderSOP(selectedTemplate);
    document.getElementById('previewSection').style.display = 'block';
    document.getElementById('previewSection').scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk membuat template generik dengan 10 langkah
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
            { no: 1, uraian: "Pembentukan panitia/pelaksana kegiatan dan pembagian tugas yang jelas.", pelaksana: "Kepala Pondok", waktu: "H-7", output: "SK Panitia" },
            { no: 2, uraian: "Penyusunan rencana kerja, jadwal, dan target kegiatan.", pelaksana: "Ketua Pelaksana", waktu: "H-5", output: "Rencana Kerja" },
            { no: 3, uraian: "Persiapan sarana, prasarana, dan anggaran yang dibutuhkan.", pelaksana: "Panitia", waktu: "H-3", output: "Sarana Siap" },
            { no: 4, uraian: "Sosialisasi kegiatan kepada seluruh pihak yang terlibat.", pelaksana: "Sekretaris", waktu: "H-2", output: "Surat Edaran" },
            { no: 5, uraian: "Gladi bersih/persiapan akhir sebelum pelaksanaan kegiatan.", pelaksana: "Seluruh Panitia", waktu: "H-1", output: "Kesiapan 100%" },
            { no: 6, uraian: "Pelaksanaan kegiatan inti sesuai rencana yang telah disusun.", pelaksana: "Seluruh Pihak", waktu: "Hari H", output: "Kegiatan Terlaksana" },
            { no: 7, uraian: "Monitoring dan evaluasi jalannya kegiatan oleh pengawas.", pelaksana: "Pengawas", waktu: "Saat kegiatan", output: "Catatan Monitoring" },
            { no: 8, uraian: "Pendokumentasian kegiatan (foto, video, catatan penting).", pelaksana: "Seksi Dokumentasi", waktu: "Saat kegiatan", output: "Dokumentasi Lengkap" },
            { no: 9, uraian: "Penyusunan laporan pertanggungjawaban kegiatan.", pelaksana: "Ketua Pelaksana", waktu: "H+3", output: "Draft Laporan" },
            { no: 10, uraian: "Evaluasi akhir dan pelaporan hasil kegiatan kepada Kepala Pondok.", pelaksana: "Panitia", waktu: "H+7", output: "Laporan Final" }
        ],
        dokumen: "1. SK Panitia\n2. Rencana Kerja\n3. Laporan Pelaksanaan\n4. Dokumentasi Kegiatan"
    };
}

// 3. FUNGSI RENDER KE HTML
function renderSOP(data) {
    // Set Tanggal
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

    // Render Tabel Prosedur - PASTI 10 BARIS
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
