let saldo = 1000; 
const deposito = 200; 
const saque = 150; 

let operacao = saldo + deposito; 
console.log(`Saldo após depósito: ${operacao}`);

operacao = operacao - saque; 
console.log(`Saldo após saque: ${operacao}`);
