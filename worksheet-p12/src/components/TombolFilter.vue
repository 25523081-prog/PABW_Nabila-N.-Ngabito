<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <div id="filter" class="baris-filter">
    <!-- Tambahkan @click dan logika warna aktif -->
    <button type="button" @click="pilihKategori('semua')" :class="{ aktif: state.kategoriAktif === 'semua' }">Semua</button>
    <button type="button" @click="pilihKategori('selesai')" :class="{ aktif: state.kategoriAktif === 'selesai' }">Selesai</button>
    <button type="button" @click="pilihKategori('belum')" :class="{ aktif: state.kategoriAktif === 'belum' }">Belum Selesai</button>
  </div>

  <!-- Tombol Atur Ulang: Lebarnya dibuat normal, dan diklik akan mereset filter -->
  <button type="button" id="atur-ulang" style="margin-bottom: 1rem; width: max-content !important; display: inline-block !important;" @click="pilihKategori('semua')">Atur Ulang</button>
</template>