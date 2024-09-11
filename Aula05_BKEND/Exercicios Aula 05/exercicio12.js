// Cria o objeto pessoa com as propriedades especificadas
let pessoa = {
    nome: 'Ana Paula',
    idade: 29,
    solteiro: true,
    hobbies: ['leitura', 'caminhadas', 'fotografia']
};


function mostrarInfoPessoa(pessoa) {
    console.log('Nome:', pessoa.nome, '(Tipo:', typeof pessoa.nome + ')');
    console.log('Idade:', pessoa.idade, '(Tipo:', typeof pessoa.idade + ')');
    console.log('Solteiro:', pessoa.solteiro, '(Tipo:', typeof pessoa.solteiro + ')');
    console.log('Hobbies:', pessoa.hobbies.join(', '), '(Tipo:', typeof pessoa.hobbies + ')');
}


mostrarInfoPessoa(pessoa);
