let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

// 1a.
console.log('Listando tarefas: ');

for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}a. = ${tarefas[i]}`);

}


// 2a.
console.log('\nTarefas Pendentes: ');

let tarefas_pendentes = tarefas.filter(tarefa => !tarefa.includes('Feito'));
console.log(tarefas_pendentes);


// 3a.
tarefas.sort();

console.log('\nArray ordenado: ');
console.log(tarefas);


// 4a.
console.log('\nArray com as primeiras tarefas: ')

const primeiras_tarefas = tarefas.slice(0, 2);
console.log(primeiras_tarefas);


// 5a.
console.log('\nArray sem a última tarefa: ')

tarefas.pop();
console.log(tarefas);


// 6a.
console.log('\nAdicionando uma tarefa nova ao final do array com o push: ');

tarefas.push('Estudar bastante JavaScript');
console.log(tarefas);
