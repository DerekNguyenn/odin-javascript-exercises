const removeFromArray = function(arr, ...Args) {
    return arr.filter(x => !Args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
