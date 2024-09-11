
const anoAtual = new Date().getFullYear();


let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia',
    idadePublicacao: anoAtual - 1954, 
    avaliacao: 9.5 
};


delete livro['avaliacao'];


console.log('Título:', livro['titulo']);
console.log('Autor:', livro['autor']);
console.log('Ano de Publicação:', livro['anoPublicacao']);
console.log('Gênero:', livro['genero']);
console.log('Idade de Publicação:', livro['idadePublicacao'], 'anos');
