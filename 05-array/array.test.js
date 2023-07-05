const {
    summaryCart,
    filterProductsByPrice,
    findProductByName,
    sortProductsByPrice,
    mapProductsToName,
    removeProductById,
    twoSum,
} = require('./array');

describe('summaryCart function', () => {
    it('summaryCart of empty array  equal 0', () => {
        expect(summaryCart([])).toBe(0);
    });

    it('should return total price', () => {
        // arrange
        const cart = [
            { price: 100, quantity: 1 },
            { price: 200, quantity: 2 },
            { price: 300, quantity: 3 },
        ];

        // act
        const result = summaryCart(cart);

        // assert
        expect(result).toBe(1400);
    });

    // test case for check argument is array
    it('should throw error if argument is not array', () => {
        expect(() => summaryCart({})).toThrow();
    });

    // test case for check argument is array happy case
    it('should not throw error if argument is array', () => {
        expect(() => summaryCart([])).not.toThrow();
    });

    // check argument pass should be = {price, quantity}
    it('should throw error if argument is not {price, quantity}', () => {
        // arrange
        const cart = [
            { price: 100, quantity: 1 },
            { price: 200, quantity: 2 },
            { price: 300, quantity: 3 },
        ];

        // act
        expect(() => summaryCart(cart)).not.toThrow();
    });
});

describe('removeProductById function', () => {
    let products;
    beforeEach(() => {
        products = [
            { id: 1, name: 'apple', price: 100 },
            { id: 2, name: 'banana', price: 200 },
            { id: 3, name: 'orange', price: 300 },
        ];
    });
    it('should remove product by id', () => {
        // arrange
        // const products = [
        //     { id: 1, name: 'apple', price: 100 },
        //     { id: 2, name: 'banana', price: 200 },
        //     { id: 3, name: 'orange', price: 300 },
        // ];
        const id = 2;

        // act
        let result = removeProductById(products, id);

        // assert
        expect(products).toEqual([
            { id: 1, name: 'apple', price: 100 },
            { id: 3, name: 'orange', price: 300 },
        ]);

        expect(products).toHaveLength(2);
        expect(products).not.toContainEqual({ id: 2, name: 'banana', price: 200 });
        expect(result).toContainEqual({ id: 2, name: 'banana', price: 200 });
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: 2, name: 'banana', price: 200 }]);
    });

    it("should not remove product if id doesn't exist", () => {
        // arrange
        // const products = [
        //     { id: 1, name: 'apple', price: 100 },
        //     { id: 2, name: 'banana', price: 200 },
        //     { id: 3, name: 'orange', price: 300 },
        // ];

        // act
        let result = removeProductById(products, 4);

        // assert
        expect(products).toEqual(products);
        expect(products).toHaveLength(3);
        expect(products).toContainEqual({ id: 1, name: 'apple', price: 100 });
        expect(products).toContainEqual({ id: 2, name: 'banana', price: 200 });
        expect(products).toContainEqual({ id: 3, name: 'orange', price: 300 });
        expect(result).toBeUndefined();
    });
});

describe('two sum function', () => {
    it('should return array of index of that element pair sum = target', () => {
        // arrange
        const arr = [1, 2, 3, 4, 5];
        const target = 5;

        // act
        const result = twoSum(arr, target);

        // assert
        expect(result).toEqual([0, 3]);
    });

    it('should return array of index of that element pair sum = target', () => {
        // arrange
        const arr = [1, 2, 3, 4, 5];
        const target = 6;

        // act
        const result = twoSum(arr, target);

        // assert
        expect(result).toEqual([0, 4]);
    });
    it("should return empty array if doesn't have pair", () => {
        // arrange
        const arr = [1, 2, 3, 4, 5];
        const target = 21;

        // act
        const result = twoSum(arr, target);

        // assert
        expect(result).toEqual([]);
    });
});
