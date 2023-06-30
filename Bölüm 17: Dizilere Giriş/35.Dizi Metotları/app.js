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
*/

// TODO ORNEK 1

let arabalar = ["BMW", "Mercedes", "Opel", "Mazda", "toyota", "mamalak"];

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

let stringArabalar = arabalar.join(".................");
console.log(stringArabalar);
