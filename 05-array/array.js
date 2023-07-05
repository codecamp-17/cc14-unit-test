function summaryCart(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    return total;
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
    return products.splice(index, 1);
}
