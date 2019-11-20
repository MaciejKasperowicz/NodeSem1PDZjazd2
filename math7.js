const add = function (a, b, callback) {
    const result = a + b;
    callback(result);
};

const sub = (a, b, callback) => {
    const result = a - b;
    callback(result);
};

module.exports = {
    add: add,
    sub: sub
}