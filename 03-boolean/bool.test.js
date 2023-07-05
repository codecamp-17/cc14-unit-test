const { isEven, isPrime, isLeapYear, isAdmin, isPalindrome, isValidPassword } = require('./bool');

describe('isEven function', () => {
    test('isEven 2 to equal true', () => {
        expect(isEven(2)).toBe(true);
    });

    test('isEven 3 to equal false', () => {
        expect(isEven(3)).toBe(false);
    });
});

describe('isPrime function', () => {
    test('isPrime 1 to equal false', () => {
        expect(isPrime(1)).toBe(false);
    });
    test('isPrime 2 to equal true', () => {
        expect(isPrime(2)).toBe(true);
    });
    test('isPrime 3 to equal true', () => {
        expect(isPrime(3)).toBe(true);
    });

    test('isPrime 4 to equal false', () => {
        expect(isPrime(4)).toBe(false);
    });

    // other case happy not in sequence
    test('isPrime 11 to equal true', () => {
        expect(isPrime(11)).toBe(true);
    });

    // prime more than 50
    test('isPrime 53 to equal true', () => {
        expect(isPrime(53)).toBe(true);
    });

    // not prime more than 50
    test('isPrime 51 to equal false', () => {
        expect(isPrime(51)).toBe(false);
    });

    // prime more than 10000
    test('isPrime 10007 to equal true', () => {
        expect(isPrime(10007)).toBe(true);
    });

    // prime more than 1000000
    test('isPrime 1000003 to equal true', () => {
        expect(isPrime(1000003)).toBe(true);
    });

    // not prime more than 100000
    test('isPrime 100001 to equal false', () => {
        expect(isPrime(100001)).toBe(false);
    });

    // not prime more than 1000000
    test('isPrime 1000001 to equal false', () => {
        expect(isPrime(1000001)).toBe(false);
    });
});

describe('isLeapYear function', () => {
    // GOOD TEST CASE : Precise , Clear, self-documenting
    it("if not divide by 4 then it's not leap year", () => {
        expect(isLeapYear(2021)).toBe(false);
    });

    it("divide by 4 and not divide by 100 then it's leap year", () => {
        expect(isLeapYear(2020)).toBe(true);
    });

    it("divide by 4 and divide by 100 and not divide by 400 then it's not leap year", () => {
        expect(isLeapYear(2100)).toBe(false);
    });

    it("divide by 4 and divide by 100 and divide by 400 then it's leap year", () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    // BAD TEST CASE
    // it('isLeapYear 2020 to equal true', () => {
    //     expect(isLeapYear(2020)).toBe(true);
    // });

    // it('isLeapYear 2021 to equal false', () => {
    //     expect(isLeapYear(2021)).toBe(false);
    // });

    // // 2000 is leap year
    // it('isLeapYear 2000 to equal true', () => {
    //     expect(isLeapYear(2000)).toBe(true);
    // });

    // // 2100 is not leap year
    // it('isLeapYear 2100 to equal false', () => {
    //     expect(isLeapYear(2100)).toBe(false);
    // });
});

describe('isAdmin function', () => {
    test('isAdmin { admin: true } to equal true', () => {
        expect(isAdmin({ admin: true })).toBe(true);
    });

    test('isAdmin { admin: false } to equal false', () => {
        expect(isAdmin({ admin: false })).toBe(false);
    });

    test('isAdmin has no admin property to equal false', () => {
        expect(isAdmin({})).toBe(false);
    });
});

describe('isPalindrome function', () => {
    it('isPalindrome "katak" to equal true', () => {
        expect(isPalindrome('katak')).toBe(true);
    });

    it('isPalindrome "kodok" to equal true', () => {
        expect(isPalindrome('kodok')).toBe(true);
    });

    it.each([
        ['katak', true],
        ['kodok', true],
        ['kasur rusak', true],
        ['kupu-kupu', false],
        ['kuda laut', false],
        ['kuda nil', false],
    ])('isPalindrome %s to equal %s', (input, expected) => {
        expect(isPalindrome(input)).toBe(expected);
    });
});

describe('isValidPassword function', () => {
    it('should return false if password length is less than 8 characters', () => {
        expect(isValidPassword('1234567')).toBe(false);
    });
    it('should return false if password does not contain lowercase', () => {
        expect(isValidPassword('123UT@78')).toBe(false);
    });

    it('should return false if password does not contain uppercase', () => {
        expect(isValidPassword('abcdefgh')).toBe(false);
    });

    it('should return false if password does not contain number', () => {
        expect(isValidPassword('abcdefgh')).toBe(false);
    });

    it.each([
        ['123456', false],
        ['123456789', false],
        ['abcdefghU', false],
        ['abcdefgh1', false],
        ['ABCDEFGH1', false],
        ['Acas1TWc', true],
    ])('isValidPassword %s to equal %s', (input, expected) => {
        expect(isValidPassword(input)).toBe(expected);
    });
});
