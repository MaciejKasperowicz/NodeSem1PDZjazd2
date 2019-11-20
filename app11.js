//Stwórz aplikację która pobierze dane dotyczące pogody i wyświetl ją na konsoli.
const request = require("request");
const adress = "https://api.openweathermap.org/data/2.5/weather?q=Bia%C5%82ystok&APPID=0ed761300a2725ca778c07831ae64d6e"

//console.log(request);
request(adress, function (error, response, body) {
    const json = JSON.parse(body);
    console.log(json.weather);
})