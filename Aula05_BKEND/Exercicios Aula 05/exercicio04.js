
let clinica = [];


clinica.push('Cachorro');
clinica.push('Gato');
clinica.push('Coelho');


console.log('Lista de animais na clínica:', clinica);


while (clinica.length > 0) {
    let animal = clinica.shift();
    console.log(`Animal removido: ${animal}`);
    console.log('Estado atual da lista:', clinica);
}


console.log('Estado final da lista:', clinica);
