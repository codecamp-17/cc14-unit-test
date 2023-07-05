const exp = require('constants');
const { multiplyNumeric, createProduct, findEmployee, User } = require('./object');

describe('multiplyNumeric function', () => {
    it("multiplyNumeric({a: 1, b: '2', c: 3, d: 4}, 2) to equal {a: 2, b: '2', c: 6, d: 8}", () => {
        // arrange
        const obj = { a: 1, b: '2', c: 3, d: 4 };

        // act
        const result = multiplyNumeric(obj, 2);

        // assert
        // expect(result).toBe({ a: 2, b: '2', c: 6, d: 8 });
        expect(result).toEqual({ a: 2, b: '2', c: 6, d: 8 });
    });

    it('multiply only numeric value', () => {
        // arrange
        const obj = { a: 1, b: '2', c: 3, d: 4 };

        // act
        const result = multiplyNumeric(obj, 2);

        // assert
        expect(result.a).toEqual(2);
        expect(result.b).toEqual('2');
        expect(result.c).toEqual(6);
        expect(result.d).toEqual(8);
    });
});

describe('createProduct function', () => {
    it("createProduct('apple', 10, 15, 5) to equal {name: 'apple', quantity: 10, price: 15, discount: 5}", () => {
        // arrange
        const name = 'apple';
        const quantity = 10;
        const price = 15;
        const discount = 5;

        // act
        const result = createProduct(name, quantity, price, discount);

        // assert
        expect(result).toEqual({ name: 'apple', quantity: 10, price: 15, discount: 5 });
    });

    it('createProduct with default discount', () => {
        // arrange
        const name = 'apple';
        const quantity = 10;
        const price = 15;

        // act
        const result = createProduct(name, quantity, price);

        // assert
        expect(result).toEqual({ name: 'apple', quantity: 10, price: 15, discount: 0 });
    });
});

describe('findEmployee function', () => {
    let employees = {};

    beforeAll(() => {
        employees = {
            john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
            peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
            mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
            sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } },
        };
    });

    it("findEmployee('john', employees) to equal 'Name: john, salary: 1000, address: Ratchathewi, Bangkok'", () => {
        const name = 'john';
        const result = findEmployee(name, employees);
        expect(result).toEqual('Name: john, salary: 1000, address: Ratchathewi, Bangkok');
    });

    it("findEmployee('peter', employees) to equal 'Name: peter, salary: 1500, address: Pathumwan, Bangkok'", () => {
        const name = 'peter';
        const result = findEmployee(name, employees);
        expect(result).toEqual('Name: peter, salary: 1500, address: Pathumwan, Bangkok');
    });

    it('not found employee', () => {
        const name = 'not found';
        const result = findEmployee(name, employees);

        expect(result).toBe(null);
        expect(result).toEqual(null);
        expect(result).toBeNull();
        expect(result).toBeFalsy();
    });
});

describe('User function', () => {
    it("new User('John', 30, '", () => {
        const name = 'John';
        const age = 30;
        const email = 'codecamp@mail.com';

        const result = new User(name, age, email);

        expect(result).toEqual({ name: 'John', age: 30, email: 'codecamp@mail.com' });
        expect(result).toBeInstanceOf(User);
        expect(result).toBeInstanceOf(Object);
        expect(result).toHaveProperty('name');
        expect(result).toHaveProperty('age');
        expect(result).toHaveProperty('email');
        expect(result).not.toHaveProperty('address');
    });
});
