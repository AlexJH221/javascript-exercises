const removeFromArray = (array, ...items) => {
    for (let item of items) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === item) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
