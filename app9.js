//Stworzyć aplikację, która wyświetli na ekranie przywitanie użytkownika aktualnie zalogowanego na komputerze po 5 sekundach od uruchomienia aplikacji. Wykorzystaj tutaj wiedzę z poprzednich zajęć (podpowiedź: moduł os, funkcja userInfo()) oraz funkcję setTimeout() która pozwala na wrzucenie naszej funkcji do Node API.

const os = require("os");
// console.log(os.userInfo());
const user = os.userInfo().username;

setTimeout(function () {
    console.log(`Witaj ${user} - użytkowniku obecnie zalogowany na komputerze`)
}, 5000);
