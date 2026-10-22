<script setup>
// Bagian ini kosong dulu.
// Nanti di Lembar D dan E, kita akan mengimpor data dan state ke sini.
</script>

<template>
  <div class="page">

    <header>
      <div class="header-baris">
        <h1>Resep & Menu Masakan Khas Gorontalo</h1>
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
        <section id="Gambar-Masakan-Favorit">
          <h2>Daftar Masakan Favorit</h2>

          <div id="filter" class="baris-filter">
            <button type="button" data-kategori="semua" class="aktif">Semua</button>
            <button type="button" data-kategori="selesai">Selesai</button>
            <button type="button" data-kategori="belum">Belum Selesai</button>
          </div>

          <button type="button" id="atur-ulang" style="margin-bottom: 1rem;">Atur Ulang</button>
          
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
              <!-- Data akan dimunculkan di sini pada Lembar D/E -->
            </tbody>
          </table>
          <p id="kosong" class="pesan-kosong" hidden>Tidak ada masakan yang cocok dengan filter.</p>
          <p id="muat" hidden>Memuat data...</p>
        </section>

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
      </div>
    </main>

    <footer class="footer">
      <p>Nabila N. Ngabito, 25523081, 2026</p>
    </footer>

  </div> <!-- / .page -->
</template>