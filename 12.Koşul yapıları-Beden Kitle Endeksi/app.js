// ? BEDEN KİTLE ENDEKSİ HESAPLAMA

let kilo = Number(prompt("Kilonuzu giriniz:"));

let boy = Number(prompt("Boyunuzu metre cinsinden gigriniz:"));

let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
  console.log("Zayıf" + "", sonuc);
} else if ((sonuc >= 18.5) & (sonuc <= 24.9)) {
  console.log("Normal" + "", sonuc);
} else if (sonuc >= 25 && sonuc <= 29.9) {
  console.log("Fazla Kilolu" + "", sonuc);
} else if (sonuc >= 30 && sonuc <= 39.9) {
  console.log("Obez" + "", sonuc);
} else if (sonuc >= 40) {
  console.log("Aşırı Obez" + "", sonuc);
}
