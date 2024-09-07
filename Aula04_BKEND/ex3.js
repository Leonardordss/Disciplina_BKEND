class Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
      this.cor = cor;
      this.modelo = modelo;
      this.tipoCombustivel = tipoCombustivel;
      this.quantidadeRodas = quantidadeRodas;
      this.motorLigado = false;
    }
  
    ligarMotor() {
      this.motorLigado = true;
      console.log("Motor ligado");
    }
  
    desligarMotor() {
      this.motorLigado = false;
      console.log("Motor desligado");
    }
  }
  
  class Carro extends Automovel {
    constructor(cor, modelo, tipoCombustivel) {
      super(cor, modelo, tipoCombustivel, 4);
    }
  
    abrirVidro() {
      console.log("Vidro aberto");
    }
  
    descerVidro() {
      console.log("Vidro fechado");
    }
  }
  
  class Moto extends Automovel {
    constructor(cor, modelo, tipoCombustivel) {
      super(cor, modelo, tipoCombustivel, 2);
    }
  }
  
  class Caminhao extends Automovel {
    constructor(cor, modelo, tipoCombustivel) {
      super(cor, modelo, tipoCombustivel, 6);
    }
  }
  
  let meuCarro = new Carro("Vermelho", "Sedan", "Gasolina");
  meuCarro.ligarMotor();
  meuCarro.abrirVidro();
  meuCarro.descerVidro();
  meuCarro.desligarMotor();
  
  let minhaMoto = new Moto("Preta", "Esportiva", "Gasolina");
  minhaMoto.ligarMotor();
  minhaMoto.desligarMotor();
  
  let meuCaminhao = new Caminhao("Azul", "Carga Pesada", "Diesel");
  meuCaminhao.ligarMotor();
  meuCaminhao.desligarMotor();
  