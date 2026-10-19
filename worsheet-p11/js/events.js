// js/events.js
import { pilihKategori } from './state.js';

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");

  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    // Jangan ubah tampilan di sini. Cukup panggil fungsi pengubah state.
    const kategori = tombol.dataset.kategori;
    pilihKategori(kategori);
  });
}