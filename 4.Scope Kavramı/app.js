// ?  VAR, LET, CONST

/*
? SSCOPE------ (KAPSAM) -----

 -> Global Scope : Her yerden erişilebilir.
 -> Function Scope
 -> Block Scope

 */

// ! 1. GLOBAL SCOPE  ***************

// var a = 5; // var ile tanımlanan değişkenler global scope'a ait olur.
// sen buna her yerden erirşebilirsin.
/*
if (true) {
  console.log(a);
}

function method1() {
  console.log(a);
}
method1();
*/

// ! 2. FUNCTİON SCOPE ***************
// sadece tanımlandığı fonksiyon içerisinde geçerlidir. dişarıya çıkamaz. parantezlerin içinde geçerlidir.
/*

function method2() {
  var b = 1000;

  console.log(b);
}
method2();

*/

// ! 3. BLOCK SCOPE  ***************
// blok scope sadece let ve const ile tanımlanır. var ile tanımlanamaz. function ile tanımlanamaz.
// if, for, while, switch gibi blokların içerisinde geçerlidir.
// sadece tanımlandığı blok içerisinde geçerlidir. dışarıya çıkamaz.
// let ve const ile tanımlanan değişkenlerin scope'u blok scope'dur.

/*
function method1() {
  var a = 5; // function scope
  if (true) {
    var b = 10; // block scope
  }
  while (true) {}
  for (let i = 0; i <= 10; i++) {}
}
*/
