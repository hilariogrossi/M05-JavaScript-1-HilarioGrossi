const prompt = require('prompt-sync')();

function verificaEmail(email) {
    if (email.indexOf('@gmail.com') !== -1) {
        console.log("\nO e-mail contém o domínio '@gmail.com'");

        const usuario = email.slice(0, email.indexOf('@'));
        console.log(`\nNome de usuário: ${usuario}\n`);

    } else {
        console.log('\nO email NÃO contém o domínio "@gmail.com"');

        const dominio = email.slice(email.indexOf('@') + 1);
        console.log(`\nDomínio: ${dominio}\n`);
    
    }

}
    

const email_usuario = prompt('Digite o email para verificação: ');
verificaEmail(email_usuario);
