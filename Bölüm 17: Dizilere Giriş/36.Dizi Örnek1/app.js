let urun1 = {
  isim: "ACER Swift",
  kategori: "Teknoloji",
  fiyat: 6000,
};
let urun2 = {
  isim: "ACER Nitro 5",
  kategori: "Teknoloji",
  fiyat: 15.475,
};
let urun3 = {
  isim: "ACER Gaming",
  kategori: "Teknoloji",
  fiyat: 13.999,
};
let urun4 = {
  isim: "LENOVO V15",
  kategori: "Teknoloji",
  fiyat: 10.999,
};
let urun5 = {
  isim: "LENOVO V14",
  kategori: "Teknoloji",
  fiyat: 4.399,
};
let urun6 = {
  isim: "LENOVO Ideapad",
  kategori: "Teknoloji",
  fiyat: 4.339,
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filteredProducts = [];
let userProductName = prompt("Ürün ismi giriniz");

getFiltredProducts(urunler);

function getFiltredProducts(urunler) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(userProductName.toUpperCase(), 0)) {
      filteredProducts.push(urun);
    }
  });
}

function filteredProductsWrite(urunler) {
  urunler.forEach(function (urun) {
    console.log("--------------------------------");
    console.log("|" + urun.isim + " | " + urun.kategori + " | " + urun.fiyat);

    console.log("--------------------------------");
  });
}
