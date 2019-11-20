const yargs = require("yargs");
const argv = require("yargs").argv;

const math = require("./math8")
const writeFile = require("fs").writeFile;
const readFile = require("fs").readFile;

console.log(argv);
//console.log(process.argv);
const operator = argv.operator;

const a = argv.a;
const b = argv.b;

const someCallback = function (wynik) {
    console.log("moj callback");
    console.log("wynik", wynik);
    writeFile("wynikdzialania1.txt", wynik, function saveCallback() {
        console.log("Plik zostal zapisany");
    });

    readFile("wynikdzialania1.txt", "utf-8", function (error, data) {

        console.log(data);
    })

}

if (operator === "+") {
    // writeFile("wynik8.txt", math.add(a, b, someCallback));
    math.add(a, b, someCallback);
} else if (operator === "-") {
    math.sub(a, b, someCallback);
}
//console.log(writeFile);