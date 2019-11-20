const uniq = function (arr) {
    let uniqArr = [];
    arr.forEach(element => {
        if (uniqArr.indexOf(element) === -1) {
            uniqArr.push(element);
        }
    });
    return uniqArr;
}

const diff = function (arr1, arr2) {
    let diffArr = [];
    arr1.forEach(function (element) {
        if (arr2.indexOf(element) === -1) {
            diffArr.push(element);
        }
    });
    return diffArr
}

module.exports = {
    uniq: uniq,
    roz: diff,
}