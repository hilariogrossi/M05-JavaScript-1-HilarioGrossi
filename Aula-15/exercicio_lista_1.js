const pessoa_1 = {};

pessoa_1.nome = 'Hilário Grossi de Oliveira';
pessoa_1.idade = 52;

console.log(`\nNome: ${pessoa_1.nome}, Idade: ${pessoa_1.idade} anos.`);

pessoa_1.idade = 53;
console.log(`\nIdade atualizada: ${pessoa_1.idade} anos.\n`);


const pessoa_2 = {
    Nome: 'Patrícia',
    Idade: 56

};

for (let propriedade in pessoa_2) {
    console.log(`${propriedade}: ${pessoa_2[propriedade]}.`);

};


pessoa_2.apresentacao = function () {
    console.log(`\nOlá, meu nome é ${this.Nome}.`);

}

pessoa_2.apresentacao();


pessoa_1.email = 'hilariogrossi@yahoo.com.br';
console.log(`\nEmail de ${pessoa_1.nome}: ${pessoa_1.email}`)
