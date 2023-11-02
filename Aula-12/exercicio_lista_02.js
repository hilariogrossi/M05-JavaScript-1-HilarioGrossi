const prompt = require('prompt-sync')();

let number = 1;
let soma = 0;
let contador = 0;

while (number != 0) {
    let numero = parseFloat(prompt("Digite um número (0 para sair): "));

    if (numero == 0 && contador != 0 ) {
        let media = soma / contador;

        console.log(`\nA média dos números digitados é ${media}\n`);
        
        break;

    } else if (numero == 0 && contador == 0) {
        console.log('\nNenhum número foi digitado!\n')
        break;

    }

    soma += numero;

    contador++;

}
