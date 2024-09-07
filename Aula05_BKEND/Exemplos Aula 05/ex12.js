carro = {} //cria o objeto vazio e vai adicionando as informações dentro

carro.modelo = "Jaguar"
carro.ano = 2024
carro.combustivel = "Hibrido"
carro.porta = 5
carro.acelera = function(){
    return 'O carro está acelerando'
}

console.log(carro)
console.log(carro.acelera())