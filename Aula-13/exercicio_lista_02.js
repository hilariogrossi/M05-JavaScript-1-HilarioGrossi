const prompt = require('prompt-sync')();

let controle = 0;

while (controle != 1) {
    let nomeUsuario = prompt('Digite um nome de usuário: ');

    if (nomeUsuario.length >= 12) {
        nomeUsuario = nomeUsuario.toLowerCase();

        if (nomeUsuario.indexOf('@') === -1) {
            console.log('\nERRO! Usuários devem conter "@" no nome');

        }

        if (nomeUsuario.indexOf('admin') !== -1) {
            console.log('\nERRO! Nome de usuários não podem começar com "admin"!');

        } else if (nomeUsuario.indexOf('user@') !== -1) {
            console.log('\nNome válido!');
            console.log(`\nO nome de usuário é: ${nomeUsuario}.\n`)
            controle = 1;

        }

    } else {
        console.log('\nERRO! O nome deve ter pelo menos 12 caracteres');

    }

}
