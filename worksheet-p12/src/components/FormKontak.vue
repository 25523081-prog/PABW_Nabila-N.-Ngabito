<template>
  <section id="Tambah-Resep">
    <h2>Form Tambah Resep</h2>
    <form id="form-resep" action="/simpan" method="post" novalidate>
      
      <div class="form-kolom">
        <label for="Nama-Menu">Nama Menu</label>
        <input type="text" id="Nama-Menu" name="nama_menu" required>
        <span class="pesan-galat" hidden>Nama menu wajib diisi.</span>
      </div>

      <div class="form-kolom">
        <label for="Bahan-Utama">Bahan Utama</label>
        <input type="text" id="Bahan-Utama" name="bahan_utama" required>
        <span class="pesan-galat" hidden>Bahan utama wajib diisi.</span>
      </div>

      <div class="form-kolom">
        <label for="Bumbu-Pelengkap">Bumbu Pelengkap</label>
        <input type="text" id="Bumbu-Pelengkap" name="bumbu_pelengkap" required>
        <span class="pesan-galat" hidden>Bumbu pelengkap wajib diisi.</span>
      </div>

      <button type="submit" disabled>Simpan</button>       
    </form>
  </section>
</template>