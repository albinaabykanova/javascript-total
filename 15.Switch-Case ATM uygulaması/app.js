// todo ATM Uygulaması

/*
   1.bakiye görüntüle
   2.para çekme
   3.para yatırma
   4.çıkış 
*/

/*
let yeniSatir = " \r\n";
let bakiye = 1000;

let metin =
  "1-Bakiye görüntüle" +
  yeniSatir +
  "2-Para Çekme" +
  yeniSatir +
  "3-Para Yatırma" +
  yeniSatir +
  "4-Çıkış" +
  yeniSatir +
  "Lütfen yapmak istediğiniz işlemi seçiniz";

// alert(metin);

let secim = prompt(metin);
switch (secim) {
  case "1":
    console.log("Bakiyeniz: " + bakiye);
    break;

  case "2":
    let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutari giriniz: "));
    if (cekilecekTutar < bakiye) {
      // başarılıdır
      bakiye = bakiye - cekilecekTutar;
      alert("Kalan bakiye: " + bakiye);
    } else {
      alert(
        "Bakiyenizden fazla para çekemezsiniz." +
          yeniSatir +
          "Bakiyeniz: " +
          bakiye +
          " " +
          "cekilecekTutar :" +
          cekilecekTutar
      );
    }
    break;

  case "3":
    let yatirilacakTutar = Number(prompt("Yatirilacak tutari giriniz: "));
    bakiye = bakiye + yatirilacakTutar;
    alert("Güncel bakiyeniz: " + bakiye);
    break;

  case "4":
    alert("Sistemden çıkış yapılmıştır.......");
    break;

  default:
    alert("Lütfen 1-4 arası değer giriniz");
    break;
}
*/
