# PABW - Nabila N. Ngabito - 25523081
Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis web, satu folder untuk setiap pertemuan
Topik halaman saya: Menu Masakan
Judul halaman: Resep & Menu Masakan
Deskripsi: Menu masakan yang biasa saya masak di kos
tautan navigasi: Daftar Resep, Daftar Bahan, Tambah Resep
Tiga bagian utama: Daftar Masakan Favorit, Bahan yang biasa dipakai, Form tambah Resep
Kolom tabel: Nama Menu, Bahan Utama, Bumbu Pelengkap
Kolom form: Nama Menu, Bahan Utama, Bumbu Pelengkap
Gambar: nasi-goreng.webp

## Catatan penggunaan AI
Dalam pengerjaan worksheet ini saya menggunakan Gemini AI: 
1. Memeriksa dan memvalidasi kebenaran kode HTML yang dibuat.
2. Membantu panduan langkah-langkah pengujian pada Lembar F (Lighthouse, uji manual, dan refleksi).

penulisan kode dan pelaksanaan pengujian dilakukan sendiri

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #C2410C (merah cabai), dipilih karena merepresentasikan citarasa pedas dan rempah masakan khas Gorontalo.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
| --- | --- | --- |
| --color-primary | #C2410C | tombol, tautan, penanda |
| --color-fg | #1C1917 | warna teks utama |
| --color-bg | #FAFAFA | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Catatan penggunaan AI
1. saya menanyakan step by step apa saja yang harus saya kerjakan (karna saya kurang mengerti bahasanya)
2. menanyakan warna yang cocok untuk web yang saya buat
3. mencari penjelasan dari beberapa pertanyaan di bagian G
4. menanyakan beberapa bahasa yang tidak di mengerti yang ada di worksheet
5. sempat ada error dan saya bertanya apa yang salah

an 8 — Halaman Profil yang Datanya Bergerak

- **Dibantu AI:** struktur awal `app.js` dan contoh array methods.
- **Dikerjakan sendiri:** pengisian data profil, data 4 masakan Gorontalo, pengujian Console, perbaikan galat, dan penyesuaian dengan HTML Pertemuan 6.

Profil pribadi dengan tema **Masakan Khas Gorontalo** (4 masakan):
1. Binthe Biluhuta
2. Ayam Iloni
3. Bilenthango
4. Sambal Sagela

# PABW — Worksheet Pertemuan 9

**Nama:** Nabila N. Ngabito  
**NIM:** 25523081  
**Kelas:** D  
**Tanggal:** 12 Oktober 2026

## Topik
DOM, Event, dan Interaktivitas — Memasang Data ke Halaman

## Isi Folder
- `profil.html` — halaman resep masakan Gorontalo
- `js/app.js` — data dan fungsi murni
- `js/dom.js` — kode DOM & render
- `*.css` — file CSS

**Dibantu AI:** 
1. memahami konsep dom.js, event delegation, debugging error.
2. menjawab beberapa soal yang tidak di pahami yang ada di tiket keluar
3. menanyakan jika ada kode yang error

**Dikerjakan sendiri:** menulis HTML, memilih topik, mengetik & menyesuaikan kode, menguji di browser.

## Pertemuan 11
- Versi Node.js: v22.23.2
- Versi npm: (tulis angka npm yang muncul di terminal)

### Deklarasi AI
Saya menggunakan bantuan AI untuk memahami alur pemecahan 5 modul (Lembar B), membuat fungsi `saring` di `data.js`, dan menyelesaikan error sinkronisasi JSON serta error PowerShell saat mengecek npm. Bagian logika utama, pengujian di browser, dan pengisian worksheet saya kerjakan sendiri.