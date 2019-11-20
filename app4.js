const lodash = require("lodash");

const tab = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];

const min = lodash.min(tab);
const max = lodash.max(tab);

console.log(min, max);