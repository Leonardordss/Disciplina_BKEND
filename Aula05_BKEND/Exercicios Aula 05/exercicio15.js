
let calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b === 0) {
            return 'Erro: Divisão por zero não é permitida.';
        }
        return a / b;
    },
    calcularMedia: function(numeros) {
        if (numeros.length === 0) {
            return 'Erro: Array de números está vazio.';
        }
        let soma = numeros.reduce((acc, num) => acc + num, 0);
        return soma / numeros.length;
    }
};


console.log('Soma:', calculadora.soma(5, 3)); // 8
console.log('Subtração:', calculadora.subtracao(10, 4)); // 6
console.log('Multiplicação:', calculadora.multiplicacao(7, 2)); // 14
console.log('Divisão:', calculadora.divisao(20, 4)); // 5
console.log('Divisão por zero:', calculadora.divisao(10, 0)); 


let numeros = [10, 20, 30, 40, 50];
console.log('Média:', calculadora.calcularMedia(numeros)); // 30
