<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

// Fungsi filter (menyesuaikan dengan data boolean "selesai" di JSON)
const tampil = computed(() => {
  if (state.kategoriAktif === 'semua') return state.daftarProyek;
  if (state.kategoriAktif === 'selesai') {
    return state.daftarProyek.filter(item => item.selesai === true);
  }
  if (state.kategoriAktif === 'belum') {
    return state.daftarProyek.filter(item => item.selesai === false);
  }
  return state.daftarProyek;
})
</script>

<template>
  <section id="Gambar-Masakan-Favorit">
    <h2>Daftar Masakan Favorit</h2>

    <!-- Menampilkan Kondisi -->
    <p v-if="state.memuat">Memuat data...</p>
    <p v-else-if="state.galat">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0">Belum ada data.</p>

    <!-- Tabel Data -->
    <table v-else>
      <caption>Koleksi Resep Masakan Khas Gorontalo</caption>
      <thead>
        <tr>
          <th scope="col">Nama Masakan</th>
          <th scope="col">Bahan Utama</th>
          <th scope="col">Bumbu Pelengkap</th>
          <th scope="col">Favorit</th>
        </tr>
      </thead>
      <tbody id="daftar">
        <!-- Looping data (menyesuaikan nama properti di JSON) -->
        <tr v-for="(item, index) in tampil" :key="index">
          <td>{{ item.judul }}</td>
          <td>{{ item.bahanUtama }}</td>
          <td>{{ item.bumbu }}</td>
          <td>
            <button @click="state.tambahFavorit(index)">★</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>