// ? DİNAMİK OLARAK ELEMENT OLUŞTURMA

const link = document.createElement("a");
link.id = "goBlockWebSite";
link.className = "btn btn-dark tn-sm mt-3";
link.href = "http://enesbayram.net";
link.target = "_blank";
link.innerHTML = "Kişisel Web Sitesine Git";

console.log(link);
