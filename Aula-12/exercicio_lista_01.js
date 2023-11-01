const prompt = require('prompt-sync')();

let numero_1 = parseInt(prompt("Digite o primeiro número: "));
let numero_2 = parseInt(prompt("Digite o segundo número: "));

let resultado = 0;

for (let i = resultado; i < numero_1; i++) {
    resultado += numero_2;

}

console.log(`\nA multiplicação de ${numero_1} por ${numero_2} é ${resultado}.\n`);
