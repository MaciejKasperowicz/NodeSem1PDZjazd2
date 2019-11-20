const yargs = require("yargs");
const argv = require("yargs").argv;

const math = require("./math7")

console.log(argv);
//console.log(process.argv);
const operator = argv.operator;

const a = argv.a;
const b = argv.b;

const someCallback = function (wynik) {
    console.log("moj callback");
    console.log("wynik", wynik);
}

if (operator === "+") {
    math.add(a, b, someCallback);
} else if (operator === "-") {
    math.sub(a, b, someCallback);
}