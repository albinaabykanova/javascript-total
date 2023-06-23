// ? SWİTCH - CASE

//todo 1.Örnek
/*
let sayi = prompt("Lütfen bir sayı giriniz: ");

switch (sayi) {
  case "1":
    console.log("Girilen sayi 1'dir");
    break;
  case "2":
    console.log("Girilen sayi 2'dir");
    break;
  case "3":
    console.log("Girilen sayi 3'dür");
    break;
  case "4":
    console.log("Girilen sayi 4'tür");
    break;
  case "5":
    console.log("Girilen sayi 5'tir");
    break;
  default:
    console.log("Girilen sayi 1-5 arasında olmalıdır");
    break;
}
*/

//todo 2.Örnek

let yeniSatir = "\r\n";
let metin =
  "1-Pazartesi" +
  yeniSatir +
  "2-Salı" +
  yeniSatir +
  "3-Çarşamba" +
  yeniSatir +
  "4-Perşembe" +
  yeniSatir +
  "5-Cuma" +
  yeniSatir +
  "6-Cumartesi" +
  yeniSatir +
  "7-Pazar" +
  yeniSatir +
  "Lütfen bir seçim yapınız:";

let deger = prompt(metin);
switch (deger) {
  case "1":
    console.log("Bugün günlerden Pazartesi");
    break;
  case "2":
    console.log("Bugün günlerden Salı");
    break;
  case "3":
    console.log("Bugün günlerden Çarşamba");
    break;
  case "4":
    console.log("Bugün günlerden Perşembe");
    break;
  case "5":
    console.log("Bugün günlerden Cuma");
    break;
  case "6":
    console.log("Bugün günlerden Cumartesi");
    break;
  case "7":
    console.log("Bugün günlerden Pazar");
    break;
  default:
    console.log("Lütfen 1-7 arasında bir değer giriniz");
    break;
}
