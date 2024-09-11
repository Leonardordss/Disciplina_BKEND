
let pessoa = {
    nome: 'Ana Paula',
    idade: 29,
    solteiro: true,
    hobbies: ['leitura', 'caminhadas', 'fotografia'],
    endereco: {
        rua: 'Rua das Flores',
        cidade: 'São Paulo',
        estado: 'SP'
    }
};


function mostrarInfoPessoa(pessoa) {
    console.log('Nome:', pessoa.nome, '(Tipo:', typeof pessoa.nome + ')');
    console.log('Idade:', pessoa.idade, '(Tipo:', typeof pessoa.idade + ')');
    console.log('Solteiro:', pessoa.solteiro, '(Tipo:', typeof pessoa.solteiro + ')');
    console.log('Hobbies:', pessoa.hobbies.join(', '), '(Tipo:', typeof pessoa.hobbies + ')');
    console.log('Endereço:');
    console.log('  Rua:', pessoa.endereco.rua, '(Tipo:', typeof pessoa.endereco.rua + ')');
    console.log('  Cidade:', pessoa.endereco.cidade, '(Tipo:', typeof pessoa.endereco.cidade + ')');
    console.log('  Estado:', pessoa.endereco.estado, '(Tipo:', typeof pessoa.endereco.estado + ')');
}


mostrarInfoPessoa(pessoa);
