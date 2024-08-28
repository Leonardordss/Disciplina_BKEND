// Classe Livros
class Livros {
    constructor(nome, quantidade, preco, autor, numeroEdicao) {
        this.nome = nome; // Nome do livro
        this.quantidade = quantidade; // Quantidade disponível
        this.preco = preco; // Preço do livro
        this.autor = autor; // Nome do autor
        this.numeroEdicao = numeroEdicao; // Número da edição
    }

    // Método para emprestar o livro
    emprestar() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log(`O livro "${this.nome}" foi emprestado. Quantidade disponível: ${this.quantidade}.`);
        } else {
            console.log(`Desculpe, o livro "${this.nome}" não está disponível para empréstimo.`);
        }
    }

    // Método para devolver o livro
    devolver() {
        this.quantidade++;
        console.log(`O livro "${this.nome}" foi devolvido. Quantidade disponível: ${this.quantidade}.`);
    }
}

// Exemplo de uso
const meuLivro = new Livros('O Senhor dos Anéis', 5, 49.90, 'J.R.R. Tolkien', 1);
meuLivro.emprestar(); // Empresta o livro
meuLivro.emprestar(); // Empresta o livro novamente
meuLivro.devolver(); // Devolve o livro
