<script setup>
import { onMounted, watch } from 'vue'

// Impor state dan fungsi dari state.js
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
// Impor fungsi fetch dari api.js
import { ambilProyek } from './api.js'
// Impor data profil dari data.js
import { profil } from './data.js'

// Impor 4 komponen yang sudah kamu buat
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat()) // Ambil pilihan terakhir dari localStorage
  try {
    isiProyek(await ambilProyek()) // Ambil data dari public/data/proyek.json
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false // Matikan loading
  }
})


// Simpan ke localStorage setiap kali state berubah
watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">

    <!-- Panggil KepalaProfil, dan kirim data profil lewat props -->
    <KepalaProfil :profil="profil" />

    <main class="isi"> 
      <aside class="sisi">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><a href="#Daftar-Masakan-Favorit">Daftar Masakan Favorit</a></li>
            <li><a href="#Gambar-Masakan-Favorit">Gambar Masakan Favorit</a></li>
            <li><a href="#Tambah-Resep">Tambah Resep</a></li>
          </ul>
        </nav>
      </aside>

      <div class="utama">
        
        <!-- Panggil TombolFilter -->
        <TombolFilter />

        <!-- Panggil DaftarProyek (Tabel) -->
        <DaftarProyek />

        <!-- Bagian Gambar tetap ditaruh di sini -->
        <section id="Gambar-makanan">
          <h2>Gambar Masakan Favorit</h2>
          <div class="galeri">
            <figure class="kartu">
              <img src="/binthe.jpg"
                   alt="Mangkuk berisi sup jagung Binte Biluhuta khas Gorontalo dengan taburan daun bawang dan sambal di atasnya"
                   width="300" 
                   height="320" 
                   loading="lazy">
              <figcaption>Binthe Biluhuta</figcaption>
            </figure>

            <figure class="kartu">
              <img src="/ayam-iloni.jpg"
                   alt="Ayam Iloni — Ayam bakar khas Gorontalo yang dimasak dengan bumbu rempah dan santan gurih"
                   width="300" 
                   height="320" 
                   loading="lazy">
              <figcaption>Ayam Iloni</figcaption>
            </figure>
          </div>
        </section>

        <!-- Panggil FormKontak -->
        <FormKontak />

      </div>
    </main>

    <footer class="footer">
      <p>Nabila N. Ngabito, 25523081, 2026</p>
    </footer>

  </div> <!-- / .page -->
</template>