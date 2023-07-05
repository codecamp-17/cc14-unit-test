const { reverseString, capitalize, countVowels, spamCheck, isPangram } = require('./string');

describe('reverseString function', () => {
    test('reverseString "abc" to equal "cba"', () => {
        expect(reverseString('abc')).toBe('cba');
    });

    test('reverseString "abc" to equal "abc"', () => {
        expect(reverseString('abc')).not.toBe('abc');
    });
});

describe('capitalize function', () => {
    test('capitalize "abc" to equal "Abc"', () => {
        expect(capitalize('abc')).toBe('Abc');
    });

    test('capitalize "abc" to equal "abc"', () => {
        expect(capitalize('abc')).not.toBe('abc');
    });
});

describe('countVowels function', () => {
    test('countVowels "abc" to equal 1', () => {
        expect(countVowels('abc')).toBe(1);
    });

    test('countVowels "abc" to equal 2', () => {
        expect(countVowels('abc')).not.toBe(2);
    });

    test("countVowels 'abcdefghijklmnopqrstuvwxyz' to equal 5", () => {
        expect(countVowels('abcdefghijklmnopqrstuvwxyz')).toBe(5);
    });
});

describe('spamCheck function', () => {
    it('spamCheck "abc" to equal false', () => {
        expect(spamCheck('abc')).toBe(false);
    });

    it("if string contain 'viagra' is spam", () => {
        expect(spamCheck('viagra')).toBe(true);
    });

    it("if string contain 'xxx' is spam", () => {
        expect(spamCheck('xxx')).toBe(true);
    });
});
describe('isPangram function', () => {
    it("isPangram 'abcdefghijklmnopqrstuvwxyz' to equal true", () => {
        expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    });

    it("isPangram 'abcdefghijklmnopqrstuvwxyz' to equal false", () => {
        expect(isPangram('abcdefghijklmnopqrstuvwxyz')).not.toBe(false);
    });

    it('string contain all alphabet  is pangram', () => {
        expect(isPangram('aaabcdefghijklmnopqrstuvwxyz')).toBeTruthy();
    });

    it('string not contain all alphabet  is not pangram', () => {
        // Arrange
        const str = 'abcdefghijstuvwxyz';

        // Act
        const result = isPangram(str);

        // Assert
        expect(result).toBeFalsy();
    });
});
