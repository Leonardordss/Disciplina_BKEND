const express = require('express'); // Variável express que vai salvar uma requisição
const app = express(); // Variável app armazena o express
const port = 3000; // Porta padrão para as aplicações em Node

// Cria uma requisição GET
app.get('/get', (req, res) => {
    res.send('Backend testes');
});

app.get('/usuario', (req, res) => {
    res.send('Usuario admin');
});

// app post é para fazer um post na api com o express
app.post('/',(req,res)=>{
    res.send('Test post');
});

// Faz o servidor ouvir na porta especificada
app.listen(port, () => {
    console.log(`Exemplo app ouvindo na porta ${port}`);
});

