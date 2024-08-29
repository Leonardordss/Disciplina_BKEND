let pessoa={
    nome: 'Daniel',
    idade: 29,
    profissao: 'Engenheiro Eletrônico',
    saudacao: function(){
        console.log("Olá! Seja bem vindo!");
    }
}
pessoa.time = "Palmeiras"

console.log(pessoa)
//console.log(pessoa.saudacao())
console.log(pessoa.idade) //acessa a informação especifica da pessoa