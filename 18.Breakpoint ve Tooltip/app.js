// ? BREAKPOİNT VE TOOLTIP NEDİR ?

/*
   ---- BREAKPOİNT -------
    * Breakpoint: Kodumuzun çalışmasını durdurmak için kullandığımız noktalardır.
    * Tooltip: Breakpointlerin üzerine gelindiğinde çıkan küçük bilgi kutucuklarıdır.
    * Breakpointlerin üzerine gelindiğinde çıkan küçük bilgi kutucuklarıdır.
    
    ------- TOOLTİP -------
    * Tooltip: Breakpointlerin üzerine gelindiğinde çıkan küçük bilgi kutucuklarıdır.
    * Tooltip kullanmak için breakpointlerin üzerine gelip sağ tıklayıp "Add Conditional Breakpoint" seçeneğini seçiyoruz.
    * 
    * 
    * --- debugger ---
    * debugger: breakpoint koymak için kullanılan bir keyword'dür.
    * debugger keyword'üne breakpoint koymak istediğimiz satırın başına yazıyoruz.
    * debugger nedir? : breakpoint koymak için kullanılan bir keyword'dür.
    * debugger nasıl kullanılır? : debugger keyword'üne breakpoint koymak istediğimiz satırın başına yazıyoruz.
*/

// todo ornek

let a = 10;

let b = 15;
let c = a + b;
let d = a + b + c;
debugger;
let e = a + c + b;

let sonuc = a + b + c + d + e;
console.log("Sonuc: ", sonuc);
