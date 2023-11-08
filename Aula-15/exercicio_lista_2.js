const livro = {
    Título: 'Cresça 1% ao dia',
    Autor: 'Fernão Battistoni',
    Ano_de_Publicação: 2019,
    Gênero: 'Auto Ajuda',
    Disponível: true,
    Empréstimo_de_Livro: function () {
        this.Disponível = false;

    }

};

console.log(
    `\nInformações sobre o Livro:
    Título: ${livro.Título}
    Autor: ${livro.Autor}
    Ano de Publicação: ${livro.Ano_de_Publicação}
    Gênero: ${livro.Gênero}
    Livro disponível para empréstimo: ${livro.Disponível}`);


livro.Empréstimo_de_Livro();
console.log('\nO livro foi emprestado, portanto:')
console.log(`Livro disponível para empréstimo: ${livro.Disponível}`);

