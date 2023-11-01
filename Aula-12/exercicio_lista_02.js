/* Questão 2

Faça um programa que calcule a média de n números informados pelo usuário até ele informar o número 0. Por exemplo, se o usuário informar os números 9 6 2 8 0, o programa deve calcular a média (9+ 6 + 2 + 8) / 4.
Exemplo de execução

Digite um número (0 para sair): 5
Digite um número (0 para sair): 8
Digite um número (0 para sair): 3
Digite um número (0 para sair): 0
A média dos números digitados é: 5.333333333333333 */

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
        console.log('\nNenhum número soi digitado!\n')
        break;

    }

    soma += numero;

    contador++;

}
