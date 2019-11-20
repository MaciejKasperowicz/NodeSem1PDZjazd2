const yargs = require("yargs");
const argv = require("yargs").argv;

const math = require("./math6")

console.log(argv);
//console.log(process.argv);
const operator = argv.operator;

const a = argv.a;
const b = argv.b;

if (operator === "+") {
    console.log(`Wynik dodawania: ${math.add(a, b)}`);
} else if (operator === "-") {
    console.log(`Wynik odejmowania: ${math.sub(a, b)}`);
}