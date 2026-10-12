// js/dom.js
const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");

// Bikin satu baris tabel
function buatBaris(proyek) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.textContent = proyek.judul;

  const td1 = document.createElement("td");
  td1.textContent = proyek.bahanUtama;

  const td2 = document.createElement("td");
  td2.textContent = proyek.bumbu;

  tr.append(th, td1, td2);
  return tr;
}

// Render — kosongin dulu, cek kosong, baru isi
function render(daftar) {
  wadah.textContent = "";
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatBaris(proyek)));
}

// Tandai tombol filter yang aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Satu pendengar di induk (event delegation)
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) =>
      kategori === "semua" ||
      (kategori === "selesai" && proyek.selesai) ||
      (kategori === "belum" && !proyek.selesai)
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

// Render awal: semua proyek
render(daftarProyek);