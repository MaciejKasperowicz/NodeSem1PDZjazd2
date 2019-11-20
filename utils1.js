const uniq = function (arr) {
    let uniqArr = [];
    arr.forEach(element => {
        if (uniqArr.indexOf(element) === -1) {
            uniqArr.push(element);
        }
    });
    return uniqArr;
}

module.exports = {
    uniq: uniq
}