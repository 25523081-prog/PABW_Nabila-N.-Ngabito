// js/events.js
import { pilihKategori, tambahFavorit } from './state.js';

export function pasangPendengar() {
  // 1. Pendengar untuk filter kategori
  const barisFilter = document.querySelector("#filter");
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    pilihKategori(kategori);
  });

  // 2. Pendengar untuk tombol favorit (pakai Event Delegation)
  const wadahDaftar = document.querySelector("#daftar");
  wadahDaftar.addEventListener("click", (event) => {
    const tombolFavorit = event.target.closest(".favorit");
    if (!tombolFavorit) return;

    // Ambil ID (dalam kasus ini kita pakai judul) dari dataset
    const idProyek = tombolFavorit.dataset.id;
    
    // Panggil fungsi pengubah dari state.js
    tambahFavorit(idProyek);
  });
}