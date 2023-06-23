// ? KELİME  SAYISINI BULMA  UYGULAMASINI

// TODO ORNEK 1

/*
let metin = "Şuanda Yalova 'da Javascript eğitimi cekmekteyim";

let harf = prompt("Harf giriniz");

let sonuc = bul(harf);
console.log("Harf Sayısı " + sonuc + " defa geçmektedir");

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
      toplam += 1;
    }
  }
  return toplam;
}
*/

// TODO ORNEK 2
/*

let metin = "Şuanda Yalova 'da Javascript eğitimi cekmekteyim";

//let harf = prompt("Harf giriniz");
//let sonuc = bul(harf);
bul("a");
bul("e");
bul("i");
bul("o");
bul("u");
bul("ü");
bul("ö");
bul("ı");
bul("ş");
bul("ç");

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
      toplam += 1;
    }
  }
  console.log("Harf Sayısı " + toplam + " defa geçmektedir");
}
*/
