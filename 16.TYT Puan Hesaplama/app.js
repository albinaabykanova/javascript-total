//TODO TYT PUAN HESAPLAMA

/*
   ? SORULAR 
   1-Turkce     -4 puan...
   2-Matematik 40
   3-Sosyal Bilimler  20 
   4-Fen Bilimleri  20

   -----> 100 paun ösym veriyor
   -----> okul puani max 60
*/

let turkceDogru,
  turkceYanlis = 0;
let matematikDogru,
  matematikYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let fenDogru,
  fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj =
  "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz!" +
  yeniSatir +
  "1-Puan hesapla" +
  yeniSatir +
  "2-Çikis yap";

// alert(mesaj);

let secim = prompt(mesaj);

switch (secim) {
  case "1":
    okulPuani = Number(prompt("Okul Puaninizi Giriniz:"));
    turkceDogru = Number(prompt("Turkce Dogru Sayisi:"));
    turkceYanlis = Number(prompt("Turkce Yanlis Sayisi:"));

    matematikDogru = Number(prompt("Matematik Dogru Sayisi:"));
    matematikYanlis = Number(prompt("Matematik Yanlis Sayisi:"));

    sosyalDogru = Number(prompt("Sosyal Bilimler Dogru Sayisi:"));
    sosyalYanlis = Number(prompt("Sosyal Bilimler Yanlis Sayisi:"));

    fenDogru = Number(prompt("Fen Bilimleri Dogru Sayisi:"));
    fenYanlis = Number(prompt("Fen Bilimleri Yanlis Sayisi:"));

    let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
    let yanlisSayisi =
      turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
    let kalanDogruSayisi = dogruSayisi - yanlisSayisi / 4;
    puan = kalanDogruSayisi * 4 + 100 + okulPuani;
    alert("TYT Puaniniz : " + puan);
    break;

  case "2":
    alert("Cikis Yapıldı...");
    break;

  default:
    alert("Hatali secim yaptiniz...");
    break;
}
