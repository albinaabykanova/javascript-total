// ? DİZİLERE GİRİŞ

// TODO ORNEK 1
/*
let sayilar = [0, 1, 2, 3, 4, 5, "enes", 7, 8, 9, "selam"];

sayilar[sayilar.length - 1] = "son eleman gukow";
console.log(sayilar[10]);
*/

// TODO ORNEK 2
/*
let names = ["enes", "ali", "veli", "ayse", "fatma", "hayriye"];
names[4] = "selam";
console.log(names);
*/

// TODO ORNEK 3
/*
let karisikDizi = [1, "enes", null, undefined, 3.14, 5, 6, 7, 8, 9, 10];
console.log(karisikDizi[3]);
*/

// TODO ORNEK 4
/*

let dizi1 = ["enes", "ali"];
let dizi2 = new Array();

console.log(dizi1);
*/

// ? FOREACH DONGUSU ****************************************************

// forEACH DONGUSU DIZILERDE KULLANILIR
// forEach nasıl çalışır ? => forEach bir fonksiyon alır ve bu fonksiyonu dizinin her bir elemanına uygular.
/*
let isimler = [
  "enes",
  "ali",
  "veli",
  "ayse",
  "fatma",
  "hayriye",
  "selam",
  "naber",
  "iyi",
  "kotu",
  "guzel",
  "WOWOWOOWWOOWOOWOWOWOWOWOOW",
];

let counterName = 0;
while (counterName < isimler.length) {
  // ! while dongusu ile isimler dizisinin uzunlugu kadar doner ve isimler dizisinin her bir elemanini yazdirir.
  console.log(isimler[counterName]);
  counterName++;
}

for (let i = 0; i < isimler.length; i++) {
  // ! for dongusu ile ayni islemi yapar ama daha kisa yazilir.
  console.log(isimler[i]);
}

isimler.forEach(function (isim) {
  // ! forEach dongusu ile yapıldı , isimler dizisinin her bir elemanını isim degiskenine atar ve isim degiskenini yazdırır.
  console.log(isim);
});
*/
