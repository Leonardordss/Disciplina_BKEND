function encontrarMaiorNumero(a, b, c) {
    let maior = a;

    if (b > maior) {
        maior = b;
    }
    
    if (c > maior) {
        maior = c;
    }
    
    return maior;
}

const numero1 = 10;
const numero2 = 25;
const numero3 = 15;

const maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);

console.log(`O maior número é ${maiorNumero}.`);
