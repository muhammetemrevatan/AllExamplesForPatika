// npm install prompt-sync --> ile ekrandan input alabiliyoruz.

const prompt = require("prompt-sync")({ sigint: true }); // artık prompt isimli değişken ile ekrandan bilgileri okuyabiliriz. 
const radius = prompt("Yaricap giriniz : "); // ekrandan alınan değer radius isimli değişkende saklanıcak.
console.log(`Yarıçapı (${radius}) olan dairenin alanı: (${3.14*(radius*radius)})`);
