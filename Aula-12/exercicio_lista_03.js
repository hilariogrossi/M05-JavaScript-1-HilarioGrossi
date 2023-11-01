/* Questão 3

Faça um programa que desenha um retângulo de altura "a" e largura "l" usando asteriscos. O usuário deve informar os valores de "a" e "l", que devem ser maiores que zero e tais que l > a. Note que o seu programa deve garantir que os valores digitados sejam válidos, forçando entradas válidas. O programa também deve perguntar se o usuário gostaria de gerar um retângulo antes de fazer cada impressão. O programa termina assim que o usuário responder "n" à pergunta.
Exemplo de execução:

Informe se deseja imprimir um retângulo (s/n): s
Informe a altura do retângulo: 10
Informe a largura do retângulo: 8
Entrada inválida.
Informe a altura do retângulo: 10
Informe a largura do retângulo: 20
********************
********************
********************
********************
********************
********************
********************
********************
********************
********************
Informe se deseja imprimir outro retângulo (s/n): s
Informe a altura do retângulo: 5
Informe a largura do retângulo: 6
******
******
******
******
******
Informe se deseja imprimir outro retângulo (s/n): n */

const prompt = require('prompt-sync')();

function retangulo(altura, largura) {
    let resultado = '';

    for (let i = 0; i < altura; i++) {
        //linha += '*'.repeat(largura) + '\n'; e não precisaria do for abaixo
        for (let j = 0; j < largura; j++) {
            resultado += '*';

        }

        if (i + 1 != altura) {
            resultado += '\n';
        
        }
    }

    return resultado;

}

let imprimir = 's';

while (imprimir = 's') {
    imprimir = prompt("Informe se deseja imprimir um retângulo (s/n): ");
    
    if (imprimir.toLowerCase() == 's') {
        let altura, largura;

        altura = parseInt(prompt("Informe a altura do retângulo: "));

        largura = parseInt(prompt("Informe a largura do retângulo: "));

        if (largura > altura) {
            console.log(retangulo(largura, altura))
        
        } else {
            console.log('\nEntrada inválida!\n')

        }

    } else {
        console.log("\nPrograma encerrado.\n");
        break;

    }

}
