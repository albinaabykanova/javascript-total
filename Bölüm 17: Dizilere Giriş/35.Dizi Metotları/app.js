// ? DİZİNİN METOTLARI ****************************************************

/*
   ---> push() metodu: Dizinin sonuna eleman ekler, dizinin yeni uzunluğunu döndürür.
   ---> unshift() metodu: Dizinin başına eleman ekler, eleman sayısnı geriye döner.


   ---> pop() metodu: Dizinin sonundan eleman siler, çıkardığı elemanı döndürür.
   ---> shift() metodu: Dizinin başından eleman siler, çıkardığı elemanı döndürür.

   ---> splice(index, incdex) metodu: eleman eklemek ve silmek için kullanılır.

   ----> toString() metodu: Dizinin elemanlarını stringe çevirir.
   ---> join() metodu: Dizinin elemanlarını birleştirir.
*/

function canVote(age) {
  const voteResult = [false, true];
  return voteResult[Number(age >= 18)];
}

console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false
