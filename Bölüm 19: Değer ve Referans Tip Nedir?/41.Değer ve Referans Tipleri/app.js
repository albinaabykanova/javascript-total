// ? DEĞER VE REFERANS TİPLERİ

//!  değer tipler primitive--- değer verir arasında hiç bir bağım yoktur, ve değerlerin eşit olup olmadığını bakar
//! referans tipler--- değer eşit olup olmadığı değil rembelekteki baktıkları referansa aynı olup olmadıgına bakılır

//let isim = "Enes";
//console.log(typeof isim);
/*
let dizi1 = [1, 2, 3];
let dizi2 = [1, 2, 3];

if (dizi1 == dizi2) {
  console.log("eşittir");
} else {
  console.log("eşit değildir");
}
*/
//console.log(dizi1);
//console.log(dizi2);

let dizi1 = [1, 2, 3];
let dizi2 = [1, 2, 3];

dizi2.push(12);

console.log(dizi1);
console.log(dizi2);
