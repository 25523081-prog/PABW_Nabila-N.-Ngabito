<template>
  <section id="Gambar-Masakan-Favorit">
    <h2>Daftar Masakan Favorit</h2>
    
    <table>
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
        <!-- Nanti di Lembar E kita isi pakai v-for -->
      </tbody>
    </table>
    <p id="kosong" class="pesan-kosong" hidden>Tidak ada masakan yang cocok dengan filter.</p>
    <p id="muat" hidden>Memuat data...</p>
  </section>
</template>