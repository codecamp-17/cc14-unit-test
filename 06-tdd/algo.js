function fizzbuzz(number) {
    if (number % 15 === 0) {
        return 'FizzBuzz';
    }

    if (number % 3 === 0) {
        return 'Fizz';
    }

    if (number % 5 === 0) {
        return 'Buzz';
    }

    return number;
}
function removeChar(str) {
    return str.slice(1, -1);
}

function findMultiples(input, limit) {
    const result = [];
    for (let i = input; i <= limit; i += input) {
        result.push(i);
    }
    return result;
}

function descendingOrder(number) {
    let r = +String(number)
        .split('')
        .sort((a, b) => b - a)
        .join('');

    return r;
}

module.exports = {
    fizzbuzz: fizzbuzz,
    findMultiples: findMultiples,
    removeChar: removeChar,
    descendingOrder: descendingOrder,
};
