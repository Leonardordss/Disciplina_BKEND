const temAcesso = true;  
const estaAutenticado = false; 

const acessoLiberado = temAcesso || estaAutenticado;

console.log(acessoLiberado ? 'Acesso liberado.' : 'Acesso negado.');
