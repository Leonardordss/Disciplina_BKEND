const estaLogado = true; 
const temPermissaoAdmin = false; 

const acessoPermitido = estaLogado && temPermissaoAdmin;

console.log(acessoPermitido ? 'Acesso concedido.' : 'Acesso negado.');
