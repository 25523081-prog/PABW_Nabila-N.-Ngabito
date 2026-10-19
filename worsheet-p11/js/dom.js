// js/dom.js
import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

// 1. Tambahkan parameter (proyek, favorit)
function buatBaris(proyek, favorit) {
  const tr = document.createElement("tr");
  
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.textContent = proyek.judul;

  const td1 = document.createElement("td");
  td1.textContent = proyek.bahanUtama;

  const td2 = document.createElement("td");
  td2.textContent = proyek.bumbu;

  // --- BAGIAN TOMBOL FAVORIT ---
  const tdFavorit = document.createElement("td");
  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.judul; // pakai judul sebagai ID unik
  
  // Cek apakah judul sudah ada di array favorit
  tombol.textContent = favorit.includes(proyek.judul) ? "★" : "☆";
  
  tdFavorit.appendChild(tombol);
  // -----------------------------

  // Masukkan semuanya ke baris tabel
  tr.append(th, td1, td2, tdFavorit);
  return tr;
}

// Fungsi untuk menandai tombol filter yang sedang aktif
export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

// render sekarang menerima state
export function render(state) {
  wadah.textContent = "";
  
  // Panggil fungsi saring dari data.js
  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  // Panggil penanda tombol aktif
  tandaiTombolAktif(state.kategoriAktif);

  if (tampil.length === 0) {
    kosong.textContent = "Belum ada data.";
    kosong.hidden = false;
    return;
  }
  
  kosong.hidden = true;
  
  // 2. Jangan lupa kirim state.favorit ke dalam buatBaris
  tampil.forEach((proyek) => wadah.append(buatBaris(proyek, state.favorit)));
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  kosong.hidden = true;
  const p = document.createElement("p");
  p.className = "galat";
  p.textContent = pesan;
  wadah.append(p);
}

export function aturMemuat(aktif) {
  if (pesanMuat) pesanMuat.hidden = !aktif;
}





