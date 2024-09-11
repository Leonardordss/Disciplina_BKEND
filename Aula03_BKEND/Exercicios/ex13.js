function verificarPalindromo(str) {
    const strInvertida = str.split('').reverse().join('');
    return str === strInvertida;
}

const palavra = 'radar';
const resultado = verificarPalindromo(palavra);

console.log(resultado);
