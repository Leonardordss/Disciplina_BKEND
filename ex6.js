// Classe mãe: Produtos
class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome; // Nome do produto
        this.quantidade = quantidade; // Quantidade
        this.preco = preco; // Preço do produto
        this.tipoComunicacao = tipoComunicacao; // Tipo de comunicação
        this.consumoEnergia = consumoEnergia; // Consumo de energia elétrica
        this.ligada = false; // Estado do produto
    }

    ligar() {
        this.ligada = true;
        console.log(`${this.nome} está ligada.`);
    }

    desligar() {
        this.ligada = false;
        console.log(`${this.nome} está desligada.`);
    }
}

// Classe filha: Fritadeira
class Fritadeira extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    ajustarTemperatura(setpoint) {
        if (this.ligada) {
            console.log(`${this.nome} ajustou a temperatura para ${setpoint}°C.`);
        } else {
            console.log(`Não é possível ajustar a temperatura. A ${this.nome} está desligada.`);
        }
    }
}

// Classe filha: Televisao
class Televisao extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    ajustarTemperatura(setpoint) {
        if (this.ligada) {
            console.log(`${this.nome} ajustou o volume para ${setpoint}.`);
        } else {
            console.log(`Não é possível ajustar o volume. A ${this.nome} está desligada.`);
        }
    }
}

// Classe filha: ArCondicionado
class ArCondicionado extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    ajustarTemperatura(setpoint) {
        if (this.ligada) {
            console.log(`${this.nome} ajustou a temperatura para ${setpoint}°C.`);
        } else {
            console.log(`Não é possível ajustar a temperatura. O ${this.nome} está desligado.`);
        }
    }
}

// Exemplo de uso
const minhaFritadeira = new Fritadeira('Fritadeira Elétrica', 1, 250, 'Sem fio', 1500);
minhaFritadeira.ligar(); // Liga a fritadeira
minhaFritadeira.ajustarTemperatura(180); // Ajusta a temperatura

const minhaTelevisao = new Televisao('TV LED', 2, 2000, 'HDMI', 100);
minhaTelevisao.ligar(); // Liga a televisão
minhaTelevisao.ajustarTemperatura(20); // Ajusta o volume

const meuArCondicionado = new ArCondicionado('Ar Condicionado Split', 1, 3000, 'Wi-Fi', 1200);
meuArCondicionado.ligar(); // Liga o ar-condicionado
meuArCondicionado.ajustarTemperatura(22); // Ajusta a temperatura
