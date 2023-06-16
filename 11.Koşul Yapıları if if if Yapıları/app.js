// ? ÇOKLU İF KULLANMAK

//! İF ELSE ****
//* ----> iki seçenek varsa kullanılır
//* ---- (true-false) (doğru-yanlış) (1-0) (evet-hayır) (a-b) (erkek-kadın) (kırmızı-mavi) ------

//! İF ELSE iF ****
//* 3 seçenek varsa kullanılır
//* (true-false-true) (doğru-yanlış-doğru) (1-0-1) (evet-hayır-evet) (a-b-a) (erkek-kadın-erkek) (kırmızı-mavi-kırmızı)

//! İF ELSE İF ELSE ****
//*  if else if else : 4 seçenek varsa kullanılır
//* (true-false-true-false) (doğru-yanlış-doğru-yanlış) (1-0-1-0) (evet-hayır-evet-hayır) (a-b-a-b)
//* (erkek-kadın-erkek-kadın) (kırmızı-mavi-kırmızı-mavi)

//! İF İF İF ****
//* if if if : 3 seçenek varsa kullanılır
///* if if if kullanım sebebi : 3 seçenek varsa if else if else kullanmak yerine if if if kullanmak daha mantıklıdır

/*
TODO ÖRNEK 1
let ad = prompt("Adınızı giriniz: ");
let tckn = prompt("TCKN giriniz: ");

kontrolEt(ad, tckn);

function kontrolEt(ad, tckn) {
  if (ad != "") {
    if (tckn.lenght == 11) {
      console.log("isim ve tckn doğru");
    } else {
      console.log("tckn yanlış 11 karakter olarak giriniz");
    }
  } else {
    console.log("isim alanını boş bırakmayın");
  }
}
*/

/*
TODO ÖRNEK 1
let ad = prompt("Adınızı giriniz: ");
let tckn = prompt("TCKN giriniz: ");

kontrolEt2(ad, tckn);

function kontrolEt2(ad, tckn) {
  if (ad == "") {
    console.log("isim alanı boş bırakılamaz");
    return;
  }
  if (tckn.length != 11) {
    console.log("tckn 11 karakter olmalıdır");
    return;
  }
  console.log("isim ve tckn doğru");
}
*/
