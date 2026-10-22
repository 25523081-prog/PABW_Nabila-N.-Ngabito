// js/data.js
export const profil = {
  nama: "Nabila N. Ngabito",
  peran: "Mahasiswa Informatika yang suka masak",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

// Fungsi murni untuk menyaring proyek berdasarkan kategori
export function saring(daftar, kategori) {
  return daftar.filter((proyek) => {
    return (
      kategori === "semua" ||
      (kategori === "selesai" && proyek.selesai) ||
      (kategori === "belum" && !proyek.selesai)
    );
  });
}