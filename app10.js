//Zmodyfikujmy zadanie 9 tak aby zapisać nasze przywitanie do pliku wykorzystując funkcję writeFile.

const os = require("os");
// console.log(os.userInfo());
const user = os.userInfo().username;
const fs = require("fs");
const welcome = `Witaj ${user} - użytkowniku obecnie zalogowany na komputerze`;

setTimeout(function () {
    console.log(welcome);
    fs.writeFile("PrzywitanieUsera.txt", welcome, function () {
        console.log("Stworzono plik z przywitaniem");
    });
}, 5000);
