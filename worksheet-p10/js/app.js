// LEMBAR B — DATA HALAMAN SEBAGAI VARIABEL

const profil = {
  nama: "Nabila N. Ngabito",
  peran: "Mahasiswa Informatika yang suka masak",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

const jumlahMasakan = 4;

// Cek dengan console.log
console.log(profil.nama);
console.log(profil.peran);
console.log(profil.keahlian);

// Template literal
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

// LEMBAR C — DUA FUNGSI MURNI

// Fungsi 1: kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi 2: format daftar keahlian jadi satu baris
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Uji 3x dengan argumen berbeda (Lembar C.4)
console.log(buatPerkenalan({ nama: "Ayu", peran: "Desainer" }));
console.log(buatPerkenalan({ nama: "Budi", peran: "Backend Dev" }));
console.log(buatPerkenalan({ nama: "Citra", peran: "Data Analyst" }));

// LEMBAR D — ARRAY OF OBJECT + map/filter/find

// Array of object: daftar masakan khas Gorontalo
const daftarProyek = [
  { judul: "Binthe Biluhuta", bahanUtama: "Jagung, ikan/udang, kelapa",  bumbu: "Cabai, bawang, jeruk nipis", selesai: true  },
  { judul: "Ayam Iloni",      bahanUtama: "Ayam, santan",                 bumbu: "Cabai, kunyit, jahe",        selesai: true  },
  { judul: "Bilenthango",     bahanUtama: "Ikan mujair atau nila",        bumbu: "Cabai, kunyit, tomat",       selesai: false },
  { judul: "Sambal Sagela",   bahanUtama: "Ikan sagela asap",             bumbu: "Cabai, tomat, jeruk nipis",  selesai: true  },
];

// console.table — semua data tampil sebagai tabel
console.table(profil.keahlian);
console.table(daftarProyek);

// filter — hanya yang selesai
const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

// find — ambil satu proyek berdasarkan judul
const katalog = daftarProyek.find((proyek) => proyek.judul === "Ayam Iloni");
console.log(katalog);

// map — ambil semua judul (array baru, panjang sama)
const semuaJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(semuaJudul);

// Sort TANPA mengubah data asli (pakai salinan)
const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urut);
console.log("Data asli masih utuh:", daftarProyek);

// LEMBAR E — PENANGANAN GALAT

// Nilai bawaan ?? dan akses aman ?.
const alamat = profil.alamat?.kota ?? "Belum diisi";
console.log("Kota:", alamat);

// Contoh input → angka
function hitungTotal(inputValue) {
  const angka = Number(inputValue);
  if (Number.isNaN(angka)) {
    console.error("Input bukan angka:", inputValue);
    return 0;
  }
  return angka + jumlahMasakan;
}
console.log("Total:", hitungTotal("5"));    // 10
console.log("Total:", hitungTotal("abc")); // 0 + pesan error

window.profil = profil;
window.daftarProyek = daftarProyek;
window.jumlahMasakan = jumlahMasakan;
window.buatPerkenalan = buatPerkenalan;
window.formatKeahlian = formatKeahlian;