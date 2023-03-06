const removeFromArray = function(arr, ...Args) {
    const toRemove = new Set(Args);
    const difference = arr.filter(x => !toRemove.has(x));
    
    return difference;
};

// Do not edit below this line
module.exports = removeFromArray;
