function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));
}

const numbers = [10, 15, 3, 7, 19, 4, 23, 8];
const primeNumbers = filterPrimes(numbers);
console.log(primeNumbers);