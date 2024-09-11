function verificarMaiorIdade(idade) {
    return idade >= 18 ? 'Você é maior de idade.' : 'Você é menor de idade.';
}

const idadePessoa = 20;
const resultado = verificarMaiorIdade(idadePessoa);

console.log(resultado);
