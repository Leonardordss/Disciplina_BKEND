class Pessoa {
    // Criar construtor
    constructor(nome, idade, profissao, salario) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
      this.salario = salario;
    }
  

    exibeTrabalho(nomeEmpresa, tempoDeTrabalho) {
      console.log(`Nome da empresa: ${nomeEmpresa}, Tempo de trabalho: ${tempoDeTrabalho} anos`);
    }
  }
  

  let pessoa1 = new Pessoa("João", 35, "Engenheiro", 5000);
  pessoa1.exibeTrabalho("Tech Solutions", 10); 
  
  let pessoa2 = new Pessoa("Maria", 28, "Designer", 4000);
  pessoa2.exibeTrabalho("Creative Studio", 5); 
  