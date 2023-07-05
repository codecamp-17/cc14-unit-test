// function for test string

function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

function spamCheck(str) {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}

function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of alphabet) {
        if (!str.toLowerCase().includes(letter)) {
            return false;
        }
    }
    return true;
}

module.exports = {
    reverseString: reverseString,
    capitalize: capitalize,
    countVowels: countVowels,
    spamCheck: spamCheck,
    isPangram: isPangram,
};
