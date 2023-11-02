const prompt = require('prompt-sync')();

const texto = prompt("Digite o texto a ser invertido: ");

let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];

}

console.log(`\nTexto invertido: ${textoInvertido}\n`);
