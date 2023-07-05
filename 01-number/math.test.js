const { add, subtract, multiply, divide, modulo, power, absolute } = require('./math');

describe('Add function', () => {
    test('add 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('add 1 + 2 to equal 4', () => {
        expect(add(1, 2)).not.toBe(4);
    });
});

describe('Subtract function', () => {
    test('subtract 2 - 1 to equal 1', () => {
        expect(subtract(2, 1)).toBe(1);
    });

    test('subtract 2 - 1 to equal 2', () => {
        expect(subtract(2, 1)).not.toBe(2);
    });
});

describe('Multiply function', () => {
    test('multiply 2 * 3 to equal 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });
});

describe('Divide function', () => {
    test('divide 6 / 3 to equal 2', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('divide 6 / 3 to equal 3', () => {
        expect(divide(6, 3)).not.toBe(3);
    });
});
