// Variável fora do bloco
var idade = 25;

if (true) {
    // Variável dentro do bloco
    var idadeBloco = 30;

    // Acessando variáveis dentro do bloco

    console.log("idade:", idade);  
    console.log("idade dentro Bloco:", idadeBloco);    
}

// Acessando variáveis fora do bloco

console.log("idade:", idade);  
console.log("idade fora Bloco:", idadeBloco);

// variável fora do bloco
let idadeLet = 25;

if (true) {
    // variável dentro do bloco
    let idadeBlocoLet = 30;

    // variáveis dentro do bloco
   
    console.log("idadeLet:", idadeLet);  
    console.log("idadeBlocoLet:", idadeBlocoLet);   
}

// variáveis fora do bloco

console.log("idadeGlobalLet:", idadeGlobalLet);  

// Acessar idadeBlocoLet fora do bloco causará erro
try {
    console.log("idadeBlocoLet:", idadeBlocoLet);  // Erro: idadeBlocoLet is not defined
} catch (e) {
    console.log("Erro ao acessar idadeBlocoLet fora do bloco:", e.message);
}


