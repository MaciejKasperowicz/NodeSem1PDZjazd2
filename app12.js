//Zmodyfikujmy zadanie 11 tak aby miejscowość była podawana przez parametr wejściowy. W tym celu dodajmy zewnętrzny moduł yargs.
// Przykładowe wywołanie programu:

// > node app --city=bialystok

const request = require("request");
const argv = require("yargs").argv;
const city = argv.city;
const adress = "https://api.openweathermap.org/data/2.5/weather?q=Bia%C5%82ystok&APPID=0ed761300a2725ca778c07831ae64d6e"

let adressDec = decodeURI(adress);

const start = adressDec.indexOf("="); //Początek nazwy miasta
const end = adressDec.indexOf("&"); //Koniec nazwy miasta


adressDec = [...adressDec];
//console.log(adressDec);
adressDec.splice(start + 1, end - start - 1, city);
const rightAdress = adressDec.join("");
console.log(rightAdress);

request(rightAdress, function (error, response, body) {
    const json = JSON.parse(body);
    //console.log(json.name, json.weather);
    console.log(`Dane dotyczące: ${json.name}`);
    console.log(`Pogoda: ${json.weather[0].main}`);
    console.log(`Temperatura: ${json.main.temp}`);
    console.log(`Wiatr: ${json.wind.speed}`);
    console.log(`Państwo: ${json.sys.country}`);
})