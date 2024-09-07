// Classe mãe: Máquinas
class Maquinas {
    constructor(nome, eixos, rpm, consumoEnergia) {
        this.nome = nome; // Nome da máquina
        this.eixos = eixos; // Quantidade de eixos
        this.rpm = rpm; // Rotações por minuto
        this.consumoEnergia = consumoEnergia; // Consumo de energia elétrica
        this.ligada = false; // Estado da máquina
    }

    ligar() {
        this.ligada = true;
        console.log(`${this.nome} está ligada.`);
    }

    desligar() {
        this.ligada = false;
        console.log(`${this.nome} está desligada.`);
    }

    ajustarVelocidade(novaRPM) {
        if (this.ligada) {
            this.rpm = novaRPM;
            console.log(`${this.nome} ajustou a velocidade para ${this.rpm} RPM.`);
        } else {
            console.log(`Não é possível ajustar a velocidade. A ${this.nome} está desligada.`);
        }
    }
}

// Classe filha: Furadeira
class Furadeira extends Maquinas {
    constructor(nome, eixos, rpm, consumoEnergia) {
        super(nome, eixos, rpm, consumoEnergia); // Chama o construtor da classe mãe
    }

    // Você pode adicionar métodos específicos da furadeira aqui, se necessário
}

// Exemplo de uso
const minhaFuradeira = new Furadeira('Furadeira Elétrica', 2, 1200, 800);
minhaFuradeira.ligar(); // Liga a máquina
minhaFuradeira.ajustarVelocidade(1500); // Ajusta a velocidade
minhaFuradeira.desligar(); // Desliga a máquina
