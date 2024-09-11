
const anoAtual = new Date().getFullYear();


let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
};


livro['idadePublicacao'] = anoAtual - livro['anoPublicacao'];


livro['avaliacao'] = null;

if (livro['avaliacao'] === null) {
    livro['avaliacao'] = 9.5; 
    console.log('Avaliação adicionada ao livro:', livro['avaliacao']);
} else {
    console.log('O livro já possui uma avaliação.');
}


console.log('Título:', livro['titulo']);
console.log('Autor:', livro['autor']);
console.log('Ano de Publicação:', livro['anoPublicacao']);
console.log('Gênero:', livro['genero']);
console.log('Idade de Publicação:', livro['idadePublicacao'], 'anos');
console.log('Avaliação:', livro['avaliacao']);
