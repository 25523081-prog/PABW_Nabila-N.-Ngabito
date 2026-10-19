// js/app.js
import { ambilProyek } from './api.js';
import { isiProyek } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pasangPendengar(); // dari events.js

  aturMemuat(true);
  try {
    const data = await ambilProyek();
    isiProyek(data); // state.js akan memanggil render
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();