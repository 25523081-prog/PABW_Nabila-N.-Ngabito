<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <div class="header-baris">
      <h1>{{ props.profil.nama }}</h1>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#Daftar-Resep">Daftar Resep</a></li>
          <li><a href="#Daftar-Bahan">Daftar Bahan</a></li>
          <li><a href="#Tambah-Resep">Tambah Resep</a></li>
        </ul>
      </nav>
      <input type="checkbox" id="tema" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>
    </div>
  </header>
</template>