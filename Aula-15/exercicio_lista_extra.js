const animalDeEstimacao = {
    Nome: 'Totozera',
    Espécie: 'Pincher',
    Idade: 12,
    Fazer_Barulho: function () {
        console.log(`\nO ${animalDeEstimacao.Nome} está latindo.`);

    },
    Envelhecer: function () {
        this.Idade++;

    },
    Trocar_Nome: function (novo_nome) {
        this.Nome = novo_nome;
        console.log(`\nO nome do animal foi alterado para "${animalDeEstimacao.Nome}".\n`);

    }

};

console.log(
`\nNome: ${animalDeEstimacao.Nome}.
Espécie: ${animalDeEstimacao.Espécie}.
Idade: ${animalDeEstimacao.Idade} anos.\n`);

animalDeEstimacao.Fazer_Barulho();

animalDeEstimacao.Envelhecer();
animalDeEstimacao.Envelhecer();
animalDeEstimacao.Envelhecer();

console.log(`\nIdade após envelher: ${animalDeEstimacao.Idade} anos.\n`);

animalDeEstimacao.Trocar_Nome('Dori');
