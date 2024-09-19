// Criando a variável express
const express = require('express');

// Cria uma instância do express
const app = express();
// Define a porta que a API irá rodar
const porta = 3000;

// Lista de dados para armazenar todos os dados cadastrados
const dados = [];
const clientes = []; // Lista para armazenar os clientes

// Middleware para processar a resposta com formato JSON
app.use(express.json());

// Criação da rota GET na raiz da API
app.get('/', (req, res) => {
    res.send('Bem vindo a API 1.0 - Senai Market');
});

// Endpoint POST para adicionar dados
app.post('/data', (req, res) => {
    const { nome, qtde, valor } = req.body;

    dados.push({ nome, qtde, valor });
    res.send(`Nome produto: ${nome}, Quantidade: ${qtde}, Valor: ${valor}`);
});

// Endpoint GET para retornar os dados cadastrados
app.get('/data', (req, res) => {
    res.json(dados);
});

// Endpoint POST para adicionar cliente
app.post('/cliente', (req, res) => {
    const { usuario, senha } = req.body;

    // Armazena o cliente no array
    clientes.push({ usuario, senha });
    res.send(`Cliente adicionado: ${usuario}`);
});

// Endpoint GET para retornar os clientes cadastrados
app.get('/cliente', (req, res) => {
    res.json(clientes);
});

// Inicia o servidor na porta definida
app.listen(porta, () => {
    console.log(`API executando na porta ${porta}`);
});

