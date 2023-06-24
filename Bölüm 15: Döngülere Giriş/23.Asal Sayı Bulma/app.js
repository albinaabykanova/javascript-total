// ? ASAL SAYI BULMA UYGULAMASI

// TODO ORNEK 1

// let a = Math.floor(7.9);
// console.log(a);

//15

let sayi = Number(prompt("Sayı bir Giriniz: "));
let sonuc = true;

for (let i = 2; i <= Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    console.log("Sayı Asal Değildir.");
    sonuc = false;
    break;
  }
}
if (sonuc) {
  alert("Sayı Asaldır.");
} else {
  alert("Sayı Asal Değildir.");
}
