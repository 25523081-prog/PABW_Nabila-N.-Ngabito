// js/dom.js
import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

function buatBaris(proyek) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.textContent = proyek.judul;

  const td1 = document.createElement("td");
  td1.textContent = proyek.bahanUtama;

  const td2 = document.createElement("td");
  td2.textContent = proyek.bumbu;

  tr.append(th, td1, td2);
  return tr;
}

// Fungsi untuk menandai tombol filter yang sedang aktif
export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

// render sekarang menerima state, BUKAN array mentah
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
  tampil.forEach((proyek) => wadah.append(buatBaris(proyek)));
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