const lodash = require("lodash");

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];
const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

const uniqArray = lodash.uniq(someArray);
const diffAandB = lodash.difference(tabA, tabB);
const diffBandA = lodash.difference(tabB, tabA);

console.log(uniqArray, diffAandB, diffBandA);