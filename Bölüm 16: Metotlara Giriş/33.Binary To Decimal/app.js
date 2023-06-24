//  ? BİNARY TO DECİMAL CONVERSİON (ikilik sayıdan 10 luk sayıya çevirme)

//TODO ORNEK 1

let binary = "1011";

function convertBinaryToDecimal(binary) {
  let toplam = 0;
  let ust = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    toplam += Number(binary.charAt(i)) * Math.pow(2, ust); // 2 üzeri 0, 2 üzeri 1, 2 üzeri 2, 2 üzeri 3
    ust++;
  }
  console.log("Sonuç : " + toplam);
}

convertBinaryToDecimal(binary);
