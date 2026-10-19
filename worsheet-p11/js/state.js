// js/state.js
import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

// 1. Objek state utama
export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
};

// 2. Fungsi Simpan & Muat (Lembar D)
export function simpan(state) {
  const isi = { 
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit 
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    
    // Cek kunjungan pertama (kalau belum ada simpanan)
    if (!isi) return null; 
    
    // Cek versi skema (E.2)
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); // bentuk lama: buang
      return null;
    }
    
    return isi;
  } catch {
    localStorage.removeItem(KUNCI); // isi rusak: buang
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return; // kunjungan pertama: nilai bawaan tetap
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
  render(state);
}

// 3. Fungsi Pengubah State (Lembar B & C)
export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(kategoriBaru) {
  state.kategoriAktif = kategoriBaru;
  simpan(state); // Simpan setiap kali kategori berubah
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
  simpan(state); // Simpan setiap kali favorit berubah
  render(state);
}