// 3-4 function to work with arrays

function summaryCart(cart) {
    // need bad code version
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    return total;

    // return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function filterProductsByPrice(products, price) {
    return products.filter((product) => product.price <= price);
}

function findProductByName(products, name) {
    return products.find((product) => product.name === name);
}

function sortProductsByPrice(products, ascending = true) {
    return products.sort((a, b) => {
        if (ascending) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

function mapProductsToName(products) {
    return products.map((product) => product.name);
}

function removeProductById(products, id) {
    // return products.filter((product) => product.id !== id);
    // use splice
    const index = products.findIndex((product) => product.id === id);
    if (index < 0) {
        return;
    }
    return products.splice(index, 1);
}

function twoSum(arr, target) {
    // return arr of index of that element pair sum = target
    // [1, 2, 3, 4, 5] target = 5 => [0, 3]

    // brute force
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return [];

    // use hash map
    // const map = {};
    // for (let i = 0; i < arr.length; i++) {
    //     const num = arr[i];
    //     const pair = target - num;
    //     if (map[pair] !== undefined) {
    //         return [map[pair], i];
    //     }
    //     map[num] = i;
    // }
}

module.exports = {
    summaryCart: summaryCart,
    filterProductsByPrice: filterProductsByPrice,
    findProductByName: findProductByName,
    sortProductsByPrice: sortProductsByPrice,
    mapProductsToName: mapProductsToName,
    removeProductById: removeProductById,
    twoSum: twoSum,
};
