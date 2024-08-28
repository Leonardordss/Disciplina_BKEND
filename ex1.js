class Carro {
  // Criar construtor
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.motorLigado = false; // O motor está desligado por padrão
  }


  ligarMotor() {
    this.motorLigado = true;
    console.log("Motor ligado");
  }


  desligarMotor() {
    this.motorLigado = false;
    console.log("Motor desligado");
  }

  
  statusMotor() {
    if (this.motorLigado) {
      console.log("O motor está ligado");
    } else {
      console.log("O motor está desligado");
    }
  }
}


let meuCarro = new Carro("Toyota", "Corolla", 2020);
meuCarro.ligarMotor();  // Motor ligado
meuCarro.statusMotor(); // O motor está ligado

meuCarro.desligarMotor();  // Motor desligado
meuCarro.statusMotor(); // O motor está desligado
