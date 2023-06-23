// ? MÜKEMMEL SAYI BULMA

// TODO ORNEK 1
//6 - 28 - 496 - 8128
//6 = 1,2,3,6 => 12 = 6 * 2;
//28 = 1,2,4,7,14,28 => 56 = 28 * 2;
// ----> bir sayının bölünmesi için max yarısına kadar bakmak yeterlidir.
/*
isPerfectNumber(6);

function isPerfectNumber(number) {
  let toplam = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      toplam += i;
    }
  }
  toplam += 1 + number;
  if (toplam == number * 2) {
    console.log(number + " Mükemmel Sayıdır.");
  } else {
    console.log(number + " Mükemmel Sayı Değildir.");
  }
}
*/
