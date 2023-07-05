// test case for fizzbuzz
const { fizzbuzz, findMultiples, removeChar, descendingOrder } = require('./algo');
describe('FizzBuzz function', () => {
    it("should return 'Fizz' if input is 3", () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });
    it("should return 'Buzz' if input is 5", () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });

    it("should return 'FizzBuzz' if input is 15", () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });

    it("should return 'Fizz' when input can be divided by 3", () => {
        expect(fizzbuzz(6)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
        expect(fizzbuzz(12)).toBe('Fizz');
    });

    it("should return 'Buzz' when input can be divided by 5", () => {
        expect(fizzbuzz(10)).toBe('Buzz');
        expect(fizzbuzz(20)).toBe('Buzz');
        expect(fizzbuzz(25)).toBe('Buzz');
    });

    it("should return 'FizzBuzz' when input can be divided by 3 and 5", () => {
        expect(fizzbuzz(30)).toBe('FizzBuzz');
        expect(fizzbuzz(45)).toBe('FizzBuzz');
        expect(fizzbuzz(60)).toBe('FizzBuzz');
    });
});

// test case for Remove First and Last Character
describe('Remove First and Last Character function', () => {
    it('should return "loquen" if input is "eloquent"', () => {
        expect(removeChar('eloquent')).toBe('loquen');
    });

    it('should return "ountr" if input is "country"', () => {
        let str = 'country';

        let result = removeChar(str);

        expect(result).toBe('ountr');
    });

    it("to have been called with 'country'", () => {
        let str = 'country';
        let myRemoveChar = jest.fn(removeChar);

        let result = myRemoveChar(str);

        expect(myRemoveChar).toHaveBeenCalledWith('country');
        expect(myRemoveChar).toHaveBeenCalledTimes(1);
        expect(myRemoveChar).toHaveReturnedWith('ountr');
        expect(result).toBe('ountr');
    });
});
// test case for Find Multiples of Number
describe('Find Multiples of Number function', () => {
    it('should return [5, 10, 15, 20, 25] if input is 5 and limit is 25', () => {
        expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25]);
    });

    it('should return [2,4,6] if input is 2 and limit is 6', () => {
        expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
    });
});

// test case for descending order
describe('Descending Order function', () => {
    it('should return 54421 if input is 42145', () => {
        expect(descendingOrder(42145)).toBe(54421);
    });

    it('should return 654321 if input is 145263', () => {
        expect(descendingOrder(145263)).toBe(654321);
    });

    it('should return 987654321 if input is 123456789', () => {
        expect(descendingOrder(123456789)).toBe(987654321);
    });
});
