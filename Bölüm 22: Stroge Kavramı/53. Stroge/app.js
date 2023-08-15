// ? SESSİON  STROGE KAVRAMI

sessionStorage.setItem("350", "enes");
sessionStorage.setItem("234", "david");
sessionStorage.setItem("23", "dede");

let value = sessionStorage.getItem("30");
if (value === null) {
  console.log("Değer bulunamadı");
} else {
  console.log("Değer bulundu :", value);
}

// sessionStorage.clear();
