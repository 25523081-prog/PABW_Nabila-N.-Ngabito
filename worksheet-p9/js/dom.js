// js/dom.js
const wadah = document.querySelector("#daftar");

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

function render(daftar) {
  wadah.textContent = "";
  daftar.forEach((proyek) => {
    wadah.append(buatBaris(proyek));
  });
}

render(daftarProyek);