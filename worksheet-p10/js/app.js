// js/app.js
import { ambilProyek } from './api.js';
import { render, tampilkanGalat, aturMemuat } from './dom.js';

// ===== P8/P9: materi latihan =====
const profil = {
  nama: "Nabila N. Ngabito",
  peran: "Mahasiswa Informatika yang suka masak",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(profil.nama);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// ===== P10: state untuk filter =====
let dataTerakhir = [];

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = dataTerakhir.filter((proyek) => {
    return (
      kategori === "semua" ||
      (kategori === "selesai" && proyek.selesai) ||
      (kategori === "belum" && !proyek.selesai)
    );
  });

  render(terpilih);

  document.querySelectorAll("#filter button").forEach((t) => {
    t.classList.toggle("aktif", t === tombol);
  });
});

// ===== P10: ambil data dari API, render, tangani galat =====
async function muat() {
  aturMemuat(true);
  try {
    const data = await ambilProyek();
    dataTerakhir = data;
    render(data);
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();