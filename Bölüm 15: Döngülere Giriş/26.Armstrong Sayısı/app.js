// ? ARMSTRONG SAYISI

// 153 -370 - 407 sayisi armstrong

// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153
// 370 = 3*3*3 + 7*7*7 + 0*0*0 = 27 + 343 + 0 = 370
// 407 = 4*4*4 + 0*0*0 + 7*7*7 = 64 + 0 + 343 = 407
// 1634 = 1*1*1*1 + 6*6*6*6 + 3*3*3*3 + 4*4*4*4 = 1 + 1296 + 81 + 256 = 1634
// 8208 = 8*8*8*8 + 2*2*2*2 + 0*0*0*0 + 8*8*8*8 = 4096 + 16 + 0 + 4096 = 8208
// 9474 = 9*9*9*9 + 4*4*4*4 + 7*7*7*7 + 4*4*4*4 = 6561 + 256 + 2401 + 256 = 9474
// 54748 = 5*5*5*5*5 + 4*4*4*4*4 + 7*7*7*7*7 + 4*4*4*4*4 + 8*8*8*8*8 = 3125 + 1024 + 16807 + 1024 + 32768 = 54748

// todo ornek 1
/*
let sayi = prompt("sayi giriniz");
let toplam = 0;

for (let i = 0; i < sayi.length; i++) {
  let rakam = sayi.charAt(i);
  toplam += rakam * rakam * rakam;
}
if (Number(sayi) == toplam) {
  alert("armstrong sayidir :)");
} else {
  alert("armstrong sayi degildir :(");
}
*/

// todo ornek 2
/*
let number = prompt("sayi giriniz");
let total = 0;

for (let i = 0; i < number.length; i++) {
  let numeral = number.charAt(i);
  total += numeral * numeral * numeral;
}

if (Number(number) == total) {
  alert("armstrong sayidir :)");
} else {
  alert("armstrong sayi degildir :(");
}
*/
