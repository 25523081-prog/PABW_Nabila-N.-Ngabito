// src/data.js
export const profil = {
  // Bagian ini yang aku ubah agar judulnya benar
  nama: "Resep & Menu Masakan Khas Gorontalo", 
  peran: "Koleksi resep masakan khas Gorontalo",
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