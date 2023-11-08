let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];


// 1a.
function ehPrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;

        }

    }

    return true;

}


// 2a.
let numeros_primos = numeros.filter(ehPrimo);
console.log(`\nOs números primos são: ${numeros_primos}.`);


// 3a.
let quadrados_primos = numeros_primos.map(numero => numero ** 2);
console.log(`\nOs quadrados dos números primos é: ${quadrados_primos}.`);
