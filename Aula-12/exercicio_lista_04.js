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
