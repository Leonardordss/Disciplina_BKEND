class Cliente {
    constructor(nome, profissao, saldo) {
      this.nome = nome;
      this.profissao = profissao;
      this.saldo = saldo;
    }
  
    pix(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Transação Pix realizada. Valor: R$${valor}. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente para realizar a transação Pix.");
      }
    }
  
    emprestimo(valor) {
      this.saldo += valor;
      console.log(`Empréstimo de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
  
    saque(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente para realizar o saque.");
      }
    }
  
    extrato() {
      console.log(`Extrato: Saldo atual de R$${this.saldo}`);
    }
  }
  
  // Programa principal
  let nome = prompt("Digite o nome do cliente:");
  let profissao = prompt("Digite a profissão do cliente:");
  let saldoInicial = parseFloat(prompt("Digite o saldo inicial do cliente:"));
  
  let cliente = new Cliente(nome, profissao, saldoInicial);
  
  while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1 - Realizar Pix");
    console.log("2 - Realizar Empréstimo");
    console.log("3 - Realizar Saque");
    console.log("4 - Verificar Extrato");
    console.log("5 - Sair");
  
    let opcao = parseInt(prompt("Digite o número da opção desejada:"));
  
    if (opcao === 1) {
      let valor = parseFloat(prompt("Digite o valor para Pix:"));
      cliente.pix(valor);
    } else if (opcao === 2) {
      let valor = parseFloat(prompt("Digite o valor do Empréstimo:"));
      cliente.emprestimo(valor);
    } else if (opcao === 3) {
      let valor = parseFloat(prompt("Digite o valor para Saque:"));
      cliente.saque(valor);
    } else if (opcao === 4) {
      cliente.extrato();
    } else if (opcao === 5) {
      console.log("Encerrando o programa.");
      break;
    } else {
      console.log("Opção inválida. Tente novamente.");
    }
  }
  