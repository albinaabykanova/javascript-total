// ? VAR - LET - CONST
// Değişken nedir ?

/*
var/let/const değiskenIsmi = değişkenDeğeri;
let a = 10;
*/

// var : function scope -- ram bellekte çok fazla yer kaplar -- ram memory
// let/const : // ! block scope özeliğine sahiptir --

/*
function selamVer() {
  var selam = "Merhaba herkese"; // !function scope
  if (true) {
    var b = 19; //block scope,ama var la tanımlanan değişkenler function scope olur
    console.log(b); // block scope içerisinden erişebiliriz
  }
  console.log(b); // block scope içinende var la tanımlanan değişkenler dışarıdan erişilebilir
  console.log(selam);
}
selamVer();
*/

// let ve const ile tanımlanan değişkenler block scope özelliğine sahiptir
// let ve const ile tanımlanan değişkenlerde aynı isimde değişken tanımlanamaz
// sadece const ile tanımlanan değişkenlerin değeri sonradan değiştirilemez
// let ile tanımlanan değişkenlerin değeri sonradan değiştirilebilir
// let ve const ile tanımlanan değişkenlerin değeri tanımlanırken verilmek zorundadır
// var ile tanımlanan değişkenlerin değeri tanımlanırken verilmek zorunda değildir
// sadece pembe mor paraneteler içerisindeki değişkenlerin değeri tanımlanırken verilmek zorundadır

//  var a = 40;
//  console.log(a);

// ! 3. LET & CONSTN arasındaki farklar ?    ****************************************************

// 1. LET ile tanımlanan değişkenin değeri sonradan değiştirilebilir
// 2. CONST ile tanımlanan değişkenin değeri sonradan değiştirilemez
// 3. LET ile tanımlanan değişkenin değeri tanımlanırken verilmek zorundadır
// 4. CONST ile tanımlanan değişkenin değeri tanımlanırken verilmek zorundadır
// 5. LET ile tanımlanan değişkenin değeri sadece bir kere tanımlanabilir

/*
const user = {
  username: "Mehmet",
  password: "12345",
};

user.username = "mehmet";
console.log(user);
*/
