
let contaBancaria = {
    titular: 'João da Silva',
    saldo: 1000,
    depositar: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log('Valor de depósito inválido.');
        }
    },
    sacar: function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else if (valor > this.saldo) {
            console.log('Saldo insuficiente para saque.');
        } else {
            console.log('Valor de saque inválido.');
        }
    }
};


let cliente = {
    nome: 'Maria Oliveira',
    conta: contaBancaria
};


function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}`);
    console.log(`Saldo da Conta: R$${cliente.conta.saldo}`);
}


cliente.conta.depositar(500); // Deposita R$500
cliente.conta.sacar(200);    // Saca R$200
cliente.conta.sacar(1500);  // Tenta sacar R$1500 (saldo insuficiente)


mostrarSaldo(cliente);
