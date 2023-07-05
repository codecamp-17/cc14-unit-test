function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(numerator, denominator) {
    return numerator / denominator;
}

function modulo(numerator, denominator) {
    return numerator % denominator;
}
function power(base, exponent) {
    return base ** exponent;
}
function absolute(value) {
    return Math.abs(value);
}
module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    modulo: modulo,
    power: power,
    absolute: absolute,
};
