exports.min = function min(array) {
    if (array <= 0 || !array) return 0;
    return array.sort((a, b) => a - b)[0];
};

exports.max = function max(array) {
    if (array <= 0 || !array) return 0;
    return array.sort((a, b) => b - a)[0];
};

exports.avg = function avg(array) {
    if (array <= 0 || !array) return 0;
    return array.reduce((item, acc) => acc + item) / array.length;
};
