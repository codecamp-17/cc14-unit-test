// function for return boolean value

function isEven(number) {
    return number % 2 === 0;
}

// more isPrime function
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    }
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    return true;
}

function isAdmin(user) {
    return user.admin === true;
}

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function isValidPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (password.search(/[a-z]/) === -1) {
        return false;
    }
    if (password.search(/[A-Z]/) === -1) {
        return false;
    }
    if (password.search(/[0-9]/) === -1) {
        return false;
    }
    return true;
}

module.exports = {
    isEven: isEven,
    isPrime: isPrime,
    isLeapYear: isLeapYear,
    isAdmin: isAdmin,
    isPalindrome: isPalindrome,
    isValidPassword: isValidPassword,
};
