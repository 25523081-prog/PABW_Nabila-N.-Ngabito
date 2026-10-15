// js/api.js, bagian atas file
const ALAMAT = 'data/proyek.json';   // relatif terhadap profil.html

async function muat() {
  const respons = await fetch(ALAMAT);
  console.log('status', respons.status, 'ok', respons.ok);
  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}
