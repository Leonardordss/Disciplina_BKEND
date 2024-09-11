function calculaPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);

console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}.`);
