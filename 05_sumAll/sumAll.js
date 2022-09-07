const sumAll = (start, stop) => {
    if (typeof start !== 'number' || typeof stop !== 'number' ||
        start < 0 || stop < 0) {
        return 'ERROR';
    }
    let sum = 0;
    for (let i = Math.min(start, stop); i <= Math.max(start, stop); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
