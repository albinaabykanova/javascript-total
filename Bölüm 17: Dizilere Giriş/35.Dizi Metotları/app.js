// ? DİZİNİN METOTLARI ****************************************************

/*
   ---> push() metodu: Dizinin sonuna eleman ekler, dizinin yeni uzunluğunu döndürür.
   ---> unshift() metodu: Dizinin başına eleman ekler, eleman sayısnı geriye döner.


   ---> pop() metodu: Dizinin sonundan eleman siler, çıkardığı elemanı döndürür.
   ---> shift() metodu: Dizinin başından eleman siler, çıkardığı elemanı döndürür.

   ---> splice(index, incdex) metodu: eleman eklemek ve silmek için kullanılır.

   ----> toString() metodu: Dizinin elemanlarını stringe çevirir.
   ---> join() metodu: Dizinin elemanlarını birleştirir.

   ---> concat() metodu: Dizileri birleştirir.
   ---> slice(dilimlemek) metodu: Dizinin belirli bir kısmını almak için kullanılır.

   ---> reverse() metodu: Dizinin elemanlarını ters çevirir.
   ---> split(bölmek) metodu: belirli bir ifadey7e göre bölüp diziye çevirir.

   ---> indexOf() metodu: elemanın index numarasını verir.
   ---> verilen elamanı içeriyor mu ona bakar, true veya false döner.
*/

// TODO ORNEK 1

//let arabalar1 = ["BMW", "Mercedes", "Opel", "Mazda", "toyota", "mamalak"];
// let arabalar2 = ["lexus", "Ferrari", "Honda"];

// ! push() metodu
/*
arabalar.push("Renault");
console.log(arabalar);
*/

// ! unshift() metodu
/*
arabalar.unshift("Fiat");
console.log(arabalar);
*/

// ! pop() metodu
/*
let silinenEleman = arabalar.pop();
console.log(arabalar);
console.log(silinenEleman);
*/

// ! shift() metodu
/*
arabalar.shift();
console.log(arabalar);
*/

// ! splice() metodu
/*
arabalar.splice(1, 0, "Fiat", "Ford");
console.log(arabalar);
*/

// ! toString() metodu
/*
console.log(typeof arabalar);
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar);
console.log(stringArabalar);
*/

// ! join() metodu
/*
let stringArabalar = arabalar.join(".................");
console.log(stringArabalar);
*/

// ! concat() metodu
/*
let birlesmisDizi = arabalar1.concat(arabalar2);
console.log(birlesmisDizi);
*/

// ! slice() metodu
/*
console.log(arabalar1);
let baskaDizi = arabalar1.slice(2);
console.log(baskaDizi);
*/

// ! reverse() metodu
/*
console.log(arabalar1);
arabalar1.reverse();
console.log(arabalar1);
*/

// ! split() metodu
/*
let isimler = "enes, talha, ahmet, mehmet, ayşe";
let isimlerDizi = isimler.split(", ");
console.log(isimlerDizi);
*/

// ! indexOf() metodu
/*
let index = arabalar1.indexOf("mamalak");
if (index == 0) {
  console.log("Aradığınız değer dizinin ilk elemanıdır.");
} else {
  console.log("elaman yoktur");
}
*/

/*
let sonuc = arabalar1.includes("audi");
console.log(sonuc);
*/
