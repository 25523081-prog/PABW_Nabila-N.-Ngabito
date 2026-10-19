// js/state.js
import { render } from './dom.js';

// Satu objek untuk seluruh keadaan aplikasi
export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
};

// Fungsi pengubah: memasukkan data dari API ke state
export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

// Fungsi pengubah: mengubah kategori aktif
export function pilihKategori(kategoriBaru) {
  state.kategoriAktif = kategoriBaru;
  render(state);
}