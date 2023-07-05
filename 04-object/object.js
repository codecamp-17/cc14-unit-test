function multiplyNumeric(obj, num) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= num;
        }
    }
    return obj;
}

function createProduct(name, quantity, price, discount) {
    return {
        name: name,
        quantity: quantity,
        price: price,
        discount: discount,
    };
}

// function for find Employee from
/**
 const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};
and return in format Name: john, salary: 1000, address: Ratchathewi, Bangkok
 */

function findEmployee(name, employees) {
    const employee = employees[name];
    if (!employee) {
        return null;
    }
    const { salary, address } = employee;
    const { district, province } = address;
    return `Name: ${name}, salary: ${salary}, address: ${district}, ${province}`;
}

// function Constructor for create new user
function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}
