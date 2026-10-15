// js/dom.js
console.log("=== dom.js mulai ===");

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

// --- Untuk P9: tabel ---
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

// --- Untuk P9 & P10: render ---
export function render(daftar) {
  wadah.textContent = "";
  if (daftar.length === 0) {
    kosong.textContent = "Belum ada data.";
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatBaris(proyek)));
}

// --- Untuk P10: galat & memuat ---
export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  kosong.hidden = true;
  const p = document.createElement("p");
  p.className = "galat";
  p.textContent = pesan;
  wadah.append(p);
}

export function aturMemuat(aktif) {
  if (pesanMuat) pesanMuat.hidden = !aktif;
}

console.log("=== dom.js selesai ===");