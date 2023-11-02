const prompt = require('prompt-sync')();

function retangulo(altura, largura) {
    let resultado = '';

    for (let i = 0; i < largura; i++) {
        for (let j = 0; j < altura; j++) {
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
