
const anoAtual = new Date().getFullYear();


let livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia'
};


livro.idadePublicacao = anoAtual - livro.anoPublicacao;


const mostrarDetalhes = `Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno de Publicação: ${livro.anoPublicacao}\nGênero: ${livro.genero}\nIdade de Publicação: ${livro.idadePublicacao} anos`;


console.log(mostrarDetalhes);
