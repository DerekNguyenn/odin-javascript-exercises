const sumAll = function(a, b) {

    // Check if argument is a non-negative integer
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (Math.sign(a) === -1 || Math.sign(b) === -1) return "ERROR";

    // Swap arguments if the second passed in is greater than first
    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
