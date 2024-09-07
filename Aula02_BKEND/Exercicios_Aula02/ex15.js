let peso = 70; 
let altura = 1.75; 

// Calcula o IMC
let imc = peso / (altura * altura);

// Classifica o IMC
if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

console.log(`Seu IMC é:`, imc);
