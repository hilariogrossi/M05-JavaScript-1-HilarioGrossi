/* Questão 4
Escreva um programa que solicite ao usuário que digite um número inteiro positivo. O programa deve calcular e exibir a sequência de Fibonacci até o número digitado, utilizando um loop for.
A sequência de Fibonacci é uma sequência de números em que cada número subsequente é igual à soma dos dois números anteriores. A sequência começa com os números 0 e 1. A fórmula para calcular o próximo número da sequência de Fibonacci é dada por: F(n) = F(n-1) + F(n-2)
O programa deve realizar as seguintes etapas:

    Solicitar ao usuário que digite um número inteiro positivo.
    Verificar se o número é menor ou igual a 0. Se for, exibir a mensagem "Nenhum número na sequência."
    Verificar se o número é igual a 1. Se for, exibir a sequência de Fibonacci como "0".
    Verificar se o número é igual a 2. Se for, exibir a sequência de Fibonacci como "0, 1".
    Caso contrário, inicializar a sequência de Fibonacci com os números iniciais 0 e 1.
    Utilizar um loop for para calcular e adicionar os próximos números da sequência até o número digitado.
    Exibir a sequência de Fibonacci até o número digitado, separando os números por vírgula.

Implemente utilizando o comando switch.

EXEMPLO 1:

Entrada:
Digite um número inteiro positivo: 1

Saída:
Sequência de Fibonacci até 1 :
0

EXEMPLO 2:

Entrada:
Digite um número inteiro positivo: 13

Saída:
Sequência de Fibonacci até 13 :
0, 1, 1, 2, 3, 5, 8, 13 */


const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número inteiro positivo: '));

if (numero > 0) {
    switch (numero) {
        case 1:
            console.log('\nSequência de Fibonacci até 1: 0.\n');
            break;

        case 2:
            console.log('\nSequência de Fibonacci até 2: 0, 1.\n');
            break;

        default:
            let a = 0, b = 1;
            let saida = "0, 1";

            for (let i = 3; i <= numero; i++) {
                let c = a + b;
                
                saida += ', ' + ` ${c}`;

                a = b;

                b = c;

            }

            console.log(`\nA sequência de Fibonacci para o número ${numero} é: ${saida}.\n`);
            break;

    }

} else {
    console.log('\nNenhum número na sequência.\n');

}
